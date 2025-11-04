# Mascot Overlay

A lightweight, framework-agnostic JavaScript library for creating floating mascot buttons with overlay functionality.

## Features

- 🚀 Zero dependencies
- 📦 Lightweight (~3KB)
- 🎨 Pure CSS animations
- ♿ Accessible (ARIA, keyboard support)
- 📱 Responsive design
- 🔧 Highly customizable
- 🌐 Works with any framework (React, Vue, Angular, etc.)

## Installation

npm install mascot-overlay


Or with Yarn:

yarn add mascot-overlay


## Usage

### Vanilla JavaScript

<script src="node_modules/mascot-overlay/dist/index.js"></script> <script> const mascot = new MascotOverlay({ mascotImage: '/path/to/mascot.png', overlayImage: '/path/to/detail.png' }); </script>

### React

import { useEffect, useRef } from 'react';
import MascotOverlay from 'mascot-overlay';

function App() {
const mascotRef = useRef(null);

useEffect(() => {
mascotRef.current = new MascotOverlay({
mascotImage: '/mascot.png',
overlayImage: '/detail.png'
});

return () => mascotRef.current?.destroy();
}, []);

return <div>Your app</div>;
}


### Vue 3

<script setup> import { onMounted, onUnmounted } from 'vue'; import MascotOverlay from 'mascot-overlay'; let mascot = null; onMounted(() => { mascot = new MascotOverlay({ mascotImage: '/mascot.png', overlayImage: '/detail.png' }); }); onUnmounted(() => mascot?.destroy()); </script>


## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `mascotImage` | string | `''` | Path to mascot image |
| `overlayImage` | string | `''` | Path to overlay detail image |
| `overlayWidth` | string | `'800px'` | Max width of overlay image |
| `overlayOpacity` | number | `0.8` | Backdrop opacity (0-1) |
| `transitionDuration` | number | `300` | Animation duration in ms |
| `position` | object | `{bottom: '4%', right: '20px'}` | Button position |
| `mascotSize` | object | `{width: '140px', height: '90px'}` | Button dimensions |
| `zIndex` | number | `9999999` | Z-index for overlay |

## Methods

- `showOverlay()` - Manually show the overlay
- `hideOverlay()` - Manually hide the overlay
- `destroy()` - Remove all elements and cleanup
- `updateImages(mascotImage, overlayImage)` - Update images dynamically

## License

MIT © Mr Souksakhone SIHALATH




