<script>
    import { onMount } from 'svelte';
    
    let images = [
        { src: '/assets/images/hero1.jpg', alt: 'Hero Image 1'},
        { src: '/assets/images/hero2.jpg', alt: 'Hero Image 2'}
    ];
    
    let currentImageIndex = 0;
    
    onMount(() => {
        const interval = setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
        }, 3000);
        
        return () => clearInterval(interval);
    });
</script>

<style>
    .hero {
        position: relative;
        width: 100%;
        height: 400px;
        background-size: cover;
        background-position: center;
        transition: background-image 1s ease-in-out;
    }
</style>

<div class="hero" style="background-image: url({images[currentImageIndex].src})">
</div>
