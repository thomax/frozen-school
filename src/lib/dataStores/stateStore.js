// @ts-nocheck
import {writable} from 'svelte/store'
import { startTemperatureCountDown, stopTemperatureCountDown,updateCharacter } from './characterStore.js'

// On first load, get stored appState from local storage
const localStorageState = localStorage.appState || "welcome"

export const appState = writable(localStorageState)

// Call this to trigger new state
export function setState(newState) {
  stopTemperatureCountDown()
  if (newState === 'gameRunning') {
    updateCharacter(null, true)
    startTemperatureCountDown()
  }
  appState.set(newState)
}

// Whenever appState changes, write it to localStorage
appState.subscribe((value) => {
  localStorage.appState = value
})
