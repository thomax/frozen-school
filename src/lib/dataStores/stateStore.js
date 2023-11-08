// @ts-nocheck
import {writable} from 'svelte/store'
import { startTemperatureCountDown, stopTemperatureCountDown,updateCharacter } from './characterStore.js'

// On first load, get stored gameState from local storage
const localStorageState = localStorage.gameState || "welcome"

export const gameState = writable(localStorageState)

// Call this to trigger new state
export function setGameState(newState) {
  stopTemperatureCountDown()
  if (newState === 'gameRunning') {
    updateCharacter(null, true)
    startTemperatureCountDown()
  }
  gameState.set(newState)
}

// Whenever gameState changes, write it to localStorage
gameState.subscribe((value) => {
  localStorage.gameState = value
})
