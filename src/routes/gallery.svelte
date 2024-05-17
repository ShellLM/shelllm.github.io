<script lang="ts">
  import Lightbox from "svelte-lightbox";

  let images = [
    { src: "/path/to/image1.jpg", caption: "Caption 1" },
    { src: "/path/to/image2.jpg", caption: "Caption 2" },
  ];
</script>

<main>
  <Lightbox {images} />
</main>
