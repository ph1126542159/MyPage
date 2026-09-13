import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

import { createVuetify } from 'vuetify'

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
  },
  defaults: {
    VBtn: {
      rounded: 'xl',
    },
    VCard: {
      rounded: 'xl',
    },
    VChip: {
      rounded: 'xl',
    },
  },
  theme: {
    defaultTheme: 'portfolio',
    themes: {
      portfolio: {
        dark: true,
        colors: {
          background: '#030a11',
          surface: '#071521',
          'surface-bright': '#0b2030',
          primary: '#5cddff',
          secondary: '#3988ff',
          accent: '#7b72ff',
          error: '#ff6b6b',
          info: '#6e859d',
          success: '#6f9c8f',
          warning: '#9c8e7a',
        },
      },
    },
  },
})
