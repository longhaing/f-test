export const dateStringFormatter = (
  date: string,
  formatter: string = 'DD/MM/YYYY'
) => {
  if (!date) {
    return null;
  }
  const d = new Date(date).toLocaleDateString();
  return d;
};
