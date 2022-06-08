<template>
  <div id="my-portfolio">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,900;1,100&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap');

/**
 * @note Typography
 */
html, body, div, section {
  font-family: 'Lato', sans-serif !important;
}
h1, h2, h3, h4, blockquote {
  font-family: 'Quicksand', sans-serif !important;
}
/* !END! */

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}

#my-portfolio, #__nuxt {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
}
</style>