---
title: Web- and Self-Hosting Cheatsheet
date: 2026-01-01
excerpt: A cheatsheet for web- and self-hosting.
tags: [web, hosting]
image: cloud.png
imageAlt: An abstract textured artwork with a pinkish hue, containing distorted logos of Cloudflare, Podman, and CoreOS
pinned: true
---

# Web- and Self-Hosting Cheatsheet

This is **a collection of techniques** for web- and **self-hosting** that I _personally_ find **painless and dependable**. 

The inspiration for making this cheatsheet came partially from Trafotin’s video [It's Impossible to Self Host Anything "Correctly"](https://www.youtube.com/watch?v=WtqhMTKJSdk), which immediately made me think “huh? it ain’t supposed to be that hard”. After a bit of deliberation I decided that **_maybe I should_ share the "arcane hosting knowledge" I have accumulated**, instead of just sitting on it thinking “everyone should know this, this is basic stuff”.

**Updates or support** regarding this collection of guides **is not guaranteed**, but if you hit me up on social media or email I might gently respond after a variable amount of time. I can point you in the right direction, but I won’t (or at least _shouldn’t_) hold your hand all the way. _If you need someone to do that, or to just set up your hosting for you, **you can just pay me for that you know**._

---

![](construction.gif)


## Table of Contents
- [Prerequisites](#prerequisites)
  - [You should own a domain name](#you-should-own-a-domain-name)
  - [Cloudflare...](#cloudflare)
- [Taking advantage of big tech](#taking-advantage-of-big-tech)
  - [Hosting a website for free](#hosting-a-website-for-free)
- [Self-hosting](#self-hosting)
  - [Self-hosting with CoreOS](#self-hosting-with-coreos)
  - [Accessing your self-hosted services](#accessing-your-self-hosted-services)
  - [Publishing your self-hosted services](#publishing-your-self-hosted-services)
  - [Backing up your servers](#backing-up-your-servers)

---

## Prerequisites

> Okay, maybe you could get by without these, but I _really really_ recommend not skipping these

### You should own a domain name

Your domain is not only _your identity on the internet_, it can also be _your server's identity_. If you don't own a domain name that you control, there's no guarantees that your stuff will be found in the same URL in the future.

That _control_ aspect is important. If you use a free domain or subdomain, you are up to the mercy of the organization loaning you their domain to stay around and keep you around, eventhough you do not generate revenue for them. I would also recommend against ccTLDs of countries you don't live in, because that requires putting trust in a foreign government that might _stop existing_ or change their laws regarding domain name leasing. (I know I know, `.io` and `.ai` are hot shit, but there are so many cool gTLDs out there as well)

Depending on the TLD you choose, a domain name runs at about **$10-$30 per year**, though some more premium TLDs can cost upwards of $100 per year. A cheap domain name is probably not a huge investment for most nerds reading this.

I'm a happy customer of [Porkbun](https://porkbun.com/) (not sponsored), and I use [Cloudflare](https://www.cloudflare.com/) for DNS management (not sponsored). I've read good things about Porkbun and they have a pretty good user experience. Cloudflare is a great place to manage your DNS if you are also interested in using Cloudflare as a proxy, Cloudflare Tunnels as a secure firewall-bypassing reverse proxy, or Cloudflare Workers as a place to host a website or web app for free.

### Cloudflare...

> "CloudFlare is a very helpful service if you are a website owner and don’t want to deal with separate services for CDN, DNS, basic DDOS protection and other (superficial) security needs. You can have all these services in a one-stop-shop and you can have it all for free. It’s hard to pass up the offer and go for a commercial solution"
> - citation from [_CloudFlare is ruining the internet (for me)_](https://www.slashgeek.net/2016/05/17/cloudflare-is-ruining-the-internet-for-me/) by [_Slashgeek_](https://www.slashgeek.net/)

Yes, that glowing review of a citation is really from an article with _"Cloudflare is ruining the internet"_ in the title. And that article is not alone. The internet if [full](https://easydns.com/blog/2020/07/20/turns-out-half-the-internet-has-a-single-point-of-failure-called-cloudflare/) [of](https://robindev.substack.com/p/cloudflare-took-down-our-website) [articles](https://jrhawley.ca/2023/08/07/blocked-by-cloudflare) containing friendly and less friendly **criticism of Cloudflare and its monopoly-like position as a frontdoor to the internet** (I'm sure you can find more on Hacker News next time they have an outage). The **user interface of their dashboard is cluttered and slow and generally _sucks ass_** (in my opinion). 

I am not proud of being a Cloudflare user.

Nevertheless, this guide, for the time being, will talk of and recommend many Cloudflare services. Because it's a great product for the price its low low price of free, and there is a lot of ecosystem and support around it. 

If you think there is a free replacement that is _better_ than some service provided by Cloudflare, please please let me know.

## Taking advantage of big tech

> No SysAdmin needed

### Hosting a website for free

Sometimes a server or VPS of your own is overkill if you're planning to just put the site behind a proxy anyways to block DDOS attacks and AI scrapers. 


## Self-hosting

### Self-hosting with CoreOS

### Accessing your self-hosted services

### Publishing your self-hosted services

### Backing up your servers
