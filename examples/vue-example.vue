<template>
  <div id="app">
    <header>
      <h1>Vue + Mascot Overlay</h1>
      <p>Hover over the mascot in the bottom-right corner!</p>
    </header>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import MascotOverlay from 'mascot-overlay';

let mascot = null;

onMounted(() => {
  mascot = new MascotOverlay({
    mascotImage: '/assets/mascot.png',
    overlayImage: '/assets/system-details.png',
    transitionDuration: 400,
    mascotSize: { width: '160px', height: '100px' }
  });
});

onUnmounted(() => {
  if (mascot) {
    mascot.destroy();
  }
});
</script>

<style scoped>
header {
  padding: 40px;
  text-align: center;
}
</style>
