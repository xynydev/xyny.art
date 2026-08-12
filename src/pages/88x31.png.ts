import { Jimp } from "jimp";
import type { APIRoute } from "astro";

export const prerender = false;

export const GET = (async ({ params, request }) => {
  const images = import.meta.glob('public/mem/*.png', {
  })
  const values = Object.keys(images)
  const pick = values[Math.floor(Math.random() * values.length)];

  const inputPath = new URL(request.url).origin + pick.replace("/public", "")

  const input = await Jimp.read(inputPath);

  const left = Math.floor(Math.random() * ((input.width ?? 0) - 88 + 1));
  const top  = Math.floor(Math.random() * ((input.height ?? 0) - 31 + 1));

  const output = await input
    .crop({ x: left, y: top, w: 88, h: 31 })
    .getBuffer("image/png")

  // @ts-ignore
  return new Response(output, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=600",
    }
  })
}) satisfies APIRoute;
