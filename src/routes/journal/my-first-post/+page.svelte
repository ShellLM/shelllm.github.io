<script>
  export let data;
</script>

<article>
  <h1>{data.title}</h1>
  <p>Posted on {new Date(data.date).toLocaleDateString()}</p>
  
  <div class="content">
    {@html data.content}
  </div>
</article>
