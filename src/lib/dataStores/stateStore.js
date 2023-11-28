// @ts-nocheck
import {get, writable} from 'svelte/store'
import { startTemperatureCountDown, stopTemperatureCountDown, updateCharacter } from './characterStore.js'

const defaultGameState =  {
  status: "welcome",
  beganAt: null,
  endedAt: null
}

// On first load, get stored gameState from local storage
const localStorageGameState = localStorage.gameState ? JSON.parse(localStorage.gameState) : defaultGameState


export const gameState = writable(localStorageGameState)

// If we're in the middle of a game, ensure countdown is running
if (get(gameState).status === 'gameRunning') {
  startTemperatureCountDown()
}

// Call this to trigger new status
export function setGameStatus(newStatus) {
  const currentGameState = get(gameState)
  currentGameState.status = newStatus
  if (newStatus === 'welcome') {
    stopTemperatureCountDown()
    currentGameState.beganAt = null
    currentGameState.endedAt = null
  }
  if (newStatus === 'gameRunning') {
    updateCharacter(null, true)
    startTemperatureCountDown()
    currentGameState.beganAt = new Date()
    currentGameState.endedAt = null
  }
  if (newStatus === 'gameOver') {
    stopTemperatureCountDown()
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

// Whenever gameState changes, write it to localStorage
gameState.subscribe((value) => {
  localStorage.gameState = JSON.stringify(value)
})
