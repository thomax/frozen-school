<script>
  import {onMount} from 'svelte'
  import {asDraggable, asDroppable, asDropZone} from 'svelte-drag-and-drop-actions'
  import {goToLocation} from '../../dataStores/locationStore.js'
  import lockerRoom from '../../../assets/NicolaiHindenes/LockerRoom.png'
  import redSock from '../../../assets/NicolaiHindenes/RedSock.png'
  import greenSock from '../../../assets/NicolaiHindenes/greenSock.png'
  import blueSock from '../../../assets/NicolaiHindenes/BlueSock.png'
  import yellowSock from '../../../assets/NicolaiHindenes/YellowSock.png'
  export let location
  
  let mainElement
  let showSorting = false
  let RedSockDroppable, BlueSockDroppable, GreenSockDroppable, YellowSockDroppable
  
  let redSockInCorrectZone = false;
  let blueSockInCorrectZone = false;
  let greenSockInCorrectZone = false;
  let yellowSockInCorrectZone = false;
  
  function startSorting() {
    showSorting = true
  DraggableRedSockX = 54, 
  DraggableRedSockY = 0, 
  DraggableRedSockWidth = 80, 
  DraggableRedSockHeight = 30

  DraggableBlueSockX = 0, 
  DraggableBlueSockY = 104, 
  DraggableBlueSockWidth = 80, 
  DraggableBlueSockHeight = 30

  DraggableGreenSockX = 75, 
  DraggableGreenSockY = 163, 
  DraggableGreenSockWidth = 80, 
  DraggableGreenSockHeight = 30

  DraggableYellowSockX = 2, 
  DraggableYellowSockY = 260, 
  DraggableYellowSockWidth = 80, 
  DraggableYellowSockHeight = 30
  }

  function finishSorting() {
    if (redSockInCorrectZone && blueSockInCorrectZone && greenSockInCorrectZone && yellowSockInCorrectZone) {
      alert('Congratulations! Socks sorted correctly!');
    } else {
      alert('Not all socks are in the correct drop zones. Please try again.');
    }

    redSockInCorrectZone = false;
    blueSockInCorrectZone = false;
    greenSockInCorrectZone = false;
    yellowSockInCorrectZone = false;

    showSorting = false;


  }

  
  function onDropped(x, y, Operation, TypeTransferred, DataTransferred, DropZoneExtras, DroppableExtras) {
    console.log('Droppable.onDropped:')
    console.log(' x,y:            ', x, y)
    console.log(' Operation:      ', Operation)
    console.log(' TypeTransferred:', TypeTransferred)
    console.log(' DataTransferred:', DataTransferred)
    console.log(' DropZoneExtras: ', DropZoneExtras)
    console.log(' DroppableExtras:', DroppableExtras)

    if (DataTransferred === 'Red Sock' && DropZoneExtras === RedSockDroppable) {
      redSockInCorrectZone = true;
    } else if (DataTransferred === 'Blue Sock' && DropZoneExtras === BlueSockDroppable) {
      blueSockInCorrectZone = true;
    } else if (DataTransferred === 'Green Sock' && DropZoneExtras === GreenSockDroppable) {
      greenSockInCorrectZone = true;
    } else if (DataTransferred === 'Yellow Sock' && DropZoneExtras === YellowSockDroppable) {
      yellowSockInCorrectZone = true;
    }
  }
  

  function onDrop(x, y, Operation, DataOffered, DroppableExtras, DropZoneExtras) {
    console.log('DropZone.onDrop:')
    console.log(' x,y:            ', x, y)
    console.log(' Operation:      ', Operation)
    console.log(' DataOffered:    ', DataOffered)
    console.log(' DroppableExtras:', DroppableExtras)
    console.log(' DropZoneExtras: ', DropZoneExtras)

    DroppableExtras.style.display = 'none'; 

    let TypeAccepted = undefined;
    for (let Type in DataOffered) {
      if (DataOffered.hasOwnProperty(Type)) {
        TypeAccepted = Type;
      }
    }
    return TypeAccepted;
  }
  
  let DraggableRedSockX = 20, 
  DraggableRedSockY = 20, 
  DraggableRedSockWidth = 80, 
  DraggableRedSockHeight = 30

  let DraggableBlueSockX = 60, 
  DraggableBlueSockY = 20, 
  DraggableBlueSockWidth = 80, 
  DraggableBlueSockHeight = 30

  let DraggableGreenSockX = 100, 
  DraggableGreenSockY = 20, 
  DraggableGreenSockWidth = 80, 
  DraggableGreenSockHeight = 30

  let DraggableYellowSockX = 140, 
  DraggableYellowSockY = 20, 
  DraggableYellowSockWidth = 80, 
  DraggableYellowSockHeight = 30
  
  let ArenaWidth = 400, 
  ArenaHeight = 400
  
  function onDragMoveRed (x,y, dx,dy) { DraggableRedSockX = x; DraggableRedSockY = y }
  function onDragMoveBlue (x,y, dx,dy) { DraggableBlueSockX = x; DraggableBlueSockY = y }
  function onDragMoveGreen (x,y, dx,dy) { DraggableGreenSockX = x; DraggableGreenSockY = y }
  function onDragMoveYellow (x,y, dx,dy) { DraggableYellowSockX = x; DraggableYellowSockY = y }
  
  
  
  onMount(() => {
    mainElement.style.background = `url('${lockerRoom}')  no-repeat center center`
    mainElement.style.backgroundSize = 'cover'
  })
</script>

<div class="lockerRoom" bind:this={mainElement}>
  <h1>{location.title}</h1>
  <div>Locker Room</div>
  <button on:click={() => goToLocation('hall')}>Exit to hallway</button>
  
  
  {#if !showSorting}
  <button on:click={startSorting}>Start Game</button>
  {/if}
  
  {#if showSorting}
  <div class="gameContainer" style="width:{ArenaWidth}px; height:{ArenaHeight}px;">
    <h2>Sort the socks</h2>

    <div bind:this={RedSockDroppable}
    class="sockImage"
    style="
    left:{DraggableRedSockX}px; 
    top:{DraggableRedSockY}px; 
    width:{DraggableRedSockWidth}px; 
    height:{DraggableRedSockHeight}px;"
    use:asDroppable={{
      minX:0, 
      minY:0, 
      maxX:ArenaWidth-DraggableRedSockWidth,
      maxY:ArenaHeight-DraggableRedSockHeight,
      onDragStart:{x:DraggableRedSockX,y:DraggableRedSockY}, 
      onDragMove: onDragMoveRed,
      Extras: RedSockDroppable,
      Operations: 'copy', DataToOffer: { 'image/gif': 'Red Sock' },
      onDropped
    }}>
        <img src={redSock} alt="sock" style=" width: 200%; height: 400%;" />
    </div>

    <div bind:this={BlueSockDroppable}
    class="sockImage"
    style="
    left:{DraggableBlueSockX}px; 
    top:{DraggableBlueSockY}px; 
    width:{DraggableBlueSockWidth}px; 
    height:{DraggableBlueSockHeight}px;"
    use:asDroppable={{
      minX:0, 
      minY:0, 
      maxX:ArenaWidth-DraggableBlueSockWidth,
      maxY:ArenaHeight-DraggableBlueSockHeight,
      onDragStart:{x:DraggableBlueSockX,y:DraggableBlueSockY}, 
      onDragMove: onDragMoveBlue,
      Extras: BlueSockDroppable,
      Operations: 'copy', DataToOffer: { 'image/gif': 'Blue Sock' },
      onDropped
    }}>
        <img src={blueSock} alt="sock" style=" width: 200%; height: 400%;" />
    </div>

    <div bind:this={GreenSockDroppable}
    class="sockImage"
    style="
    left:{DraggableGreenSockX}px; 
    top:{DraggableGreenSockY}px; 
    width:{DraggableGreenSockWidth}px; 
    height:{DraggableGreenSockHeight}px;"
    use:asDroppable={{
      minX:0, 
      minY:0, 
      maxX:ArenaWidth-DraggableGreenSockWidth,
      maxY:ArenaHeight-DraggableGreenSockHeight,
      onDragStart:{x:DraggableGreenSockX,y:DraggableGreenSockY}, 
      onDragMove: onDragMoveGreen,
      Extras: GreenSockDroppable,
      Operations: 'copy', DataToOffer: { 'image/gif': 'Green Sock' },
      onDropped
    }}>
        <img src={greenSock} alt="sock" style=" width: 200%; height: 400%;" />
    </div>

    <div bind:this={YellowSockDroppable}
    class="sockImage"
    style="
    left:{DraggableYellowSockX}px; 
    top:{DraggableYellowSockY}px; 
    width:{DraggableYellowSockWidth}px; 
    height:{DraggableYellowSockHeight}px;"
    use:asDroppable={{
      minX:0, 
      minY:0, 
      maxX:ArenaWidth-DraggableYellowSockWidth,
      maxY:ArenaHeight-DraggableYellowSockHeight,
      onDragStart:{x:DraggableYellowSockX,y:DraggableYellowSockY}, 
      onDragMove: onDragMoveYellow,
      Extras: YellowSockDroppable,
      Operations: 'copy', DataToOffer: { 'image/gif': 'Yellow Sock' },
      onDropped
    }}>
        <img src={yellowSock} alt="sock" style=" width: 200%; height: 400%;" />
    </div>

  <div class="redDropZone"
   use:asDropZone={{
     Extras: RedSockDroppable,
     TypesToAccept: { 'image/gif': 'all' },
     onDrop,
  }}>Red Sock Zone</div>

  <div class="blueDropZone"
  use:asDropZone={{
    Extras: BlueSockDroppable, 
    TypesToAccept: { 'image/gif': 'all' }, 
    onDrop
  }}>Blue Sock Zone</div>

  <div class="greenDropZone"
  use:asDropZone={{
    Extras: GreenSockDroppable, 
    TypesToAccept: { 'image/gif': 'all' }, 
    onDrop
  }}>Green Sock Zone</div>

  <div class="yellowDropZone"
  use:asDropZone={{
    Extras: YellowSockDroppable, 
    TypesToAccept: { 'image/gif': 'all' }, 
    onDrop
  }}>Yellow Sock Zone</div>

  <button on:click={finishSorting}>Finish Game</button>
</div>
{/if}
</div>

<style>
  .lockerRoom {
    height: 100vh;
    width: 100%;
  }
  
  .sockImage {
    margin: 5px;
    cursor: move;
    display:block; 
    position:absolute;
  }
  
  .gameContainer {
    position: relative;
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border: 2px solid #ccc;
    border-radius: 8px;
    text-align: center;
    margin: 20px;
  }
  
  .redDropZone{
    position:absolute;
    left:240px; 
    top:20px; 
    width:140px; 
    height:50px;
    background:red; 
    color:white;
    line-height:50px; 
    text-align:center;
  }

  .blueDropZone{
    position:absolute;
    left:240px; 
    top:120px; 
    width:140px; 
    height:50px;
    background:blue; 
    color:white;
    line-height:50px; 
    text-align:center;
  }

  .greenDropZone{
    position:absolute;
    left:240px; 
    top:220px; 
    width:140px; 
    height:50px;
    background:green; 
    color:white;
    line-height:50px; 
    text-align:center;
  }

  .yellowDropZone{
    position:absolute;
    left:240px; 
    top:320px; 
    width:140px; 
    height:50px;
    background:yellow; 
    color:white;
    line-height:50px; 
    text-align:center;
  }
  
</style>
