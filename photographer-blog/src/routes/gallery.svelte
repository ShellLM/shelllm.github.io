<script>
    import ImageGallery from '../components/ImageGallery.svelte';
    let images = [
        { src: '/assets/images/photo1.jpg', alt: 'Photo 1'},
        { src: '/assets/images/photo2.jpg', alt: 'Photo 2'}
    ];
</script>

<ImageGallery {images} />
