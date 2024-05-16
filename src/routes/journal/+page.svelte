<script lang="ts">
  export let data;

  interface Post {
    path: string;
    meta: {
      title: string;
      date: string;
    };
  }
  
  let posts: Post[] = data.posts;
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
