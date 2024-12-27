import { JSDOM } from "jsdom";

export async function fetchPixelfedFeed() {
    try {
        const res = await fetch("https://metapixl.com/users/xyny.atom");
        const feedStr = await res.text();
        const xmlDoc = new JSDOM(feedStr, {
            contentType: "text/xml",
            storageQuota: 10000000,
        });
        const feed = await Promise.all(
            Array.from(
                xmlDoc.window.document
                    .querySelector("feed")
                    .querySelectorAll("entry")
            ).map(async (entry) => {
                const url = entry.querySelector("id").textContent;

                const date = new Date(
                    entry.querySelector("updated").textContent
                );

                const id = url.split("/").at(-1);
                const res = await fetch(
                    "https://metapixl.com/api/v2/profile/xyny/status/" + id
                );
                const json = await res.json();

                const images = json.status.media_attachments.map((i) => {
                    return { url: i.url, alt: i.description };
                });

                const text = new JSDOM(
                    entry.querySelector("content").textContent,
                    {
                        contentType: "text/html",
                        storageQuota: 10000000,
                    }
                ).window.document
                    .querySelector("p")
                    .innerHTML.replace(/<a[^>]*>/g, "")
                    .replaceAll("</a>", "")
                    .replace("<br>\n<br>", "<br>");

                return { text, url, date, images };
            })
        );
        return feed;
    } catch (e) {
        console.error(e);
        return [
            {
                text: `there was an error fetching the feed when this website was built - sorry (${new Date().toISOString()})`,
                url: "https://xyny.art",
                date: new Date(),
                images: [
                    {
                        url: "https://xyny.art/_astro/motionatfrontdoor.CKhmc63n_24Dgk5.webp",
                        alt: "a very blue image with a digital pattern of lines in a grid sometimes going vertically, sometimes horizontally. some rainbow streaks go through the image. at the bottom there seems to be a sphynx cat (allegedly floppa bingus) silently waiting for the owner of the doorbell camera to come open up the door",
                    },
                ],
            },
        ];
    }
}
