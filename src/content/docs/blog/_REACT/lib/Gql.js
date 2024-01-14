const Gql = async (query, vars = null) => {
  const bodyData = JSON.stringify({query,vars})//
  try {
    const resApi = await fetch("https://arrullos-dev.arrullosec.com/graphql", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: bodyData
    })

    const dataApi = resApi.json()
    return dataApi


  } catch (error) {
    console.log("network error")
    return { data: error }
  }
}

export default Gql