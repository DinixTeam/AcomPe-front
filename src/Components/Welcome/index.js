import { Container, Image} from "./style";
import wallpaper from '../../Assets/wallpaper.png'

const Welcome = () => {



    return (
        <Container style={{ background: '#7698db' }}>
            <div style={{ width: '80%', marginTop: '20px', marginLeft: '10%', marginBottom: '20px', justifyItems: "center" }}>
                <Image src={wallpaper}/>
                <h2>Comece a adicionar pacientes !</h2>
            </div>
        </Container>
    );
}


export default Welcome;