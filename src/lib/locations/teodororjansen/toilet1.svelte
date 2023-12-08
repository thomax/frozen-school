<script>
  import {onMount} from 'svelte'
  import {goToLocation} from '../../dataStores/locationStore.js'
  export let location
  import ToiletRoom from  '../../../assets/teodororjansen/ToiletRoom.png'
  import lighter from '../../../assets/teodororjansen/lighter.png'
  let mainElement
  
  
  onMount(() => {
    mainElement.style.background = `url('${ToiletRoom}')  no-repeat center center`
    mainElement.style.backgroundSize = 'cover'
  }) 
</script>


<div class = "ToiletRoom" bind:this={mainElement}>
  <h1>{location.title}</h1>
  <button on:click={() => goToLocation('toi')}>Go back</button>
  <img src="{lighter}" alt="lighter" width="4%" height="8.2%" style="position: absolute; top: 87%; left: 35.5%;">
</div>

<style>
  .ToiletRoom{
    height: 90vh;
    width: 40vw;
    margin: auto;
    color: red;
  }
  
  .toiletRoombackground{
    background-color: black;
  }
</style>  