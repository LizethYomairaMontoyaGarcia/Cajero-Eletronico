/* 1 .Escribir una lista de usuarios con los siguientes datos: nombre, numero de documo, 
contraseña y tipo de usuario. El tipo de usuario será: 1: 
administrador, 2: cliente. Guardarla en un array de objetos.
*/
const datosDeUsuarios1 = {
  nombre: "Lizeth",
  documento: "1111111111",
  contraseña: "1234",
  tipoUsuario: "Administrador",
};
const datosDeUsuarios2 = {
  nombre: "Ana",
  documento: "2222222222",
  contraseña: "3121",
  tipoUsuario: "cliente",
};
const datosDeUsuarios3 = {
  nombre: "Duver",
  documento: "3333333333",
  contraseña: "2141",
  tipoUsuario: "cliente",
};
const datosDeUsuarios4 = {
  nombre: "Juanpa",
  documento: "4444444444",
  contraseña: "1210",
  tipoUsuario: "cliente",
};
const datosDeUsuarios5 = {
  nombre: "Luna",
  documento: "5555555555",
  contraseña: "4434",
  tipoUsuario: "cliente",
};
let arrayDatosDeUsuarios = [
  datosDeUsuarios1,
  datosDeUsuarios2,
  datosDeUsuarios3,
  datosDeUsuarios4,
  datosDeUsuarios5,
];
console.log("datos ", arrayDatosDeUsuarios);

//2. Realizar un programa que al inicio solicite ingresar documento y contraseña,
alert(
  "Bienvenido a nuestro cajero, por favor dar aceptar y llenar la informacion solicitada"
);
const documenta = prompt("Por favor ingrese el No. de docuemnto ");
const password = prompt("Por favor ingrese la contraseña");
const datos = {
  documenta,
  password,
};
console.log(datos);

//si el usuario no existe debe indicar que no existe y volver a preguntar usuario y contraseña,

let foundUser = undefined;
for (let index = 0; index < arrayDatosDeUsuarios.length; index++) {
  const usuario = arrayDatosDeUsuarios[index];
  if (usuario.documento === datos.documenta) {
    foundUser = usuario;
    break;
  }
}
console.log(foundUser);
if (foundUser) {
  alert("Este usuario existe!");
} else {
  alert("Este usuario no existe");
}
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

for (let index = 0; index < arrayBilletes.length; index++) {
  const cantidadBilletes = prompt(
    `Ingrese la cantidad de billetes de: ${arrayBilletes[index].dinero}`
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
let totalEnCaja = 0;
arrayBilletesIngresados.forEach((billetes) => {
  totalEnCaja += billetes.cantidad * billetes.dinero;
});
console.log("total de billetes ingresados", totalEnCaja);

//6. Una vez el cajero esté cargado, debe volver a solicitar usuario y contraseña, si es administrador,

//se repite el mismo proceso, sumar a la cantidad actual, si es cliente debe proseguir de la siguiente manera:
//7. Si el cajero no tiene dinero cargado, debe aparecer un mensaje en consola: “Cajero en mantenimiento,
//vuelva pronto.” Y reiniciar desde el inicio.
if (totalEnCaja === 0) {
  console.log("Cajero en mantenimiento, vuelva pronto.");
}
console.log("");

//8. Si el cajero ya tiene dinero cargado, debe preguntar la cantidad deseada a retirar.

if (totalEnCaja >= 5000) {
  let valorRetiro = parseInt(
    prompt(
      "Bienvenido nuevamente, contamos con cupo, ¿Qué cantidad de dinero deseas retirar?.",
      0
    )
  );
  //Una vez obtenida la información, debe indicar cuánto dinero puede entregar basado en la cantidad disponible y los tipos de billetes.
  console.log("Los tipos de billteses son: ", arrayBilletesIngresados);
  console.log("Tenemos disponible: ", totalEnCaja);
  //Luego debe mostrar en consola cuántos billetes de cada denominación entregó. Priorizando siempre las denominaciones
  //más altas para valores altos y redondeando a la cifra más cercana menor a la solicitada.
  let arrayBilletesRetirados = [];
  for (let index =  arrayBilletesIngresados.length-1; index >=0; index--) {
    const dinero = arrayBilletesIngresados[index].dinero;
    let cantidad = arrayBilletesIngresados[index].cantidad;
    while (dinero <= valorRetiro && cantidad > 0) {
      valorRetiro -= dinero;
      cantidad--;
      console.log("Billete retirado::", dinero);
      arrayBilletesRetirados.push({dinero,cantidad:1});

    console.log("Valor pendiente de retiro: ",valorRetiro);
    }
    console.log("Billetes retirados", arrayBilletesRetirados);

  }
 
}

//9. Posteriormente, debe aparecer en consola, el dinero restante en el cajero, por cada denominación.
