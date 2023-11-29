<script>
import {goToLocation} from '../../dataStores/locationStore.js'
export let location 
let lockerVisible = false;


function handleLocker(){
   lockerVisible = !lockerVisible   
}
</script>

<main>
<h1>{location.title}</h1>
  <div class="classroom">
    <div class="image">
      <img src="assets/Jonatan/classroom.jpg">
      {#if lockerVisible}
        <div class="locker">
            <h2>test</h2>
          <!-- Locker content goes here -->
        </div>
      {/if}
      <button on:click={handleLocker}>Go to</button>
    </div>
  </div>
</main>

<style>
    .locker {
        visibility: visible;
    }
</style>