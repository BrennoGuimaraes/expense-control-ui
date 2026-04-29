const API_URL = process.env.NEXT_PUBLIC_API_URL


export async function postRegisterApi(body) {

    const response = await fetch(`${API_URL}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    throw new Error("Username ou senha inválidos")
  }

  return response.json()

}
