//Codigo cuadrado
function perimetroCuadrado(lado){
  return lado * 4;
}

function areaCuadrado(lado){
  return lado * lado;
}

//Codigo trinagulo
function alturaTrianguloIsosceles(lado1, lado2, base){
  if(lado1 != lado2){
    alert("lado1 y lado2 deben ser iguales")
  }else{
    const altura = Math.sqrt((lado1**2)-((base**2)/4));
    return altura;
  }
}

function perimetroTriangulo(lado1, lado2, base){
  return lado1 + lado2 + base;
}

function areaTrinagulo(base, altura){
  return (base * altura) / 2;
}

//Codigo circulo
const pi = Math.PI;

function diametroCirculo(radio){
  return radio * 2;
}

function perimetroCirculo(diametro){
  return diametro * pi;
}

function areaCirculo(radio){
  return (radio * radio) / pi;
}

//Botones html
//Cuadrado
function calcularPerimetroCuadrado(){
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado(){
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

//Triangulo
function calcularPerimetroTriangulo(){
  const lado1 = document.getElementById("inputLado1");
  const value1 = parseFloat(lado1.value);

  const lado2 = document.getElementById("inputLado2");
  const value2 = parseFloat(lado2.value);

  const base = document.getElementById("inputBase");
  const value3 = parseFloat(base.value);

  const perimetro = perimetroTriangulo(value1, value2, value3);
  alert(perimetro);
}

function calcularAreaTriangulo(){
  const lado1 = document.getElementById("inputLado1");
  const value1 = parseFloat(lado1.value);

  const lado2 = document.getElementById("inputLado2");
  const value2 = parseFloat(lado2.value);

  const base = document.getElementById("inputBase");
  const value3 = parseFloat(base.value);

  const altura = alturaTrianguloIsosceles(value1, value2, value3);

  const area = areaTrinagulo(value3, altura);
  alert(area);
}

//Circulo
function calcularPerimetroCirculoRadio(){
  const radio = document.getElementById("inputRadio");
  const value1 = parseFloat(radio.value);

  const diametro = diametroCirculo(value1);

  const perimetro = perimetroCirculo(diametro);
  alert(perimetro);
}

function calcularPerimetroCirculoDiametro(){
  const diametro = document.getElementById("inputDiametro");
  const value2 = parseFloat(diametro.value);

  const perimetro = perimetroCirculo(value2);
  alert(perimetro);
}
