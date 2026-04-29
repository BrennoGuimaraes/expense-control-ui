const API_URL = process.env.NEXT_PUBLIC_API_URL


export async function getCategoriesWithPercentApi() {

  const token = localStorage.getItem('token');

  const response = await fetch(`${API_URL}/transaction/categories-percent`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
  })

  if (!response.ok) {
    throw new Error("Username ou senha inválidos")
  }

  return response.json()

}
