import cake from '../img/cake.jpg'
import Stack from 'react-bootstrap/Stack';

function Home(){
    return(
        <Stack gap={4} className="col-md-8 mx-auto">
            <h1 className='d-flex justify-content-center'>Bienvenido a <b>Happy Cake</b></h1>
            <h4 className='d-flex justify-content-center'>El lugar de los pasteles felices</h4>
            <div className='d-flex justify-content-center' >
                <img src={cake} alt="cake" width="500" height="500" />
            </div>
            
        </Stack>
    )
}
export default Home