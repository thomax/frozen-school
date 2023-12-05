<script>
  import {currentLocation} from './dataStores/locationStore.js'
  import CharacterSheet from './CharacterSheet.svelte'
  import {Location} from './Location.js'

  let location = Location.getLocation($currentLocation)

  // Listen for changes to location
  currentLocation.subscribe((newLocation) => {
    location = Location.getLocation(newLocation)
  })
</script>

<div id="gameComponent" class="gameStateBox">
  <CharacterSheet />
  <svelte:component this={location.component} {location} />
  <div class="locationCreator">Location created by: {location.author}</div>
</div>
