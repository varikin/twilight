import { Character, Stat } from "@/models"
import { hero } from "@/data"

export default function Home() {
  
  return (
    <div className="flex flex-col gap-4">
      <header>
        <div className="text-4xl">{hero.name}</div>
        <div className="flex flex-row gap-2 items-baseline">
          <div className="text-lg">Human</div>
          <div className="text-lg">Figher</div>
          <div className="text-xs uppercase">lvl 5</div>
        </div>
      </header>
      <div className="flex flex-row">
        <HeroData name="ac" value={hero.ac} />
        <HeroData name="hp" value="57/57" />
        <HeroData name="temp xp" value="0" />
        <HeroData name="hit die" value="5d10" />
        <HeroData name="speed" value="30" />
      </div>
      <div className="flex flex-row">
        <div className="flex flex-row flex-auto gap-2 items-center">
          <div className="text-xs uppercase">initiative</div>
          <div className="text-2xl">3</div>
        </div>
        <div className="flex flex-row flex-auto gap-2 items-center">
          <div className="text-xs uppercase">proficiency bonus</div>
          <div className="text-2xl">+3</div>
        </div>
        <div className="flex flex-row flex-auto gap-2 items-center">
          <div className="text-xs uppercase">inspiration</div>
          <input type="checkbox" />
        </div>
      </div>
      <Stats character={hero} />
    </div>
  )
}

type HeroProps = {
  name: string,
  value: string,
}

const HeroData = ({name, value}: HeroProps) => {
  return (
    <div className="flex-auto text-center">
      <div className="text-xs uppercase">{name}</div>
      <div className="text-2xl">{value}</div>
    </div>
  )
}

function prettyModifier(stat: Stat): string {
  let sign = ""
  if (stat.modifier > 0) {
    sign = "+"
  } else if (stat.modifier < 0) {
    sign = "-"
  }
  return sign + stat.modifier
}

type StatProps = {
  name: string,
  stat: Stat,
}

const StatItem = ({name, stat}: StatProps) => {
  return (
    <div className="flex-auto text-center">
      <div className="text-xs uppercase">{name}</div>
      <div className="text-2xl">{stat.value}</div>
      <div className="text-lg">{prettyModifier(stat)}</div>
    </div>
  )
}

const SavingThrow = ({stat}: Stat) => {
  const display = stat.proficient ? "font-bold" : ""

  return (
    <div className="flex-auto text-2xl {display}">{prettyModifier(stat)}</div>
  )
}

const Stats = ({character}: Character) => {
  return (
    <div>
      <div className="flex flex-row">
        <StatItem name="str" stat={character.strength} />
        <StatItem name="dex" stat={character.dexterity} />
        <StatItem name="con" stat={character.constitution} />
        <StatItem name="wis" stat={character.wisdom} />
        <StatItem name="int" stat={character.intelligence} />
        <StatItem name="cha" stat={character.charisma} />
      </div>
      <div className="flex flex-col">
        <div className="text-xs uppercase text-center">saving throw</div>
        <div className="flex flex-row text-center">
          <SavingThrow stat={character.strength} />
          <SavingThrow stat={character.dexterity} />
          <SavingThrow stat={character.constitution} />
          <SavingThrow stat={character.wisdom} />
          <SavingThrow stat={character.intelligence} />
          <SavingThrow stat={character.charisma} />
        </div>
      </div>
    </div>
  )
}
