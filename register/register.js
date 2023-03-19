export async function registerUser(email, password) {
    const user = {
        username: email,
        password: password 
    }

    const response = await fetch('http://localhost:8000/auth/register', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json"
        }
    })

    if (!response.ok) {
        throw new Error('Error al registrar al usuario')
    }

    const data = await response.json()

    return data.accessToken;
}