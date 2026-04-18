const API_URL = process.env.NEXT_PUBLIC_API_URL


export async function loginApi(login, password) {

    const response = await fetch(`${API_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ login, password }),
  })

  if (!response.ok) {
    throw new Error("Username ou senha inválidos")
  }

  return response.json()

}
