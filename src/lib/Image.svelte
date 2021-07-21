<script>
    export let imageJPG;
    export let imageWEBP;
    export let alt;
</script>

<picture>
  <source srcset="{imageJPG}" type="image/webp">
  <source srcset="{imageWEBP}" type="image/jpeg"> 
  <img src="{imageJPG}" {alt}>
</picture>