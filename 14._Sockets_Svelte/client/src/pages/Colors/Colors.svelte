<script>
    import ColorList from "../../components/ColorList/ColorList.svelte";
    import { colorListStore } from "../../stores/colorListStore.js";

    import io from "socket.io-client";

    let color = "#000000";

    const socket = io("localhost:8080");

    socket.on("server-sends-color", ({ data, nickname }) => {
        const color = data;

        colorListStore.update((colorListArray) => {
            colorListArray.push({ color, nickname });
            return colorListArray;
        });

        // shouldn't do it this way, do it in the more Svelte way
        document.body.style.backgroundColor = color;
    });

    function submitColor() {
        socket.emit("client-sends-color", { data: color });
    }

</script>

<input type="color" bind:value={color}>
<button on:click={submitColor}>Submit Color</button>

<ColorList />