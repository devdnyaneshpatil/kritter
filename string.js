const formEl = document.querySelector("#string-form");
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  let input = document.getElementById("string-inp").value;
  let convertedString = convertString(input);
  let outputEl = document.getElementById("output");
  outputEl.innerHTML = null;
  let strEl = document.createElement("h1");
  strEl.innerText = `Your Converted String is :- ${convertedString}`;
  outputEl.append(strEl);
});

function convertString(str) {
  let trimmedStr = str.trim();
  let cleanedStr = trimmedStr.replace(/[^a-zA-Z0-9 ]/g, "");
  let singleSpacedStr = cleanedStr.replace(/\s+/g, " ");
  let camelCaseStr = singleSpacedStr
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
  return camelCaseStr;
}