/**
 * Calculate scrollbar width
 *
 * Source:
 * https://stackoverflow.com/a/13382873
 *
 * @param {Object} options Options object
 * @param {boolean} options.testOverflow Test whether page has overflow
 */
export default function (options) {
  if (options.testOverflow && window.innerHeight > document.body.offsetHeight) {
    return 0
  }

  let outer = document.createElement('div')
  let inner = document.createElement('div')

  outer.style.visibility = 'hidden'
  outer.style.width = '100px'
  outer.style.msOverflowStyle = 'scrollbar'

  // Add outer to document
  document.body.appendChild(outer)

  const outerWidth = outer.offsetWidth

  // Force scrollbar
  outer.style.overflow = 'scroll'
  inner.style.width = '100%'

  // Add inner to outer
  outer.appendChild(inner)

  const innerWidth = inner.offsetWidth

  // Remove outer from document
  outer.parentNode.removeChild(outer)

  return outerWidth - innerWidth
}
