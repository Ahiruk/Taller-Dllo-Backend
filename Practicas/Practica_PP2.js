// Importar dataset real
const estudiantes = require("./15-datos-parcial-01.json");

// -------- FUNCIONES --------
function getCourseNames(estudiante) {
  return estudiante?.cursos?.map(c => c.nombre) ?? [];
}
function getMaxGrade(estudiante) {
  const notas = estudiante?.cursos?.map(c => c.nota) ?? [];
  if (notas.length === 0) return null;
  return notas.reduce((max, n) => (n > max ? n : max), notas[0]);
}
function isTallerThan165(estudiante) {
  return (estudiante?.altura ?? 0) > 1.65;
}
function getFullName(estudiante) {
  return `${estudiante?.nombre ?? ""} ${estudiante?.apellido ?? ""}`.trim();
}
function heightDifference(estA, estB) {
  return Math.abs((estA?.altura ?? 0) - (estB?.altura ?? 0));
}
function withFullNameField(estudiante) {
  return { ...estudiante, nombreCompleto: getFullName(estudiante) };
}

// -------- LOGS SEPARADOS --------

// 1) Nombres de cursos
console.log("\n===== NOMBRES DE CURSOS =====");
estudiantes.forEach(est => {
  console.log(getFullName(est), ":", getCourseNames(est));
});

// 2) Nota máxima
console.log("\n===== NOTA MÁXIMA =====");
estudiantes.forEach(est => {
  console.log(getFullName(est), ":", getMaxGrade(est));
});

// 3) ¿Altura > 1.65?
console.log("\n===== ALTURA > 1.65 =====");
estudiantes.forEach(est => {
  console.log(getFullName(est), ":", isTallerThan165(est));
});

// 4) Nombre completo
console.log("\n===== NOMBRE COMPLETO =====");
estudiantes.forEach(est => {
  console.log(est._id, ":", getFullName(est));
});

// 5) Diferencia de altura entre pares
console.log("\n===== DIFERENCIA DE ALTURA =====");
for (let i = 0; i < estudiantes.length - 1; i++) {
  const estA = estudiantes[i];
  const estB = estudiantes[i + 1];
  console.log(
    `${getFullName(estA)} vs ${getFullName(estB)}:`,
    heightDifference(estA, estB)
  );
}

// 6) Estudiante con campo nombreCompleto
console.log("\n===== OBJETO CON NOMBRE COMPLETO =====");
estudiantes.forEach(est => {
  console.log(withFullNameField(est));
});
