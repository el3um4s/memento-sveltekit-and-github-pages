/** @type {import('@sveltejs/kit').Handle} */

export async function handle({ event, resolve }) {
	const response = await resolve(event, {
		ssr: false
	});
	return response;
}

// https://github.com/sveltejs/kit/pull/2804#issuecomment-1014085883
