const time_convert = (num) => {
  var hours = Math.floor(num / 60);
  var minutes = num % 60;
  return hours + ":" + minutes;
};
export const RunTime = ({ runtime }) => {
  return <>{time_convert(runtime)}</>;
};
