<script>
    import { nickname } from "../../stores/nicknameStore.js";

    let nicknameInput;

    async function submitNickname() {
        await fetch("http://localhost:8080/nicknames", {
            method: "POST",
            credentials: "include", 
            headers: { 
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nickname: nicknameInput }) 
        });
        const response = await fetch("http://localhost:8080/nicknames");
        const result = await response.json();
        console.log(result);
        
        nickname.set(nicknameInput);
    }
</script>

<input bind:value={nicknameInput} placeholder="nickname">
<button on:click={submitNickname}>Submit Nickname</button>