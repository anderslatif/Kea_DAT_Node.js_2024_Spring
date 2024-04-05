<script>
    import { fridgeMessages } from "../../stores/fridgeMessageStore.js";
</script>


<div class="fridge">
    {#each $fridgeMessages as fridgeMessage}
        <p>{fridgeMessage.creator ?? "Titel"}: {fridgeMessage.message}</p>
    {/each}
</div>

<slot></slot>

<p>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    |</p>
    <p>&nbsp;&nbsp;&nbsp;Home sweet home </p>
<p>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    |</p>

<style>
    .fridge {
        background-color: white;
        color: black;
        min-height: 40vh;
        border-radius: 1.5em;
    }
</style>