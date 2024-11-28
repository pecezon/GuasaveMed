export const getDoctores = async () => {
  try {
    const res = await fetch("http://localhost:8080/api/empleado/doctores", {
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

export const getEmpleado = async (id) => {
  try {
    const res = await fetch(`http://localhost:8080/api/empleado/${id}`, {
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

export const crearEmpleado = async (empleadoNuevo) => {
  try {
    const res = await fetch("http://localhost:8080/api/empleado", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(empleadoNuevo),
    });

    return await res.json();
  } catch (err) {
    console.log(err);
  }
};
