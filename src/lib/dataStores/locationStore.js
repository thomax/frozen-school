// @ts-nocheck
import {writable} from 'svelte/store'

// On first load, get stored location from local storage
const localStorageCurrentLocation = localStorage.currentLocation

export let currentLocation = writable(localStorageCurrentLocation)

// Call this to trigger navigation to a new location
export function goToLocation(nexLocationId) {
  currentLocation.set(nexLocationId)
}

// Whenever currentLocation changes, write it to localStorage
currentLocation.subscribe((value) => {
  localStorage.currentLocation = value
})
