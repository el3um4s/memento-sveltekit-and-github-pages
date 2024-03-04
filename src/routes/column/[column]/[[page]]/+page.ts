import * as config from '$lib/config';
import { error } from '@sveltejs/kit';

export const prerender = 'auto';

export async function load({ fetch, params }) {
	try {
		const { column } = params;

		const response = await fetch('../../../api/posts');
		const allPosts = await response.json();

		let posts = allPosts.filter((post: { column: string }) => {
			return post?.column ? post.column.toLowerCase() == column.toLowerCase() : false;
		});

		let currentPage = 0;
		if (params.page) {
			currentPage = parseInt(params.page);
		}

		const totalPages = Math.ceil(posts.length / config.pagination);
		const start = currentPage * config.pagination;
		const end = currentPage === totalPages - 1 ? posts.length - 1 : start + config.pagination - 1;
		const nextPage = currentPage === totalPages - 1 ? -1 : currentPage + 1;
		const previousPage = currentPage === totalPages - 1 ? -1 : currentPage + 1;

		posts = posts.slice(start, end + 1);

		return {
			column,
			posts,
			start,
			end,
			currentPage,
			previousPage,
			nextPage,
			totalPages
		};
	} catch (e) {
		error(404, `Could not find ${params.column} (${params?.page})`);
	}
}
