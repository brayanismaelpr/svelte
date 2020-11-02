<script>
	export let name;
	export let last_name;
	let svelte_img = "https://images.unsplash.com/photo-1602526212101-12eb978b129a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=807&q=80";
</script>

<style>
	:global(body) {
		background-color: #f1f1f1;
	}
	:global(:root) {
		--azul: #29abe2;
	}
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
	p {
		color: var(--azul);
		padding-top: 15px;
	}
	main img {
		width: 500px;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<main>
	<h1>Hello {name} {last_name}!</h1>
	<p>Frontend developer</p>
	<img src={svelte_img} alt="Imagen perfil">
</main>