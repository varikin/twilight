import { Weapon } from "../models"

export const Attacks = ({ weapons }: {weapons: Weapon[]}) => {
  const thClasses = "px-2 text-xs uppercase text-left border-b border-slate-300"
  return (
    <>
      <div className="text-sm uppercase text-center">attacks</div>
      <table className="table-auto">
        <thead>
          <tr>
            <th className={thClasses}>name</th>
            <th className={thClasses}>atk bonus</th> 
            <th className={thClasses}>damage</th>
            <th className={thClasses}>type</th>
            <th className={thClasses}>notes</th>
            <th className={thClasses}>range</th>
          </tr>
        </thead>
        <tbody>
          { weapons.map((weapon) => <Attack key={weapon.name} weapon={weapon} />) }
        </tbody>
      </table>
    </>
  )
}

const Attack = ({weapon}: {weapon: Weapon}) => {
  const classes = "px-2 pt-2 capitalize border-b border-slate-700"
  const attackBonusClasses = classes + " pr-2 text-right"
  return (
    <tr>
      <td className={classes}>{weapon.name}</td>
      <td className={attackBonusClasses}>+{weapon.attackBonus}</td>
      <td className={classes}>{weapon.damage}</td>
      <td className={classes}>{weapon.damageType}</td>
      <td className={classes}>{weapon.notes}</td>
      <td className={classes}>{weapon.range}</td>
    </tr>
  )
}
