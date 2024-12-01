export const login = async (credentials) => {
    try {
      const res = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
  
      return await res.json();
    } catch (err) {
      console.log(err);
    }
  };