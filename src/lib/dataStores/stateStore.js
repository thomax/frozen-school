// @ts-nocheck
import {writable} from 'svelte/store'
import { startTemperatureCountDown, stopTemperatureCountDown,updateCharacter } from './characterStore.js'

// On first load, get stored gameState from local storage
const localStorageState = localStorage.gameState || "welcome"

// For keeping track of how long the game lasts
let gameBeganAt
let gameEndedAt

export const gameState = writable(localStorageState)

// Call this to trigger new state
export function setGameState(newState) {
  stopTemperatureCountDown()
  if (newState === 'gameRunning') {
    updateCharacter(null, true)
    startTemperatureCountDown()
    gameBeganAt = new Date()
    gameEndedAt = null
  }
  if (newState === 'gameOver') {
    gameEndedAt = new Date()
  }
  gameState.set(newState)
}

export function getGameDuration() {
  const duration = gameEndedAt.getTime() - gameBeganAt.getTime()
  return Math.floor(duration/1000)
}

// Whenever gameState changes, write it to localStorage
gameState.subscribe((value) => {
  localStorage.gameState = value
})
