import { Container, Form, Title, ContainerInputs, InputLabel, Input } from './styles'
import { useRef } from 'react'
import api from '../../services/api'
import Button from '../../components/button'
import TopBackground from '../../components/button/topBackgrond'
import { useNavigate } from 'react-router-dom'

function App() {

const inputName = useRef()
const inputAge = useRef()
const inputEmail = useRef()

const navigate = useNavigate()

async function registerNewUser(){

  await api.post('/usuarios', {

    email: inputEmail.current.value,
    age: parseInt(inputAge.current.value),
    name: inputName.current.value

  })

  navigate('/lista-de-usuarios')
}


  return (

    <Container>

      <TopBackground/>

      <Form>
        <Title>Cadastrar Usuário</Title>
        <ContainerInputs>

          <div>
            <InputLabel>Nome<span> *</span></InputLabel>
            <Input type="text" placeholder="Nome do Usuário" ref={inputName} />
          </div>
          <div>
            <InputLabel>Idade<span> *</span></InputLabel>
            <Input type="number" placeholder="Idade" ref={inputAge}/>
          </div>


        </ContainerInputs>
        <div style={{width: '100%'}}>
          <InputLabel>E-mail<span> *</span></InputLabel>
          <Input type="email" placeholder="E-mail" ref={inputEmail} />
        </div>
        <Button type='button' onClick={registerNewUser} theme="primary">Cadastar Usuário</Button>
      </Form>
      <Button onClick={() => navigate('/lista-de-usuarios')}>Lista de Usuários</Button>
    </Container>

  )
}

export default App
