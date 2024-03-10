import { error } from '@sveltejs/kit';

export const prerender = 'auto';

export async function load({ fetch, params }) {
	try {
		const { slug } = params;

		const response = await fetch('../api/posts');
		const allPosts = await response.json();

		const posts = allPosts.filter((post: { slug: string }) => {
			return post.slug.toLowerCase() == slug.toLowerCase();
		});

		const src = posts[0].src;
		const srcP = posts[0].srcP;
		const len = srcP.length;

		let post;

		if (len === 1) {
			post = await import(`../../posts/${params.slug}/post.md`);
		} else if (len === 2) {
			const a = srcP.at(0);
			post = await import(`../../posts/${a}/${params.slug}/post.md`);
		} else if (len === 3) {
			const a = srcP.at(0);
			const b = srcP.at(1);
			post = await import(`../../posts/${a}/${b}/${params.slug}/post.md`);
		} else if (len === 4) {
			const a = srcP.at(0);
			const b = srcP.at(1);
			const c = srcP.at(2);
			post = await import(`../../posts/${a}/${b}/${c}/${params.slug}/post.md`);
		} else if (len === 5) {
			const a = srcP.at(0);
			const b = srcP.at(1);
			const c = srcP.at(2);
			const d = srcP.at(3);
			post = await import(`../../posts/${a}/${b}/${c}/${d}/${params.slug}/post.md`);
		} else if (len === 6) {
			const a = srcP.at(0);
			const b = srcP.at(1);
			const c = srcP.at(2);
			const d = srcP.at(3);
			const e = srcP.at(4);
			post = await import(`../../posts/${a}/${b}/${c}/${d}/${e}/${params.slug}/post.md`);
		} else if (len === 7) {
			const a = srcP.at(0);
			const b = srcP.at(1);
			const c = srcP.at(2);
			const d = srcP.at(3);
			const e = srcP.at(4);
			const f = srcP.at(5);
			post = await import(`../../posts/${a}/${b}/${c}/${d}/${e}/${f}/${params.slug}/post.md`);
		} else {
			error(404, `Could not find ${params.slug}`);
		}

		return {
			content: post.default,
			meta: post.metadata,
			src
		};
	} catch (e) {
		error(404, `Could not find ${params.slug}`);
	}
}
