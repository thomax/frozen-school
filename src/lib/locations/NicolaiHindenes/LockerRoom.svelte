<script>
  import {onMount} from 'svelte'
  import { asDraggable } from 'svelte-drag-and-drop-actions'
  import {goToLocation} from '../../dataStores/locationStore.js'
  import LockerRoom from '../../../assets/NicolaiHindenes/LockerRoom.png'
  import RedSock from '../../../assets/NicolaiHindenes/RedSock.png'
  import GreenSock from '../../../assets/NicolaiHindenes/greenSock.png'
  import BlueSock from '../../../assets/NicolaiHindenes/BlueSock.png'
  import YellowSock from '../../../assets/NicolaiHindenes/YellowSock.png'
  export let location
  let mainElement
  let showGame = false

  const itemsToSort = [RedSock, GreenSock, BlueSock, YellowSock]
  let sortedItems = []

  function startGame() {
    showGame = true
  }

  function finishGame() {
    showGame = false
    const isSortedCorrectly = checkSorting();
    console.log('Game finished. Sorted correctly:', isSortedCorrectly);
  }


    function handleDragStart(event, item) {
    event.dataTransfer.setDragImage(event.target, 0, 0);
    sortedItems.push(item);
  }

  function handleDrop(event) {
    event.preventDefault();
    const item = event.dataTransfer.getData('text/plain');
    sortedItems.push(item);
  }

  function allowDrop(event) {
    event.preventDefault();
  }

  function checkSorting() {
    return JSON.stringify(sortedItems) === JSON.stringify(itemsToSort);
  }

  let DraggableX = 20, 
      DraggableY = 20, 
      DraggableWidth = 80, 
      DraggableHeight = 30
  let ArenaWidth = 400, 
      ArenaHeight = 400

  function onDragMove (x,y, dx,dy) { DraggableX = x; DraggableY = y }
  function onDragEnd  (x,y, dx,dy) { DraggableX = x; DraggableY = y }
  
  onMount(() => {
    mainElement.style.background = `url('${LockerRoom}')  no-repeat center center`
    mainElement.style.backgroundSize = 'cover'
  })
</script>

<div class="lockerRoom" bind:this={mainElement}>
  <h1>{location.title}</h1>
  <div>Locker Room</div>
  <button on:click={() => goToLocation('dh')}>Exit to hallway</button>


  {#if !showGame}
    <button on:click={startGame}>Start Game</button>
  {/if}

  {#if showGame}
    <div class="gameContainer" style="width:{ArenaWidth}px; height:{ArenaHeight}px;">
      <h2>Sort the socks</h2>
      {#each itemsToSort as item (item)}
        <img 
        src={item} 
        alt="sock" 
        class="sockImage" 
        draggable="true" 
        use:asDraggable={{
          minX: 0,
          minY: 0,
          maxX: ArenaWidth - DraggableWidth,
          maxY: ArenaHeight - DraggableHeight,
          onDragMove: (x, y, dx, dy) => onDragMove(x, y, dx, dy),
          onDragEnd: (x, y, dx, dy) => onDragEnd(x, y, dx, dy),
        }}/>
      {/each}
      <div class="dropZone" on:drop={handleDrop} on:dragover={allowDrop}></div>
      <button on:click={finishGame}>Finish Game</button>
    </div>
    {/if}
</div>


<style>
  .lockerRoom {
    height: 100vh;
    width: 100%;
  }

  .sockImage {
    width: 100px;
    height: auto;
    margin: 5px;
    cursor: move;
  }

  .gameContainer {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border: 2px solid #ccc;
    border-radius: 8px;
    text-align: center;
    display:block; position:relative;
    margin:20px;
  }

  .dropZone {
    width: 150px;
    height: 150px;
    border: 2px #aaa;
    margin: 20px auto;
  }

</style>
