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
  Link: {
    baseStyle: props => ({
      color: mode('#202023', '#f0e7db')(props),
      textUnderlineOffset: 3
    })
  },
  Button: {
    baseStyle: props => ({
      color: mode('#202023', '#eeeeee')(props),
      bg: mode(`grassTeal`, `#aaddca`)(props)
    })
  }
}
const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const colors = {
  grassTeal: '#232323'
}
const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
