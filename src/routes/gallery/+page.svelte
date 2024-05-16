<script>
  let images = [
    { src: "/images/image1.jpg", alt: "Image 1" },
    { src: "/images/image2.jpg", alt: "Image 2" },
    // Add more images here
  ];
</script>

<h1>Photo Gallery</h1>

<div class="gallery">
  {#each images as image}
    <img src={image.src} alt={image.alt} />
  {/each}
</div>

<style>
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }
  
  img {
    width: 100%;
    height: auto;
  }
</style>
