<script>
  export let imageJPG;
  export let imageWEBP;
  export let alt;
  export let caption = "";
</script>

<figure>
  <picture>
    <source srcset="{imageWEBP}" type="image/webp">
    <img src="{imageJPG}" {alt}>
  </picture>
  {#if caption !== ""}
    <figcaption>{caption}</figcaption>
  {/if}
</figure>
