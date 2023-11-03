// @ts-nocheck
import {writable} from 'svelte/store'

// Get last seen appMode from local storage on load
const localStorageMode = localStorage.appMode || "welcome"

// Used by App.svelte
export const appMode = writable(localStorageMode)

// Whenever appMode changes, write it to localStorage
appMode.subscribe((value) => {
  localStorage.appMode = value
})
