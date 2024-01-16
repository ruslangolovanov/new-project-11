document.querySelector(".in").oninput = Cesar;

function Cesar() {
  let out = "";
  let str = document.querySelector(".in").value;
  let Num = Number(document.querySelector(".num").value);
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    code = code + Num;
    out += String.fromCharCode(code);
    console.log(out);
    console.log(code);
  }

  document.querySelector(".output").innerHTML = out;
}
