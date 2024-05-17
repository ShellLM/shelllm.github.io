<script>
    import BlogList from '../components/BlogList.svelte';
    let posts = [
        { title: 'First Blog Post', content: '<p>This is the content of the first post.</p>'},
        { title: 'Second Blog Post', content: '<p>This is the content of the second post.</p>'}
    ];
</script>

<BlogList {posts} />
