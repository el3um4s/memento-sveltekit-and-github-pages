<script context="module">
    const allPosts = import.meta.glob("./**/*.md");

    let body = [];
    for (let path in allPosts) {
        body.push(
            allPosts[path]().then( ({metadata}) => {
            return { path, metadata}
            })
        );  
    }

    export async function load() {
		const posts = await Promise.all(body);
        return {
            props: {posts}
        }
	}
</script>

<script>
    export let posts;
</script>

<ul>
    {#each  posts as {path, metadata: {title}} }
        <li>
            <a href={`/blog/${path.replace(".md","")}`}>{title}</a>
        </li>
    {/each}
</ul>

<p>Thank to <a href="https://blog.webjeda.com"> WebJeda</a>for the <a href="https://www.youtube.com/watch?v=sKKgT0SEioI&list=PLm_Qt4aKpfKgonq1zwaCS6kOD-nbOKx7V&index=1">inspiration</a></p>