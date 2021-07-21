---
title: "SvelteKit & GitHub Pages - Italian"
lang: "Italian"
---

<script>
  import Image from "$lib/Image.svelte";
  import SettingsJpg from "$lib/assets/settings.jpg";
  import SettingsWebp from "$lib/assets/settings.webp";
</script>
# {title}

Era da qualche settimane che volevo scrivere un nuovo articolo su come usare Svelte con GitHub Pages. Devo ammettere che lo sprone sono state alcune mail con richieste di chiarimenti sul mio [post precedete](https://blog.stranianelli.com/svelte-et-github/). Aggiungo quindi un altro tassello alla mia esplorazione di Svelte parlando di come penso sia possibile usare SvelteKit con GitHub Pages.

Tengo sempre la forma _diario di viaggio_: riporto qui i passaggi che sto compiendo, sperando sia sufficiente per riprodurre in futuro lo stesso risultato.

Per prima cosa creo un nuovo progetto basato su [SvelteKit](https://kit.svelte.dev/) digitando:

```bash
npm init svelte@next my-app
```

Installo quindi le varie dipendenze

```bash
npm i
```

Per semplificare la pubblicazione su GitHub Pages uso ancora una volta [gh-pages](https://www.npmjs.com/package/gh-pages):

```bash
npm install gh-pages --save-dev
```

Aggiungo lo script su `package.json`:

```json
"scripts": {
 "deploy": "node ./gh-pages.js"
}
```

E quindi creo il file gh-pages.js:

```js
import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/el3um4s/memento-sveltekit-and-github-pages.git', // Update to point to your repository
  user: {
   name: 'Samuele de Tomasi', // update to use your name
   email: 'samuele@stranianelli.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);
```

Per pubblicare su GitHub mi serve l'[adapter-static](`https://www.npmjs.com/package/@sveltejs/adapter-static`):

```bash
npm i -D @sveltejs/adapter-static@next
```

Aggiorno quindi il file `svelte.config.js`

```js
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
 // Consult https://github.com/sveltejs/svelte-preprocess
 // for more information about preprocessors
 preprocess: preprocess(),

 kit: {
 // hydrate the <div id="svelte"> element in src/app.html
  target: '#svelte',
  adapter: adapter({
  // default options are shown
   pages: 'build',
   assets: 'build',
   fallback: null
  })
 }
};

export default config;
```

Se eseguo il comando

```bash
npm run build
```

Otterrò una cartella `build` nella root del progetto. Bene, questa sarà la cartella da caricare su GitHub Pages. Ma prima devo configurare il repository in maniera corretta.

<Image imageJPG={SettingsJpg} imageWEB={SettingsWebp} alt="Settings"/>

Imposto come origine del sito la branch `gh-pages` e, in caso, imposto un dominio personalizzato.

Mi servono poi altri 2 file, entrambi da inserire nella cartella `static`:

- `.nojekyll`, per evitare che sia Jekyll a gestire le pagine create (see [Bypassing Jekyll on GitHub Pages](https://github.blog/2009-12-29-bypassing-jekyll-on-github-pages/))
- `CNAME`, per permette a GitHub Pages di usare il dominio personalizzato che ho impostato.

Il primo file, `.nojekyll` è un file vuoto. Basta crearlo e non scriverci dentro nulla.

`CNAME`, invece, contiene una sola riga: il nome del dominio, in questo formato:

```bash
test.stranianelli.com
```

Fatto questo posso ricompilare il sito con `npm run build` e poi usare

```bash
npm run deploy
```

per caricarlo online.

In fase di sviluppo è comodo anche il comando

```bash
npm run dev -- --open
```

Per vedere in tempo reale le modifiche fatte al codice.

Provo ad aggiungere una nuova pagina, `about.svelte`. Basta creare un nuovo componente nella cartella `src\routes`.

Questo può andare bene per un sito statico. E se invece volessi creare qualcosa di simile ad un blog?

Qui la questione è un po' più complicata. Ho trovato alcuni post e video in rete:

- [SvelteKit Blog](https://svelteland.github.io/svelte-kit-blog-demo) - grazie John per il link!
- [Sveltekit Markdown Blog](https://www.youtube.com/playlist?list=PLm_Qt4aKpfKgonq1zwaCS6kOD-nbOKx7V)
- [How to Create a Blog with SvelteKit and Strapi](https://strapi.io/blog/how-to-create-a-blog-with-svelte-kit-strapi)
- [How to create a blog with SvelteKit and dev.to API](https://dev.to/ladvace/how-to-create-a-blog-with-sveltekit-and-dev-to-api-5h7e)

E altri ancora. Non sono davvero soddisfatto di nessuna delle soluzioni proposte. Ma non ho ancora una mia proposta. Mi limito per il momento a unire alcuni passaggi dei diversi. Devo però fare un ringraziamento particolare a [WebJeda](https://blog.webjeda.com/) per i suoi video e i suoi post.

Detto questo, mi serve qualche altro strumento. Per cominciare mi serve [trash-cli](https://github.com/sindresorhus/trash-cli) per ripulire la cartella `build` prima di ogni comando `npm run build`

```bash
npm i -D trash-cli
```

Aggiungo un nuovo script a `package.json` e aggiorno `build`:

```json
"scripts": {
 "build": "npm run clean && svelte-kit build",
 "clean": "trash build"
},
```

Passo quindi a importare [mdsvex](https://mdsvex.pngwn.io/)

```bash
npm i -D mdsvex
```

e in successione uso [svelte-add/mdsvex](https://github.com/svelte-add/mdsvex):

```bash
npx svelte-add@latest mdsvex
```

`mdsvex` mi permette di usare le pagine `markdown` come se fossero dei componenti svelte. Anche come pagine di un router di SvelteKit. C'è un file di configurazione, `mdsvex.config.js`:

```js
const config = {
  "extensions": [".svelte.md", ".md", ".svx"],

  "smartypants": {
    "dashes": "oldschool"
  },

  "remarkPlugins": [],
  "rehypePlugins": []
};

export default config;
```

Il file `svelte.config.js` viene modificato in modo da gestire il markdown:

```js
import {
 mdsvex
} from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
 "extensions": [".svelte", ...mdsvexConfig.extensions],
  preprocess: [preprocess(), mdsvex(mdsvexConfig)],

  kit: {
   target: '#svelte',
   adapter: adapter({
	pages: 'build',
	assets: 'build',
	fallback: null
   })
  }
};

export default config;
```

Come prova posso creare alcuni post di un blog fittizio. Creo la cartella `src/routes/blog` e dentro inserisco alcuni file `.md`.

```md
---
file: hello-world.md
title: Hello World
---

Hi!
```

Dopo aver rieseguito `npm run dev` posso vedere il risultato alla pagina `http://localhost:3000/blog/hello-world`

La cosa bella è che è possibile usare Svelte dentro il file. Posso per esempio impostare il titolo della pagina con:

```md
# {title}
```

e usare dei componenti definiti altrove:

```md
<script>
 import Box from "$lib/Box.svelte";
</script>

<Box />
```

È invece un po' più complessa la gestione delle immagini. Non so ancora quale sia il metodo migliore. Uno prevede di inserire tutte le immagini nella cartella `static` e poi richiamarle da lì:

```html
<script>
 <img src="image.jpg" />
</script>

```

In alternativa si possono inserire in una cartella dentro `lib` e poi importarle come componenti:

```html
<script>
 import ImageSrc from "$lib/assets/drums.png";
</script>

<img src={ImageSrc} />
```

Un altro aspetto da tenere presente quando si crea un blog è la necessità di gestire l'home page in maniera dinamica. Posso ottenere qualcosa di carino creando un componente `src/routes/blog/index.svelte` e usando la funzione [load()](https://kit.svelte.dev/docs#loading).

Comincio con l'importare nel componente un array con un riferimento a tutti file con estensione `md` nella cartella:

```html
<script context="module">
 const allPosts = import.meta.glob("./**/*.md");
</script>
```

Estraggo da quell'array le informazioni che mi servono: `path`, ovvero la posizione del file, e `metadata`, che non è altro che il contenuto del Frontmatter del file stesso

```html
<script context="module">
 const allPosts = import.meta.glob("./**/*.md");
 let body = [];
 for (let path in allPosts) {
  body.push(
   allPosts[path]().then( ({metadata}) => {
    return { path, metadata}
   })
  );  
 }
</script>
```

Infine passo al componente quello che mi serve per creare l'indice:

```html
<script context="module">
// ...
 export async function load() {
  const posts = await Promise.all(body);
   return {
    props: {posts}
   }
 }
</script>
```

Il resto del componente è abbastanza semplice:

```html
<script>
 export let posts;
</script>

<ul>
 {#each  posts as {path, metadata: {title}} }
  <li>
   <a href={`/blog/${path.replace(".md","")}`}>{title}</a>
  </li>
 {/each}
</ul>
```

Un'altra funzione interessante sono i [layouts](https://kit.svelte.dev/docs#layouts), ovvero delle specie di template. Per esempio, posso creare un componente `src/routes/blog/__layout.svelte`:

```html
<nav>
    <a sveltekit:prefetch href="./">Blog</a>
	<a sveltekit:prefetch href="../about">About</a>
    <a sveltekit:prefetch href="../">Home</a>
</nav>

<slot></slot>
```

Per inserire un menù di navigazione in ogni pagina del blog.





Per oggi è tutto. Il codice è disponibile su GitHub:

- [MEMENTO - SvelteKit & GitHub Pages](https://github.com/el3um4s/memento-sveltekit-and-github-pages)

Il blog invece è visibile all'indirizzo

Ricordo inoltre l'indirizzo del mio Patreon:

- [Patreon](https://www.patreon.com/el3um4s)