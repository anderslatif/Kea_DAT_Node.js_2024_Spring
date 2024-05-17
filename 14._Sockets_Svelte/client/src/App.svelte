<script>
  import { nicknameStore } from "./stores/nicknameStore.js";

  import Colors from "./pages/Colors/Colors.svelte";
  import Registration from "./pages/Registration/Registration.svelte";


</script>

{#if $nicknameStore}
  <Colors />
{:else}
  <Registration />
{/if}
