export const crearReceta = async (recetaNueva) => {
    try {
      const res = await fetch("http://localhost:8080/api/receta", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recetaNueva),
      });
  
      return await res.json();
    } catch (err) {
      console.log(err);
    }
  };

  export const getReceta = async (id) => {
    try {
      const res = await fetch(`http://localhost:8080/api/receta/${id}`, {
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