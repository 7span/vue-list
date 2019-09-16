export default {
  isDyanamic(str) {
    if (str.startsWith("<") && str.endsWith(">")) {
      return str.substring(1, str.length - 1);
    } else {
      return false;
    }
  }
};
