<script>
  import {onMount} from 'svelte'
  import {goToLocation} from '../../dataStores/locationStore.js'
  import {changeTemperature} from '../../dataStores/characterStore'
  import classroom3 from '../../../assets/Jonatan/classroom.jpg'
  import OpenLocker from '../../../assets/Jonatan/openLocker.png'
  import closedLocker from '../../../assets/Jonatan/closedLocker.png'
  import {changeFreezeRate} from '../../dataStores/stateStore'
  import postitLapp1 from '../../../assets/Jonatan/postit_lapp1.png'

  export let location

  let code = 1234
  let enteredCode = ''
  let mainElement
  let lockerOpenVisible = false

  let position = {x: 960, y: 650}

  onMount(() => {
    mainElement.style.background = `url('${classroom3}')  no-repeat center center`
    mainElement.style.backgroundSize = 'cover'
    changeFreezeRate(1.5)
  })

  let lockerVisible = false
  let postitVisible = false
  let roomVisible = true
  let roomPostitButtonVisible = true
  let postitBackToRoom = false

  function handleRoom() {
    //back to class
    mainElement.style.background = `url('${classroom3}') no-repeat center center`
    mainElement.style.backgroundSize = 'cover'
    postitVisible = false
    lockerVisible = false
    roomVisible = true
    roomPostitButtonVisible = true
    postitBackToRoom = false
  }

  function handlePostit() {
    postitVisible = true
    lockerVisible = false
    postitBackToRoom = true

    if (lockerVisible == false) {
      // in to poster
      mainElement.style.background = `url('${postitLapp1}') no-repeat center center` // Added this line
      mainElement.style.backgroundSize = 'cover'
      position = {x: 600, y: 800}
      roomVisible = false
    }
  }

  function handleLocker() {
    lockerVisible = true
    if (lockerVisible) {
      mainElement.style.background = `url('${closedLocker}') no-repeat center center` // Added this line
      mainElement.style.backgroundSize = 'cover'
      position = {x: 600, y: 800}
      roomPostitButtonVisible = false
    } else {
      mainElement.style.background = `url('${classroom3}') no-repeat center center`
      mainElement.style.backgroundSize = 'cover'
      roomPostitButtonVisible = true
      position = {x: 960, y: 650}
    }
  }

  function handleCode() {
    if (+enteredCode == code) {
      mainElement.style.background = `url('${OpenLocker}') no-repeat center center`
      mainElement.style.backgroundSize = 'cover'
      lockerOpenVisible = true
    }
  }

  function handleAddTemp() {
    changeTemperature(20)
    isButtonVisible = false
  }

  let isButtonVisible = true
</script>

<div class="classroom" bind:this={mainElement}>
  <h1>{location.title}</h1>
  <p>
    brrrr.. this is a cold place.. I better be quick to se if there are something useful in her..?
  </p>

  <!--room, postit (nytt bilde), locker-->
  {#if postitVisible}
    <div class="postitCode">
      <h1>1234</h1>
      {#if postitBackToRoom == true}
        <button on:click={handleRoom}>Go Back(from postit)</button>
      {/if}
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
      {#if roomPostitButtonVisible}
        <button on:click={handlePostit} class="postitBtn"
          ><img src={postitLapp1} class="postitFar" /></button
        >
      {/if}
      <button on:click={handleLocker}>Go to</button>
    </div>
  {/if}

  {#if lockerOpenVisible}
    <button class="rewardBtn" on:click={handleAddTemp}>Get reward</button>
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

  .lockerBtn {
    position: absolute;
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

  #postitBack {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 500px;
    background-color: aqua;
    z-index: 0;
  }

  .rewardBtn {
    top: 300px;
    position: absolute;
  }
</style>
