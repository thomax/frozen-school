<script>
   import {onMount} from 'svelte'
  import {goToLocation} from '../../dataStores/locationStore.js'
  export let location
  import bibliotekUrl from '../../../assets/aakonHO-IN/bibliotek.png'
  let mainElement


  onMount(() => {
    mainElement.style.background = `url('${bibliotekUrl}')  no-repeat center center fixed`
    mainElement.style.backgroundSize = 'cover'
  })
</script>
<h1>{location.title}</h1>
<button on:click={() => goToLocation('dh')}>Exit to hallway</button>
<div class = "libraryBox" bind:this={mainElement}>
  
</div>


<style>
  .libraryBox {
    height: 1000px;
    width: auto;


  }
</style>