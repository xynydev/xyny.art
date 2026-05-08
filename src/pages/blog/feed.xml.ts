import rss, { type RSSFeedItem } from "@astrojs/rss";
import { getCollection, render } from "astro:content";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getContainerRenderer as getMDXRenderer } from "@astrojs/mdx";
import { transform, walk } from "ultrahtml";
import { loadRenderers } from "astro:container";
import sanitize from "ultrahtml/transformers/sanitize";
import type { APIContext } from "astro";

// With code from https://github.com/delucis/astro-blog-full-text-rss/blob/latest/src/pages/rss.xml.ts

export async function GET(context: APIContext) {
  // Load MDX renderer. Other renderers for UI frameworks (e.g. React, Vue, etc.) would need adding here if you were using those.
  const renderers = await loadRenderers([getMDXRenderer()]);

  // Create a new Astro container that we can render components with.
  // See https://docs.astro.build/en/reference/container-reference/
  const container = await AstroContainer.create({ renderers });

  const posts = await getCollection("blog");

  // Loop over blog posts to create feed items for each, including full content.
  const feedItems: RSSFeedItem[] = [];
  for (const post of posts.sort((a, b) =>
    a.data.date > b.data.date ? -1 : 1,
  )) {
    if (post.data.draft) continue;
    // Get the `<Content/>` component for the current post.
    const { Content } = await render(post);
    // Use the Astro container to render the content to a string.
    const rawContent = await container.renderToString(Content);
    // Process and sanitize the raw content:
    // - Removes `<!DOCTYPE html>` preamble
    // - Makes link `href` and image `src` attributes absolute instead of relative
    // - Strips any `<script>` and `<style>` tags
    // Thanks @Princesseuh — https://github.com/Princesseuh/erika.florist/blob/1827288c14681490fa301400bfd815acb53463e9/src/middleware.ts
    const content = await transform(
      rawContent.replace(/^<!DOCTYPE html>/, ""),
      [
        async (node) => {
          await walk(node, (node) => {
            if (node.name === "a" && node.attributes.href?.startsWith("/")) {
              node.attributes.href = "https://xyny.art" + node.attributes.href;
            }
            if (node.name === "img" && node.attributes.src?.startsWith("/")) {
              node.attributes.src = "https://xyny.art" + node.attributes.src;
            }
            if (node.name === "img" && !node.attributes.src?.includes("/")) {
              node.attributes.src =
                "https://xyny.art/blog/" +
                post.slug +
                "/" +
                node.attributes.src;
            }
          });
          return node;
        },
        sanitize({ dropElements: ["script", "style"] }),
      ],
    );
    feedItems.push({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.excerpt,
      categories: post.data.tags,
      link: `/blog/${post.slug}/`,
      enclosure: {
        url: post.data.image?.src ?? "",
        type: "image/png",
        length: 0,
      },
      content,
    });
  }

  // TODO add rss url everyhere
  // TODO publish

  return rss({
    // `<title>` field in output xml
    title: "xyny's writings",
    // `<description>` field in output xml
    description:
      "This collection of writings may or may not be a blog. Posts here may or may not be chronologically ordered or accurately listed. Content might or might not be kept up-to-date. Effort might or might not be spent.",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#site
    site: "https://xyny.art/",
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: feedItems,
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
    stylesheet: "/pretty-feed-v3.xsl",
  });
}
