import React from "react";

export const CloseSVG = ({ fillColor = "#000000", className = "", ...props }) => {
    return (
        <svg
            fill={fillColor}
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            height={props?.height || 20}
            width={props?.width || 20}
            viewBox={`0 0 ${props?.width || 20} ${props?.height || 20}`}
            {...props}
        >
            <path d="M4.7070312 3.2929688L1 3.2929688 4.7070312 10.585938 12 3.2929688 19.292969 10.585938 12 19.292969 20.707031 10.585938 19.292969 3.2929688 12 10.585938 4.7070312 3.2929688Z" />
        </svg>
    );
};
