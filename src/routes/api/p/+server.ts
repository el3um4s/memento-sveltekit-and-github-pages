import { json } from '@sveltejs/kit';
import type { Post } from '$lib/types';

async function getPosts() {
	const response = await fetch('api/posts');
	const posts: Post[] = await response.json();
	return { posts };
}

export async function GET() {
	const posts = await getPosts();
	return json(posts);
}
