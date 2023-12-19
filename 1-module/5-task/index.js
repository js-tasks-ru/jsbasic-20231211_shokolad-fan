function truncate(str = '', maxlength = 20) {
  if (str.length <= maxlength) {
    return str;
  } else {
    return str.slice(0, maxlength - 1) + '…';
  }
}
