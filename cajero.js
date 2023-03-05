/* 1 .Escribir una lista de usuarios con los siguientes datos: nombre, numero de documo, 
contraseña y tipo de usuario. El tipo de usuario será: 1: 
administrador, 2: cliente. Guardarla en un array de objetos.
*/
const datosDeUsuarios1 = {
  nombre: "Lizeth",
  documento: "1111111111",
  contraseña: "1234",
  tipoUsuario: 1,
};
const datosDeUsuarios2 = {
  nombre: "Ana",
  documento: "2222222222",
  contraseña: "3121",
  tipoUsuario: 2,
};
const datosDeUsuarios3 = {
  nombre: "Duver",
  documento: "3333333333",
  contraseña: "2141",
  tipoUsuario: 2,
};
const datosDeUsuarios4 = {
  nombre: "Juanpa",
  documento: "4444444444",
  contraseña: "1210",
  tipoUsuario: 2,
};
const datosDeUsuarios5 = {
  nombre: "Luna",
  documento: "5555555555",
  contraseña: "4434",
  tipoUsuario: 2,
};

let arrayDatosDeUsuarios = [
  datosDeUsuarios1,
  datosDeUsuarios2,
  datosDeUsuarios3,
  datosDeUsuarios4,
  datosDeUsuarios5,
];
console.log("datos ", arrayDatosDeUsuarios);

const iniciarCajero = () => {
  let foundUser = undefined;

  while (!foundUser) {
    foundUser = buscarUsuario();
    console.log("usuario", foundUser);
    if (foundUser) {
      if (foundUser.tipoUsuario === 1) {
        cargarCajero();
        foundUser=undefined;
      } else {
        iniciarRetiro();
        foundUser=undefined;
      }
    } else {
      alert("Este usuario no existe");
    }
  }
};

const preguntarDatos = () => {
  //2. Realizar un programa que al inicio solicite ingresar documento y contraseña,
  alert(
    "Bienvenido a nuestro cajero, por favor dar aceptar y llenar la informacion solicitada"
  );
  const documenta = prompt("Por favor ingrese el No. de documento ");
  const password = prompt("Por favor ingrese la contraseña");
  return {
    documenta,
    password,
  };
};

const buscarUsuario = () => {
  //si el usuario no existe debe indicar que no existe y volver a preguntar usuario y contraseña,
  let datos = preguntarDatos();

  for (let index = 0; index < arrayDatosDeUsuarios.length; index++) {
    const usuario = arrayDatosDeUsuarios[index];
    if (
      usuario.documento === datos.documenta &&
      usuario.contraseña === datos.password
    ) {
      return usuario;
    }
  }
};

//si el usuario es administrador, debe permitir cargar el cajero de la siguiente manera:
// 3. Solicitar la cantidad de billetes de 5, 10, 20, 50 y 100 mil pesos COP.

const arrayBilletes = [
  {
    dinero: 5000,
    cantidad: 0,
  },
  {
    dinero: 10000,
    cantidad: 0,
  },
  {
    dinero: 20000,
    cantidad: 0,
  },
  {
    dinero: 50000,
    cantidad: 0,
  },
  {
    dinero: 100000,
    cantidad: 0,
  },
];

const arrayBilletesIngresados = [];
//total que hay cargado
let totalEnCaja = 0;

const cargarCajero = () => {
  for (let index = 0; index < arrayBilletes.length; index++) {
    const cantidadBilletes = parseInt(
      prompt(
        `Ingrese la cantidad de billetes de: ${arrayBilletes[index].dinero}`
      )
    );

    //Guardar el valor ingresado por tipo de billete en la pantalla
    const billete = {
      dinero: arrayBilletes[index].dinero,
      cantidad: cantidadBilletes,
    };

    //4. Almacenar esta información en un array de objetos.
    arrayBilletesIngresados.push(billete);
    console.log(cantidadBilletes);
  }
  console.log("array de billetes", arrayBilletesIngresados);

  //5. Una vez tenga la información, debe mostrar en consola la suma por cada denominación y el total general.
  //Calcular el total de dinero en caja

  arrayBilletesIngresados.forEach((billetes) => {
    totalEnCaja += billetes.cantidad * billetes.dinero;
  });
  console.log("Total de billetes ingresados", totalEnCaja);
};
//6. Una vez el cajero esté cargado, debe volver a solicitar usuario y contraseña, si es administrador,

//se repite el mismo proceso, sumar a la cantidad actual, si es cliente debe proseguir de la siguiente manera:
//7. Si el cajero no tiene dinero cargado, debe aparecer un mensaje en consola: “Cajero en mantenimiento,
//vuelva pronto.” Y reiniciar desde el inicio.

const iniciarRetiro = () => {
  if (totalEnCaja === 0) {
    console.log("Cajero en mantenimiento, vuelva pronto.");
  }
  console.log("");

  //8. Si el cajero ya tiene dinero cargado, debe preguntar la cantidad deseada a retirar.

  if (totalEnCaja >= 5000) {
    let valorSolicitado = parseInt(
      prompt(
        "Bienvenido nuevamente, contamos con cupo, ¿Qué cantidad de dinero deseas retirar?.",
        0
      )
    );
    let valorRetiro = valorSolicitado;
    //Una vez obtenida la información, debe indicar cuánto dinero puede entregar basado en la cantidad disponible y los tipos de billetes.
    console.log("Los tipos de billteses son: ", arrayBilletesIngresados);
    console.log("Tenemos disponible: ", totalEnCaja);
    //Luego debe mostrar en consola cuántos billetes de cada denominación entregó. Priorizando siempre las denominaciones
    //más altas para valores altos y redondeando a la cifra más cercana menor a la solicitada.
    let arrayBilletesRetirados = [];
    for (let index = arrayBilletesIngresados.length - 1; index >= 0; index--) {
      const dinero = arrayBilletesIngresados[index].dinero;
      let billetesTomados = 0;
      let cantidad = arrayBilletesIngresados[index].cantidad;
      //el While sirve para hacer recorridos mientras que haya cantidad de billetes disponble, ejemplo 3 biletes de 20.000 recorreo tres veces
      while (dinero <= valorRetiro && cantidad > 0) {
        valorRetiro -= dinero;
        //restar billete
        cantidad--;

        //contar los billetes sacados
        billetesTomados++;

        console.log("Billete retirado:", dinero);
        console.log("Valor pendiente de retiro: ", valorRetiro);
      }
      arrayBilletesIngresados[index].cantidad = cantidad;
      arrayBilletesRetirados.push({ dinero, cantidad: billetesTomados });
    }
    console.log("Billetes retirados", arrayBilletesRetirados);
    //9. Posteriormente, debe aparecer en consola, el dinero restante en el cajero, por cada denominación.
    console.log("Billetes en cajero: ", arrayBilletesIngresados);
    console.log("En la caja queda:", totalEnCaja - valorSolicitado);
  }
};

//inicio cajero
iniciarCajero();
