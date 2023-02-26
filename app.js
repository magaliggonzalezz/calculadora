let boton1 = document.getElementById('sumar');
let boton2 = document.getElementById('restar');
let boton3 = document.getElementById('multiplicar');
let boton4 = document.getElementById('dividir');
let respuesta = document.getElementById('respuesta');

boton1.addEventListener('click', hacerSuma);
boton2.addEventListener('click', hacerResta);
boton3.addEventListener('click', hacerMultiplicacion);
boton4.addEventListener('click', hacerDivision);

function hacerSuma(){
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let n3 = n1 + n2;
    respuesta.innerHTML = `El resultado de la suma es: ${n3}`;
}

function hacerResta(){
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let n3 = n1 - n2;
    respuesta.innerHTML = `El resultado de la resta es: ${n3}`;
}

function hacerMultiplicacion(){
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let n3 = n1 * n2;
    respuesta.innerHTML = `El resultado de la multilicación es: ${n3}`;
}

function hacerDivision(){
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let n3 = n1 / n2;
    respuesta.innerHTML = `El resultado de la división es: ${n3}`;
}