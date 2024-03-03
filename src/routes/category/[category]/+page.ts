export async function load({ fetch, params }) {
	const { category } = params;

	const response = await fetch('../../api/posts');
	const allPosts = await response.json();

	const posts = allPosts.filter((post: { categories: string[] }) => {
		const listCategories = post.categories.map((p) => p.toLowerCase());
		return listCategories.includes(category.toLowerCase());
	});

	return {
		category,
		posts
	};
}
