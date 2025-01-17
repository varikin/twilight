import { Skill, SkillName } from "../models"
import { cls, format } from "../utils"

export const Skills = ({ skills }: { skills: Record<SkillName, Skill> }) => {
  return (
    <>
    <div className="text-xs uppercase text-center">skills</div>
    <div className="grid grid-flow-col grid-cols-2 grid-rows-9">
      { Object.entries(skills).map(([name, skill]) => 
            <SkillComp key={name} name={name} skill={skill} />)
      }
  </div>
    </>
  )
}

const SkillComp = ({ name, skill }: { name: SkillName, skill: Skill }) => {
  const classes = cls({ "font-bold text-cyan-200": skill.proficient })
  return (
    <div key={name} className="flex flex-row gap-2 items-center">
      <div className={classes}>{name}</div>
      <div className={classes}>{format(skill.modifier)}</div>
      <div className="uppercase text-xs font-light text-slate-500">{skill.stat.substring(0, 3)}</div>
    </div>
  )
}
