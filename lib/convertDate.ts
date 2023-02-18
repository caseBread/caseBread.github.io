export const convertDate = (iso8601: string) => {
  const d = new Date(iso8601);
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();
  return `${year}.${month}.${day}`;
};
