---
title: "Component: Image"
tags:
  - help
---

<script>
  import Image from "$lib/Image.svelte";
  import MilanoJPG from "$lib/assets/milano.jpg";
  import MilanoWEBP from "$lib/assets/milano.webp";
</script>


### Source

**`src/lib/Image.svelte`**

```html
<script>
  export let imageJPG;
  export let imageWEBP;
  export let alt;
  export let caption = "";

  export let width = "100%";
</script>

<figure>
  <picture>
    <source srcset="{imageWEBP}" type="image/webp" loading="lazy" width="{width}">
    <img src="{imageJPG}" {alt} loading="lazy" width="{width}">
  </picture>
  {#if caption !== ""}
    <figcaption>{@html caption}</figcaption>
  {/if}
</figure>
```


### Use

```html
<script>
  import Image from "$lib/Image.svelte";
  import MilanoJPG from "$lib/assets/milano.jpg";
  import MilanoWEBP from "$lib/assets/milano.webp";
</script>

<Image imageJPG={MilanoJPG} imageWEBP={MilanoWEBP} alt="Milano - Piazza Gae Aulenti" caption="Photo by Luca Bravo on Unsplash"/>
```

<Image imageJPG={MilanoJPG} imageWEBP={MilanoWEBP} alt="Milano - Piazza Gae Aulenti" caption="Photo by Luca Bravo on Unsplash"/>