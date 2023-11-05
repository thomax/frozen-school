<script>
  import {goToLocation} from '../../dataStores/locationStore.js'
  export let location
</script>

<div>
  <h1>{location.title}</h1>
  <div>It's dark and freezing, and I can't see the end of the hall</div>
  <button on:click={() => goToLocation('fc307')}>Back to the frozen classroom</button>
  <button on:click={() => goToLocation('so')}>Strange office</button>
</div>
