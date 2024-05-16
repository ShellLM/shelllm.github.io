<script lang="ts">
  import type { Post } from "./+page.svelte";

  export async function load() {
    const modules = import.meta.glob([./*.md, ./*/*.md]);
    const postPromises = Object.entries(modules).map(async ([path, module]) => {
      const { metadata } = await module();
      const pathname = path.slice(2, -3);
      return {
        path: pathname,
        meta: metadata
      };
    });

    const posts = await Promise.all(postPromises);
    posts.sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());
    return { posts };
  }
</script>
