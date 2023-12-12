<script>
    import {goToLocation} from '../../dataStores/locationStore.js'
    import {onMount} from 'svelte'
    import frozenWall from '../../../assets/ruimatsiur/frozenWall.jpg';
    import banana from '../../../assets/ruimatsiur/banana.png';

    export let location
    let mainElement

    onMount(() => {
        mainElement.style.background = `url('${frozenWall}')  no-repeat center center`
        mainElement.style.backgroundSize = 'cover'
    })

    function eatFood(){
        changeHealth(3)
    }
    
</script>
<div class = "apple" bind:this={mainElement}>
    <h1>{location.title}</h1>
    <div>apple</div>
  
      <img src="{banana}" class="banana" on:click={() => eatFood()}>  
    
    <button on:click={() => goToLocation('fi')}>Exit to fridge</button>
  
  </div>
