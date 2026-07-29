import sharp from "sharp"
import type { APIRoute } from "astro";

export const GET = (async ({ params, request }) => {
  const images = import.meta.glob('src/content/portfolio/memoryfault/*.png')
  const values = Object.keys(images)
  const pick = values[Math.floor(Math.random() * values.length)];
  console.log(values)

  const inputPath = pick
  const input = sharp("."+inputPath)
  const meta = await input.metadata();

  const left = Math.floor(Math.random() * ((meta.width ?? 0) - 88 + 1));
  const top  = Math.floor(Math.random() * ((meta.height ?? 0) - 31 + 1));

  const output = await input
    .extract({ left, top, width: 88, height: 31 })
    .png()
    .toBuffer();

  // @ts-ignore
  return new Response(output, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=3600",
    }
  })
}) satisfies APIRoute;
