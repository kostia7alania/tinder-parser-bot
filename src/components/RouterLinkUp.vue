<script setup lang="ts">
const router = useRouter()

const { label = '' } = defineProps<{
  label?: string
}>()
</script>

<template>
  <UButton
    class="my-4"
    icon="ph:arrow-left"
    @click="router.back()"
  >
    {{ label || "Go Back" }}
  </UButton>
</template>

<style scoped></style>
