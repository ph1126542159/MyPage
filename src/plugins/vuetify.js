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
          background: '#101719',
          surface: '#182124',
          'surface-bright': '#202d30',
          primary: '#82dfd6',
          secondary: '#82dfd6',
          accent: '#82dfd6',
          error: '#ff6b6b',
          info: '#6e859d',
          success: '#6f9c8f',
          warning: '#9c8e7a',
        },
      },
    },
  },
})
