export type Categories = 'sveltekit' | 'svelte';

export type Post = {
	title: string;
	slug: string;
	src: string;
	srcP: string[];
	description: string;
	date: string;
	categories: Categories[];
	published: boolean;
	cover?: string;
	column?: string;
};
