let binaryC
let binaryR

let hexadecimalC
let hexadecimalR

let octalC
let octalR

let decimalC
let decimalR

let anyBaseC
let anyBaseB

let BaseCalculator

// Base converter
function binary() {


 binaryC = document.getElementById("binaryText").value
 binaryC = parseInt(binaryC,2)

 decimalC = binaryC.toString(10)

 hexadecimalC = binaryC.toString(16)
 hexadecimalC = hexadecimalC.toLocaleUpperCase()

 octalC = binaryC.toString(8)






 document.getElementById("decimalText").value= decimalC
 document.getElementById("hexadecimalText").value= hexadecimalC
 document.getElementById("octalText").value= octalC
}

function decimal() {


    decimalC = document.getElementById("decimalText").value
    decimalC = parseInt(decimalC,10)
   
    binaryC = decimalC .toString(2)
   
    hexadecimalC = decimalC .toString(16)
    hexadecimalC = hexadecimalC.toLocaleUpperCase()
   
    octalC = decimalC .toString(8)
   
   
   
   
   
   
    document.getElementById("binaryText").value= binaryC
    document.getElementById("hexadecimalText").value= hexadecimalC
    document.getElementById("octalText").value= octalC
   }

   function octal() {


    octalC = document.getElementById("octalText").value
    octalC = parseInt(octalC,8)
   
    binaryC = octalC .toString(2)
   
    hexadecimalC = octalC .toString(16)
    hexadecimalC = hexadecimalC.toLocaleUpperCase()
   
    decimalC = octalC .toString(10)
   
   
   
   
   
   
    document.getElementById("binaryText").value= binaryC
    document.getElementById("hexadecimalText").value= hexadecimalC
    document.getElementById("decimalText").value= decimalC
   }

   function hexadecimal() {


    hexadecimalC = document.getElementById("hexadecimalText").value
    hexadecimalC = parseInt(hexadecimalC,16)
   
    binaryC = hexadecimalC .toString(2)
   
    octalC = hexadecimalC .toString(8)
   
    decimalC = hexadecimalC .toString(10)
   
   
   
   
   
   
    document.getElementById("binaryText").value= binaryC
    document.getElementById("octalText").value= octalC
    document.getElementById("decimalText").value= decimalC
   }
 









//  calculator
   function plus(){

    decimalValor = document.getElementById("decimalCa").checked
    hexadecimalValor = document.getElementById("hexadecimalCa").checked
    octalValor = document.getElementById("octalCa").checked
    binaryValor = document.getElementById("binaryCa").checked
    
    if (decimalValor == true) {
       BaseCalculator=10
    }
    else if (hexadecimalValor == true){
       BaseCalculator=16
    }
    else if (binaryValor == true){
       BaseCalculator=2
    }
    else if (octalValor == true){
       BaseCalculator=8
    }

    number1 =  document.getElementById("number1").value
    number1 = parseInt(number1,BaseCalculator)
    number2 =  document.getElementById("number2").value
    number2 = parseInt(number2,BaseCalculator)
    r = number1 + number2
    console.log(r)
    r2 = r.toString(BaseCalculator)
    
       document.getElementById("result2").innerText= r2.toLocaleUpperCase()
  }
  function minus(){

    decimalValor = document.getElementById("decimalCa").checked
    hexadecimalValor = document.getElementById("hexadecimalCa").checked
    octalValor = document.getElementById("octalCa").checked
    binaryValor = document.getElementById("binaryCa").checked
   
   if (decimalValor == true) {
       BaseCalculator=10
   }
   else if (hexadecimalValor == true){
       BaseCalculator=16
   }
   else if (binaryValor == true){
       BaseCalculator=2
   }
   else if (octalValor == true){
       BaseCalculator=8
   }

    number1 =  document.getElementById("number1").value
    number1 = parseInt(number1,BaseCalculator)
    number2 =  document.getElementById("number2").value
    number2 = parseInt(number2,BaseCalculator)
    r = number1 - number2
    r2 = r.toString(BaseCalculator)
    
       document.getElementById("result2").innerText= r2.toLocaleUpperCase()
  }
  function mult(){

    decimalValor = document.getElementById("decimalCa").checked
    hexadecimalValor = document.getElementById("hexadecimalCa").checked
    octalValor = document.getElementById("octalCa").checked
    binaryValor = document.getElementById("binaryCa").checked
   
   if (decimalValor == true) {
       BaseCalculator=10
   }
   else if (hexadecimalValor == true){
       BaseCalculator=16
   }
   else if (binaryValor == true){
       BaseCalculator=2
   }
   else if (octalValor == true){
       BaseCalculator=8
   }

    number1 =  document.getElementById("number1").value
    number1 = parseInt(number1,BaseCalculator)
    number2 =  document.getElementById("number2").value
    number2 = parseInt(number2,BaseCalculator)
    r = number1 * number2
    console.log(r)
    r2 = r.toString(BaseCalculator)
    
       document.getElementById("result2").innerText= r2.toLocaleUpperCase()
  }
  function div(){

    decimalValor = document.getElementById("decimalCa").checked
    hexadecimalValor = document.getElementById("hexadecimalCa").checked
    octalValor = document.getElementById("octalCa").checked
    binaryValor = document.getElementById("binaryCa").checked
   
   if (decimalValor == true) {
       BaseCalculator=10
   }
   else if (hexadecimalValor == true){
       BaseCalculator=16
   }
   else if (binaryValor == true){
       BaseCalculator=2
   }
   else if (octalValor == true){
       BaseCalculator=8
   }

    number1 =  document.getElementById("number1").value
    number1 = parseInt(number1,BaseCalculator)
    number2 =  document.getElementById("number2").value
    number2 = parseInt(number2,BaseCalculator)
    r = number1 / number2
    console.log(r)
    r2 = r.toString(BaseCalculator)
    
       document.getElementById("result2").innerText= r2.toLocaleUpperCase()
  }
  function percent(){

    decimalValor = document.getElementById("decimalCa").checked
    hexadecimalValor = document.getElementById("hexadecimalCa").checked
    octalValor = document.getElementById("octalCa").checked
    binaryValor = document.getElementById("binaryCa").checked
   
   if (decimalValor == true) {
       BaseCalculator=10
   }
   else if (hexadecimalValor == true){
       BaseCalculator=16
   }
   else if (binaryValor == true){
       BaseCalculator=2
   }
   else if (octalValor == true){
       BaseCalculator=8
   }

    number1 =  document.getElementById("number1").value
    number1 = parseInt(number1,BaseCalculator)
    number2 =  document.getElementById("number2").value
    number2 = parseInt(number2,BaseCalculator)
    r = number1 / 100 * number2
    console.log(r)
    r2 = r.toString(BaseCalculator)
    
       document.getElementById("result2").innerText= r2.toLocaleUpperCase()
  }
  function pot(){

    decimalValor = document.getElementById("decimalCa").checked
    hexadecimalValor = document.getElementById("hexadecimalCa").checked
    octalValor = document.getElementById("octalCa").checked
    binaryValor = document.getElementById("binaryCa").checked
   
   if (decimalValor == true) {
       BaseCalculator=10
   }
   else if (hexadecimalValor == true){
       BaseCalculator=16
   }
   else if (binaryValor == true){
       BaseCalculator=2
   }
   else if (octalValor == true){
       BaseCalculator=8
   }

    number1 =  document.getElementById("number1").value
    number1 = parseInt(number1,BaseCalculator)
    number2 =  document.getElementById("number2").value
    number2 = parseInt(number2,BaseCalculator)
    r = Math.pow(number1, number2)
    r2 = r.toString(BaseCalculator)
    
       document.getElementById("result2").innerText= r2.toLocaleUpperCase()
  }










