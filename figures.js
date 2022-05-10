//Codigo cuadrado
function perimetroCuadrado(lado){
  return lado * 4;
}

function areaCuadrado(lado){
  return lado * lado;
}

//Codigo trinagulo
function perimetroTrinagulo(lado1, lado2, base){
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

function perimetroCirculo(radio){
  const diametro = diametroCirculo(radio);
  return diametro * pi;
}

function areaCirculo(radio){
  return (radio * radio) / pi;
}

//Botones html
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