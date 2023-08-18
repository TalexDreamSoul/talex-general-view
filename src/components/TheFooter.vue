<script setup lang="ts">
</script>

<template>
  <nav flex="~ gap-4" mt-6 justify-center text-xl>
    <RouterLink icon-btn to="/" title="Home">
      <div i-carbon-campsite />
    </RouterLink>

    <RouterLink icon-btn to="/about" title="About" data-test-id="about">
      <div i-carbon-dicom-overlay />
    </RouterLink>
  </nav>
</template>
