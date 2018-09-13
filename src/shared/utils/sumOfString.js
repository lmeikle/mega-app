export default function sumOfString(s) {
  let validRegex = /^[\d,-]+$/;

  if (s === '' || s === null || s === undefined || !validRegex.test(s)) {
    return 0;
  }

  return s.split(',').reduce((acc, val) => {
    return parseInt(acc) + parseInt(val);
  }, 0);
}
