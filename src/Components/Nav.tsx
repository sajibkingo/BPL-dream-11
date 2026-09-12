import Logo from "../assets/logo.png";

const Nav = () => {
    return (
        <nav>
            <div className="container mx-auto flex justify-between my-2">
                <img src={Logo} alt="" />

                <ul className="flex gap-4 items-center">
                    <li>Home</li>
                    <li>Fixture</li>
                    <li>Players</li>
                    <li>Schedule</li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;