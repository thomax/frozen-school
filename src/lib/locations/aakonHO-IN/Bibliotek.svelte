<script>
   import {onMount} from 'svelte'
  import {goToLocation} from '../../dataStores/locationStore.js'
  export let location
  import bibliotekUrl from '../../../assets/aakonHO-IN/bibliotek.png'
  import bookUrl from '../../../assets/aakonHO-IN/book.png'
  const externalSiteUrl = 'https://portal.skoleplattform.no/verktoy-v/';
  let mainElement
  let book


  onMount(() => {
    mainElement.style.background = `url('${bibliotekUrl}')  no-repeat center center fixed`
    mainElement.style.backgroundSize = 'cover'
  })

  function handleViewToggle() {
    book = true;
  }
  
</script>

<div class="libraryBox" bind:this={mainElement}>
<h1>{location.title}</h1>
<button on:click={() => goToLocation('dh')}>Exit to hallway</button>

<a href={externalSiteUrl} target="_blank">
  <img src={bookUrl} alt="book" width=100 height=70 on:click={handleViewToggle} style="position: absolute; top: 50%; left: 50%;" >
</a>
</div>


<style>
  .libraryBox {
    height: 90vh;
    width: auto;
    }
  h1{
color:black;
background-color: aqua;
}

</style>