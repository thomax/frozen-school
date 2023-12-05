<script>
   import {onMount} from 'svelte'
  import {goToLocation} from '../../dataStores/locationStore.js'
  export let location
  import bibliotekUrl from '../../../assets/aakonHO-IN/bibliotek.png'
  import bookUrl from '../../../assets/aakonHO-IN/book.png'
  let mainElement


  onMount(() => {
    mainElement.style.background = `url('${bibliotekUrl}')  no-repeat center center`
   mainElement.style.backgroundSize = 'cover'
  }) 

</script>
<h1>{location.title}</h1>
<button on:click={() => goToLocation('dh')}>Exit to hallway</button>

<div class = "libraryBox" bind:this={mainElement}>
 

  
  <img src={bookUrl} class= "book" on:click= {() => goToLocation('tl')} alt="book">

  
</div>


<style>
  .libraryBox {
    height: 1000px;
    width: auto;
  }
  h1{
    color: black;
    background-color: aqua;
  }
  div{
    position: relative;
    width: 80vh;
    height: 80vw;
  }
  .book{
    position: absolute; 
    width:100px;
    height: 70px;
    top: 60%; 
    left: 47%;
  }

</style>