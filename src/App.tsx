import { Stats } from "@/components/stats"
import { Skills } from "@/components/skills"
import { Attacks } from "@/components/attacks"
import { fetchCharacter } from "@/api"
import "@/App.css"

export default function App() {

  const hero = fetchCharacter("Hero Protagonist")

  return (
    <div className="max-w-md mx-auto flex flex-col gap-4">
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
        <HeroData name="temp hp" value="0" />
        <HeroData name="hit die" value="5d10" />
        <HeroData name="speed" value="30" />
      </div>
      <div className="flex flex-row">
        <HeroData name="initiative" value="3" />
        <HeroData name="proficiency bonus" value="+3" />
        <HeroData name="passive perception" value="+3" />
        <HeroData name="inspiration" value="-" />
      </div>
      <Stats stats={hero.stats} />
      <Attacks weapons={hero.weapons} />
      <Skills skills={hero.skills} />
    </div>
  )
}

type HeroProps = {
  name: string,
  value: string | number,
}

const HeroData = ({ name, value }: HeroProps) => {
  return (
    <div className="flex-auto text-center">
      <div className="text-xs uppercase">{name}</div>
      <div className="text-2xl">{value}</div>
    </div>
  )
}





