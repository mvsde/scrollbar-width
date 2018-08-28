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
const sbWidth = scrollbarWidth()

// Check if page has overflow and then get scrollbar width
const sbWitdthWithCheck = scrollbarWidth({ testOverflow: true })
```
