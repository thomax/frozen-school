// @ts-nocheck
import {get, writable} from 'svelte/store'
import { startTemperatureCountDown, stopTemperatureCountDown,updateCharacter } from './characterStore.js'

const defaultGameState =  {
  status: "welcome",
  beganAt: null,
  endedAt: null
}

// On first load, get stored gameState from local storage
const localStorageGameState = localStorage.gameState ? JSON.parse(localStorage.gameState) : defaultGameState


export const gameState = writable(localStorageGameState)

// Call this to trigger new status
export function setGameStatus(newStatus) {
  let updatedState = get(gameState)
  updatedState.status = newStatus
  stopTemperatureCountDown()
  if (newStatus === 'gameRunning') {
    updateCharacter(null, true)
    startTemperatureCountDown()
    updatedState.beganAt = new Date()
    updatedState.endedAt = null
  }
  if (newStatus === 'gameOver') {
    updatedState.endedAt = new Date()
  }
  updatedState = Object.assign({}, updatedState)
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
