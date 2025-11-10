<script>
  import { CloudinaryImage } from "svelte-cloudinary";

  export let imageUrl;
  export let aspectRatio = "1:1";
  export let maxWidth = 300;

  const CLOUD_NAME = 'YOUR_CLOUD_NAME_HERE';

  let options;
  $: {
    options = {
      width: maxWidth,
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

{#if imageUrl}
  <div style="max-width: {maxWidth}px; aspect-ratio: {cssAspectRatio};">
    <CloudinaryImage
      cloudName={CLOUD_NAME}
      resourceType="fetch"
      publicId={imageUrl}
      transformation={options}
      width="100%"
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