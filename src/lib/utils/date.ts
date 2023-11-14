export function calcAge(date: Date) {
  const ageDifMs = Date.now() - date.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export function calcDuration(startDate: Date, endDate: Date = new Date()) {
  const months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
  const diff = months + endDate.getMonth() - startDate.getMonth();

  return {
    years: Math.floor(diff / 12),
    months: diff % 12,
  };
}
