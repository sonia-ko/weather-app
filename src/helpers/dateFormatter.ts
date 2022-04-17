function _formatDatetime(date: Date, format: string) {
  const _padStart = (value: number): string =>
    value.toString().padStart(2, "0");
  return format
    .replace(/yyyy/g, _padStart(date.getFullYear()))
    .replace(/dd/g, _padStart(date.getDate()))
    .replace(/mm/g, _padStart(date.getMonth() + 1))
    .replace(/hh/g, _padStart(date.getHours()))
    .replace(/ii/g, _padStart(date.getMinutes()))
    .replace(/ss/g, _padStart(date.getSeconds()));
}
function isValidDate(d: Date): boolean {
  return !isNaN(d.getTime());
}
export default function formatDate(date: any): string {
  // var datetime = new Date(date);
  return isValidDate(date) ? _formatDatetime(date, "yyyy-mm-dd hh:ii") : "";
}
