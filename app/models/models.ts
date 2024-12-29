export interface Character {
  name: string 
  species: string
  proficiency: number
  ac: number
  speed: number
  initiative: number
  strength: Stat
  dexterity: Stat
  constitution: Stat
  intelligence: Stat
  wisdom: Stat
  charisma: Stat
}

export interface Stat {
  value: number
  proficient: boolean
  modifier: number
}

export interface Skill {
  name: string
  proficient: boolean
  modifier: number
  stat: string
}
