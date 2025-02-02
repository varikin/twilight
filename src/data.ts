import { Character, Stat, Skill, Weapon } from "@/models";

const proficiency = 2
const ac = 18
const speed = 30
const initiative = 2
export let hero = new Character(
  "Hero Protagonist",
  "human",
  proficiency,
  ac,
  speed,
  initiative,
  {
    Strength: new Stat(18, true, 4),
    Dexterity: new Stat(15, true, 2),
    Constitution: new Stat(15, false, 2),
    Intelligence: new Stat(11, false, 0),
    Wisdom: new Stat(14, false, 2),
    Charisma: new Stat(12, false, 1)
  },
  {
    Acrobatics: new Skill(2, false, "Dexterity"),
    AnimalHandling: new Skill(2, false, "Wisdom"),
    Arcana: new Skill(2, false, "Intelligence"),
    Athletics: new Skill(4, true, "Strength"),
    Deception: new Skill(2, false, "Charisma"),
    History: new Skill(2, false, "Intelligence"),
    Insight: new Skill(2, false, "Wisdom"),
    Intimidation: new Skill(2, false, "Charisma"),
    Investigation: new Skill(2, false, "Intelligence"),
    Medicine: new Skill(2, false, "Wisdom"),
    Nature: new Skill(2, false, "Intelligence"),
    Perception: new Skill(2, false, "Wisdom"),
    Performance: new Skill(2, false, "Charisma"),
    Persuasion: new Skill(2, false, "Charisma"),
    Religion: new Skill(2, false, "Intelligence"),
    SleightOfHand: new Skill(2, false, "Dexterity"),
    Stealth: new Skill(2, false, "Dexterity"),
    Survival: new Skill(2, false, "Wisdom")
  },
  [
    new Weapon("longsword", 4, "1d8+4", "slashing", null, null),
    new Weapon("dagger", 4, "1d8+4", "peircing", "30/60", "light")
  ]
)
