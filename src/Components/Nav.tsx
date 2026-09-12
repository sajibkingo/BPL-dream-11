import Logo from "../assets/logo.png";

const Nav = () => {
    return (
        <nav>
            <img src={Logo} alt="" />
            <ul>
                <li>Fixture</li>
                <li>Players</li>
                <li>Schedule</li>
            </ul>
        </nav>
    );
};

export default Nav;