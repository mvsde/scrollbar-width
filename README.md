# Scrollbar width

## Installation

```bash
yarn add @mvsde/scrollbar-width
# or
npm install @mvsde/scrollbar-width
```

## Usage

```js
import scrollbarWidth from '@mvsde/scrollbar-width'

// Get the width of the scrollbar
const width = scrollbarWidth()

// Check if page has overflow and then get scrollbar width
const widthWithOverflowTest = scrollbarWidth({ testOverflow: true })
```
