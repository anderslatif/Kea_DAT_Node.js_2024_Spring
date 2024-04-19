<script>
    import { onMount } from "svelte";
    import { BASE_URL } from "../../stores/generalStore.js";

    let movies = [];

    onMount(async () => {
        const response = await fetch($BASE_URL + "/api/movies");
        const result = await response.json();
        movies = result.data;
    });
</script>

<h1>Movies</h1>

{#each movies as movie}
    <h2>{movie.title}</h2>
    <h3>{movie.director}</h3>
    <p>{movie.year}</p>
{/each}