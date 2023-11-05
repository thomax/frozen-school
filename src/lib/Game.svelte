<script>
  import {currentLocation} from './dataStores/locationStore.js'
  import {Location} from './Location.js'

  let location = Location.getLocation($currentLocation)

  // Listen to changes on location
  currentLocation.subscribe((newLocation) => {
    location = Location.getLocation(newLocation)
  })
</script>

<div id="gameComponent" class="uiBox">
  <svelte:component this={location.component} {location} />
  <div class="locationCreator">Location created by: {location.author}</div>
</div>
