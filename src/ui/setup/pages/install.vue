<script setup lang="ts">
const displayName = __DISPLAY_NAME__
// const version = __VERSION__
</script>

<template>
  <div
    class="w-full h-full flex flex-col justify-center items-center text-center md:my-12"
  >
    <h1>🎉 Установлено! 🚀</h1>
    <p>Спасибо за установку {{ displayName }}! ❤️</p>
  </div>

  <hr />
  <h2>App Routes:</h2>
  <div class="flex flex-wrap gap-2">
    <RouterLink
      v-for="route in appRouter.getRoutes()"
      :key="route.path"
      :to="route.path"
      class="btn"
    >
      {{ route.path }}
    </RouterLink>
  </div>

  <hr />
</template>

<style lang="css" scoped></style>
