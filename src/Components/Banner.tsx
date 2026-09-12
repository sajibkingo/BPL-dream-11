import BannerLogo from "../assets/banner-main.png"

const Banner = () => {
    return (
        <div className='container mx-auto min-h-[400px] bg-purple-500 my-4 flex justify-center items-center mb-15'>
            <div className="flex flex-col justify-between items-center">
                <img src={BannerLogo} alt="" />
                <h2 className='font-bold text-5xl'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                <p>Beyond Boundaries Beyond Limits</p>
                <button>Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Banner;