let button1 = document.getElementById('one');
let button2 = document.getElementById('two');
let button3 = document.getElementById('three');
let button4 = document.getElementById('four');
let button5 = document.getElementById('five');
let button6 = document.getElementById('six');
let button7 = document.getElementById('seven');
let button8 = document.getElementById('eight');
let button9 = document.getElementById('nine');
let button0 = document.getElementById('zero');
let buttonDot = document.getElementById('dot');

let buttonC = document.getElementById('cell');
let buttonEQual = document.getElementById('ravno');
let buttonDelenie= document.getElementById("delenie");
let buttonPlus = document.getElementById("plus");
let buttonMinus = document.getElementById("minus");
let buttonUmnojenie = document.getElementById("umnojenie");
let result = document.querySelector('.result');

button1.addEventListener('click', () => changeResult(button1)) ;
button2.addEventListener('click', () => changeResult(button2)) ;
button3.addEventListener('click', () => changeResult(button3)) ;
button4.addEventListener('click', () => changeResult(button4)) ;
button5.addEventListener('click', () => changeResult(button5)) ;
button6.addEventListener('click', () => changeResult(button6)) ;
button7.addEventListener('click', () => changeResult(button7)) ;
button8.addEventListener('click', () => changeResult(button8)) ;
button9.addEventListener('click', () => changeResult(button9)) ;
button0.addEventListener('click', () => changeResult(button0)) ;
buttonDot.addEventListener('click', () => changeResult(buttonDot)) ;
buttonEQual.addEventListener('click', () => changeResult(buttonEQual)) ;
buttonDelenie.addEventListener('click', () => changeResult(buttonDelenie)) ;
buttonPlus.addEventListener('click', () => changeResult(buttonPlus)) ;
buttonUmnojenie.addEventListener('click', () => changeResult(buttonUmnojenie)) ;
buttonMinus.addEventListener('click', () => changeResult(buttonMinus)) ;

buttonC.addEventListener('click', () => toZero(buttonC)) ;

let arr = ['0']; // массив для получения чисел
let arr2 = []; // массив для получения чисел


function toZero() {
  result.innerText = "0";
  arr = ['0'];
  arr2 = [];
  console.log(` result.innerText = "0"  arr = ${arr}`);
  buttonMinus.style.backgroundColor = "";
  buttonPlus.style.backgroundColor = "";
  buttonDelenie.style.backgroundColor = "";
  buttonUmnojenie.style.backgroundColor = "";
  
  buttonPlus.style.color = "";
  buttonMinus.style.color = "";
  buttonUmnojenie.style.color = "";
  buttonDelenie.style.color = "";
}

function changeResult (x) { 

  function takeButtons () {
    // добавляем в массив числа с кнопок
    if (x === button1 ||
      x === button2 ||
      x === button3 ||
      x === button4 ||
      x === button5 ||
      x === button6 ||
      x === button7 || 
      x === button8 || 
      x === button9 ||
      x === button0 ||
      x === buttonDot 
      ) {
        arr.push(x.innerText);

    }

    // убираем нули вначале, кроме точки 
    if (arr[0] == 0 && 
      arr.length > 1 &&
      arr[1] !== ".") {
      arr.splice(0,1);


    } 

    // убираем двойные точки
    for (let i = 0; i < arr.length; i++) {
      for(let j = 1; j < arr.length -1; j++) { 
      if(arr[i] == "." && arr[i+j] == ".") {
        arr.splice(i+j,1);

        }
      } 
      
    }
 
    result.innerText = arr.join("");

  }
 
 
  function equal() {

    if(x === buttonEQual) {

      if(arr2.length == 0) {
        arr2 = [];
      
      } else {
        arr2[2] = +arr.join("");
        if(arr2[1] == "+") {
          arr[0] = (arr2[0] *1000 + arr2[2]*1000)/1000;
        }


        if(arr2[1] == "-") {
          arr[0] = (arr2[0]*1000 - arr2[2]*1000)/1000;

        }
        if(arr2[1] == "*") {
          arr[0] = ((arr2[0]*1000) * (arr2[2]*1000))/1000000;

        }
        if(arr2[1] == "/") {
          arr[0] = ((arr2[0]*1000) / (arr2[2]*1000));

        }

        
        arr.length = 1;
        arr2 = [];
        result.innerText = arr[0];
        let str = (String(arr).split(""));
        arr = str;
      }
      
    }
  
  }
  function takeSigns () {

    buttonMinus.style.backgroundColor = "";
    buttonPlus.style.backgroundColor = "";
    buttonDelenie.style.backgroundColor = "";
    buttonUmnojenie.style.backgroundColor = "";

    buttonPlus.style.color = "";
    buttonMinus.style.color = "";
    buttonUmnojenie.style.color = "";
    buttonDelenie.style.color = "";

   

    function testMinus () {

      if(arr2[1] == "-") {

        arr2 [0] = (arr2[0]*1000 - Number(arr.join(''))*1000)/1000;
        arr = ["0"];
        arr2[1] = "-";
        result.innerText = arr2[0];

      } else
       if(arr2[1] == "+") {

        arr2 [0] = (arr2[0]*1000 + Number(arr.join(''))*1000)/1000;
        arr = ["0"];
        arr2[1] = "-";
        result.innerText = arr2[0];

      } else
      if(arr2[1] == "*") {

        arr2 [0] = (arr2[0]*1000 * Number(arr.join(''))*1000)/1000000;
        arr = ["0"];
        arr2[1] = "-";
        result.innerText = arr2[0];

      } else
       if(arr2[1] == "/") {

        arr2 [0] = ((arr2[0]*1000) / ( Number( arr.join('')*1000) ) );
        arr = ["0"];
        arr2[1] = "-";
        result.innerText = arr2[0];
      }

    }
    function testPlus () {

      if(arr2[1] == "-") {

        arr2 [0] = (arr2[0]*1000 - Number(arr.join(''))*1000)/1000;
        arr = ["0"];
        arr2[1] = "+";
        result.innerText = arr2[0];

      } else
       if(arr2[1] == "+") {

        arr2 [0] = (arr2[0]*1000 + Number(arr.join(''))*1000)/1000;
        arr = ["0"];
        arr2[1] = "+";
        result.innerText = arr2[0];

      } else
      if(arr2[1] == "*") {

        arr2 [0] = (arr2[0]*1000 * Number(arr.join(''))*1000)/1000000;
        arr = ["0"];
        arr2[1] = "+";
        result.innerText = arr2[0];

      } else
       if(arr2[1] == "/") {

        arr2 [0] = ((arr2[0]*1000) / ( Number( arr.join('')*1000) ) );
        arr = ["0"];
        arr2[1] = "+";
        result.innerText = arr2[0];
      }

    }
    function testDel () {

      if(arr2[1] == "-") {

        arr2 [0] = (arr2[0]*1000 - Number(arr.join(''))*1000)/1000;
        arr = ["0"];
        arr2[1] = "/";
        result.innerText = arr2[0];

      } else if(arr2[1] == "+") {

        arr2 [0] = (arr2[0]*1000 + Number(arr.join(''))*1000)/1000;
        arr = ["0"];
        arr2[1] = "/";
        result.innerText = arr2[0];

      }  else
      if(arr2[1] == "*") {

        arr2 [0] = (arr2[0]*1000 * Number(arr.join(''))*1000)/1000000;
        arr = ["0"];
        arr2[1] = "/";
        result.innerText = arr2[0];

      } else
       if(arr2[1] == "/") {

        arr2 [0] = ((arr2[0]*1000) / ( Number( arr.join('')*1000) ) );
        arr = ["0"];
        arr2[1] = "/";
        result.innerText = arr2[0];
      }

    }
    function testUmnoj () {

      if(arr2[1] == "-") {

        arr2 [0] = (arr2[0]*1000 - Number(arr.join(''))*1000)/1000;
        arr = ["0"];
        arr2[1] = "*";
        result.innerText = arr2[0];

      } else if(arr2[1] == "+") {

        arr2 [0] = (arr2[0]*1000 + Number(arr.join(''))*1000)/1000;
        arr = ["0"];
        arr2[1] = "*";
        result.innerText = arr2[0];

      } else if(arr2[1] == "*") {

        arr2 [0] = (arr2[0]*1000 * Number(arr.join(''))*1000)/1000000;
        arr = ["0"];
        arr2[1] = "*";
        result.innerText = arr2[0];

      }  else if(arr2[1] == "/") {

        arr2 [0] = ((arr2[0]*1000) / ( Number( arr.join('')*1000) ) );
        arr = ["0"];
        arr2[1] = "*";
        result.innerText = arr2[0];
      }

    }


    
    if(x === buttonMinus) {

      buttonMinus.style.backgroundColor = 'white';
      buttonMinus.style.color = 'orange';
      
      if(arr2.length == 0) {

        arr2[0] = Number(arr.join(''));
        arr2[1] = "-";
        arr = ["0"];
        result.innerText = arr2[0];

      } 

      else if(arr2.length > 0) {
        testMinus();
      }
    } 
    
    if (x === buttonPlus) {

        buttonPlus.style.backgroundColor = "white";
        buttonPlus.style.color = 'orange';

        if(arr2.length == 0) {

          arr2[0] = Number(arr.join(''));
          arr2[1] = "+";
          arr = ["0"];
          result.innerText = arr2[0];
  
        } 
  
        else if(arr2.length > 0) {
          testPlus();
        }
      }

    if (x === buttonDelenie) {

          buttonDelenie.style.backgroundColor = "white";
          buttonDelenie.style.color = 'orange';
            
          if(arr2.length == 0) {

            arr2[0] = Number(arr.join(''));
            arr2[1] = "/";
            arr = ["0"];
            result.innerText = arr2[0];
    
          } 
    
          else if(arr2.length > 0) {
            testDel ();
          }
    }

    if (x === buttonUmnojenie) {

        buttonUmnojenie.style.backgroundColor = "white";
        buttonUmnojenie.style.color = 'orange';
         
        if(arr2.length == 0) {

          arr2[0] = Number(arr.join(''));
          arr2[1] = "*";
          arr = ["0"];
          result.innerText = arr2[0];
  
        } 
  
        else if(arr2.length > 0) {
          testUmnoj();
        }
      
    }    
  }
  
  
  takeButtons();  
  takeSigns();
  equal();

  // if(arr2 == '') {arr3=[];}

  console.log(arr , arr2);
  
}



// 1) переработать arr = [] , добавить проверку на пустоту, если пустой,
//  то просто изменить arr2[1] на знак;

// ----> соответственно переработать если массив пуст и нажата кнопка точка, добавить ноль

// 2) если длина больше определенного числа, нужно ставить точки в начале ( посмотреть как это реализовать )



