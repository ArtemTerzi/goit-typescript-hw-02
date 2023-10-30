/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDays {
  MONDAY = 'Monday',
  TUESDAY = 'Tuesday',
  WEDNESDAY = 'Wednesday',
  THURSDAY = 'Thursday',
  FRIDAY = 'Friday',
  SATURDAY = 'Saturday',
  SUNDAY = 'Sunday',
}

/* ----------------------Default func type----------
function isWeekend(day: WeekDays): boolean {
  if (day === WeekDays.SATURDAY || WeekDays.SUNDAY) true;
  return false;
}
*/

// ---------------------Arrow func type---------------
const isWeekend = (day: WeekDays): boolean =>
  day === WeekDays.SATURDAY || day === WeekDays.SUNDAY;
