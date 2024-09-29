// export default function getFromatteddate(date) {
//   return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
// }

export default function getFormattedDate(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Add 1 to get correct month number and pad with 0
  const day = date.getDate().toString().padStart(2, "0"); // Pad day with 0 if needed

  return `${year}-${month}-${day}`;
}

export function getDateMinusDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
