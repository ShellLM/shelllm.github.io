<script>
    import HeroImage from '../components/HeroImage.svelte';
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    
    let currentPage = '';
    onMount(() => {
        page.subscribe(pg => {
            currentPage = pg.route.id;
        });
    });
</script>

<nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/gallery">Gallery</a></li>
    </ul>
</nav>

<HeroImage />

<main>
    <slot></slot>
</main>
