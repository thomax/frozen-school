<script>
  import {goToLocation} from '../../dataStores/locationStore.js'
  import {onMount} from 'svelte'
  import kitchenImageSrc from '../../../assets/ruimatsiur/coldkitchen.png'
  import Fridge from '../../../assets/ruimatsiur/Fridge.png'

  export let location
  let mainElement

  onMount(() => {
    mainElement.style.background = `url('${kitchenImageSrc}')  no-repeat center center`
    mainElement.style.backgroundSize = 'cover'
  })
</script>

<div class="kitchen" bind:this={mainElement}>
  <h1>{location.title}</h1>
  <div>kjøkken</div>

  <img src={Fridge} class="Fridge" on:click={() => goToLocation('fi')} />

  <button on:click={() => goToLocation('dh')}>Exit to hallway</button>
</div>

<style>
  .kitchen {
    width: 100%;
    height: 100vh;
  }
  .Fridge {
    width: 145px;
    height: 285px;
    position: absolute;
    top: 49%;
    left: 46%;
  }
</style>
