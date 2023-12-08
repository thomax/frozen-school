<script>
import {onMount} from 'svelte'
import {goToLocation} from '../../dataStores/locationStore.js'
import classroom3 from '../../../assets/Jonatan/classroom.jpg'
import OpenLocker from '../../../assets/Jonatan/openLocker.png'
import closedLocker from '../../../assets/Jonatan/closedLocker.png'
import {changeFreezeRate} from '../../dataStores/stateStore'
import postitLapp1 from '../../../assets/Jonatan/postit_lapp1.png'


export let location 

let code = 1234
let enteredCode = ""
let mainElement

let position = {x:960, y:650}

onMount(() => {
  mainElement.style.background = `url('${classroom3}')  no-repeat center center`
  mainElement.style.backgroundSize = 'cover'
  changeFreezeRate(1.5)
})

let lockerVisible = false;
let postitVisible = false;
let roomVisible = true

function handleRoom(){
  if (postitVisible = false){
       //back to class
      mainElement.style.background = `url('${classroom3}') no-repeat center center`;
      mainElement.style.backgroundSize = 'cover';
      postitVisible = false
      lockerVisible = false
      roomVisible = true
    }
}

function handlePostit() {
  postitVisible = false
  lockerVisible = false

  if (postitVisible == false && lockerVisible == false) {
    // in to poster
    mainElement.style.background = `url('${postitLapp1}') no-repeat center center`; // Added this line
    mainElement.style.backgroundSize = 'cover';
    position = {x:600, y:800};
    roomVisible = false
  
  }
}

function handleLocker() {
  lockerVisible = true;
    if (lockerVisible) {
      mainElement.style.background = `url('${closedLocker}') no-repeat center center`; // Added this line
      mainElement.style.backgroundSize = 'cover';
      position = {x:600, y:800}
    } else {
      mainElement.style.background = `url('${classroom3}') no-repeat center center`;
      mainElement.style.backgroundSize = 'cover';
      position = {x:960, y:650}
    }
}

function handleCode() {
  if (+enteredCode == code) {
  console.log("code worked");
  }
}
</script>

<div class="classroom" bind:this={mainElement}>
  <h1>{location.title}</h1>
  <p>brrrr.. this is a cold place.. I better be quick to se if there are something useful in her..?</p>

  <!--room, postit (nytt bilde), locker-->
    {#if postitVisible}
      <div class="postitCode">
        <button on:click={handleRoom}>Go Back(from postit)</button>
      </div>
    {/if}
   
    {#if lockerVisible}
      <div class="locker">
        <label for="codeId">Kodelås</label>
        <input bind:value={enteredCode} id="codeId" on:input={handleCode} />
        <button on:click={handleRoom}>Go Back(from locker)</button>
      </div>
    {/if}

    {#if roomVisible}
      <button on:click={() => goToLocation('dh')}>Exit to hallway</button>
      <div class="postitCode">
        <button on:click={handlePostit} class="postitBtn"><img src={postitLapp1} class="postitFar"></button>
        <button on:click={handleLocker}>Go to</button>
      </div>
    {/if}
    
    
  </div>


<style>
    .locker {
        visibility: visible;
        width: 100%;
        height: 100vh;
        background-size: cover;
        background-position: center;
    }

    .classroom {
      width: 100%;
      height: 100vh;
      background-size: cover;
      background-position: center;
    }

    .lockerBtn{
      position: absolute;
    }

    button {
      width: 80px;
      height: 50px;
      border-color: rgb(255, 255, 255);
      background-color: aqua;
      color: rgb(255, 255, 255);
      font-size: medium;
      border: solid 4px;
      border-radius: 15px;
      transition: background-color 0.5s ease;
      
    }

    button:hover {
      background-color: rgb(45, 176, 176);
    }

    .codeInput {
      visibility: visible;
    }

    .postitFar {
      width: 20px;
      background: none;
    }

    .postitBtn {
      position: absolute;
      left: 300px;
      top: 500px;
      width: 1px;
      height: 1px;
      background-color: transparent;
      border: none;
    }

    
</style>