import BannerLogo from "../assets/banner-main.png"

const Banner = () => {
    return (
        <div className='container mx-auto min-h-120 bg-[#828CE4] rounded-3xl my-4 flex justify-center items-center mb-15'>
            <div className="flex flex-col justify-between items-center space-y-4 text-white">
                <img src={BannerLogo} alt="" />
                <h2 className='font-bold text-5xl'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                <p className="text-xl font-mono">Beyond Boundaries Beyond Limits</p>
                <button className="btn">Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Banner;