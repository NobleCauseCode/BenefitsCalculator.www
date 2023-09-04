export const formatDate = (date: Date) => {
  const formattedDate = new Date(date);
  const options = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' } as const;
  return formattedDate.toLocaleDateString('en-US', options);
};

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
