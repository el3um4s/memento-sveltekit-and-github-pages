import { publish } from 'gh-pages';

// https://github.com/tschaub/gh-pages/issues/469
// https://github.com/tschaub/gh-pages/issues/443#issuecomment-1288016250
// git config --global --add safe.directory *

publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/el3um4s/memento-sveltekit-and-github-pages.git', // Update to point to your repository
		user: {
			name: 'Samuele de Tomasi', // update to use your name
			email: 'samuele@stranianelli.com' // Update to use your email
		},
		dotfiles: true,
		nojekyll: true
	},
	(err) => {
		console.log(err);
	}
).then(() => {
	console.log('Deploy completed!');
});
