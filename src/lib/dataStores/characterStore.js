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

// Name the thing you want to add to inventory
export function addToInventory(item) {
  const currentCharacter = get(character)
  const {inventory} = currentCharacter
  const itemToAdd = item.trim().toLowerCase()
  if (inventory.includes(itemToAdd)) {
    return false
  }
  inventory.push(itemToAdd)
  const updatedCharacter = Object.assign(currentCharacter, {inventory})
  character.set(updatedCharacter)
  return true
}

// Name the thing you want to remove from inventory
export function removeFromInventory(item) {
  const currentCharacter = get(character)
  let {inventory} = currentCharacter
  const itemToRemove = item.trim().toLowerCase()
  if (inventory.includes(itemToRemove)) {
    inventory = inventory.filter(item => item !== itemToRemove)
    const updatedCharacter = Object.assign(currentCharacter, {inventory})
    character.set(updatedCharacter)
    return true
  }
  return false
}

// Does the inventory contain the thing you name
export function inventoryContains(item) {
  const currentCharacter = get(character)
  const {inventory} = currentCharacter
  const itemToCheck = item.trim().toLowerCase()
  return inventory.includes(itemToCheck)
}


// Whenever character changes, write it to localStorage
character.subscribe((updatedCharacter) => {
  localStorage.character = JSON.stringify(updatedCharacter)
})

