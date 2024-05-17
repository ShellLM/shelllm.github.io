<script>import i18n from '../i18n';
export let imagePreset;
export let title = '';
export let description = '';
export let gallery = null;
const generateLocalizedGalleryCounter = (i18n, gallery) => {
    if (gallery !== null) {
        return i18n.generateLocalizedGalleryCounter(gallery.activeImage, gallery.imageCount);
    }
};
$: localizedGalleryCounter = generateLocalizedGalleryCounter($i18n, gallery);
</script>

<div class="svelte-lightbox-footer" class:fullscreen={imagePreset === 'fullscreen'} {...$$restProps}>
    <h2>
        {@html title}
    </h2>
    <h5>
        {@html description}
    </h5>
    {#if gallery !== null}
        <p>
            {localizedGalleryCounter}
        </p>
    {/if}
</div>

<style>
    div.svelte-lightbox-footer {
        width: 100%;
        height: auto;
        color: white;
        text-align: left;
        position: absolute;
    }
    div.svelte-lightbox-footer.fullscreen {
        position: fixed;
        z-index: 5;
        bottom: 0;
        left: 0;
        right: 0;
        padding-left: 1rem;
    }
</style>