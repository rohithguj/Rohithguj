/* eslint-disable */
"use client";
import React, { useState } from "react";
import { NavBtn } from "./CustomBtn";
import { CardData } from "../Types/CardData";

type customInput = {
  key: string;
  cardData: CardData;
};

const CustomCard: React.FC<customInput> = ({ key, cardData }: customInput) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative group">
      <div
        className="w-70 h-48 overflow rounded-lg cursor-pointer group-hover:scale-105 transition-all duration-300 ease-in-out relative"
        onClick={cardData.detailed ? handleCardClick : () => {}}
      >
        <div className="min-w-80 w-80 h-full bg-gray-800 backdrop-blur-sm">
          <div className="min-w-80 w-full h-full">
            {cardData.imageUrl ? (
              <img
                src={cardData.imageUrl}
                alt={cardData.title}
                className="w-full h-full object-cover opacity-50 rounded-lg"
              />
            ) : (
              <div className="w-full h-full object-cover opacity-50 blur-sm rounded-lg flex items-center justify-center bg-purple-700 text-white"></div>
            )}
            <div className="text-xl py-2">{cardData.title}</div>
            <div className="text-m">{cardData.primaryText}</div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-10 bg-gray-900 bg-opacity-50 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setIsOpen(false)}
        >
          <div className="bg-black rounded-lg shadow-md w-3/4 p-8">
            <h2>{cardData.title}</h2>
            <br />
            <p className="mb-4 text-gray-700">{cardData.description}</p>
            {cardData.redirectUrl && (
              <div className="items-center justify-center flex">
                <NavBtn
                  color="text-purple-600"
                  buttonText="Detailed View"
                  href={cardData.redirectUrl}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomCard;
