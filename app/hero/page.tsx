import { Character, Stat } from "../models/models"
import hero from "../models/hero.json"

export default function Home() {
  
  return (
    <div className="mx-2">
      <header className="mb-2">
        <span className="text-2xl">{hero.name}</span>
        <span className="ml-2">Level 1</span>
      </header>
      <div className="flex flex-row mb-2">
        <HeroData name="HP" value={hero.ac} />
        <HeroData name="AC" value={hero.ac} />
        <HeroData name="Init" value={hero.initiative} />
        <HeroData name="Prof" value={hero.proficiency} />
        <HeroData name="Speed" value={hero.speed} />
      </div>
      <div className="flex flex-row gap-1 divide-x divide-sky-500">
        <StatItem name="str" stat={hero.strength} />
        <StatItem name="dex" stat={hero.dexterity} />
        <StatItem name="con" stat={hero.constitution} />
        <StatItem name="wis" stat={hero.wisdom} />
        <StatItem name="int" stat={hero.intelligence} />
        <StatItem name="cha" stat={hero.charisma} />
      </div>
    </div>
  )
}

type HeroProps = {
  name: string,
  value: number
}

const HeroData = ({name, value}: HeroProps) => {
  return (
    <div className="basis-1/5 text-center">
      <div>{name}</div>
      <div>{value}</div>
    </div>
  )
}

type StatProps = {
  name: string,
  stat: Stat
}

const StatItem = ({name, stat}: StatProps) => {
  const sign = stat.modifier >= 0 ? "+" : "-"
  return (
    <div className="basis-1/6 text-center">
      <div className="capitalize text-lg">{name}</div>
      <div className="flex flex-row gap-1 divide-x mx-auto">
        <div className="basis-1/3">{stat.value}</div>
        <div className="basis-1/3">{sign}{stat.modifier}</div>
        <div className="basis-1/3">{stat.modifier}</div>
      </div>
    </div>
  )
}