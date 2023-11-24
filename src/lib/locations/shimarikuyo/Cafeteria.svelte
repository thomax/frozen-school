<script>
    import {goToLocation} from '../../dataStores/locationStore.js'
    export let location
  </script>

<div>
    <h1>{location.title}</h1>
    <div>I'm hungry</div>
    <button on:click={() => goToLocation('dh')}>Hallway</button>
  </div>
  