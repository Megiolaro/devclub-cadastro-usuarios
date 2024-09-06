import Button from "../../../components/button"
import TopBackground from "../../../components/button/topBackgrond"
import { useEffect, useState } from "react"
import api from "../../../services/api"
import trash from "../../../assets/trash.svg"
import {Container, Title, ContainerUsers, CardUsers, TrashIcon, Avatar} from "./style"
import { useNavigate } from "react-router-dom"


function ListUsers() {

    const navigate = useNavigate()

    const [users, setUsers] = useState([])

    useEffect(() => {

        async function getUsers() {
            const { data } = await api.get('/usuarios')

            setUsers(data)

        }
        getUsers()

    }, [])

    async function deleteUsers(id){
        await api.delete(`/usuarios/${id}`)

        const updatedUsers = users.filter(user => user.id !== id)

        setUsers(updatedUsers)
    }

    return (
        <Container>
            <TopBackground />
            <Title>Listagem de usuarios</Title>
            <ContainerUsers>
                {users.map(user => (
                    <CardUsers key={user.id}>
                        <Avatar src={`https://avatar.iran.liara.run/public?username=${user.id}`} />
                        <div>
                            <h3>{user.name}</h3>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                        </div>
                        <TrashIcon src={trash} onClick={() => deleteUsers(user.id)}/>
                    </CardUsers>
                ))}
            </ContainerUsers>


            <Button type="button" onClick={() => navigate('/')}>Voltar</Button>
        </Container>

    )

}

export default ListUsers