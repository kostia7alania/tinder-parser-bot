<script setup lang="ts">
const optionsStore = useOptionsStore()
// const { toggleDark } = optionsStore
const { isDark, profile, others } = storeToRefs(optionsStore)
</script>

<template>
  <div
    class="max-w-xl w-full mx-auto rounded-xl px-4 md:px-8 md:border border-base-200 md:shadow-lg bg-base-100"
  >
    <RouterLinkUp />

    <h1>Options</h1>


    <h3>User Interface</h3>
    <p>Change application interface settings.</p>

    <UForm class="space-y-4">
      <UFormField label="Theme">
        <USwitch v-model="isDark" />
      </UFormField>

      <h3>Profile</h3>
      <p>Change your name and age.</p>

      <UFormField label="Name">
        <UInput v-model="profile.name"></UInput>
      </UFormField>

      <UFormField label="Age">
        <UInput v-model="profile.age"></UInput>
      </UFormField>

      <h3>Others</h3>
      <p>Some other settings related to extension usage.</p>

      <UFormField label="is gay">
        <USwitch v-model="others.awesome" />
      </UFormField>

      <UFormField label="Counter">
        <UInput
          v-model="others.counter"
          type="number"
        />
      </UFormField>

      <p>
        * You can also make this a compoenent and then able to use this in any
        context like Popup, Developer Tools UI etc
      </p>
      <p>Feel free to change groups or options as per your requirements.</p>
    </UForm>
  </div>
</template>
