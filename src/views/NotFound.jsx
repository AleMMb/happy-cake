
import imagen from "../img/emoji.png";


function NotFound(){
    return(
        <div className="text-center my-5">
            <img src={imagen} alt="Something went wrong" />
            <h3>Ups! Algo salió mal</h3>
            <h5>Lo sentimos, por favor dirígete a Home.</h5>
        </div>
    )
}
export default NotFound