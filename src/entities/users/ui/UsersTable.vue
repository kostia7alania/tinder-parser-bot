<template>
  <div>
    <UTable
      v-model:sorting="sorting"
      sticky
      :data="rows"
      :columns="usersTableHeaders"
      class="flex-1 max-h-[312px]"
    >
      <template #isVerified-cell="{ row }">
        <UIcon
          v-if="row.original.isVerified"
          name="bx:check"
          class="size-5 text-green-300"
        />
        <UIcon
          v-else
          name="bx:question-mark"
          class="size-5"
        />
      </template>
      <template #name-cell="{ row }">
        <div class="flex item-center gap-2">
          <UButton
            variant="link"
            @click="onClickName(row.original.id)"
          >
            {{ row.original.name }}
          </UButton>
        </div>
      </template>
      <template #dateMatched-cell="{ row }">
        {{ formatDate(row.original.matchedAt) }}
      </template>
      <template #currentCity-cell="{ row }">
        {{ row.original.currentCountry }}, {{ row.original.currentCity }}
      </template>
      <template #createdAt-cell="{ row }">
        {{ formatDateTime(row.original.createdAt) }}
      </template>
    </UTable>
  </div>
</template>

<script setup lang="ts">
import { TableData } from "@nuxt/ui"
import { usersTableHeaders } from "../config"
import { useUsersStore } from "../model/users.store"

const { users } = storeToRefs(useUsersStore())

const rows = computed<TableData>(() => users.value as TableData)

const sorting = ref([
  {
    id: "distance",
    desc: false,
  },
])

const onClickName = async (id: string) => {
  const [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  })

  if (tab.id) chrome.tabs.sendMessage(tab.id, { onClickUserId: id })
}
</script>
