<script>
    export let gallery;
</script>
<section>
    <h1>{gallery.title}</h1>
    <div>
        {#each gallery.images as image}
            <img src={image.src} alt={image.alt} />
        {/each}
    </div>
</section>
