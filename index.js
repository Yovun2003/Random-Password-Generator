// Random password generator

//We do a function to generate the password

//This is a function to generate the password for us, including lowercase,uppercase,numbers,sybmols.

function generatePassword(length, lowercase, uppercase, numbers, symbols) {
  const lowercaseCharac = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseCharac = "ABCDEFGHIJKLMNOPQRSTWXYZ";
  const numbersCharac = "0123456789";
  const symbolsCharac = "!@£$%^&*";

  let allowedCharacter = "";
  let password = "";

  allowedCharacter += lowercase ? lowercaseCharac : "";
  allowedCharacter += uppercase ? uppercaseCharac : "";
  allowedCharacter += numbers ? numbersCharac : "";
  allowedCharacter += symbols ? symbolsCharac : "";

  if (length <= 0) {
    return "Your password length must be atleast 1";
  }
  if (allowedCharacter.length === 0) {
    return "Atleast 1 set of character should be selected";
  }

  for (let i = 0; i < length; i++) {
    const random = Math.floor(Math.random() * allowedCharacter.length);
    password += allowedCharacter.charAt(random);
  }
  return password;
}

const submitButton = document.getElementById("submit");
const resultParagraph = document.getElementById("result");
const textBox = document.getElementById("textBox");

// Set your character options
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

// 1. Add an event listener to the submit button
submitButton.addEventListener("click", () => {
  // 2. Read the value *inside* the click handler
  const passwordLength = Number(textBox.value);

  // 3. Generate the password
  const newPassword = generatePassword(
    passwordLength,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );

  // 4. Display the result on the page
  resultParagraph.textContent = newPassword;

  // For debugging, you can still log the length
  console.log("Password Length Requested:", passwordLength);
  console.log("Password Generated:", newPassword);
});
