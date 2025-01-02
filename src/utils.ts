type ClassName = string | { [name: string]: boolean }

export function cls(...values: ClassName[]) {
  let result = ""
  for (let value of values) {
    if (typeof value === "string") {
      result && (result += " ")
      result += value
    } else {
      for (let [key, conditional] of Object.entries(value)) {
        if (conditional) {
          result && (result += " ")
          result += key
        }
      }
    }
  }
  return result
}

export function format(value: number): string {
  if (value > 0) {
    return "+" + value
  } else if (value < 0) {
    return "-" + value
  } else {
    return value.toString()
  }
}
