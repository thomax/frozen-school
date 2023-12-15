<script>
  import {onMount} from 'svelte'
  import {goToLocation} from '../../dataStores/locationStore.js'
  export let location
  import ToiletRoom from  '../../../assets/teodororjansen/ToiletRoom.png'
  import lighter from '../../../assets/teodororjansen/lighter.png'
  import {addToInventory} from '../../dataStores/characterStore.js'
  import Nisse from '../jscode1003/Nisse.svelte'
  let mainElement
  let message = ''
  
  
  onMount(() => {
    mainElement.style.background = `url('${ToiletRoom}')  no-repeat center center`
    mainElement.style.backgroundSize = 'cover'
  }) 

  function handleLighter() {
    addToInventory('lighter')
    message = 'Collected lighter!'
  }

  
</script>


<div class = "ToiletRoom" bind:this={mainElement}>
  <div class="readableText" >Toilet 1</div>
  <Nisse message = {message}></Nisse>
  <button on:click={() => goToLocation('toi')}>Go back</button>
  <img src="{lighter}" alt="lighter" width="4%" height="8.2%" on:click={handleLighter} style="position: absolute; top: 55.3%; left: 35.5%;">
</div>

<style>
  .ToiletRoom{
    height: 90vh;
    width: 40vw;
    margin: auto;
    color: red;
  }
</style>  