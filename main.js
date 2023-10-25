
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


    const today = new Date();

    class Historial {
        constructor(fecha, valor, razon) {
            this.fecha = fecha,
            this.valor = valor,
            this.razon = razon
        }
    }

    const interes = 0.02;
    const sueldo = parseInt(prompt("Cual es su sueldo actual?: "));
    const cuotasC = [12, 24, 36];
    let historialPrestamos = [];

    function guardarHistorial() {
        localStorage.setItem('historial', JSON.stringify(historialPrestamos));
    }


    function cargarHistorial() {
        const historialGuardado = localStorage.getItem('historial');
        if (historialGuardado) {
            historialPrestamos = JSON.parse(historialGuardado);
        }
    }


    function mostrarHistorial() {
        const historialTable = document.createElement('table');
        historialTable.innerHTML = `
            <tr>
                <th>Fecha</th>
                <th>Valor</th>
                <th>Razón</th>
            </tr>
        `;

        historialPrestamos.forEach((registro) => {
            historialTable.innerHTML += `
                <tr>
                    <td>${registro.fecha}</td>
                    <td>${registro.valor}</td>
                    <td>${registro.razon}</td>
                </tr>
            `;
        });

        document.body.appendChild(historialTable);
    }


    const prestamo = montoSolicitado + 1000000;
    const nuevoRegistro = new Historial(today, prestamo, 'Préstamo solicitado');
    historialPrestamos.push(nuevoRegistro);
    guardarHistorial();


    document.getElementById('cuotaSeleccionada').textContent = seleccionarCuotas;
    document.getElementById('pagoMensual').textContent = `$${pagoMensual}`;

    cargarHistorial(); 
    document.getElementById('mostrarHistorialBtn').addEventListener('click', mostrarHistorial);

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