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
  <h1 class="title">{location.title}</h1>
  <button on:click={() => goToLocation('dh')}>Exit to hallway</button>
  
  <h1>Fort!, du trenger papir til å kunne tenne på peisen.</h1>
  
  
  <img src={bookUrl} class= "book" on:click= {() => goToLocation('tl')} alt="book">
  
  
</div>


<style>
  .libraryBox {
    height: 1000px;
    width: auto;
  }
  .title{
    color: red;
    background-color:black ;
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
  h1{
    color:red;
    background-color: blue;
  }
  
</style>