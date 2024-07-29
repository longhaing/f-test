export const dateStringFormatter = (date: string) => {
  if (!date) {
    return null;
  }

  return new Date(date).toLocaleDateString();
};
