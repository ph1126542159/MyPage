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
        dark: false,
        colors: {
          background: '#ffffff',
          surface: '#ffffff',
          'surface-bright': '#ffffff',
          primary: '#51677f',
          secondary: '#8ea2b8',
          accent: '#9bafc2',
          error: '#ff6b6b',
          info: '#6e859d',
          success: '#6f9c8f',
          warning: '#9c8e7a',
        },
      },
    },
  },
})
