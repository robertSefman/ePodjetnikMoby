export const login = async (username, password) => {
  const response = await fetch('https://prod.e-podjetnik.com/api/V1/users', {
    method: 'POST',
    headers: {
      "X-Api-Key": "ApiVizir99",
      'content-type': 'application/json',
    },
    body: JSON.stringify({username, password}),
  })

	//console.log(response)

  if (response.ok) {
    const {token} = await response.json()
    return token
  }

  const errMessage = await response.text()
  throw new Error(errMessage)
}

export const poorlyFormatted = usedVar => usedVar
