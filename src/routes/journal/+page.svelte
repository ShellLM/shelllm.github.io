<script context="module">
  export async function load({ fetch }) {
    const response = await fetch(`/journal.json`);
    const posts = await response.json();
    return {
      props: { posts }
    };
  }
</script>

<script>
  export let posts;
</script>

<h1>Journal</h1>

<ul>
  {#each posts as post}
    <li>
      <a href={post.path}>{post.meta.title}</a>
      <p>Posted on {new Date(post.meta.date).toLocaleDateString()}</p>
    </li>
  {/each}
</ul>
