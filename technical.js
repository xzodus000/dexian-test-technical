function isValidString(str) {
  const pattern = /^[a-z]+$/;
  return pattern.test(str);
}

function longestCommonPrefix(strs) {
  if (!strs || strs.length === 0 || strs.length > 200) {
    return "";
  }

  for (let str of strs) {
    if (str.length > 200 || !isValidString(str)) {
      return "";
    }
  }

  const firstStr = strs[0];
  const lastStr = strs[strs.length - 1];

  let commonPrefix = "";
  for (let i = 0; i < firstStr.length; i++) {
    if (i < lastStr.length && firstStr[i] === lastStr[i]) {
      commonPrefix += firstStr[i];
    } else {
      break;
    }
  }

  return commonPrefix;
}

const strs1 = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs1));

const strs2 = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs2));
