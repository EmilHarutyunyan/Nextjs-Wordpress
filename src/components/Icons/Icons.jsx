// export const arrowSvg

import * as React from "react";

export const ArrowSvg = (props) => (
  <svg width={48} height={1} xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>{"Rectangle 5"}</title>
    <path d="M0 0h48v1H0z" fill="#063855" fillRule="evenodd" />
  </svg>
);

export const CartSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    ></path>
  </svg>
);
