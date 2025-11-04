# Mascot Overlay

<p align="center">
  <img src="https://img.shields.io/npm/v/mascot-overlay" alt="npm version">
  <img src="https://img.shields.io/npm/dm/mascot-overlay" alt="npm downloads">
  <img src="https://img.shields.io/github/license/yourusername/mascot-overlay" alt="license">
  <img src="https://img.shields.io/bundlephobia/minzip/mascot-overlay" alt="bundle size">
</p>

<p align="center">
  A lightweight, framework-agnostic JavaScript library for creating floating mascot buttons with smooth overlay animations.
</p>

---

## ✨ Features

- 🚀 **Zero dependencies** - Pure vanilla JavaScript with no external requirements
- 📦 **Lightweight** - Only ~3KB minified and gzipped
- 🎨 **Pure CSS animations** - Smooth, hardware-accelerated transitions
- ♿ **Accessible** - Full ARIA support and keyboard navigation (ESC key)
- 📱 **Responsive** - Mobile-friendly with touch support
- 🔧 **Highly customizable** - Extensive configuration options
- 🌐 **Framework-agnostic** - Works seamlessly with React, Vue, Angular, Svelte, or vanilla JavaScript
- 🎯 **Easy to use** - Simple API with sensible defaults

---

## 📦 Installation

### Using npm

```bash
npm install mascot-overlay
```

### Using Yarn

```bash
yarn add mascot-overlay
```

### Using pnpm

```bash
pnpm add mascot-overlay
```

### Via CDN

```html
<script src="https://cdn.jsdelivr.net/npm/mascot-overlay@latest/dist/index.js"></script>
```

---

## 🚀 Quick Start

### Vanilla JavaScript

```html
<!DOCTYPE html>
<html>
<head>
  <title>Mascot Overlay Demo</title>
</head>
<body>
  <script src="node_modules/mascot-overlay/dist/index.js"></script>
  <script>
    const mascot = new MascotOverlay({
      mascotImage: '/path/to/mascot.png',
      overlayImage: '/path/to/detail-image.png'
    });
  </script>
</body>
</html>
```

### ES6 Module

```javascript
import MascotOverlay from 'mascot-overlay';

const mascot = new MascotOverlay({
  mascotImage: '/assets/mascot.png',
  overlayImage: '/assets/detail.png',
  overlayWidth: '800px',
  overlayOpacity: 0.8
});
```

---

## 🎯 Usage Examples

### React

```jsx
import { useEffect, useRef } from 'react';
import MascotOverlay from 'mascot-overlay';

function App() {
  const mascotRef = useRef(null);

  useEffect(() => {
    mascotRef.current = new MascotOverlay({
      mascotImage: '/assets/mascot.png',
      overlayImage: '/assets/system-details.png',
      overlayWidth: '900px',
      position: { bottom: '5%', right: '30px' }
    });

    return () => {
      if (mascotRef.current) {
        mascotRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="App">
      <h1>My React Application</h1>
    </div>
  );
}

export default App;
```

### Vue 3

```vue
<template>
  <div>
    <h1>My Vue Application</h1>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import MascotOverlay from 'mascot-overlay';

let mascot = null;

onMounted(() => {
  mascot = new MascotOverlay({
    mascotImage: '/assets/mascot.png',
    overlayImage: '/assets/system-details.png'
  });
});

onUnmounted(() => {
  if (mascot) {
    mascot.destroy();
  }
});
</script>
```

### Vue 2

```Vue

<template>
  <div>
    <h1>My Vue Application</h1>
    <!-- Your content here -->
  </div>
</template>

<script>
import MascotOverlay from 'mascot-overlay';

export default {
  name: 'App',
  data() {
    return {
      mascot: null
    };
  },
  mounted() {
    this.mascot = new MascotOverlay({
      mascotImage: '/assets/mascot.png',
      overlayImage: '/assets/system-details.png'
    });
  },
  beforeDestroy() {
    if (this.mascot) {
      this.mascot.destroy();
    }
  }
};
</script>
```

## Angular

```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';
import MascotOverlay from 'mascot-overlay';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>My Angular Application</h1>
      <!-- Your content here -->
    </div>
  `
})
export class AppComponent implements OnInit, OnDestroy {
  private mascot: any;

  ngOnInit(): void {
    this.mascot = new MascotOverlay({
      mascotImage: '/assets/mascot.png',
      overlayImage: '/assets/system-details.png',
      overlayWidth: '850px'
    });
  }

  ngOnDestroy(): void {
    if (this.mascot) {
      this.mascot.destroy();
    }
  }
}

```

---

## ⚙️ Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `mascotImage` | `string` | `''` | Path or URL to the mascot button image (required) |
| `overlayImage` | `string` | `''` | Path or URL to the overlay detail image (required) |
| `overlayWidth` | `string` | `'800px'` | Maximum width of the overlay image |
| `overlayOpacity` | `number` | `0.8` | Backdrop overlay opacity (0-1) |
| `transitionDuration` | `number` | `300` | Animation duration in milliseconds |
| `position` | `object` | `{bottom: '4%', right: '20px'}` | Mascot button position (CSS units) |
| `mascotSize` | `object` | `{width: '140px', height: '90px'}` | Button dimensions |
| `zIndex` | `number` | `9999999` | Z-index for overlay elements |

---

## 📚 API Methods

### `showOverlay()`
Manually show the overlay.

### `hideOverlay()`
Manually hide the overlay.

### `destroy()`
Remove all elements from the DOM and clean up event listeners.

### `updateImages(mascotImage, overlayImage)`
Dynamically update images without recreating the instance.

---

## 🐛 Troubleshooting

### Images not displaying
Ensure your image paths are correct and accessible.

### Overlay appears behind other content
Increase the `zIndex` value.

### Memory leaks in SPAs
Always call `destroy()` when unmounting components.

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👤 Author

**Your Name**
- GitHub: [@bobbysihalath](https://github.com/bobbysihalath)
- Email: bobby.3331199@gmail.com

---

<p align="center">Made with ❤️ by Mr Souksakhone SIHALATH</p>
