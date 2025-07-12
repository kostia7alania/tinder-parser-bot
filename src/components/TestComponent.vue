<script setup lang="ts">
const testStore = useTestStore()
const { increment, decrement } = testStore
const { count, name } = storeToRefs(testStore)
</script>

<template>
  <div>
    <div class="text-center">
      <div class="flex justify-center items-center gap-4">
        <div class="text-lg font-semibold">{{ name }}</div>
        <UInput
          v-model="name"
          placeholder="Enter Name"
          type="text"
        />
      </div>
      <hr />
      <div class="flex justify-center items-center gap-4">
        <div class="flex gap-2 justify-center">
          <UButton
            icon="ph:minus"
            @click="decrement"
          />
          <div class="text-lg font-semibold">{{ count }}</div>
          <UButton
            icon="ph:plus"
            @click="increment"
          />
        </div>
      </div>
    </div>
  </div>
</template>

