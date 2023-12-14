<script>
  import {onMount} from 'svelte'
  import {goToLocation} from '../../dataStores/locationStore.js'
  import {changeTemperature} from '../../dataStores/characterStore'
  import classroom3 from '../../../assets/Jonatan/classroom.jpg'
  import openLocker from '../../../assets/Jonatan/openLocker.png'
  import closedLocker from '../../../assets/Jonatan/closedLocker.png'
  import {changeFreezeRate} from '../../dataStores/stateStore'
  import postitLapp1 from '../../../assets/Jonatan/postit_lapp1.png'
  import kakao from '../../../assets/Jonatan/kakao_1.png'
  import kodelås from '../../../assets/Jonatan/kodelås.png'

  export let location

  let randomPosY = Math.floor(Math.random() * 900) + 100;
  let randomPosX = Math.floor(Math.random() * 900) + 100;
  let randomCode = Math.floor(Math.random() * 9000) + 1000; // Generate a random 4-digit code
  let inputCode = "";
  let mainElement;
  let position = {x: 960, y: 650};
  let lockerOpenVisible = false;
  let lockerVisible = false;
  let postitVisible = false;
  let roomVisible = true;
  let roomPostitButtonVisible = true;
  let postitBackToRoom = false;

  onMount(() => {
    mainElement.style.background = `url('${classroom3}')  no-repeat center center`
    mainElement.style.backgroundSize = 'cover'
    changeFreezeRate(1.5)
  })

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
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      
    } else {
      mainElement.style.background = `url('${classroom3}') no-repeat center center`
      mainElement.style.backgroundSize = 'cover'
      roomPostitButtonVisible = true
      position = {x: 960, y: 650}
    }
  }

  function handleCheckCode() {
    if (inputCode === randomCode.toString()) {
      mainElement.style.background = `url('${openLocker}') no-repeat center center`
      mainElement.style.backgroundSize = 'cover'
      lockerOpenVisible = true
    } else {
      console.log("Incorrect code");
    }
  }

  function handleAddTemp() {
    changeTemperature(20)
    lockerOpenVisible = false; // Set showButton to false when the button is clicked
  }

  function handleTip() {
    alert("Click around to see if there are something useful.")
    changeTemperature(-5)
  }
</script>

<div class="classroom" bind:this={mainElement}>
  {#if postitVisible}
    <div class="postitCode">
      <p class="readableText">Maybe this number can come in handy..?</p>
      <h1 class="randomCode">{randomCode}</h1>
      {#if postitBackToRoom == true}
        <button class="goBackBtn" on:click={handleRoom}>Go Back(from postit)</button>
      {/if}
    </div>
  {/if}

  {#if lockerVisible}
    <div class="locker">
    <p class="readableText">Ugh.. this locker won't open..</p>
      <div class="codeInputBox">
        <label for="codeInput"><img class="codePic" src={kodelås}></label>
        <input type="text" id="codeInput" bind:value={inputCode} on:input={handleCheckCode} maxlength="4"/>
      </div>
      <button class="goBackBtn" on:click={handleRoom}>Go Back(from locker)</button>
    </div>
  {/if}

  {#if roomVisible}
  <h1>{location.title}</h1>
  <p class="readableText">
    brrrr.. this is a cold place.. I better be quick to se if there are something useful in her..?
  </p>
    <button on:click={handleTip}>See a tip? Cost: 5seconds)</button>
    <button class="hallwayBtn" on:click={() => goToLocation('hall')}>Exit to hallway</button>
    <div class="postitCode">
      {#if roomPostitButtonVisible}
        <button title="Whats that?" on:click={handlePostit} class="postitBtn" style={`top: ${randomPosY}px; left: ${randomPosX}px;`}>
          <img src={postitLapp1} class="postitFar" />
        </button>
      {/if}
      <button class="lockerBtn" on:click={handleLocker}>Go to</button>
    </div>
  {/if}

  {#if lockerOpenVisible}
    <img title="A warm drink that might help" on:click={handleAddTemp} id="warmDrink" src="{kakao}" alt="">
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
    background-color: transparent;
    z-index: 0;
  }

  #warmDrink {
    width:100px;
    background-color: transparent;
    top: 300px;
    position: absolute;
  }

  .lockerBtn {
    position: relative;
    left: 380px;
    top:180px; 
  }

  .goBackBtn{
    position: absolute;
    top: 600px;
    left: 570px
  }

  .hallwayBtn{
    position: relative;
    top: 410px;
    right:100px;
  }

  .randomCode{
    margin-top: 200px;
    font-size: 100px;
  }

  .codeInputBox {
    position: absolute;
    margin-top: 200px;
    margin-left:500px;
  }

  .codePic {
    width: 100px;
  }
</style>
