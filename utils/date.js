var monthNames =
  [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]

export const getMonthYear = function (date) {
  return `${monthNames[date.getMonth()]} ${date.getFullYear()}`
}
