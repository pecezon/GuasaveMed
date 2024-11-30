export const getCitasPorPaciente = async (id) => {
  try {
    const res = await fetch(`http://localhost:8080/api/cita/paciente/${id}`, {
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

export const getCita = async (id) => {
  try {
    const res = await fetch(`http://localhost:8080/api/cita/${id}`, {
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

export const crearCita = async (citaNueva) => {
  try {
    const res = await fetch("http://localhost:8080/api/cita", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(citaNueva),
    });

    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

//no estoy segura de esto
export const borrarCita = async (id) => {
  try {
    const res = await fetch(`http://localhost:8080/api/cita/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });

    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

export const editarCita = async (id, cita) => {
  try {
    const res = await fetch(`http://localhost:8080/api/cita/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cita),
    });

    return await res.json();
  } catch (err) {
    console.log(err);
  }
};
