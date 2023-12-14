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

<div class = "libraryBox" bind:this={mainElement}>
  <div class="readableText">{location.title}</div>
  
  <button on:click={() => goToLocation('hall')}>Exit to hallway</button>
  
  <div class="readableText"><p>You need to find paper to light the fireplace</p></div>
  
  
  <img src={bookUrl} class= "book" on:click= {() => goToLocation('tl')} alt="book">
  
  
</div>


<style>
  .libraryBox {
    height: 90vh;
    width: 70vw;
    margin: auto;
  }
  
  
  .book{
    position: absolute; 
    width:58px;
    height: 40px;
    top: 68.2%; 
    left: 47.9%;
  }
  h1{
    color:black;
    }
  
  
</style>