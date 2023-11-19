// @ts-nocheck
import {get, writable} from 'svelte/store'
const defaultCharacter = {temperature: 100, health: 15}
let countdownInterval

// On first load, get stored character from local storage
// if no stored character, use default
const localStorageCharacter = localStorage.character ? JSON.parse(localStorage.character) : defaultCharacter

export const character = writable(localStorageCharacter)


// Call this to update the character
export function updateCharacter(update, freshStart = false) {
  if (freshStart) {
    // Reset to default character, ignoring any update object
    character.set(Object.assign({}, defaultCharacter))
  } else {
    // Merge update object on top of existing character
    const updatedCharacter = Object.assign(get(character), update)
    character.set(updatedCharacter)
  }
}

// Count down temperature with 1 per 1000 ms
export function startTemperatureCountDown() {
  countdownInterval = setInterval(() => {
    const {temperature} = get(character)
    const charUpdate = {temperature: temperature - 1}
    updateCharacter(charUpdate)
  }, 1000)
}

// Stop countdown
export function stopTemperatureCountDown() {
  clearInterval(countdownInterval)
}

// Whenever character changes, write it to localStorage
character.subscribe((value) => {
  localStorage.character = JSON.stringify(value)
})
