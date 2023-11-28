// @ts-nocheck
import {get, writable} from 'svelte/store'
import { startTemperatureCountDown, stopTemperatureCountDown, updateCharacter } from './characterStore.js'

const defaultFreezeRate = 1

const defaultGameState =  {
  status: "welcome",
  freezeRate: defaultFreezeRate,
  beganAt: null,
  endedAt: null
}

// On first load, get stored gameState from local storage
const localStorageGameState = localStorage.gameState ? JSON.parse(localStorage.gameState) : defaultGameState
export const gameState = writable(localStorageGameState)

// If we're in the middle of a game, ensure countdown is running
if (get(gameState).status === 'gameRunning') {
  // use timeout to give characterStore time to initialize local vars
  setTimeout(startTemperatureCountDown, 1000)
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
    updateCharacter(null, true)
    currentGameState.freezeRate = defaultFreezeRate
    currentGameState.beganAt = new Date()
    currentGameState.endedAt = null
    startTemperatureCountDown()
  }
  if (newStatus === 'gameOver') {
    currentGameState.endedAt = new Date()
  }
  const updatedState = Object.assign({}, currentGameState)
  gameState.set(updatedState)
}

export function getGameDuration() {
  const tempState = get(gameState)
  const duration = new Date(tempState.endedAt).getTime() - new Date(tempState.beganAt).getTime()
  return Math.floor(duration/1000)
}

// Call this to adjust the rate at which the character gets golder
// Can be used e.g. if the character enters a particulary warm of cold location
// multiplier > 1 for a quicker death
// multiplier < 1 for a slower death
export function changeFreezeRate(multiplier) {
  const updatedState = Object.assign(get(gameState), {freezeRate: defaultFreezeRate * multiplier})
  gameState.set(updatedState)
}


// Whenever gameState changes, write it to localStorage
gameState.subscribe((value) => {
  localStorage.gameState = JSON.stringify(value)
})
