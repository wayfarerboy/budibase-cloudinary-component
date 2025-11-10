<script>
  import { CloudinaryImage } from "svelte-cloudinary";

  export let url;
  export let alt;
  export let aspectRatio = "1:1";
  export let cloudName;

  let options;
  $: {
    options = {
      aspectRatio: aspectRatio,
      crop: 'fill',
      gravity: 'auto',
      fetchFormat: 'auto',
      quality: 'auto',
    };
  }

  let cssAspectRatio;
  $: cssAspectRatio = aspectRatio.replace(':', ' / ');
</script>

{#if url}
  <div style="aspect-ratio: {cssAspectRatio};">
    <CloudinaryImage
      cloudName={cloudName}
      resourceType="fetch"
      publicId={url}
      transformation={options}
      width="100%"
      alt={alt}
    />
  </div>
{:else}
  <div class="placeholder">
    <p>Please provide an image URL.</p>
  </div>
{/if}

<style>
  .placeholder {
    border: 2px dashed #ccc;
    padding: 20px;
    text-align: center;
    color: #888;
    width: 100%;
    box-sizing: border-box;
  }
  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>