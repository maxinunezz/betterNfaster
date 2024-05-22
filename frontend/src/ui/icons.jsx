import React from "react";

//Elementos muy chicos y con poca logica o una logica simple. Cuando se manejan estados en las funciones recein ahi se lo podria considerar un componente

export function CheckIcon({ disabled }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.4866 3.78676L5.81996 13.1201C5.69431 13.2556 5.51807 13.3328 5.33329 13.3334C5.15609 13.3345 4.98577 13.2649 4.85996 13.1401L1.52663 9.80676C1.26521 9.54535 1.26521 9.12151 1.52663 8.8601C1.78804 8.59868 2.21188 8.59868 2.47329 8.8601L5.33329 11.7068L13.5133 2.8801C13.6702 2.68661 13.9219 2.59674 14.1658 2.64708C14.4098 2.69741 14.6053 2.87957 14.6728 3.11936C14.7403 3.35914 14.6685 3.61656 14.4866 3.78676Z"
        fill={disabled ? "gray" : "#000"}
      />
    </svg>
  );
}

export function ArrowIcon({ isOpen }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
    >
      <path
        d="M21.66 8.75001L12.66 16.75C12.2825 17.0817 11.7175 17.0817 11.34 16.75L2.34 8.75001C1.95391 8.37917 1.92835 7.77006 2.28201 7.36818C2.63566 6.9663 3.24308 6.91421 3.66 7.25001L12 14.66L20.34 7.25001C20.6052 6.99532 20.9887 6.90667 21.3387 7.01919C21.6888 7.1317 21.9488 7.42722 22.0159 7.78872C22.083 8.15022 21.9463 8.51938 21.66 8.75001Z"
        fill="#231F20"
      />
    </svg>
  );
}
