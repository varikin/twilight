import { Skill, SkillName } from "../models"

export const Skills = ({ skills }: { skills: Record<SkillName, Skill> }) => {
    return (
        <>
        
        <div className="text-xs uppercase text-center">skills</div>
        <div className="grid grid-flow-col grid-cols-2 grid-rows-9">
            {
                Object.entries(skills).map(([name, skill]) =>
                    <div key={name} className="flex flex-row gap-2 items-center">
                        <input type="checkbox" checked={skill.proficient} />
                        <div className="">{name}</div>
                        <div className="">{skill.displayModifier}</div>
                        <div className="uppercase text-xs font-light text-slate-500">{skill.stat.substring(0, 3)}</div>
                    </div>
                )
            }
        </div>
        </>
    )
}