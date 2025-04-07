import SvgIcon from "../common/SvgIcon";
import "./style.css";

const HeroBanner = () => {
  const NAV_ITEMS = [
    { id: 1, icon: <SvgIcon name="mountains" size={32}/> },
    { id: 2, icon: <SvgIcon name="fishing" size={32} /> },
    { id: 3, icon: <SvgIcon name="cross-hair" size={32} /> },
  ];
  return (
    <div className="wrapper flex justify-center h-[100vh] w-[100vw]">
      <video
        className="object-cover"
        src={"/assets/video/hero.mov"}
        width="100%"
        autoPlay
        muted
        loop
      />
      <div className="absolute bottom-20 container px-20 h-20 z-1">
        <nav className="flex items-center">
          {NAV_ITEMS.map((item) => (
            <div className="flex-1 flex justify-center cursor-pointer" key={item.id}>{item.icon}</div>
          ))}
        </nav>
      </div>
      <div className="absolute bottom-20 right-36 bg-primary hover:bg-[#CA3E1B] transition-all duration-300 p-3 rounded-full cursor-pointer">
        <SvgIcon name="chats" size={32}/>
      </div>
    </div>
  );
};

export default HeroBanner;
