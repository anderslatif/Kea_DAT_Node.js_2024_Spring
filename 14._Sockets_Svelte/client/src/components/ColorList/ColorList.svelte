<script>
    import { colorListStore } from "../../stores/colorListStore.js";

</script>

{#each $colorListStore as { color, nickname }}
    <div style={`background-color: ${color}`}>{nickname}: {color}</div>
{/each}