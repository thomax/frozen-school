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
  <div class="locationCreator">
    Location created by: <a href="https://github.com/{location.author}" target="_blank"
      >{location.author}</a
    >
  </div>
</div>

<style>
  .locationCreator {
    margin-top: 15px;
    color: white;
    font-size: 0.8em;
  }
</style>
