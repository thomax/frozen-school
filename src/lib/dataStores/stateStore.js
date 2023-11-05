// @ts-nocheck
import {readable, writable} from 'svelte/store'

// On first load, get stored appState from local storage
const localStorageState = localStorage.appState || "welcome"

export const appState = writable(localStorageState)

// Call this to trigger new state
export function setState(newState) {
  appState.set(newState)
}

// Whenever appState changes, write it to localStorage
appState.subscribe((value) => {
  localStorage.appState = value
})
