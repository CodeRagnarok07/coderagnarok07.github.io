const useState  = React.useState

console.log("hola mundo");

function Navbar({title}) {
    const [first, setfirst] = useState(false)
    return (
      <div> <h1>{title}</h1> </div>
    )
  }