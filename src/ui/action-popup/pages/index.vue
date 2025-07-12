<script setup lang="ts"></script>

<template>
  <div>
    <div class="hero">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1>Welcome!</h1>
          <div class="flex gap-2 justify-center mb-4">
            <UButton
              to="/common/features"
              icon="ph:list-heart"
              variant="subtle"
            >
              Features
            </UButton>
            <UButton
              to="/common/pricing"
              icon="ph:presentation-chart"
              variant="subtle"
            >
              Features
            </UButton>
          </div>

   
          <div class="flex justify-evenly my-6">
            <RouterLink to="/action-popup/playground">Playground</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
