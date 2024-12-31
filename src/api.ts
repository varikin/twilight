import { Character } from "./models"
import { hero } from "./data"

export function fetchCharacter(name: string): Character {
  if (hero.name === name) {
    return hero
  }

  throw new Error(`Character ${name}`)
}
