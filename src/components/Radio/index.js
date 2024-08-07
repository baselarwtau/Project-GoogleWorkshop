import React from "react";
import PropTypes from "prop-types";

const variants = {
    primary: "border-black-900 border border-solid checked:border-black-900 checked:border-[3px] checked:border-solid checked:bg-white-a700 checked:focus:bg-white-a700 checked:focus:border-black-900",
};

const sizes = {
    xs: "h-[34px] w-[34px] rounded-[16px]",
};

const Radio = React.forwardRef(
    ({ className = '', name = '', label = '', id = 'radio_id', variant = 'primary', size = 'xs', ...restProps }, ref) => {
        return (
            <label className={`flex items-center gap-[5px] cursor-pointer ${className}`}>
                <input
                    className={`${size && sizes[size]} ${variant && variants[variant]}`}
                    ref={ref}
                    type="radio"
                    name={name}
                    id={id}
                    {...restProps}
                />
                <span>{label}</span>
            </label>
        );
    }
);

Radio.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string,
    size: PropTypes.oneOf(['xs']),
    variant: PropTypes.oneOf(['primary']),
};

export { Radio };
