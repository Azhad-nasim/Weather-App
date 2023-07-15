import React from "react";
import classNames from "classnames";

function TopButton({ setQuery, isMobile }) {
  const containerClasses = classNames("text-white text-lg  font-medium", {
    "text-white text-sm  font-small": isMobile,
    "text-white text-md font-medium": !isMobile,
  });

  const cities = [
    {
      id: 1,
      title: "Delhi",
    },
    {
      id: 2,
      title: "Bangalore",
    },
    {
      id: 3,
      title: "Mumbai",
    },
    {
      id: 4,
      title: "London",
    },
    {
      id: 5,
      title: "Paris",
    },
  ];
  return (
    <div className="flex items-center justify-around  my-6">
      {cities.map((city) => (
        <button
          className={containerClasses}
          key={city.id}
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButton;
