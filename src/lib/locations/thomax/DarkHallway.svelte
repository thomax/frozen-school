<script>
  import {goToLocation} from '../../dataStores/locationStore.js'
  export let location
</script>

<div>
  <h1>{location.title}</h1>
  <div>It's dark and freezing, and I can't see the end of the hall</div>
  <button on:click={() => goToLocation('fc307')}>Back to the frozen classroom</button>
  <button on:click={() => goToLocation('so')}>Strange office</button>
  <button on:click={() => goToLocation('ki')}>Kitchen</button>
  <button on:click={() => goToLocation('bi')}>Bibliotek</button>
  <button on:click={() => goToLocation('lf')}>Locker with fireplace</button>
  <button on:click={() => goToLocation('toi')}>Toilets</button>
  <button on:click={() => goToLocation('caf')}>Cafeteria</button>
  <button on:click={() => goToLocation('hall')}>Navigation test</button>
  <button on:click={() => goToLocation('lr')}>Locker room</button>
  <button on:click={() => goToLocation('norcl')}>Classroom 3</button>
  <button on:click={() => goToLocation('sbf')}>Snowball Fight!</button>
</div>
