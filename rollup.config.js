import { terser } from 'rollup-plugin-terser'
import babel from 'rollup-plugin-babel'
import filesize from 'rollup-plugin-filesize'
import packageJSON from './package.json'

const ext = process.env.MINIFY ? 'min.js' : 'js'

const banner = `/*!
 * Scrollbar width v${packageJSON.version}
 *
 * Copyright (c) 2018 ${packageJSON.author.name}
 * This source code is licensed under the MIT license.
 */`

const config = {
  input: 'index.js',
  output: [
    {
      file: `dist/a11y-navigation.common.${ext}`,
      format: 'cjs',
      banner
    },
    {
      file: `dist/a11y-navigation.esm.${ext}`,
      format: 'es',
      banner
    },
    {
      file: `dist/a11y-navigation.${ext}`,
      format: 'umd',
      name: 'A11yNavigation',
      banner
    }
  ],
  plugins: [
    babel({ exclude: 'node_modules/**' })
  ]
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(filesize())
}

if (process.env.MINIFY) {
  config.plugins.push(terser({
    output: {
      comments: /^!/
    }
  }))
}

export default config
