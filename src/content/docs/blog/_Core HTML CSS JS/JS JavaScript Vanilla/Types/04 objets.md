## Objetos {}

- Puede almacenar todo tipo de datos
    
    ```jsx
    let dict = {
    "198":"excapar de las \"comillas\" " + "se puede concatenar",
    Numero:1 + 1.254568978454545645478,
    Arrays:["es", "el", "equivalente", "a", "lista"],
    Objetos: {key1:"valor", key:"valor2"},
    Booleano:false,
    Undefine: undefined,
    Nulo: null,
    NaN: "no" *2,
    "def": ()=> "tambien pueden almacenar funciones",
    getnull: function(){
    return this.nulo
    },
    setnull: function(nulo){  //// esta complicado pero segun set da algo si entra un nuevo valor hay y set lo modifica con condicion
    return this.nulo
    },
    pintar: function(){
    console.log(Objetos)
    }
    }
    ```
    
- Acceder a los datos
    
    ```jsx
    // Acceder a los sub objetos
    
    dict.Objetos["dato2"]    
    // puede llamar aunque la key sea string o variable, no puede llamar por numero
    
    dict["Objetos"].key1    
    // debe llamarse asi independientemente si sea string o variable o numero
    
    dict["198"]             
    //es la unica forma de llamar keys que son numeros
    
    dict.def()              
    // de esta manera se llaman a las funciones que hay dentro
    
    dict.Object.values(dict) // llama todos los balues
    dict.Object.keys(dict)
    ```
    
- Constructor de objetos
    
    ```jsx
    //ARMAR EL CONSTRUCTOR
    function Pnj (n , r, s ){
    this.nombre = n
    this.rol =  r
    this.skill = s
    }
    
    // CONSTRUIR OBJETOS 
    var aldeano1 = new Pnj("ramon", "vendedor", 99 )
    var aldeano2 = new Pnj("antonio", "leñador", 99 )
    var aldeano3 = new Pnj("juancho", "aguardiente", 99 )
    ```
    
- Destructuración
    
    ```jsx
    const iten = {
        id:5,
        title: "iten1",
        qlt: 200
    }
    const {id, title, qlt} = iten
    console.log(id, title, qlt) // 5 'iten1' 200
    
    // en funcion
    const funcion = ({id, title}) =>{
        console.log(id, title)
    }
    funcion(iten)
    ```