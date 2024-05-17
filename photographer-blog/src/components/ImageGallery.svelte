<script>
    export let images;
</script>

<div class='gallery'>
    {#each images as image}
        <img src={image.src} alt={image.alt} />
    {/each}
</div>
