---
title: Hey!
published: true
date: "2021-05-05 10:00"
header:
    image_featured: "image"
    image_credits: Photo by <a href="https://unsplash.com/@aridley88">Andrew Ridley</a> on <a href="https://unsplash.com/">Unsplash</a>
categories:
    - first test
tags:
    - test
    - personal
---

<script>
    import Image from "$lib/Image.svelte";
    import imageJPG from "./image.jpg"
    import imageWEBP from "./andrew-ridley-jR4Zf-riEjI-unsplash.webp"
</script>


# {title}

Hey Dude!

<Image {imageJPG} {imageWEBP} alt="Abstract" caption="{header.image_credits}" />
