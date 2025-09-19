const datos = require("./datos.json");

function puntoUno(estudiantes,extracurricular) {
  // CODIGO DE PUNTO 1 AQUI
  
  return estudiantes.filter((est) => est?.info_extra_curriculares?.some((ext) => ext?.nombre === extracurricular)).map((est) => est?.info_personal?.correo ?? "correo_no_disponible");

}

console.log("Punto 1:", puntoUno(datos,"INNOVA"));

const promMateria = (materia = {}) => {
  const notas = materia?.notas ?? [];
  return notas.reduce((acc, { nota }) => acc + nota, 0) / (notas.length || 1);
};

const promEstud = (estudiante = {}) => {
  const { nombre, apellido } = estudiante?.info_personal ?? {};
  const listNotas = estudiante?.info_matricula ?? [];
  const promAcum =
    listNotas.map(promMateria).reduce((a, b) => a + b, 0) / (listNotas.length || 1);
  const maxSemestre = Math.max(...listNotas.map((n) => n.semestre ?? 0), 0);
  const nombreCompleto = `${nombre ?? "NN"} ${apellido ?? ""}`.trim();
  return { nombre: nombreCompleto, prom: promAcum, semestre: maxSemestre };
};

function puntoDos(estudiantes,semestre){
  // CODIGO DE PUNTO 2 AQUI
  const listProm = estudiantes.map(promEstud);
  const semestres = Array.from({ length: 10 }, (_, i) => i + 1);
  return semestres.map((sem) => {
    const estudiantesSem = listProm.filter((p) => p.semestre === sem);
    if (estudiantesSem.length > 0) {
      const { nombre } = estudiantesSem.reduce((max, est) =>
        est.prom > max.prom ? est : max
      );
      return `${nombre} - Semestre ${sem}`;
    }
    return `No hay estudiantes - Semestre ${sem}`;
  });

}

console.log("Punto 2:", puntoDos(datos,1));

const mapFunction = (item = {}) => {
  const {
    gender,
    nombre,
    apellido,
    altura,
    nacimiento,
    correo,
  } = item?.info_personal ?? {};
  const titulo = gender === "M" ? "Sr." : "Sra.";
  const nombreCompleto = `${nombre ?? ""} ${apellido ?? ""}`.trim();
  const primerNombre = nombre ?? "N/A";
  const primerApellido = apellido ?? "N/A";
  const alturaCm = (altura ?? 0) * 100;
  const edad = 2024 - parseInt(nacimiento?.substring(0, 4) ?? "2024");
  const usuario = correo?.split("@")[0] ?? "usuario_desconocido";
  return {
    gender,
    titulo,
    nombreCompleto,
    primerNombre,
    primerApellido,
    altura: alturaCm,
    edad,
    nacimiento,
    correo,
    usuario,
  };
};
function puntoTres(estudiantes){
  // CODIGO DE PUNTO 3 AQUI
  return estudiantes.filter((est) =>est?.info_matricula?.sort((a, b) => b.semestre - a.semestre)[0]?.semestre === 1).map(mapFunction);
}
console.log("Punto 3:", puntoTres(datos));



function puntoCuatro(estudiantes) {
  // CODIGO DE PUNTO 4 AQUI
  estudiantes.map;
}

console.log(puntoCuatro);
