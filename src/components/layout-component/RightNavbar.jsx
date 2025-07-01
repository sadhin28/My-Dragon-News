import FindUs from "../FindUs";
import SocialLogin from "../SocialLogin";

const RightNavbar = () => {
    return (
        <div className=" sticky md:top-20 left grid grid-cols-2 items-center gap-[50px] md:gap-0 md:grid-cols-1">
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
        </div>
    );
};

export default RightNavbar;