

// const someFn = <T extends Record<string, any>>(data:T)=> ({..data}) as T

function saludar(nombre) {
    console.log(`Hola, ${nombre}`);
  }
  
  const persona = {
    nombre: "María"
  };
  
  saludar.apply(persona, ["María", "pedro"]); 