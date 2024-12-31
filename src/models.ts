export const StatNames = [
  "Strength",
  "Dexetrity",
  "Constitution",
  "Intelligence",
  "Wisdom",
  "Charisma"
]
export type StatName = typeof StatNames[number]

export class Stat {
  displayModifier: string
  constructor(
    public readonly value: number,
    public readonly proficient: boolean,
    public readonly modifier: number,
  ) {
    this.displayModifier = getModifierDisplay(modifier)
  }
}

export const SkillNames = [
  "Acrobatics",
  "AnimalHandling",
  "Arcana",
  "Athletics",
  "Deception",
  "History",
  "Insight",
  "Intimidation",
  "Investigation",
  "Medicine",
  "Nature",
  "Perception",
  "Performance",
  "Persuasion",
  "Religion",
  "SleightOfHand",
  "Stealth",
  "Survival"
] as const
export type SkillName = typeof SkillNames[number]

export class Skill {
  displayModifier: string
  constructor (
    public readonly modifier: number,
    public readonly proficient: boolean,
    public readonly stat: string
  ) {
    this.displayModifier = getModifierDisplay(modifier)
  }
}

export class Character {
  constructor (
    public readonly name: string,
    public readonly species: string,
    public readonly proficiency: number,
    public readonly ac: number,
    public readonly speed: number,
    public readonly initiative: number,
    public readonly stats: Record<StatName, Stat>,
    public readonly skills: Record<SkillName, Skill>
  ) {}
}

function getModifierDisplay(modifier: number): string {
  if (modifier > 0) {
    return  "+" + modifier
  } else if (modifier < 0) {
    return "-" + modifier
  } else {
    return modifier.toString()
  }
}
