<script>
  import {onMount} from 'svelte'
  import {goToLocation} from '../../dataStores/locationStore.js'
  export let location
  import tabel from  '../../../assets/aakonHO-IN/tabel.jpg'
  let mainElement


  onMount(() => {
    mainElement.style.background = `url('${tabel}')  no-repeat center center`
   mainElement.style.backgroundSize = 'cover'
  }) 
</script>
<h1>{location.title}</h1>
  <button on:click={() => goToLocation('bi')}>Go back</button>

<div class = "tabel" bind:this={mainElement}>


  
</div>

<style>
  .tabel{
    height: 1000px;
    width: auto;
  }
</style>