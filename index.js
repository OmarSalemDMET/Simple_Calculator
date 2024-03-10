let accu = ""; //accumulator
  let disp = ""; //Displayer
  let operation = "";
  let flag = true;
  updateDisplay();

  function pushV(value) {
    if (flag) disp = disp + String(value);
    else {
      accu = disp;
      disp = "";
      disp = disp + value;
      flag = true;
    }
    updateDisplay();

    console.log(disp);
  }

  function popV() {
    disp = disp.slice(0, disp.length - 1);
    updateDisplay();
  }

  function addOperation(value) {
    if (operation != "") {
      exec();
    }
    operation = operation + String(value);
    flag = false;

    console.log(operation);
  }

  function exec() {
    switch (operation) {
      case "+":
        disp = parseInt(disp) + parseInt(accu) + "";
        break;
      case "-":
        disp = parseInt(disp) - parseInt(accu) + "";
        break;
      case "*":
        disp = parseInt(disp) * parseInt(accu) + "";
        break;
      case "/":
        disp = parseInt(disp) / parseInt(accu) + "";
        break;
      case "reset":
        disp = "";
        accu = "";
        break;
      default:
    }
    updateDisplay();

    operation = "";
  }

  function updateDisplay() {
    document.getElementById("output_displayer").value = disp;
  }