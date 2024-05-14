export const getCurrentDate = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  let month = currentDate.getMonth() + 1;
  month = month < 10 ? '0' + month : month; // 한 자리 숫자일 경우 앞에 0을 붙임
  let day = currentDate.getDate();
  day = day < 10 ? '0' + day : day; // 한 자리 숫자일 경우 앞에 0을 붙임
  return `${year}.${month}.${day}`;
};