<script setup lang="ts">
const isShown = ref(true)

const onVisibilityToggle = async () => {
  isShown.value = !isShown.value
  const [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  })

  if (tab.id) chrome.tabs.sendMessage(tab.id, { isShown: isShown.value })
}
</script>

<template>
  <UApp>
    <AppHeader>
      <template #actions>
        <UButton
          :icon="isShown ? 'ph:eye' : 'ph:eye-closed'"
          variant="ghost"
          @click="onVisibilityToggle"
        />
      </template>
    </AppHeader>

    <div
      v-if="isShown"
      class="p-4 prose dark:prose-invert"
    >
      <RouterView />
    </div>

    <AppFooter />
  </UApp>
</template>
