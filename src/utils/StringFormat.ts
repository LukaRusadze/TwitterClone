export function formatDate(date: Date) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  return `${months[month]} ${day}, ${year}`;
}
