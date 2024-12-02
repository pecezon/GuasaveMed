export const crearExpediente = async (expedienteNuevo) => {
  try {
    const res = await fetch("http://localhost:8080/api/expediente", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expedienteNuevo),
    });

    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

export const getExpedientes = async () => {
  try {
    const res = await fetch("http://localhost:8080/api/expediente", {
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

export const getExpedientePorIdExp = async (id) => {
  try {
    const res = await fetch(`http://localhost:8080/api/expediente/${id}`, {
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

export const getExpedientePaciente = async (id) => {
  try {
    const res = await fetch(
      `http://localhost:8080/api/expediente/paciente/${id}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

export const actualizarExpediente = async (id, expedienteActualizado) => {
  try {
    const res = await fetch(`http://localhost:8080/api/expediente/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expedienteActualizado),
    });

    return await res.json();
  } catch (err) {
    console.log(err);
  }
};
