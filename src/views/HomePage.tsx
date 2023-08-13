import React from "react";
import { FlowerList } from "components/Flower/FlowerList";

export const Hero: React.FC = () => (
  <div className="h-[500px] relative bg-cover bg-center bg-hero-image">
    <div className="absolute inset-0 flex justify-center items-center">
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold mb-4 font-montserrat">
          Discover Flowers around you
        </h1>
        <p className="text-lg">Explore between more than 8.427 sightings</p>
        <input
          className="h-[70px] text-secondary mt-10 w-full pl-5 text-lg font-ubuntu outline-none"
          placeholder="Looking for something specific?"
        />
      </div>
    </div>
  </div>
);

export const Homepage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <FlowerList />
    </div>
  );
};
