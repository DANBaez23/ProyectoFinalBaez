
    // const saldoI = 1000000;
    // const pinIngresado = prompt("Ingrese su PIN:");

    // // aquí se valida la pass
    // function verificarPin(pin) {
    //   const pinCorrecto = "54321"; // la clave
    //   return pin === pinCorrecto;
    // }

    // // con esto retiro
    // function hacerRetiro(saldo, monto) {
    //   if (saldo >= monto) {
    //     saldo -= monto; //esto me lo explicó chat gpt, porque no sabía como sumar o restar al saldo
    //     console.log(`Has retirado $${monto}. Tu saldo actual es de $${saldo}`);
    //   } else {
    //     console.log("Fondos insuficientes");
    //   }
    // }

    // // con esto realizo depósitos
    // function hacerDeposito(saldo, monto) {
    //   saldo += monto;
    //   console.log(`Has depositado $${monto}. Tu saldo actual es de $${saldo}`);
    // }

    // // Bucle


    // if (verificarPin(pinIngresado)) {
    //   console.log("Acceso concedido");
      
    //   while (true) {
    //     console.log("\nOpciones:");
    //     console.log("1. Retirar dinero");
    //     console.log("2. Depositar dinero");
    //     console.log("3. Ver saldo");
    //     console.log("4. Salir");
        
    //     const opcion = prompt("Seleccione una opción (1/2/3/4):");
        
    //     if (opcion === "1") {
    //       const montoRetiro = parseFloat(prompt("Ingrese el monto a retirar:"));
    //       hacerRetiro(saldoI, montoRetiro);
    //     } else if (opcion === "2") {
    //       const montoDeposito = parseFloat(prompt("Ingrese el monto a depositar:"));
    //       hacerDeposito(saldoI, montoDeposito);
    //     } else if (opcion === "3") {
    //       console.log(`Su salgo actual es $${saldo}`)
          
    //     }else if(opcion === "4"){
    //       console.log("Gracias por utilizar nuestros servicios") 
    //       break;
    //     } else {
    //       console.log("Opción no válida. Por favor, seleccione una opción válida.");
    //     }
    //   }
    // } else {
    //   console.log("PIN incorrecto. Acceso denegado");
    // }


// const interes = 0.02;
// const Sueldo = prompt("Cual es su sueldo actual?: ")

// const cuotas = [];


//   for(let i = 1; i <= 36; i++){
//   cuotas.push(i);
//   }

// console.log(cuotas)

// function nuCuotas(sueldo, cuotas){
//   let 

// }



//Puedes expresar la fórmula que describiste en JavaScript de la siguiente manera:

// Datos del préstamo
var montoPrestamo = 1000; // Monto del préstamo
var tasaInteresMensual = 0.05; // Tasa de interés mensual (5% expresado como 0.05)
var plazoMeses = 12; // Plazo del crédito en meses

// Calcula el pago mensual
var denominador = Math.pow(1 + tasaInteresMensual, -plazoMeses);
var pagoMensual = Math.ceil((montoPrestamo * tasaInteresMensual) / (1 - denominador));

console.log("El pago mensual es: " + pagoMensual);