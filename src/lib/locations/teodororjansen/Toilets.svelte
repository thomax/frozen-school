<script>
  import {goToLocation} from '../../dataStores/locationStore.js'
  export let location
  import toiletImageSrc from '../../../assets/teodororjansen/toilets.png'
  import {onMount} from 'svelte'
  let mainElement


  onMount(() => {
    mainElement.style.background = `url('${toiletImageSrc}')  no-repeat center center fixed`
    mainElement.style.backgroundSize = 'cover'
  })
</script>

<div>
  <h1>{location.title}</h1>
  <div>Toilets</div>
  <button on:click={() => goToLocation('dh')}>Exit to hallway</button>
</div>
