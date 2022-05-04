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

      const token = response.data.token

      localStorage.setItem('@balancefy:token', token);

      localStorage.setItem('@balancefy:user', JSON.stringify(response.data.conta));

      api.defaults.headers.common.authorization = `Bearer ${token}`

      setUser(response.data.conta);

    } catch (e) {

      const status = e.response.status

      if(status === 403) {
        setUser(null)

      }
    }
  }

  async function signInGoogle(email) {
    try {
      const response = await api.post('auth/social', {
        email: email
      })

      const token = response.data.token

      localStorage.setItem('@balancefy:token', token);

      localStorage.setItem('@balancefy:user', JSON.stringify(response.data.conta));

      api.defaults.headers.common.authorization = `Bearer ${token}`

      setUser(response.data.conta);

    } catch (e) {

      const status = e.response.status

      if(status === 403) {
        setUser(null)

      }
    }
  }

  function signOutDefault() {
      setUser(null)
      localStorage.removeItem('@balancefy:token')
      localStorage.removeItem('@balancefy:user')
      window.location.href = "/";
  }

  useEffect(() => {
    const token = localStorage.getItem('@balancefy:token')

    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`

      var usuario = localStorage.getItem('@balancefy:user')
  
      setUser(JSON.parse(usuario))      
      // api.get('users').then(response => {
        
      // })
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, signOutDefault, signIn, signInGoogle }}>
      {props.children}
    </AuthContext.Provider>
  )

}

