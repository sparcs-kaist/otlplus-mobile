export const semesterToString = (semester) => {
  if (typeof semester !== 'number' || semester < 1 || semester > 4) return null;
  const arr = ['봄', '여름', '가을', '겨울'];
  return arr[parseInt(semester, 10) - 1];
};
