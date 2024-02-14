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

  // Sort the strings to bring the potential common prefix to the beginning
  strs.sort();

  // Take the first and last strings after sorting
  const firstStr = strs[0];
  const lastStr = strs[strs.length - 1];

  // Compare the characters of the first and last strings
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

// Example usage:
const strs1 = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs1)); // Output: "fl"

const strs2 = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs2)); // Output: ""
