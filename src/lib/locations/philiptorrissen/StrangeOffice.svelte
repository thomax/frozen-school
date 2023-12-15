<script>
  import {goToLocation} from '../../dataStores/locationStore.js'
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
  import background from '../../../assets/philiptorrissen/Background.jpg'
  import {onMount} from 'svelte'
  import {character, changeTemperature, changeHealth} from '../../dataStores/characterStore.js'
  import GameOver from './gameOver.svelte'

  export let location
  let maxAttempts = 10
  let guess = ''
  let wordList = [
    'ices',
    'snow'
    // ... (remaining words)
  ]
  let attemptsLeft = maxAttempts
  let word = getRandomWord()
  let displayWord = Array.from(word).fill('_')
  let guessedLetters = []
  let incorrectGuesses = []

  function handleChangeTemperature(amount) {
    changeTemperature(amount)
  }

  function showGameOverScreen() {
    // Render the game over screen when the game ends
    import('./gameOver.svelte').then(({default: GameOver}) => {
      const gameContainer = document.querySelector('.game-container')
      gameContainer.innerHTML = ''
      new GameOver({
        target: gameContainer
      })
    })
  }

  function handleChangeHealth(amount) {
    changeHealth(amount)
  }

  function getRandomWord() {
    return wordList[Math.floor(Math.random() * wordList.length)]
  }

  function hint() {
    alert(word)
  }

  function makeGuess() {
    if (guess.length !== 1 || !/[a-zA-Z]/.test(guess)) {
      alert('Please enter a valid single letter guess.')
      return
    }

    if (guessedLetters.includes(guess)) {
      alert('You already guessed this letter.')
      return
    }

    guessedLetters.push(guess)

    if (word.includes(guess)) {
      word.split('').forEach((letter, index) => {
        if (letter === guess) {
          displayWord[index] = guess
        }
      })

      if (!displayWord.includes('_')) {
        handleChangeTemperature(40)
        alert('Congratulations! You guessed the word.')
        // Reset the guess variable to an empty string
        guess = ''
        return
      }
    } else {
      attemptsLeft--
      incorrectGuesses.push(guess)
      console.log('Incorrect guesses:', incorrectGuesses)
      incorrectGuesses = [...incorrectGuesses]

      if (attemptsLeft === 0) {
        alert(`Sorry, you ran out of attempts. The correct word was "${word}".`)
        showGameOverScreen()
        handleChangeHealth(-50)
        // Reset the guess variable to an empty string
        guess = ''
        return
      }
    }
    // Reset the guess variable to an empty string
    guess = ''
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      makeGuess()
    }
  }

  onMount(() => {
    const mainElement = document.querySelector('.background-image')[0]
    if (mainElement) {
      mainElement.style.background = `url('${background}') no-repeat center center`
      mainElement.style.backgroundPosition = 'top 100px'
      mainElement.style.backgroundSize = 'cover'
    }
  })
</script>

<div class="game-container">
  <div class="background-image">
    <h1>{location.title}</h1>
    {#if attemptsLeft === 10}
      <img class="hangman" src={costume1} alt="Attempt 10" />
    {:else if attemptsLeft === 9}
      <img class="hangman" src={costume2} alt="Attempt 9" />
    {:else if attemptsLeft === 8}
      <img class="hangman" src={costume3} alt="Attempt 8" />
    {:else if attemptsLeft === 7}
      <img class="hangman" src={costume4} alt="Attempt 7" />
    {:else if attemptsLeft === 6}
      <img class="hangman" src={costume5} alt="Attempt 6" />
    {:else if attemptsLeft === 5}
      <img class="hangman" src={costume6} alt="Attempt 5" />
    {:else if attemptsLeft === 4}
      <img class="hangman" src={costume7} alt="Attempt 4" />
    {:else if attemptsLeft === 3}
      <img class="hangman" src={costume8} alt="Attempt 3" />
    {:else if attemptsLeft === 2}
      <img class="hangman" src={costume9} alt="Attempt 2" />
    {:else if attemptsLeft === 1}
      <img class="hangman" src={costume10} alt="Attempt 1" />
    {/if}

    <p>Attempts left: {attemptsLeft}</p>
    <p>{displayWord.join(' ')}</p>
    <p>Incorrect guesses: {guessedLetters.join(', ')}</p>
    <div><input type="text" bind:value={guess} placeholder="Guess the letter" /></div>
    <button on:click={() => makeGuess()}>Make Guess</button>
    <button on:click={() => hint()}>?</button>
    <button on:click={() => goToLocation('dh')}>Exit to hallway</button>
  </div>
</div>

<style>
  .hangman {
    max-width: 100px;
    top: 200px;
    left: 50%;
    transform: translateX(30%);
    transform: translateY(30%);
  }

  .game-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: transparent;
    color: white;
  }

  .hangman {
    max-width: 100px;
    height: auto;
    margin: 10px 0;
  }

  h1 {
    font-size: 2em;
    margin-bottom: 20px;
  }

  p {
    margin: 10px 0;
    background-color: rgba(255, 255, 255, 1);
    color: black;
    padding: 5px;
    border-radius: 5px;
  }

  input {
    margin-top: 10px;
    padding: 5px;
    border: 1px solid white;
    border-radius: 5px;
  }

  .button-container {
    display: flex;
    margin-top: 10px;
  }

  button {
    cursor: pointer;
    padding: 5px 10px;
    margin-right: 10px;
    background-color: rgba(255, 255, 255, 0.9); /* Adjusted opacity */
    border: 1px solid white;
    border-radius: 5px;
    color: black; /* Change text color for better contrast */
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: rgba(255, 255, 255, 1); /* Fully opaque white background on hover */
  }

  button.invisible {
    background-color: rgba(255, 255, 255, 0.1); /* Fully opaque white background on hover */
    color: rgba(255, 255, 255, 0.1);
    border: 0px solid white;
  }

  .incorrect-guesses {
    margin-top: 10px;
  }
</style>
