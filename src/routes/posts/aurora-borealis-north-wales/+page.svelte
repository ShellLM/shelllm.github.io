<script>
  export let data;
</script>

<article>
  <h1>{data.title}</h1>
  <p class="meta">Posted on {new Date(data.date).toLocaleDateString()}</p>
  <div class="content">
    {@html data.content}
  </div>

  {#if data.gallery}
    <h2>Gallery</h2>
    <div class="gallery">
      {#each data.gallery as image} 
        <div class="gallery-item">
          <img src={image.image_path} alt={image.caption} />
          <p>{image.caption}<br>
            <span class="copyright">{image.copyright}</span>
          </p>
        </div>
      {/each}
    </div>
  {/if}  
</article>
