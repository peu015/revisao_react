import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <header>
        <h1>Login</h1>
      </header>

      <main>
        <form action="">
          <div>
            <label htmlFor="email">E-mail: </label>
            <input id='email' type="email" placeholder='Digite seu e-mail'/>
          </div>
          <div>
            <label htmlFor="senha">Senha: </label>
            <input id='senha' type="password" placeholder='Digite sua senha'/>
          </div>
        </form>
      </main>
    </>
  )
}

export default App
