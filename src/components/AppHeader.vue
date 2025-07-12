<script setup lang="ts">
defineSlots<{
  actions: []
}>()
</script>

<template>
  <div class="flex justify-between gap-4 p-2 bg-neutral">
    <RouterLink
      to="/"
      class="flex gap-2 items-center"
    >
      <img
        src="@assets/hohotun.webp"
        alt="logo"
        class="h-8 w-auto"
      />
      <div class="font-semibold text-primary">Profile Scanner</div>
    </RouterLink>
    <div class="flex gap-2 justify-center">
      <slot name="actions" />

      <UButton
        to="/common/about"
        icon="ph:question"
        variant="ghost"
      ></UButton>
      <UButton
        to="/options-page"
        icon="ph:gear"
        variant="ghost"
      ></UButton>
      <ThemeSwitch />
    </div>
  </div>
</template>
