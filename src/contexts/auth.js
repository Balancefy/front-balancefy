import { createContext, useEffect, useState } from "react";
import api from "../service/api";

export const AuthContext = createContext();

export function AuthProvider(props) {
  const [user, setUser] = useState(null)

  async function signIn(email, senha) {

    try {
      const response = await api.post('login', {
        email: email,
        senha: senha
      })
      console.log(response.data)

      localStorage.setItem('@balancefy:token', response.data);

      api.defaults.headers.common.authorization = `Bearer ${response.data}`

      setUser(response.data);

      console.log(localStorage.getItem('@balancefy:token'))

    } catch (e) {

      console.log(e.response.status)

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
      api.get('user').then(response => {
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

