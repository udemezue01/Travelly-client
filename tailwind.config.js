module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [


     './src/App.vue',
     './src/components/Navbar.vue',
    './src/views/Landing/Landing.vue',
    './src/views/Landing/Login.vue',
    './src/views/Landing/Register.vue',
    './src/views/Landing/Password-Reset.vue',

    

  ],
  theme: {
    extend: {},

    fontFamily:{
      'display': ['Work Sans', 'sans-serif'],
    'body': ['Work Sans', 'sans-serif'],
    }
  },
  variants: {},
  plugins: [],
}
