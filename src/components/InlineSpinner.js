import React from 'react';

const InlineSpinner = () => {
    const spinnerStyle = {
        display: 'inline-block',
        width: '40px',
        height: '40px',
        border: '3px solid rgba(195, 195, 195, 0.6)',
        borderRadius: '50%',
        borderTopColor: '#636767',
        animation: 'spin 1s ease-in-out infinite', // Ensure the animation property is correct
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // This centers the spinner vertically on the page
    };

    return (
        <>
            <style>
                {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
            </style>
            <div style={containerStyle}>
                <div style={spinnerStyle}></div>
            </div>
        </>
    );
};

export default InlineSpinner;
