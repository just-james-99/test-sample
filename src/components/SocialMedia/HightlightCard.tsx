const HightLightCard = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div>
        <img className="w-full object-fill" src="/assets/images/social-media/hight-light-overlay-image.png" alt="Overlay" />
      </div>
      <div className="absolute bg-white rounded-2xl">
        <div>
          <img
            src="/assets/images/social-media/hight-light-image.png"
            alt="Hight light card"
          />
          {/* <div className="p-6">
            <div className="flex gap-1 flex-col w-[55%]">
              <div className="text-2xl font-semibold">La famille</div>
              <div className="text-[#666666] text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </div>
            </div>
            <div className="border px-4 py-[6px] rounded-full h-fit">24 Sep 2024</div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HightLightCard;
