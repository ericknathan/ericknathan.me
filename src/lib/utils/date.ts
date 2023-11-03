export function calcAge(date: Date) {
  const ageDifMs = Date.now() - date.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}