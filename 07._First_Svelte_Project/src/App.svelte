<script>
  import FriendsCounter from "./components/FriendsCounter/FriendsCounter.svelte";
  import Greeter from "./components/Greeter/Greeter.svelte";

</script>

<main>
  <Greeter name="Eve"></Greeter>
  <Greeter name="Bob"></Greeter>
  <Greeter name="Alice"></Greeter>
  <Greeter name="Wendy"></Greeter>
  <Greeter></Greeter>

  <FriendsCounter friendsCounter={5}></FriendsCounter>
</main>


