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
  constructor(
    public readonly value: number,
    public readonly proficient: boolean,
    public readonly modifier: number,
  ) {}
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
  constructor (
    public readonly modifier: number,
    public readonly proficient: boolean,
    public readonly stat: string
  ) {}
}

export class Weapon {
  constructor (
    public readonly name: string,
    public readonly attackBonus: number,
    public readonly damage: string,
    public readonly damageType: string,
    public readonly range?: string,
    public readonly notes?: string,
  ) {}
}

export type ActionType = "Action" | "Reaction" | "Bonus Action" | "Instant" | "Other"
export type SpellComponent = "Verbal" | "Somatic" | "Material"
  

export class Spell {
  constructor (
    public readonly name: string,
    public readonly level: number,
    public readonly castingTime: ActionType,
    public readonly duration: string,
    public readonly range: string,
    public readonly components: SpellComponent[],
    public readonly school: string,
    public readonly save: StatName,
    public readonly description: string
  ){}
}


export class Spellcasting {
  constructor (
    public readonly ability: StatName,
    public readonly saveDc: number,
    public readonly attackBonus: number,
    public readonly slots: Record<number, number>,
    public readonly spells: Spell[]
  ) {}
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
    public readonly skills: Record<SkillName, Skill>,
    public readonly weapons: Weapon[],
    public readonly spellcasting: Spellcasting
  ) {}
}
