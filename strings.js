function printAsciiBeforeLetters(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      let ascii = str.charCodeAt(i);
      result += `${ascii}${char} `;
    }
    console.log(result.trim());
  }
  

  printAsciiBeforeLetters("hello");  // Output: "104h 101e 108l 108l 111o"




  function removeSpaces(sentence) {
    return sentence.replace(/\s+/g, '');
  }
  let sentence = "This is a test sentence.";
  console.log(removeSpaces(sentence));  // Output: "Thisisatestsentence."




  function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  

  let word = "hello";
  console.log(reverseString(word));  // Output: "olleh"
  
  
  