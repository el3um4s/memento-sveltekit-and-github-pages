<script context='module'>
    export const ssr = false;
    const allPosts = import.meta.globEager(`../news/**/*.md`);
    let body = [];

    for (let path in allPosts) {
        const post = allPosts[path];
        const metadata = post.metadata;
        const pathArray = path.split('/');
        const slugPage = pathArray[pathArray.length-2].slice(11);
        const slugPost = metadata.slug;

        const p = {post, path, slugPage, metadata, slugPost };

        body.push(p);
    }

    
    export const load = ({page}) => {
        const posts = body;
        const { slug } = page.params;

        const filteredPosts = posts.filter( (p) => {
            const slugPost = p.metadata.slug;
            const slugToCompare = !slugPost ? p.slugPage : slugPost;
            return slugToCompare.toLowerCase() === slug.toLowerCase();
        } );

        return {
            props: {
                page: filteredPosts[0].post.default,
                metadata: filteredPosts[0].metadata
            }
        }
    }
</script>


<script>
    import PageTransition from "$lib/PageTransition.svelte";
    export let key;

    export let page;

</script>

<PageTransition refresh={key}>
    <svelte:component this={page}/>
</PageTransition>

