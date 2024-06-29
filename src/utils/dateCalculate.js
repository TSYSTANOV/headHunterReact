export const dateCalculate = (date, period) => {
  const dateVacancy = new Date(date);
  const dateNow = new Date();
  dateNow.setDate(dateNow.getDate() - period);
  return dateVacancy > dateNow;
};
