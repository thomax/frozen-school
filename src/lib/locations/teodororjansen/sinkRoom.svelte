<script>
    import {onMount} from 'svelte'
    import {goToLocation} from '../../dataStores/locationStore.js'
    export let location
    import SinkRoom from  '../../../assets/teodororjansen/SinkRoom.png'
    import sink1 from '../../../assets/teodororjansen/sink1.png'
    import { changeHealth, changeTemperature, removeFromInventory } from '../../dataStores/characterStore.js'
    let mainElement
    let message = ''
    
    
    onMount(() => {
        mainElement.style.background = `url('${SinkRoom}')  no-repeat center center`
        mainElement.style.backgroundSize = 'cover'
    }) 

    function handleSinkClick() {
        if (removeFromInventory('lighter')){
            message = "You unfroze the sink and now have access to hot and cold water"
            changeTemperature(20)
            changeHealth(15)
        } else {
            message = "The sink looks frozen"
        }
        
    }
</script>


<div class = "SinkRoom" bind:this={mainElement}>
    <div class="readableText" >Sink<hr>The sink is frozen</div>
    <button on:click={() => goToLocation('toi')}>Go back</button>
    <img src="{sink1}" alt="sink" width="12%" height="" on:click={handleSinkClick} style="position: absolute; top: 29.6%; left: 43.5%;">
    <h2><br><br>{message}</h2>
    
</div>

<style>
    .SinkRoom{
        height: 90vh;
        width: 40vw;
        margin: auto;
        color: red;
    }


</style>  