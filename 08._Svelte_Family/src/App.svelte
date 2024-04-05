<script>
    import Fridge from './components/Fridge/Fridge.svelte';
import Home from './components/Home/Home.svelte';
    import Parent from './components/Parent/Parent.svelte';

    const parents = ["Niels", "Ulla"];
    const children = [
        {
            name: "Niels Jr.", 
            familySheep: "black-sheep"
        },
        {
            name: "Oscar",
            familySheep: "grey-sheep"
        },
        {
            name: "Methea",
            isGirl: true
        }
    ];

</script>


<Home>
    <Parent parentName={parents[0]} myChildren={children} />
    <Parent parentName={parents[1]} myChildren={children} />
</Home>

<h1>Basement</h1>
<Fridge fridgeHeight={20} />
