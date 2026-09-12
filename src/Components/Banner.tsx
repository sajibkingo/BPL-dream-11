import BannerLogo from "../assets/banner-main.png"

const Banner = () => {
    return (
        <div className='min-h-[400px] bg-purple-500 my-20 flex justify-center items-center'>
            <img src={BannerLogo} alt="" />
            <h2 className='font-bold text-6xl'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
        </div>
    );
};

export default Banner;