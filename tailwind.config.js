module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Breakpoints optimizados para iPad
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        // iPad específicos
        'ipad': '1024px', // iPad normal
        'ipad-pro': '1366px', // iPad Pro 11"
        'ipad-pro-max': '1920px', // iPad Pro 12.9"
      },

      // Tamaños de fuente para iPad
      fontSize: {
        'xs': ['12px', { lineHeight: '16px' }],
        'sm': ['14px', { lineHeight: '20px' }],
        'base': ['16px', { lineHeight: '24px' }],
        'lg': ['18px', { lineHeight: '28px' }],
        'xl': ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
        '3xl': ['30px', { lineHeight: '36px' }],
        '4xl': ['36px', { lineHeight: '40px' }],
        '5xl': ['48px', { lineHeight: '48px' }],
        '6xl': ['60px', { lineHeight: '60px' }],
        '7xl': ['72px', { lineHeight: '72px' }],
      },

      // Padding/Margin optimizado para toques táctiles
      spacing: {
        '14': '3.5rem', // 56px
        '18': '4.5rem', // 72px
        '22': '5.5rem', // 88px
      },

      // Tamaño mínimo de botones (44px es recomendado para toques)
      minHeight: {
        'touch': '44px',
        'touch-lg': '56px',
        'touch-xl': '64px',
      },

      minWidth: {
        'touch': '44px',
        'touch-lg': '56px',
        'touch-xl': '64px',
      },

      // Colores personalizados
      colors: {
        'moles-green': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#145231',
        },
      },

      // Border radius optimizado
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },

      // Shadows para iPad
      boxShadow: {
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      },

      // Transiciones suaves
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
    },
  },

  plugins: [
    // Plugin personalizado para iPad
    function ({ addVariant, matchVariant }) {
      // Variante para iPad
      addVariant('ipad', '@media (min-width: 1024px)');
      
      // Variante para orientación landscape
      addVariant('landscape', '@media (orientation: landscape)');
      
      // Variante para orientación portrait
      addVariant('portrait', '@media (orientation: portrait)');
      
      // Variante para hover (solo en dispositivos con mouse)
      addVariant('hover-device', '@media (hover: hover)');
      
      // Variante para touch
      addVariant('touch-device', '@media (hover: none)');
    },
  ],
};
