import React from "react";

export const SixdegreesIcon = ({
  fill = 'currentColor',
  filled = false,
  size = 24,
  height = 24,
  width = 24,
  label = '',
  ...props
}) => {
  return (
    <svg
      id="Capa_2"
      data-name="Capa 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 68.38 63.53"
      width={size || width}
      height={size || height}
      aria-label={label}
      {...props}
    >
      <defs>
        <style>
          {`.cls-1 { stroke-width: 0px; }`}
        </style>
      </defs>
      <g id="Capa_3" data-name="Capa 3">
        <path
          className="cls-1"
          d="M54.47.04c-7.67,0-13.9,6.23-13.91,13.9-2.95-1.8-6.26-3.05-9.79-3.6L36.7,0h-19.65L4.13,22.43C1.55,26.66,0,31.51,0,36.78c0,14.77,11.98,26.75,26.74,26.75s26.64-11.98,26.64-26.75c0-3.23-.58-6.32-1.63-9.18.88.17,1.78.27,2.71.27,7.67,0,13.91-6.24,13.91-13.91S62.14.04,54.47.04ZM26.74,46.08c-5.16,0-9.3-4.13-9.3-9.3s4.13-9.29,9.3-9.29,9.19,4.13,9.19,9.29-4.13,9.3-9.19,9.3ZM54.47,19.77c-3.21,0-5.81-2.61-5.81-5.81s2.61-5.81,5.81-5.81,5.81,2.61,5.81,5.81-2.61,5.81-5.81,5.81Z"
          fill={fill}
        />
      </g>
    </svg>
  );
};