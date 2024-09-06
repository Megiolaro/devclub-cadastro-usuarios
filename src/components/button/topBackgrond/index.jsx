import { Background } from "./styles";
import UsersImage from '../../../assets/Users.png'

function TopBackground(){

    return (

        <Background>
            <img src={UsersImage} />
        </Background>

    )
}

export default TopBackground