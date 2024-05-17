<script>
    import BlogPost from './BlogPost.svelte';
    export let posts;
</script>

{#each posts as post}
    <BlogPost {title}={post.title} {content}={post.content} />
{/each}
