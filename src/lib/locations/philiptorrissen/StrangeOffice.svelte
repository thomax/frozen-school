<script>
  import { goToLocation } from '../../dataStores/locationStore.js'
  import costume1 from '../../../assets/philiptorrissen/costume1.png'
  import costume2 from '../../../assets/philiptorrissen/costume2.png'
  import costume3 from '../../../assets/philiptorrissen/costume3.png'
  import costume4 from '../../../assets/philiptorrissen/costume4.png'
  import costume5 from '../../../assets/philiptorrissen/costume5.png'
  import costume6 from '../../../assets/philiptorrissen/costume6.png'
  import costume7 from '../../../assets/philiptorrissen/costume7.png'
  import costume8 from '../../../assets/philiptorrissen/costume8.png'
  import costume9 from '../../../assets/philiptorrissen/costume9.png'
  import costume10 from '../../../assets/philiptorrissen/costume10.png'
  import background from '../../../assets/philiptorrissen/background.jpg'
  import { onMount } from 'svelte'

  export let location
  let maxAttempts = 10
  let guess = ''
  let wordList = ['skole', 'kaldt', 'varmt']
  let attemptsLeft = maxAttempts
  let word = getRandomWord()
  let displayWord = Array.from(word).fill('_')
  let guessedLetters = []

  function getRandomWord() {
    return wordList[Math.floor(Math.random() * wordList.length)]
  }

  function hint() {
    alert(word)
  }

  function makeGuess() {
  }

  function resetGame() {

  }

  onMount(() => {
  const mainElement = document.querySelector('.background-image')
  if (mainElement) {
    mainElement.style.background = `url('${background}') no-repeat center center`
    mainElement.style.backgroundSize = 'cover'
    mainElement.style.backgroundPosition = 'top 100px';
    mainElement.style.backgroundSize = 'contain';
  }
})

</script>

<div class="game-container">
  <div class="background-image">
    <h1>{location.title}</h1>
    {#if attemptsLeft === 10}
      <img class="hangman" src={costume1} alt="Image for Attempt 10">
    {:else if attemptsLeft === 9}
      <img class="hangman" src={costume2} alt="Image for Attempt 9">
    {:else if attemptsLeft === 8}
      <img class="hangman" src={costume3} alt="Image for Attempt 8">
    {:else if attemptsLeft === 7}
      <img class="hangman" src={costume4} alt="Image for Attempt 7">
    {:else if attemptsLeft === 6}
      <img class="hangman" src={costume5} alt="Image for Attempt 6">
    {:else if attemptsLeft === 5}
      <img class="hangman" src={costume6} alt="Image for Attempt 5">
    {:else if attemptsLeft === 4}
      <img class="hangman" src={costume7} alt="Image for Attempt 4">
    {:else if attemptsLeft === 3}
      <img class="hangman" src={costume8} alt="Image for Attempt 3">
    {:else if attemptsLeft === 2}
      <img class="hangman" src={costume9} alt="Image for Attempt 2">
    {:else if attemptsLeft === 1}
      <img class="hangman" src={costume10} alt="Image for Attempt 1">
    {/if}

    <p>Attempts left: {attemptsLeft}</p>
    <p>{displayWord.join(' ')}</p>
    <p>Incorrect guesses: {guessedLetters.join(', ')}</p>
    <div><input type="text" bind:value={guess} placeholder="Guess the letter"></div>
    <button on:click={() => makeGuess()}>Make Guess</button>
    <button on:click={() => hint()}>?</button>
    <button on:click={() => goToLocation('dh')}>Exit to hallway</button>
  </div>
</div>

<style>
  .hangman{
    max-width: 100px;
    top: 200px;
    left: 50%; 
    transform: translateX(30%); 
    transform: translateY(30%);
  }
</style>
