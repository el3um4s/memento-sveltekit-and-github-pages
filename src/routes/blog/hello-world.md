---
file: hello-world.md
title: Hello World
tags:
  - test
---

Hi!

<script>
    import Box from "$lib/Box.svelte";
    import ImageSrc from "$lib/assets/drums.png";
</script>

<Box />

<img src={ImageSrc} alt={ImageSrc}/>