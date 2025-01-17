import { Stat, StatName } from "../models"
import { cls, format } from "../utils"

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
      <div className="text-xl">{format(stat.modifier)}</div>
    </div>
  )
}

const SavingThrow = ({ stat }: { stat: Stat }) => {
  const classes = cls(
    "flex-auto",
    "text-xl",
    { "font-bold text-cyan-200": stat.proficient }
  )
  return (
    <div className={classes}>{format(stat.modifier)}</div>
  )
}

