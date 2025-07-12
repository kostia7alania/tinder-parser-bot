<script setup lang="ts"></script>

<template>
  <div>
    <RouterLinkUp />

    <h1>Features</h1>
    <p>All available features</p>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <UCard>
        <template #header>
          <div class="font-semibold text-xl">бабки</div>
        </template>

        описание
      </UCard>
    </div>

    <div class="flex justify-center">
      <RouterLink
        to="/common/account/login"
        class="btn btn-secondary btn-xl w-full md:max-w-96"
      >
        Логин
      </RouterLink>
    </div>
  </div>
</template>
