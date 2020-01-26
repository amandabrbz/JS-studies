//While = enquanto
x = 0;
while (x < 5) {
  document.write("<br> o valor é: " + x);
  x++;
}

document.write("<hr>");

//for = para
for (a = 0; a <= 7; a++) {
  document.write("<br> o valor é: " + a);
}

document.write("<hr>");

//switch = trocar entre casos
y = 2;

switch (y) {
  case 0:
    document.write("hello");
    break;
  case 1:
    document.write("tudobom");
    break;
  case 2:
    document.write("yeah");
    break;
  default:
    document.write("deu boa");
}

document.write("<hr>");

//exemplo prático de switch case
function pedir() {
  pedido = prompt("que desejas?");

  switch (pedido) {
    case "0":
      document.write("hello");
      break;
    case "1":
      document.write("tudobom");
      break;
    case "2":
      document.write("yeah");
      break;
    default:
      document.write("deu boa");
  }
}
