import React from 'react';
import { InfinitySpin, Oval } from 'react-loader-spinner';

const LoadingSpinner = ({ size = "50", color = "#3b82f6" }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slight overlay
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 9999 // Keeps it on top of everything
        }}>
            <Oval
                visible={true}
                height={size}
                width={size}
                color={color}
                secondaryColor={`${color}33`} // Makes the track a lighter shade of the main color
                strokeWidth={4}
                strokeWidthSecondary={4}
                ariaLabel="loading-spinner"
            />
        </div>
    );
};

export default LoadingSpinner;