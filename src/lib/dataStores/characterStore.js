// @ts-nocheck
import {get, writable} from 'svelte/store'

const defaultCharacter = {temperature: 100, health: 100, inventory: []}

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

export function changeHealth(fixedAmount) {
  const currentCharacter = get(character)
  const updatedCharacter = Object.assign(currentCharacter, {health: currentCharacter.health + fixedAmount})
  character.set(updatedCharacter)
}


// Whenever character changes, write it to localStorage
character.subscribe((updatedCharacter) => {
  localStorage.character = JSON.stringify(updatedCharacter)
})

