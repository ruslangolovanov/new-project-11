document.querySelector(".code").onclick = ver;
document.querySelector(".decode").onclick = dever;

function ver() {
  let str = document.querySelector(".input").value;
  let key = document.querySelector(".keyword").value;
  let str_bin = [];
  let key_bin = [];
  let result_bin = [];
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      str_bin.push(" ");
      key_bin.push(key[i % key.length].charCodeAt(0).toString(2));
    } else {
      str_bin.push(str[i].charCodeAt(0).toString(2));
      key_bin.push(key[i % key.length].charCodeAt(0).toString(2));
    }
  }

  // for (let i = 0; i < str_bin.length; i++) {
  //   if (key_bin[i].length > str_bin[i].length) {
  //     let c = key_bin[i].length - str_bin[i].length;
  //     let zero_str = "";
  //     while (c > 0) {
  //       zero_str += "0";
  //       c -= 1;
  //     }
  //     str[i] = zero_str + str_bin[i];
  //   } else {
  //     let c = str_bin[i].length - key_bin[i].length;
  //     let zero_str = "";
  //     while (c > 0) {
  //       zero_str += "0";
  //       c -= 1;
  //     }
  //     key_bin[i] = zero_str + key_bin[i];
  //   }
  // }
  for (let i = 0; i < str_bin.length; i++) {
    let symb = str_bin[i];
    let key_symb = key_bin[i];
    res_str = "";
    if (symb == " ") {
      result_bin.push(" ");
    } else {
      for (let k = 0; k < symb.length; k++) {
        if (symb[k] == key_symb[k]) {
          res_str += "0";
        } else {
          res_str += "1";
        }
      }
      result_bin.push(res_str);
    }
    console.log(result_bin);
  }

  for (let n = 0; n < result_bin.length; n++) {
    if (result_bin[n] == " ") {
      result += " /" + " ";
    } else {
      let num = parseInt(result_bin[n], 2);
      result += num.toString() + " ";
    }
  }

  document.querySelector(".output").innerHTML = result;
}

function dever() {
  let str = document.querySelector(".input").value;
  let key = document.querySelector(".keyword").value;
  let numbers = str.split(" ");
  let numbers_bin = [];

  let key_bin = [];

  let result_bin = [];

  let result_str = "";
  console.log(str);
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == "/") {
      numbers_bin.push(" ");
      key_bin.push(key[i % key.length].charCodeAt(0).toString(2));
    } else {
      numbers_bin.push(parseInt(numbers[i]).toString(2));
      key_bin.push(key[i % key.length].charCodeAt(0).toString(2));
    }
  }

  for (let i = 0; i < numbers_bin.length; i++) {
    if (numbers_bin[i] == " ") {
      // numbers_bin[i] = " ";
    } else {
      let c = key_bin[i].length - numbers_bin[i].length;
      let zero_str = "";
      while (c > 0) {
        zero_str += "0";
        c -= 1;
      }

      numbers_bin[i] = zero_str + numbers_bin[i];
    }
  }

  for (let i = 0; i < numbers_bin.length; i++) {
    let num = numbers_bin[i];
    let key_symb = key_bin[i];
    res_str = "";
    if (num == " ") {
      result_bin.push(" ");
    } else {
      for (let k = 0; k < key_symb.length; k++) {
        if (num[k] == key_symb[k]) {
          res_str += "0";
        } else {
          res_str += "1";
        }
      }
      result_bin.push(res_str);
    }
    console.log(result_bin);
  }

  for (let i = 0; i < result_bin.length; i++) {
    // console.log(parseInt(result_bin[i], 2));
    if (result_bin[i] == " ") {
      result_str += " ";
    } else {
      result_str += String.fromCharCode(parseInt(result_bin[i], 2));
    }
  }

  // console.log(result_bin);
  document.querySelector(".output").innerHTML = result_str;
}
// console.log(ver("ruslan", "code"));
// console.log(dever("17 26 23 9 2 1", "code"));
