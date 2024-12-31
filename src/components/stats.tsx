import { Stat, StatName } from "../models"
import { cls } from "../utils"

export const Stats = ({ stats }: { stats: Record<StatName, Stat> }) => {
  return (
    <>
      <div className="flex flex-row">
        {
          Object.entries(stats).map(([name, stat]) =>
            <StatItem key={name} name={name} stat={stat} />)
        }
      </div>
      <div className="flex flex-col">
        <div className="text-xs uppercase text-center">saving throw</div>
        <div className="flex flex-row text-center">
          {
            Object.entries(stats).map(([name, stat]) =>
              <SavingThrow key={name} stat={stat} />)
          }
        </div>
      </div>
    </>
  )
}

const StatItem = ({ name, stat }: { name: string, stat: Stat }) => {
  return (
    <div className="flex-auto text-center">
      <div className="text-xs uppercase">{name.substring(0, 3)}</div>
      <div className="text-2xl">{stat.value}</div>
      <div className="text-2xl">{stat.displayModifier}</div>
    </div>
  )
}

const SavingThrow = ({ stat }: { stat: Stat }) => {
  const classes = cls("flex-auto", "text-2xl", { "font-bold": stat.proficient })
  return (
    <div className={classes}>{stat.displayModifier}</div>
  )
}

