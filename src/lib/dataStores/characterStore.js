// @ts-nocheck
import {get, writable} from 'svelte/store'
import {gameState} from './stateStore'

const defaultCharacter = {temperature: 100, health: 100, inventory: []}
let countdownInterval
let localFreezeRate

// On first load, get stored character from local storage
const localStorageCharacter = localStorage.character ? JSON.parse(localStorage.character) : null
export const character = writable(localStorageCharacter)


// Call this to update the character
export function updateCharacter(update) {
  if (update) {
    // Merge update object on top of current character
    const currentCharacter = get(character)
    const updatedCharacter = Object.assign(currentCharacter, update)
    character.set(updatedCharacter)
  } else {
    // Reset to default character
    character.set(Object.assign({}, defaultCharacter))
  }
}

export function changeTemperature(fixedAmount) {
  const currentCharacter = get(character)
  const updatedCharacter = Object.assign(currentCharacter, {temperature: currentCharacter.temperature + fixedAmount})
  character.set(updatedCharacter)
}

// Count down temperature with freezeRate per 1000 ms
export function startTemperatureCountDown() {
  if (!countdownInterval) {
    countdownInterval = setInterval(() => {
      const {temperature} = get(character)
      const charUpdate = {temperature: temperature - localFreezeRate}
      updateCharacter(charUpdate)
    }, 1000)
  }
}

// Stop countdown
export function stopTemperatureCountDown() {
  if (countdownInterval) {
    clearInterval(countdownInterval)
    countdownInterval = null
  }
}

// Whenever character changes, write it to localStorage
character.subscribe((updatedCharacter) => {
  localStorage.character = JSON.stringify(updatedCharacter)
})

// Listen for changes in game state
gameState.subscribe((updatedGameState) => {
  localFreezeRate = updatedGameState.freezeRate
})

