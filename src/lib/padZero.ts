const padZero = (num: number, highest: number) => {
  const digits = Math.max(String(highest).length, 2);

  return String(num).padStart(digits, "0");
};

export default padZero;
