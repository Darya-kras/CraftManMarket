import { NavLink } from "react-router-dom";
import "./style.css";
const Header = () => {
    return ( 
        <nav className="nav">
            <div className="navrow">
                <NavLink to="/" className="logo">
                    <img className="LogoIMG" src="%PUBLIC_URL%/Logo3.svg" alt=" "></img>
                    <span className="logotxt" >Egor CraftMan</span>
                </NavLink>
            
            <ul className="txt">
                    <div><NavLink to="/OrderList" className="point">Мои заказы</NavLink></div>
                    <div><NavLink to="/" className="point">О нас</NavLink></div>
                    <div><NavLink to="/OrderAdd" className="point">Сделать заказ</NavLink></div>
            </ul>
            </div>
            
        </nav>


     );
}
 
export default Header;