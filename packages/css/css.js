import minifyCSS from './minifyCSS'
import sheet from './sheet'
import transformCSS from './transformCSS'
import zip from './zip'

function css(strings, ...expressions) {
  const { classMap, transformedCSS } = transformCSS(
    minifyCSS(zip(strings, expressions)),
  )
  sheet.push(transformedCSS)
  return classMap
}

export default css
