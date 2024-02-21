"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  {
    src: "/p1.jpeg", // Use a regular image file
    alt: "Image 1",
    text: "Technical Skill 1",
  },
  { src: "/image2.jpg", alt: "Image 2", text: "Technical Skill 2" },
  { src: "/image3.jpg", alt: "Image 3", text: "Technical Skill 3" },
  // Add more images as needed
];

export function TechnicalSkills() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change carousel image every 5 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full overflow-hidden rounded-lg">
        <div className="relative flex overflow-x-hidden transition duration-300 ease-in-out">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition duration-300 ease-in-out ${
                currentImageIndex === index ? "" : "opacity-0"
              }`}
            >
              {console.log("Image Source:", image.src)} {/* Log image source */}
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                <div className="flex items-center justify-center h-full">
                  <h2 className="text-4xl font-bold text-white">
                    {image.text}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
