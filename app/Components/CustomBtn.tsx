"use client";
import { ButtonProps } from "../Types/btn";

export function NavBtn({
  color,
  bgColor,
  buttonText,
  href,
  targetBlank,
}: ButtonProps) {
  const handleClick = () => {
    if (href) {
      if (targetBlank) {
        window.open(href, "_blank");
      } else {
        if (href) {
          const targetElement = document.getElementById(href);
          console.log("Href ---->", href)
          console.log("targetElement ---->", targetElement);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          window.location.href = href;
        }
      }
    }
  };

  return (
    <button
      className={`${color} ${bgColor} font-semibold px-4 py-4 rounded hover:text-purple-700 hover:shadow-md hover:bg-purple-700/20`}
      onClick={handleClick}
    >
      {buttonText}
    </button>
  );
}
