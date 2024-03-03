import * as config from '$lib/config';

export const prerender = 'auto';

export async function load({ fetch, params }) {
	const { page } = params;

	const currentPage = parseInt(page);
	const response = await fetch('../../api/posts');
	const allPosts = await response.json();

	const totalPages = Math.ceil(allPosts.length / config.pagination);
	const start = currentPage * config.pagination;
	const end = currentPage === totalPages - 1 ? allPosts.length - 1 : start + config.pagination - 1;

	const posts = allPosts.slice(start, end + 1);

	const nextPage = currentPage === totalPages - 1 ? -1 : currentPage + 1;
	const previousPage = currentPage === 0 ? -1 : currentPage - 1;

	return {
		posts,
		start,
		end,
		currentPage,
		previousPage,
		nextPage
	};
}
