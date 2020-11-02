import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Brayan',
		last_name: 'Peñaranda'
	}
});

export default app;