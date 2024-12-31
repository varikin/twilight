import { Stats } from "./components/stats"
import { Skills } from "./components/skills"
import { fetchCharacter } from "./api"
import "./App.css"

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
      <Stats stats={hero.stats} />
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





