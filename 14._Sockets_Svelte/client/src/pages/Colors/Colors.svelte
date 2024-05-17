<script>
    import io from "socket.io-client";

    let color;

    const socket = io("localhost:8080");

    socket.on("server-sends-color", (data) => {
        // shouldn't do it this way, do it in the more Svelte way
        document.body.style.backgroundColor = data.data;
    });

    function submitColor() {
        socket.emit("client-sends-color", { data: color });
    }

</script>

<input type="color" bind:value={color}>
<button on:click={submitColor}>Submit Color</button>
