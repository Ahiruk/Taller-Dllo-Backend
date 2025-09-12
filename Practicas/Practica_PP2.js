// ================================
// Importar dataset real
// ================================

// Cargamos el archivo JSON con los estudiantes
// Asegúrate de que "15-datos-parcial-01.json" esté en la misma carpeta que este script
const estudiantes = require("./15-datos-parcial-01.json");


// ================================
// Definición de funciones
// ================================

// 1) Obtener los nombres de los cursos de un estudiante
function getCourseNames(estudiante) {
  // Usamos map para extraer solo el nombre de cada curso
  return estudiante?.cursos?.map(c => c.nombre) ?? [];
}

// 2) Obtener la nota máxima de un estudiante
function getMaxGrade(estudiante) {
  // Sacamos todas las notas
  const notas = estudiante?.cursos?.map(c => c.nota) ?? [];
  // Si no hay cursos, devolvemos null
  if (notas.length === 0) return null;
  // Usamos reduce para quedarnos con la nota más alta
  return notas.reduce((max, n) => (n > max ? n : max), notas[0]);
}

// 3) Verificar si la altura es mayor a 1.65
function isTallerThan165(estudiante) {
  // Si altura no existe, usamos 0 como valor por defecto
  return (estudiante?.altura ?? 0) > 1.65;
}

// 4) Obtener el nombre completo (nombre + apellido)
function getFullName(estudiante) {
  // Si falta alguno de los dos, se reemplaza por un string vacío
  return `${estudiante?.nombre ?? ""} ${estudiante?.apellido ?? ""}`.trim();
}

// 5) Diferencia de altura entre dos estudiantes
function heightDifference(estA, estB) {
  // Calculamos el valor absoluto de la resta
  return Math.abs((estA?.altura ?? 0) - (estB?.altura ?? 0));
}

// 6) Agregar el campo nombreCompleto al objeto del estudiante
function withFullNameField(estudiante) {
  // Clonamos el objeto con spread operator y agregamos nombreCompleto
  return { ...estudiante, nombreCompleto: getFullName(estudiante) };
}


// ================================
// Pruebas de las funciones (console.log)
// ================================

// 1) Nombres de cursos
console.log("\n===== NOMBRES DE CURSOS =====");
estudiantes.forEach(est => {
  // Mostramos el nombre completo del estudiante y sus cursos
  console.log(getFullName(est), ":", getCourseNames(est));
});

// 2) Nota máxima
console.log("\n===== NOTA MÁXIMA =====");
estudiantes.forEach(est => {
  // Mostramos el nombre completo del estudiante y su nota más alta
  console.log(getFullName(est), ":", getMaxGrade(est));
});

// 3) ¿Altura > 1.65?
console.log("\n===== ALTURA > 1.65 =====");
estudiantes.forEach(est => {
  // Mostramos si cada estudiante es más alto que 1.65
  console.log(getFullName(est), ":", isTallerThan165(est));
});

// 4) Nombre completo
console.log("\n===== NOMBRE COMPLETO =====");
estudiantes.forEach(est => {
  // Mostramos el id del estudiante y su nombre completo
  console.log(est._id, ":", getFullName(est));
});

// 5) Diferencia de altura entre pares
console.log("\n===== DIFERENCIA DE ALTURA =====");
for (let i = 0; i < estudiantes.length - 1; i++) {
  const estA = estudiantes[i];
  const estB = estudiantes[i + 1];
  // Comparamos cada estudiante con el siguiente en la lista
  console.log(
    `${getFullName(estA)} vs ${getFullName(estB)}:`,
    heightDifference(estA, estB)
  );
}

// 6) Estudiante con campo nombreCompleto
console.log("\n===== OBJETO CON NOMBRE COMPLETO =====");
estudiantes.forEach(est => {
  // Mostramos el objeto completo pero con el campo extra "nombreCompleto"
  console.log(withFullNameField(est));
});
