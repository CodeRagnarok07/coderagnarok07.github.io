const useState = React.useState


function Navbar({ title }) {
  const [first, setfirst] = useState(false)
  return (
    <React.Fragment> <h2 className="bg-primary">{title}</h2> </React.Fragment>
  )
}
