/*imprimir la lista de nombres 
crea un programa en javascript que cumpla 
con los siguiente:

1. define un objeto llamado grupo.
 este objeto debe tener una lista de 10 nombres.con
2. crea una funcion llamada imprimirnombres.
Esta funcion debe recorrer la lista de nombres
y mostrarlos en la consola uno  a uno.
3. Llama a la funcion imprimirnombres para mostrar
todos los nombrwes.*/


const grupo = {
  nombres: ["Ana", "Luis", "Carlos", "María", "Jorge", "Lucía", "Pedro", "Sofía", "Raúl", "Elena"]
};

function imprimirnombres() {
  for (let i = 0; i < grupo.nombres.length; i++) {
    console.log(grupo.nombres[i]);
  }
}

imprimirnombres();