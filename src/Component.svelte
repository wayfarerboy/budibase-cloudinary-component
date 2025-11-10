<script>
  export let cloudName;
  export let url;
  export let alt;
  export let aspectRatio = "1:1";
  export let width = 300;

  let cloudinaryUrl;
  $: {
    const transformations = [
      `w_${width}`,
      `ar_${aspectRatio.replace(":", "_")}`,
      'c_fill',
      'g_auto',
      'f_auto',
      'q_auto',
    ].join(',');
    cloudinaryUrl = `https://res.cloudinary.com/${cloudName}/image/fetch/${transformations}/${url}`;
  }

  let cssAspectRatio;
  $: cssAspectRatio = aspectRatio.replace(':', ' / ');
</script>

{#if url}
  <div style="aspect-ratio: {cssAspectRatio}; max-width: {width}px;">
    <img src={cloudinaryUrl} alt={alt} width="100%" />
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