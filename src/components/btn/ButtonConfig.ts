// Button Configuration - กำหนดค่าปุ่มทั้งหมดที่นี่
export const ButtonConfig = {
    // Border Radius
    borderRadius: {
        default: 100, // 20px
        small: 8,    // 8px  
        large: 16,   // 16px
    },

    // Spacing
    spacing: {
        small: 'px-3 py-1.5',
        medium: 'px-4 py-2.5',
        large: 'px-6 py-3.5',
    },

    // Colors
    colors: {
        primary: {
            bg: 'bg-primary',
            hover: 'hover:bg-primary/90',
            text: 'text-white',
            border: 'border-primary',
        },
        secondary: {
            bg: 'bg-subprimary',
            hover: 'hover:bg-subprimary/90',
            text: 'text-white',
            border: 'border-subprimary',
        },
        success: {
            bg: 'bg-success',
            hover: 'hover:bg-success/90',
            text: 'text-white',
            border: 'border-success',
        },
        warning: {
            bg: 'bg-warning',
            hover: 'hover:bg-warning/90',
            text: 'text-black',
            border: 'border-warning',
        },
        error: {
            bg: 'bg-error',
            hover: 'hover:bg-error/90',
            text: 'text-white',
            border: 'border-error',
        },
        info: {
            bg: 'bg-info',
            hover: 'hover:bg-info/90',
            text: 'text-white',
            border: 'border-info',
        },
    },

    // Font Sizes
    fontSize: {
        small: 'text-body-small',
        medium: 'text-body',
        large: 'text-body-large',
    },

    // Base Styles
    baseStyles: 'border font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed',

    // Animation
    animation: {
        loading: 'animate-spin h-4 w-4',
        transition: 'transition-all duration-200',
    }
};

export default ButtonConfig;
