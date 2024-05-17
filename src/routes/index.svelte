<script>
  import { onMount } from "svelte";
  import { Carousel } from "svelte-carousel";

  let images = [
    "/path/to/image1.jpg",
    "/path/to/image2.jpg",
    "/path/to/image3.jpg",
  ];

  onMount(() => {
    // Any additional setup on mount
  });
</script>

<style>
  .hero {
    width: 100%;
    height: 60vh;
    background-image: url("/path/to/hero-image.jpg");
    background-size: cover;
    background-position: center;
    transform: scale(1);
    transition: transform 0.5s ease-in-out;
  }

  .hero:hover {
    transform: scale(1.05);
  }
</style>

<div class="hero"></div>

<main>
  <h1>Welcome to My Blog!</h1>
  <Carousel {images} />
</main>
