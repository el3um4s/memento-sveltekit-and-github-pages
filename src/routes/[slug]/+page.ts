import { error } from '@sveltejs/kit';

export const prerender = 'auto';

export async function load({ fetch, params }) {
	try {
		// console.log('TRY');
		const { slug } = params;
		// console.log('SLUG', slug);

		const response = await fetch('../api/posts');
		// console.log('response');
		// console.log(response);
		const allPosts = await response.json();
		// console.log('allPosts');
		// console.log(allPosts);

		const posts = allPosts.filter((post: { slug: string }) => {
			return post.slug.toLowerCase() == slug.toLowerCase();
		});

		// console.log('posts');
		// console.log(posts);

		const src = posts[0].src;
		// console.log(src);
		const srcP = posts[0].srcP;
		// console.log(srcP);
		const len = srcP.length;
		// console.log(len);
		// console.log(src, srcP, slug, len);
		// const srcContent = posts[0].srcContent;
		// const url = `../../${src}post.md`;
		// console.log('SRC', src);
		// const url = `../../posts/${src}/post.md`;

		let post;

		if (len === 1) {
			post = await import(`../../posts/${params.slug}/post.md`);
		} else if (len === 2) {
			const x = srcP.at(0);
			post = await import(`../../posts/${x}/${params.slug}/post.md`);
		} else if (len === 3) {
			const x = srcP.at(0);
			const y = srcP.at(1);
			post = await import(`../../posts/${x}/${y}/${params.slug}/post.md`);
		} else if (len === 4) {
			const x = srcP.at(0);
			const y = srcP.at(1);
			const z = srcP.at(2);
			post = await import(`../../posts/${x}/${y}/${z}/${params.slug}/post.md`);
		} else {
			error(404, `Could not find ${params.slug}`);
		}

		// console.log(post);

		// console.log('URL', url);
		// console.log('srcContent', srcContent);

		// const post = await import(`../../posts/${params.slug}/post.md`);
		// const post = await import(url);
		// const post = await import(`../../${src}/post.md`);
		// console.log('post');
		// console.log(post);
		return {
			content: post.default,
			meta: post.metadata,
			src
		};
	} catch (e) {
		error(404, `Could not find ${params.slug}`);
	}
}

// export const prerender = 'auto';

// export async function load({ fetch, params }) {
// 	try {
// 		const { column } = params;

// 		const response = await fetch('../../../api/posts');
// 		const allPosts = await response.json();

// 		let posts = allPosts.filter((post: { column: string }) => {
// 			return post?.column ? post.column.toLowerCase() == column.toLowerCase() : false;
// 		});

// 		let currentPage = 0;
// 		if (params.page) {
// 			currentPage = parseInt(params.page);
// 		}

// 		const totalPages = Math.ceil(posts.length / config.pagination);
// 		const start = currentPage * config.pagination;
// 		const end = currentPage === totalPages - 1 ? posts.length - 1 : start + config.pagination - 1;
// 		const nextPage = currentPage === totalPages - 1 ? -1 : currentPage + 1;
// 		const previousPage = currentPage === totalPages - 1 ? -1 : currentPage + 1;

// 		posts = posts.slice(start, end + 1);

// 		return {
// 			column,
// 			posts,
// 			start,
// 			end,
// 			currentPage,
// 			previousPage,
// 			nextPage,
// 			totalPages
// 		};
// 	} catch (e) {
// 		error(404, `Could not find ${params.column} (${params?.page})`);
// 	}
// }
