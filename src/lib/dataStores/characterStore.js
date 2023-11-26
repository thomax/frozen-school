// @ts-nocheck
import {get, writable} from 'svelte/store'

const defaultCharacter = {temperature: 100, health: 15, inventory: []}
const defaultFreezeRate = 1

let countdownInterval
let freezeRate = defaultFreezeRate

// On first load, get stored character from local storage
// if no stored character, use default
const localStorageCharacter = localStorage.character ? JSON.parse(localStorage.character) : undefined

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

// Call this to adjust the rate at which the character gets golder
// Can be used e.g. if the character enters a particulary warm of cold location
// multiplier > 1 for a quicker death
// multiplier < 1 for a slower death
export function changeFreezeRate(multiplier) {
  freezeRate = freezeRate * multiplier
}


// Count down temperature with freezeRate per 1000 ms
export function startTemperatureCountDown() {
  if (!countdownInterval) {
    countdownInterval = setInterval(() => {
      const {temperature} = get(character)
      const charUpdate = {temperature: temperature - freezeRate}
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
