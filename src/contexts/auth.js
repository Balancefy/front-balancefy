import { createContext, useEffect, useState } from "react";
import api from "../service/api";

export const AuthContext = createContext();

export function AuthProvider(props) {
  const [user, setUser] = useState(null)

  async function signIn(email, senha) {

    try {
      const response = await api.post('auth', {
        email: email,
        senha: senha
      })
      console.log(response.data)

      const token = response.data.token

      localStorage.setItem('@balancefy:token', token);

      api.defaults.headers.common.authorization = `Bearer ${token}`

      setUser(response.data.conta);

      console.log(localStorage.getItem('@balancefy:token'))

    } catch (e) {

      const status = e.response.status

      if(status === 403) {
        setUser(null)

      }
    }
  }

  function signOut() {
    setUser(null)
    localStorage.removeItem('@balancefy:token')
    window.location.href = "/";
  }

  useEffect(() => {
    const token = localStorage.getItem('@balancefy:token')

    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`

      api.get('users').then(response => {
        setUser(response.data)
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, signOut, signIn }}>
      {props.children}
    </AuthContext.Provider>
  )

}

