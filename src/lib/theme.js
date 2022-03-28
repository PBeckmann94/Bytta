import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#dddddd', '#202023')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Input: {
    variants: {
      outline: props => ({
        field: {
          _placeholder: {
            color: mode('#252525', '#eeeeee')(props)
          },
          borderColor: mode('#333333', '#eeeeee')(props)
        }
      })
    }
  },

  Link: {
    baseStyle: props => ({
      color: mode('#202023', '#f0e7db')(props),
      textUnderlineOffset: 3
    })
  },
  Button: {
    baseStyle: props => ({
      color: mode('#202023', '#eeeeee')(props)
    })
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const config = {
  initialColorMode: localStorage.getItem('chakra-ui-color-mode')
    ? localStorage.getItem('chakra-ui-color-mode')
    : 'dark',
  useSystemColorMode: false
}

const colors = {
  grassTeal: '#232323'
}
const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
