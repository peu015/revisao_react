import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  function handleEmail(evento){
    setEmail(evento.target.value)
  }

  function handleSenha(evento){
    setSenha(evento.target.value)
  }

  function handleSubmit(){
    alert(`
    seu e-mail é: ${email}
    sua senha é: ${senha}
    `)
  }

  return (
    <>
      <header>
        <h1>Login</h1>
      </header>

      <main>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">E-mail: </label>
            <input id='email' type="email" placeholder='Digite seu e-mail' onChange={handleEmail}/>
          </div>
          <div>
            <label htmlFor="senha">Senha: </label>
            <input id='senha' type="password" placeholder='Digite sua senha' onChange={handleSenha}/>
          </div>

          <button>Send</button>

        </form>
      </main>
    </>
  )
}

export default App
