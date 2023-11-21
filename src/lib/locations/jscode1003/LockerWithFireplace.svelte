<script>
  import {goToLocation} from '../../dataStores/locationStore.js'
  export let location
  
</script>
np
<div>
  <h1>{location.title}</h1>
  <div>Locker with fireplace</div>
 
  <button on:click={() => goToLocation('dh')}>Exit to hallway</button>
</div>

