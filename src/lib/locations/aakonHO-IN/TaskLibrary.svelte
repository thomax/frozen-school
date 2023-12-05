<script>
  import {onMount} from 'svelte'
  import {goToLocation} from '../../dataStores/locationStore.js'
  export let location
  import table from  '../../../assets/aakonHO-IN/tabel.jpg'
  import insideBook from '../../../assets/aakonHO-IN/insideBook.png'
  let mainElement
  let paper 

  function addPaper(){
    console.log('addPaper has been called')

  }

  onMount(() => {
    mainElement.style.background = `url('${table}')  no-repeat center center`
   mainElement.style.backgroundSize = 'cover'
   
  }) 
</script>
<div class = "tabel" bind:this={mainElement}>
<h1>{location.title}</h1>
  <button on:click={() => goToLocation('bi')}>Go back</button>



<img src ={insideBook} on:click={addPaper} class="insideBook" alt="insideBook">



  
</div>

<style>
  .tabel{
    height: 1000px;
    width: auto;
  }
  div{
    position: relative;
    width: 80vh;
    height: 80vw;
  }
  .insideBook{
    position: absolute; 
    width:500px;
    height: 300px;
    top: 25%; 
    left: 30%;
  }
</style>