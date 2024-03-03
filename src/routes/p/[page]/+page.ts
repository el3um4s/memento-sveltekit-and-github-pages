// import type { Post } from '$lib/types';

// export async function load({ fetch, params }) {
// 	const response = await fetch('api/posts');
// 	const posts: Post[] = await response.json();
// 	console.log(params);
// 	const page = params.page;
// 	return { posts, page };
// }

import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const post = await import(`../../p/${params.page}`);

		return {
			content: post.default,
			meta: post.metadata,
			page: params.page
		};
	} catch (e) {
		error(404, `Could not find ${params.page}`);
	}
}
