import { HiCurrencyDollar } from "react-icons/hi";
import Logo from "../assets/logo.png";

const Nav = ({coin}: {coin:number}) => {
    
    return (
        <nav>
            <div className="container mx-auto flex justify-between my-2 items-center">
                <img src={Logo} alt="" />

                <ul className="flex gap-4 items-center">
                    <li>Home</li>
                    <li>Fixture</li>
                    <li>Players</li>
                    <li>Schedule</li>
                </ul>

                <h2 className="font-bold text-2xl text-black-500 flex items-center gap-1">{coin}<HiCurrencyDollar /></h2>
            </div>
        </nav>
    );
};

export default Nav;