export const getPacientes = async () => {
  try {
    const res = await fetch("http://localhost:8080/api/paciente", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

export const getPaciente = async (id) => {
  try {
    const res = await fetch(`http://localhost:8080/api/paciente/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

export const crearPaciente = async (pacienteNuevo) => {
  try {
    const res = await fetch("http://localhost:8080/api/paciente", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pacienteNuevo),
    });

    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

export const actualizarPaciente = async (id, pacienteActualizado) => {
  try {
    const res = await fetch(`http://localhost:8080/api/paciente/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pacienteActualizado),
    });

    return await res.json();
  } catch (err) {
    console.log(err);
  }
};
