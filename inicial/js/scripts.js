//Variables a utilizar globales
var resultado = '0';

//Funcion que escribe el boton presionado en pantalla y realiza operacion
function escribir(val){  
  if(val!='=' && val!='+' && val!='-'){ //Si se escribe algo que no es '+' o '-', entonces es un numero, concatena al numero que se tiene el siguiente numero para formar numeros mas grandes, ejemplo: 1, 12, 122. Se agrego 2 despues de 1, luego otro 2 despues del 2
    this.resultado += val;//Concatena val en resultado
    console.log(this.resultado);//Imprime en concola para ver resultado
  }else{
    //Divide el texto donde encuentra el simbolo '+' en una lista de numeros
    operacion = this.resultado.split('+');
    if(operacion.length==2){//Si divide el texto en dos, quiere decir que se suman los numeros
      this.resultado = (parseInt(operacion[0]) + parseInt(operacion[1])).toString();
    }

    //Divide el texto donde encuentra el simbolo '-' en una lista de numeros
    operacion = this.resultado.split('-');
    if(operacion.length==2){//Si divide el texto en dos, quiere decir que se restan los numeros
      this.resultado =(parseInt(operacion[0]) - parseInt(operacion[1])).toString();
    }

    if(val!='=')//Si no es simbolo igual '=', concatena val en texto
      this.resultado += val;
    console.log(this.resultado);
  }

  //Escribe en pantalla dentro del elemento con id resultadoop, concatena la variable val
  document.getElementById("resultadoop").innerHTML = resultado;
}

//Inicializa variables en cero y limpia el valor dentro de el elemento con id resultadoop
function borrar(){
  document.getElementById("resultadoop").innerHTML = '';
  resultado = '0';
}

//Multiplica un numero por otro
function multiplicar(){
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  res = num1 * num2;
  document.getElementById("resultadox").innerHTML = res;
  
}

//Divide un numero por otro
function divide(){
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  res = num1 / num2;
  document.getElementById("resultado/").innerHTML = res;
  
}