import React, { useState, useRef, useEffect } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { gsap } from "gsap";
import Button from "../common/Button";
import SvgIcon, { IconName } from "../common/SvgIcon";
import Mark from "./Mark";
import { useTranslation } from "react-i18next";

interface Activity {
  id: number;
  name: string;
}

interface Location {
  id: number;
  name: string;
  xPercent: number;
  yPercent: number;
  activities: Activity[];
  icon: IconName;
}

const Map: React.FC = () => {
  const { t } = useTranslation();
  const MAP_WIDTH = 1240;
  const MAP_HEIGHT = 800;

  const mapActivities = [t("bloc_2.cases.0"), t("bloc_2.cases.1"), t("bloc_2.cases.2")];

  const locations: Location[] = [
    {
      id: 1,
      name: "Lorem 1",
      xPercent: 40,
      yPercent: 30,
      activities: [
        { id: 0, name: mapActivities[0] },
        { id: 1, name: mapActivities[1] },
      ],
      icon: "fishing",
    },
    {
      id: 2,
      name: "Lorem 2",
      xPercent: 70,
      yPercent: 50,
      activities: [
        { id: 1, name: mapActivities[1] },
        { id: 2, name: mapActivities[2] },
      ],
      icon: "mountains",
    },
    {
      id: 3,
      name: "Lorem 3",
      xPercent: 20,
      yPercent: 40,
      activities: [
        { id: 1, name: mapActivities[1] },
        { id: 2, name: mapActivities[2] },
      ],
      icon: "cross-hair",
    },
  ];

  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );
  const [selectedActivities, setSelectedActivities] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [, setContainerDimensions] = useState({
    width: 0,
    height: 0,
  });

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const transformWrapperRef = useRef<any>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (mapContainerRef.current) {
        setContainerDimensions({
          width: mapContainerRef.current.offsetWidth,
          height: mapContainerRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = "/assets/map/map.png";
    img.onload = () => setIsLoading(false);
    img.onerror = () => setIsLoading(false);
  }, []);

  useEffect(() => {
    if (selectedLocation && popupRef.current) {
      gsap.fromTo(
        popupRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        }
      );
    }
  }, [selectedLocation]);

  const getPixelPosition = (percent: number, dimension: number) =>
    (percent / 100) * dimension;

  const handleActivityFilter = (activityId: number) => {
    setSelectedActivities((prev) =>
      prev.includes(activityId)
        ? prev.filter((id) => id !== activityId)
        : [...prev, activityId]
    );
    resetMap();
  };

  const filteredLocations =
    selectedActivities.length > 0
      ? locations.filter((location) =>
          location.activities.some((activity) =>
            selectedActivities.includes(activity.id)
          )
        )
      : locations;

  const handleLocationClick = (location: Location) => {
    if (selectedLocation?.id === location.id) {
      if (popupRef.current) {
        gsap.to(popupRef.current, {
          y: 50,
          opacity: 0,
          duration: 0.3,
          ease: "power3.in",
          onComplete: () => {
            resetMap();
          },
        });
      } else {
        resetMap();
      }
    } else {
      if (selectedLocation && popupRef.current) {
        gsap.to(popupRef.current, {
          y: 50,
          opacity: 0,
          duration: 0.3,
          ease: "power3.in",
          onComplete: () => {
            setSelectedLocation(location);
            centerMapOnLocation(location);
          },
        });
      } else {
        setSelectedLocation(location);
        centerMapOnLocation(location);
      }
    }
  };

  const centerMapOnLocation = (location: Location) => {
    if (mapContainerRef.current && transformWrapperRef.current) {
      const containerWidth = mapContainerRef.current.offsetWidth;
      const containerHeight = mapContainerRef.current.offsetHeight;

      const locationX = getPixelPosition(location.xPercent, MAP_WIDTH);
      const locationY = getPixelPosition(location.yPercent, MAP_HEIGHT);

      const centerX = containerWidth / 2;
      const centerY = containerHeight / 2;

      transformWrapperRef.current.setTransform(
        centerX - locationX * 1.5,
        centerY - locationY * 1.5,
        1.5,
        700
      );
    }
  };

  const resetMap = () => {
    setSelectedLocation(null);
    if (transformWrapperRef.current) {
      transformWrapperRef.current.resetTransform(800);
    }
  };

  return (
    <div className="mx-auto mt-6">
      <div className="flex justify-center gap-5 mb-6">
        {[0,1,2].map((activityId) => (
          <Button
            onClick={() => handleActivityFilter(activityId)}
            key={activityId}
            className={`border-[2px] px-4 py-2 flex gap-1 border-activity ${
              selectedActivities.includes(activityId) ? "bg-[#FFEDE8]" : ""
            } hover:bg-[#FFEDE8] transition-all duration-300`}
          >
            <SvgIcon name="mountains" color="#562C2C" />
            <div className="text-xl font-medium text-secondary">
              {t(`bloc_2.cases.${activityId}`)}
            </div>
          </Button>
        ))}
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-96">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
        </div>
      ) : (
        <div
          ref={mapContainerRef}
          className="relative w-full h-96 md:h-[600px] bg-blue-50 rounded-lg overflow-hidden shadow-lg cursor-grab"
        >
          <TransformWrapper
            ref={transformWrapperRef}
            initialScale={1}
            minScale={1}
            maxScale={2}
            limitToBounds={true}
            centerOnInit={true}
            wheel={{ step: 0.1 }}
            pinch={{ step: 0.1 }}
            doubleClick={{ disabled: true }}
            panning={{ velocityDisabled: false }}
          >
            {() => (
              <>
                <TransformComponent
                  wrapperStyle={{
                    width: "100%",
                    height: "100%",
                  }}
                  contentStyle={{
                    width: MAP_WIDTH,
                    height: MAP_HEIGHT,
                  }}
                >
                  <div className="relative">
                    <img
                      src="/assets/map/map.png"
                      alt="Carte des pourvoiries"
                      className="w-full h-full object-none"
                    />

                    {filteredLocations.map((location) => {
                      const x = getPixelPosition(location.xPercent, MAP_WIDTH);
                      const y = getPixelPosition(location.yPercent, MAP_HEIGHT);

                      return (
                        <div
                          key={location.id}
                          className={`absolute cursor-pointer transition-all duration-300 ${
                            selectedLocation?.id === location.id
                              ? "z-50 scale-125"
                              : "z-10 hover:scale-110"
                          } animate-bounce-in`}
                          style={{
                            left: x,
                            top: y,
                            transform: "translate(-50%, -50%)",
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleLocationClick(location);
                          }}
                          onTouchStart={(e) => {
                            e.stopPropagation();
                            handleLocationClick(location);
                          }}
                        >
                          <div>
                            <Mark icon={location.icon} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </TransformComponent>

                {selectedLocation && (
                  <div
                    ref={popupRef}
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg z-50 w-11/12 max-w-md md:max-w-lg"
                  >
                    <h2 className="text-xl font-bold text-primary mb-2">
                      {selectedLocation.name}
                    </h2>
                    <div className="mb-2">
                      <p className="text-secondary font-medium">
                        Activités disponibles:
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {selectedLocation.activities.map((activity) => (
                          <span
                            key={activity.id}
                            className="px-3 py-1 bg-orange-100 text-description rounded-full text-sm"
                          >
                            {activity.name}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button
                      className="bg-primary w-full text-white hover:bg-[#CA3E1B] transition-all duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        resetMap();
                      }}
                    >
                      Close
                    </Button>
                  </div>
                )}

                <div className="absolute top-4 left-4 px-[10px] py-1 rounded-md bg-white/60 shadow-md backdrop-blur-sm flex items-center gap-1">
                  <img src="/assets/map/logo.png" alt="Logo" />
                  <div className="font-bold text-secondary">Emplacement</div>
                </div>
              </>
            )}
          </TransformWrapper>
        </div>
      )}
    </div>
  );
};

export default Map;
