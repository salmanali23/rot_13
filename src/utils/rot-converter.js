let rotHash = {};
const capitalLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const smallLetters = capitalLetters.map(letter => letter.toLowerCase());

/**
 * 
 * @param {string} inputString the original string
 * 
 * Using hash technique to optimize the performance incase when input string is 1000+ characters
 * 
 * @returns cyphered string
 */
const stringRotator = (inputString, rotNumber) => {
  const totalChars = 26;
  let rot13 = [];

  for (let charAt = 0; charAt < inputString.length; charAt++) {
    const char = inputString[charAt];
    if (rotHash[char]) {
      rot13.push(rotHash[char]);
      continue;
    }
    
    if (!capitalLetters.includes(char) && !smallLetters.includes(char)) {
      rot13.push(char);
      continue;
    }
    
    const indexInSmallLetters = smallLetters.findIndex(letter => letter === char);
    let replacement = '';
    let targetLetters;
    let rotIndex = 0;
    if (indexInSmallLetters > -1) {
      rotIndex = indexInSmallLetters + rotNumber;
      targetLetters = smallLetters;
    } else {
      const indexInCapitalLetters = capitalLetters.findIndex(letter => letter === char);
      rotIndex = indexInCapitalLetters + rotNumber;
      targetLetters = capitalLetters;
    }

    if (rotIndex >= totalChars) {
      const diff = rotIndex - totalChars;
      replacement = targetLetters[diff];
    } else {
      replacement = targetLetters[rotIndex];
    }

    rot13.push(replacement);
    rotHash[char] = replacement;
  }

  return rot13.join('');
}

module.exports = {
  stringRotator
}