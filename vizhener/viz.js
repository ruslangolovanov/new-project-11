document.querySelector(".code").onclick = Viz;
document.querySelector(".decode").onclick = deViz;
const Alphabet_en = "abcdefghijklmnopqrstuvwxyz";
const NumAlph_en = {};

for (let i = 0; i < Alphabet_en.length; i++) {
  NumAlph_en[Alphabet_en[i]] = i;
}

const Alphabet_ru = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
const NumAlph_ru = {};

for (let i = 0; i < Alphabet_ru.length; i++) {
  NumAlph_ru[Alphabet_ru[i]] = i;
}

function Viz() {
  let code = "";
  let text = document.querySelector(".input").value;
  let key = document.querySelector(".keyword").value.toLowerCase();

  for (let i = 0; i < text.length; i++) {
    let num_en = text.charCodeAt(i) + NumAlph_en[key[i % key.length]];
    let num_ru = text.charCodeAt(i) + NumAlph_ru[key[i % key.length]];
    console.log(
      text.charCodeAt(i),
      NumAlph_en[key[i % key.length]],
      num_en,
      String.fromCharCode(num_en),
      "code"
    );
    if (text.charCodeAt(i) > 64 && text.charCodeAt(i) < 91) {
      if (num_en > 64 && num_en < 91) {
        code += String.fromCharCode(num_en);
      } else {
        code += String.fromCharCode(num_en - Alphabet_en.length);
      }
    } else if (text.charCodeAt(i) > 96 && text.charCodeAt(i) < 123) {
      if (num_en > 96 && num_en < 123) {
        code += String.fromCharCode(num_en);
      } else {
        code += String.fromCharCode(num_en - Alphabet_en.length);
      }
    } else if (text.charCodeAt(i) > 1039 && text.charCodeAt(i) < 1072) {
      if (num_ru > 1039 && num_ru < 1072) {
        code += String.fromCharCode(num_ru);
      } else {
        code += String.fromCharCode(num_ru - Alphabet_ru.length);
      }
    } else if (text.charCodeAt(i) > 1071 && text.charCodeAt(i) < 1104) {
      if (num_ru > 1071 && num_ru < 1104) {
        code += String.fromCharCode(num_ru);
      } else {
        code += String.fromCharCode(num_ru - Alphabet_ru.length);
      }
    } else {
      code += text[i];
    }
  }
  document.querySelector(".output").innerHTML = code;
}

function deViz() {
  let code = "";
  let text = document.querySelector(".input").value;
  let key = document.querySelector(".keyword").value.toLowerCase();

  for (let i = 0; i < text.length; i++) {
    let num_en = text.charCodeAt(i) - NumAlph_en[key[i % key.length]];
    let num_ru = text.charCodeAt(i) - NumAlph_ru[key[i % key.length]];
    console.log(
      text[i],
      text.charCodeAt(i),
      NumAlph_en[key[i % key.length]],
      num_en,
      "decode"
    );
    if (text.charCodeAt(i) > 64 && text.charCodeAt(i) < 91) {
      if (num_en > 64 && num_en < 91) {
        code += String.fromCharCode(num_en);
      } else {
        code += String.fromCharCode(num_en + Alphabet_en.length);
      }
    } else if (text.charCodeAt(i) > 96 && text.charCodeAt(i) < 123) {
      if (num_en > 96 && num_en < 123) {
        code += String.fromCharCode(num_en);
      } else {
        code += String.fromCharCode(num_en + Alphabet_en.length);
      }
    } else if (text.charCodeAt(i) > 1039 && text.charCodeAt(i) < 1072) {
      if (num_ru > 1039 && num_ru < 1072) {
        code += String.fromCharCode(num_ru);
      } else {
        code += String.fromCharCode(num_ru + Alphabet_ru.length);
      }
    } else if (text.charCodeAt(i) > 1071 && text.charCodeAt(i) < 1104) {
      if (num_ru > 1071 && num_ru < 1104) {
        code += String.fromCharCode(num_ru);
      } else {
        code += String.fromCharCode(num_ru + Alphabet_ru.length);
      }
    } else {
      code += text[i];
    }
  }
  document.querySelector(".output").innerHTML = code;
}
