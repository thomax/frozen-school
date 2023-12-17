// @ts-nocheck
import {get, writable} from 'svelte/store'
import { character, updateCharacter } from './characterStore.js'
import { goToLocation } from './locationStore.js'

const defaultFreezeRate = 1
const defaultStartLocation = 'fc307'
let countdownInterval


const defaultGameState =  {
  status: "welcome",
  secondsLasted: 0,
  freezeRate: defaultFreezeRate,
  beganAt: null,
  endedAt: null
}

// On first load, get stored gameState from local storage
const localStorageGameState = localStorage.gameState ? JSON.parse(localStorage.gameState) : defaultGameState
export const gameState = writable(localStorageGameState)

// If we're in the middle of a game, ensure countdown is running
if (get(gameState).status === 'gameRunning') {
  startTemperatureCountDown()
}

// Call this to trigger new status
export function setGameStatus(newStatus) {
  const currentGameState = get(gameState)
  currentGameState.status = newStatus
  stopTemperatureCountDown()
  if (newStatus === 'welcome') {
    currentGameState.beganAt = null
    currentGameState.endedAt = null
  }
  if (newStatus === 'gameRunning') {
    updateCharacter(null)
    currentGameState.freezeRate = defaultFreezeRate
    currentGameState.beganAt = new Date()
    currentGameState.endedAt = null
    currentGameState.secondsLasted = 0
    startTemperatureCountDown()
    goToLocation(defaultStartLocation)
  }
  if (newStatus === 'gameOver') {
    currentGameState.endedAt = new Date()
  }
  const updatedState = Object.assign({}, currentGameState)
  gameState.set(updatedState)
}

export function getGameDuration() {
  return get(gameState).secondsLasted
}

// Call this to adjust the rate at which the character gets golder
// Can be used e.g. if the character enters a particulary warm of cold location
// multiplier > 1 for a quicker death
// multiplier < 1 for a slower death
export function changeFreezeRate(multiplier) {
  const updatedState = Object.assign(get(gameState), {freezeRate: defaultFreezeRate * multiplier})
  gameState.set(updatedState)
}

// Count down temperature with freezeRate per 1000 ms
function startTemperatureCountDown() {
  if (!countdownInterval) {
    countdownInterval = setInterval(() => {
      // Update secondsLasted
      const currentGameState = get(gameState)
      const updatedGameState = Object.assign(currentGameState, {secondsLasted:       currentGameState.secondsLasted + 1})
      gameState.set(updatedGameState)

      // Update character
      const currentCharacter = get(character)
      const updatedCharacter = {temperature: currentCharacter.temperature - updatedGameState.freezeRate}
      updateCharacter(updatedCharacter)
    }, 1000)
  }
}

// Stop countdown
function stopTemperatureCountDown() {
  if (countdownInterval) {
    clearInterval(countdownInterval)
    countdownInterval = null
  }
}

// React to changes in character
character.subscribe((updatedCharacter) => {
    const {temperature, health} = updatedCharacter || {}
    if (temperature <= 0) {
      // End game if death by freezing
      setGameStatus('gameOver')
    }
    if (health <= 0) {
      // End game if death by damage
      setGameStatus('gameOver')
    }

})

// Whenever gameState changes, write it to localStorage
gameState.subscribe((updatedGameState) => {
  localStorage.gameState = JSON.stringify(updatedGameState)
})