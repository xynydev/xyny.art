---
title: Web- and Self-Hosting Cheatsheet
date: 2026-01-01
excerpt: A cheatsheet for web- and self-hosting.
tags: [web, hosting]
image: cloud.png
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

## Taking advantage of big tech

> No SysAdmin needed

### Hosting a website for free

Sometimes a server or VPS of your own is overkill if you're planning to just put the site behind a proxy anyways to block DDOS attacks and AI scrapers. 


## Self-hosting

### Self-hosting with CoreOS

### Accessing your self-hosted services

### Publishing your self-hosted services

### Backing up your servers
