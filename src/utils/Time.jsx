const today = new Date()
const dd = String(today.getDate()).padStart(2, "0")
const mm = String(today.getMonth() + 1).padStart(2, "0")
const yyyy = today.getFullYear()
export const currentDate = `${yyyy}${mm}${dd}`

export const getMonth = (mm) => {
  switch (mm) {
    case "01":
      return "JANUARY"
    case "02":
      return "FEBRUARY"
    case "03":
      return "MARCH"
    case "04":
      return "APRIL"
    case "05":
      return "MAY"
    case "06":
      return "JUNE"
    case "07":
      return "JULY"
    case "08":
      return "AUGUST"
    case "09":
      return "SEPTEMBER"
    case "10":
      return "OCTOBER"
    case "11":
      return "NOVEMBER"
    case "12":
      return "DECEMBER"
    default:
      break
  }
}
