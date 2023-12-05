<script>
  import {onMount} from 'svelte'
  import {goToLocation} from '../../dataStores/locationStore.js'
  export let location
  import LockerImageSrc from '../../../assets/jscode1003/LockerWithFire.jpg'
  let mainElement


  onMount(() => {
    mainElement.style.background = `url('${LockerImageSrc}')  no-repeat center center`
    mainElement.style.backgroundSize = 'cover'
  })
</script>
np
<div>
  <h1>{location.title}</h1>
  <div>Locker with fireplace</div>
 
  <button on:click={() => goToLocation('dh')}>Exit to hallway</button>
</div>

