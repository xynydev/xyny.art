import { JSDOM } from "jsdom";

export async function fetchPixelfedFeed() {
    const res = await fetch("https://metapixl.com/users/xyny.atom");
    const feedStr = await res.text();
    const xmlDoc = new JSDOM(feedStr, {
        contentType: "text/xml",
        storageQuota: 10000000,
    });
    const feed = Array.from(
        xmlDoc.window.document.querySelector("feed").querySelectorAll("entry")
    ).map((entry) => {
        const url = entry.querySelector("id").textContent;
        const date = new Date(entry.querySelector("updated").textContent);
        const imageUrl = entry
            .getElementsByTagName("media:content")[0]
            .getAttribute("url");
        const imageAlt = new JSDOM(entry.querySelector("content").textContent, {
            contentType: "text/html",
            storageQuota: 10000000,
        }).window.document
            .querySelector("img")
            .getAttribute("alt");
        const text = new JSDOM(entry.querySelector("content").textContent, {
            contentType: "text/html",
            storageQuota: 10000000,
        }).window.document
            .querySelector("p")
            .innerHTML.replace(/<a[^>]*>/g, "")
            .replaceAll("</a>", "")
            .replace("<br>\n<br>", "<br>");
        return { text, url, date, imageUrl, imageAlt };
    });
    return feed;
}
