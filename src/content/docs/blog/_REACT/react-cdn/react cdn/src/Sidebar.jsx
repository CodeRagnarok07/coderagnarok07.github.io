const useState = React.useState


function Sidebar({ title }) {
  const [first, setfirst] = useState(false)
  return (
    <div> <h2>i am a siderbar </h2> </div>
  )
}

render("#sidebar", <Sidebar />)
