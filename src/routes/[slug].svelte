<!-- https://www.ryanfiller.com/blog/building-a-better-svelte-data-flow -->

<script context='module'>
    export const ssr = false;
    console.log("slug")
    const allPosts = import.meta.globEager(`../lib/news/**/*.md`);
    console.log(allPosts);
    let body = [];

    for (let path in allPosts) {
        console.log(path);
        console.log(allPosts[path]);

        const post = allPosts[path];
        const metadata = post.metadata;
        const pathArray = path.split('/');
        const slugPage = pathArray[pathArray.length-2].slice(11);
        const slugPost = metadata.slug;

        const p = {post, path, slugPage, metadata, slugPost }

        body.push(p);
    }

    
    export const load = ({page}) => {
        const posts = body;
        const { slug } = page.params;

        const filteredPosts = posts.filter( (p) => {
            const slugPost = p.metadata.slug;
            const slugToCompate = !slugPost ? p.slugPage : slugPost;
            return slugToCompate.toLowerCase() === slug.toLowerCase();
        } );
        console.log(filteredPosts[0]);
        // let componentUrl = filteredPosts[0].path;
        // componentUrl = componentUrl.replace("./posts/", "");
        // componentUrl = componentUrl.replace("/index.md", "");
  
        // const component = await import(`./posts/${componentUrl}/index.md`);

        return {
            props: {
                page: filteredPosts[0].post.default,
                metadata: filteredPosts[0].metadata
            }
        }
    }


    // export const ssr = false;

    // const allPosts = import.meta.globEager("./posts/**/*.md");
    // let body = [];
    // for (let path in allPosts) {
    //     body.push(
    //         allPosts[path]().then( ({metadata}) => {
    //             const pathArray = path.split('/');
    //             const slugPage = pathArray[pathArray.length-2].slice(11);
    //             const slugPost = metadata.slug;
    //             return { path, slugPage, metadata, slugPost }
    //         })
    //     );  
    // }

    // export async function load({page}) {
    //     const posts = await Promise.all(body);
    //     const { slug } = page.params;

    //     const filteredPosts = posts.filter( (p) => {
    //         const slugPost = p.metadata.slug;
    //         const slugToCompate = !slugPost ? p.slugPage : slugPost;
    //         return slugToCompate.toLowerCase() === slug.toLowerCase();
    //     } );
    //     let componentUrl = filteredPosts[0].path;
    //     componentUrl = componentUrl.replace("./posts/", "");
    //     componentUrl = componentUrl.replace("/index.md", "");
  
    //     const component = await import(`./posts/${componentUrl}/index.md`);

    //     return {
    //         props: {
    //             page: component.default,
    //             metadata: component.metadata
    //         }
    //     }
    // }
</script>


<script>
    import PageTransition from "$lib/PageTransition.svelte";
    export let key;

    export let page;

</script>

<PageTransition refresh={key}>
    <svelte:component this={page}/>
</PageTransition>

