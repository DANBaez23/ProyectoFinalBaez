
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




const interes = 0.02;
const sueldo = parseInt(prompt("Cual es su sueldo actual?: "));
const cuotasC = [12, 24, 36];

function nuCuotas(sueldo, interes, cuotasC) {
  cuotasC.forEach((cuota) => console.log(cuota));

  let seleccionarCuotas = parseInt(prompt("elija el número de cuotas: "));

  if (cuotasC.includes(seleccionarCuotas)) {
    let denominador = Math.pow(1 + interes, -seleccionarCuotas);
    let pagoMensual = Math.ceil((sueldo * interes) / (1 - denominador));
    console.log(`El pago mensual es de: $${pagoMensual}`);
  } else {
    console.log("La cuota seleccionada no es válida.");
  }
}

while (true) {
  if (sueldo >= 4000000) {
    const montoSolicitado = parseFloat(prompt("Ingrese el monto que necesita: "));
    nuCuotas(montoSolicitado, interes, cuotasC);
    console.log(`Su préstamo será de: $${montoSolicitado + 1000000}`);
  } else if (sueldo >= 3000000) {
    console.log(`Su préstamo será de: $${sueldo + 1000000}`);
  } else if (sueldo >= 2000000) {
    console.log(`Su préstamo será de: $${sueldo + 1000000}`);
    break;
  } else {
    console.log("Su sueldo no cumple con los requisitos del banco para hacer un desembolso.");
    break;
  }
}