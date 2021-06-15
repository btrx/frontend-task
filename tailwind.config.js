module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'chateau-green': {
          '50': '#f6fbf7', 
          '100': '#edf7f0', 
          '200': '#d1ecd9', 
          '300': '#b6e0c1', 
          '400': '#7fc893', 
          '500': '#48B165', 
          '600': '#419f5b', 
          '700': '#36854c', 
          '800': '#2b6a3d', 
          '900': '#235731'
        },
        'gunsmoke': {
          '50': '#f9f9f9', 
          '100': '#f3f3f3', 
          '200': '#e1e1e1', 
          '300': '#cfcfcf', 
          '400': '#acacac', 
          '500': '#888888', 
          '600': '#7a7a7a', 
          '700': '#666666', 
          '800': '#525252', 
          '900': '#434343'
        },
        'fuscous-gray': {
          '50': '#f6f6f6', 
          '100': '#eeeeee', 
          '200': '#d4d4d4', 
          '300': '#b9b9b9', 
          '400': '#858585', 
          '500': '#515151', 
          '600': '#494949', 
          '700': '#3d3d3d', 
          '800': '#313131', 
          '900': '#282828'
        },
        'alto': {
          '50': '#fdfdfd', 
          '100': '#fbfbfb', 
          '200': '#f6f6f6', 
          '300': '#f0f0f0', 
          '400': '#e5e5e5', 
          '500': '#DADADA', 
          '600': '#c4c4c4', 
          '700': '#a4a4a4', 
          '800': '#838383', 
          '900': '#6b6b6b'
      }
      },
      fontFamily: {
        'mulish-normal': ['Mulish']
      },
      fontSize: {
        '12px': '0.75rem',
        '14px': '0.875rem',
        '15px': '0.9375rem'
      },
      screens: {
        'xs': {'min': '360px', 'max':'639px'}
      },
      spacing: {
        px: '1px',
        0: '0rem',
        0.5: '0.125rem',
        1: '0.25rem',
        1.4: '0.3125',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        3.75: '0.9375rem',
        3.85: '0.96875rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
      },
      borderWidth:  {
        '0.5': '0.03125rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
