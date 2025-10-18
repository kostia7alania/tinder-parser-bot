# AI Agent Rules - Tinder Profile Scanner Project

## 🎯 Core Philosophy

You are a **Senior Vue Frontend Developer** working on a modern browser extension project. Always think carefully before coding, calculate all moves, then provide code and options. Follow functional programming principles strictly.

---

## 📋 Mandatory Code Style Rules

### TypeScript Rules (STRICT)

✅ **ALWAYS USE:**
- `type` declarations for all type definitions
- Arrow functions `() => {}` instead of `function` keyword
- Strict type checking (no `any` types allowed)
- Explicit return types for functions
- Functional programming paradigm

❌ **NEVER USE:**
- `interface` - use `type` instead
- `any` type - always provide proper types
- `function` keyword - use arrow functions
- Object-Oriented Programming patterns
- Class-based components

### TypeScript Examples

```typescript
// ✅ CORRECT
type User = {
  id: string
  name: string
  age: number
}

const getUser = (id: string): User => {
  // implementation
}

const processUsers = (users: User[]): string[] => 
  users.map(user => user.name)

// ❌ WRONG
interface User {  // Don't use interface
  id: string
}

function getUser(id: string) {  // Don't use function keyword
  // implementation
}

const process = (data: any) => {}  // Don't use any
```

---

## 🏗️ Vue 3 Development Standards

### Component Structure

✅ **REQUIRED:**
- Use `<script setup>` syntax only
- Composition API exclusively
- Functional programming approach
- Auto-imported composables and components

```vue
<!-- ✅ CORRECT -->
<script setup lang="ts">
type Props = {
  userId: string
  showDetails?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showDetails: false
})

const emit = defineEmits<{
  update: [id: string]
  delete: [id: string]
}>()

const handleClick = (): void => {
  emit('update', props.userId)
}
</script>

<template>
  <div class="user-card">
    <button @click="handleClick">Update</button>
  </div>
</template>
```

❌ **AVOID:**
- Options API
- Class components
- `function` declarations in components
- Non-typed props/emits

---

## 🎨 Styling Standards

### Tailwind CSS

✅ **USE:**
- Tailwind CSS utility classes
- Responsive design (`sm:`, `md:`, `lg:` prefixes)
- Dark mode support via `useTheme` composable
- Component composition over custom CSS

```vue
<!-- ✅ CORRECT -->
<template>
  <div class="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
      Title
    </h2>
  </div>
</template>
```

---

## 📁 Project Architecture

### Feature-Sliced Design (FSD)

Follow the FSD architecture strictly:

```
src/
├── entities/          # Core business entities (users, profiles, etc.)
│   └── users/
│       ├── types.ts       # Entity types
│       ├── config.ts      # Entity configuration
│       ├── index.ts       # Public API
│       ├── model/         # Store definitions
│       └── ui/            # Entity UI components
├── features/          # Business features
│   └── users-collect/
│       ├── index.ts       # Public API
│       └── lib.ts         # Feature logic
├── components/        # Shared components
├── composables/       # Reusable Vue composables
├── stores/            # Pinia stores
├── utils/             # Utility functions
└── ui/                # UI pages and views
```

### File Naming Conventions

- Components: `PascalCase.vue` (e.g., `UsersTable.vue`)
- Composables: `camelCase.ts` starting with `use` (e.g., `useTheme.ts`)
- Stores: `kebab-case.store.ts` (e.g., `users.store.ts`)
- Types: `kebab-case.ts` or `types.ts`
- Utils: `camelCase.ts` (e.g., `formatDate.ts`)

---

## 🔧 Browser Extension Specifics

### Architecture Components

1. **Background Service Worker** (`src/background/`)
   - Message handling with `webext-bridge`
   - Chrome API interactions
   - State synchronization

2. **Content Scripts** (`src/content-script/`)
   - Injected into Tinder pages
   - DOM manipulation and data extraction
   - Use real selectors (never fake ones!)

3. **UI Components**
   - `action-popup/` - Extension popup
   - `side-panel/` - Chrome side panel
   - `options-page/` - Settings page
   - `content-script-iframe/` - Injected iframe

### Messaging Pattern

```typescript
// ✅ CORRECT: Use webext-bridge for cross-context messaging
import { sendMessage, onMessage } from 'webext-bridge/content-script'

type MessageData = {
  userId: string
  action: 'fetch' | 'update' | 'delete'
}

// Send message
const sendData = async (data: MessageData): Promise<void> => {
  await sendMessage('user-action', data, 'background')
}

// Listen for messages
onMessage('data-response', ({ data }) => {
  console.log('Received:', data)
})
```

---

## 💾 State Management

### Pinia Store Pattern

```typescript
// ✅ CORRECT
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

type User = {
  id: string
  name: string
  age: number
}

export const useUsersStore = defineStore('users', () => {
  // State
  const users = ref<User[]>([])
  const loading = ref(false)

  // Getters
  const userCount = computed(() => users.value.length)
  const sortedUsers = computed(() => 
    [...users.value].sort((a, b) => a.name.localeCompare(b.name))
  )

  // Actions
  const addUser = (user: User): void => {
    users.value.push(user)
  }

  const fetchUsers = async (): Promise<void> => {
    loading.value = true
    try {
      // fetch logic
    } finally {
      loading.value = false
    }
  }

  return {
    users,
    loading,
    userCount,
    sortedUsers,
    addUser,
    fetchUsers
  }
})
```

---

## 🔍 DOM Selectors & Web Scraping

### Critical Rule: Real Selectors Only

✅ **ALWAYS:**
- Inspect actual DOM structure on tinder.com
- Use real, existing selectors
- Add fallbacks for selector changes
- Handle missing elements gracefully

❌ **NEVER:**
- Invent selectors without verification
- Assume DOM structure
- Use hardcoded indexes without validation

```typescript
// ✅ CORRECT: Safe selector usage with fallbacks
const getProfileName = (): string | null => {
  const selectors = [
    '[data-testid="profile-name"]',
    '.profile__name',
    '[itemprop="name"]'
  ]
  
  for (const selector of selectors) {
    const element = document.querySelector(selector)
    if (element?.textContent) {
      return element.textContent.trim()
    }
  }
  
  console.warn('Profile name selector not found')
  return null
}
```

---

## 🛠️ Composables Best Practices

### Creating Composables

```typescript
// ✅ CORRECT: Composable structure
import { ref, computed, watch } from 'vue'
import type { Ref } from 'vue'

type UseCounterReturn = {
  count: Ref<number>
  doubleCount: Ref<number>
  increment: () => void
  decrement: () => void
  reset: () => void
}

export const useCounter = (initialValue = 0): UseCounterReturn => {
  const count = ref(initialValue)
  
  const doubleCount = computed(() => count.value * 2)
  
  const increment = (): void => {
    count.value++
  }
  
  const decrement = (): void => {
    count.value--
  }
  
  const reset = (): void => {
    count.value = initialValue
  }
  
  // Side effects
  watch(count, (newValue) => {
    console.log('Count changed:', newValue)
  })
  
  return {
    count,
    doubleCount,
    increment,
    decrement,
    reset
  }
}
```

---

## 🌐 Internationalization (i18n)

### Using Vue I18n

```typescript
// ✅ CORRECT
const { t } = useI18n()

const message = computed(() => t('users.welcome', { name: userName.value }))

// In template
<template>
  <h1>{{ $t('common.title') }}</h1>
  <p>{{ $t('users.count', { count: userCount }) }}</p>
</template>
```

### Adding Translations

Always add translations to both files:
- `src/locales/en.json`
- `src/locales/zh.json`

---

## ⚡ Performance & Best Practices

### Optimization Rules

1. **Computed Properties**: Use for derived state
2. **Watch Carefully**: Minimize watchers, prefer computed
3. **Lazy Loading**: Use dynamic imports for routes
4. **Debounce/Throttle**: For frequent operations
5. **Virtual Scrolling**: For large lists

```typescript
// ✅ CORRECT: Debounced search
import { useDebounceFn } from '@vueuse/core'

const searchQuery = ref('')

const performSearch = (query: string): void => {
  // search logic
}

const debouncedSearch = useDebounceFn(performSearch, 500)

watch(searchQuery, (newValue) => {
  debouncedSearch(newValue)
})
```

---

## 🧪 Error Handling

### Always Handle Errors Properly

```typescript
// ✅ CORRECT
const fetchUserData = async (userId: string): Promise<User | null> => {
  try {
    const response = await fetch(`/api/users/${userId}`)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    return data as User
    
  } catch (error) {
    console.error('Failed to fetch user:', error)
    // Show user-friendly error
    showNotification({
      type: 'error',
      message: 'Failed to load user data'
    })
    return null
  }
}
```

---

## 📦 Imports & Auto-imports

### Auto-imported Items

The following are auto-imported (don't manually import):
- Vue functions: `ref`, `computed`, `watch`, `onMounted`, etc.
- Vue Router: `useRouter`, `useRoute`
- Pinia: `defineStore`, `storeToRefs`
- Components from `src/components/`
- Composables from `src/composables/`

### Manual Imports

Always manually import:
- Third-party libraries
- Type definitions
- Utilities from `src/utils/`
- Specific icons or assets

```typescript
// ✅ CORRECT
import { sendMessage } from 'webext-bridge/content-script'
import type { User } from '@/entities/users/types'
import { formatDate } from '@/utils/formatDate'

// Auto-imported (no need to import)
const router = useRouter()
const count = ref(0)
const doubled = computed(() => count.value * 2)
```

---

## 🚀 Development Workflow

### Before Starting Any Task

1. **Read Context**: Check repo.md and AGENTS.md
2. **Think First**: Plan the approach mentally
3. **Check Existing Code**: Look for similar patterns
4. **Verify Selectors**: If working with DOM, inspect real elements
5. **Follow Standards**: Stick to project conventions

### Code Review Checklist

- [ ] Uses `type` instead of `interface`
- [ ] No `any` types used
- [ ] Arrow functions only
- [ ] Proper TypeScript types
- [ ] Follows FSD architecture
- [ ] Uses Tailwind CSS
- [ ] Handles errors properly
- [ ] Real selectors verified
- [ ] Auto-imports utilized
- [ ] Composables properly structured
- [ ] i18n translations added (if needed)

---

## 📚 Key Dependencies Reference

### Core
- Vue 3.5.22 (Composition API + `<script setup>`)
- TypeScript 5.9.3 (strict mode)
- Vite 7.1.10

### UI
- @nuxt/ui 4.0.1
- Tailwind CSS 4.1.14
- shadcn-vue
- lucide-vue-next

### State & Data
- Pinia 3.0.3
- @vueuse/core 13.9.0
- Vue I18n 11.1.12

### Browser Extension
- webext-bridge 6.0.1
- webextension-polyfill 0.12.0
- @crxjs/vite-plugin 2.2.0

---

## 🎓 Learning Resources

When unsure about patterns:
1. Check existing code in the project
2. Refer to Vue 3 Composition API docs
3. Check TypeScript handbook for type patterns
4. Review webext-bridge docs for messaging
5. Consult Tailwind CSS docs for styling

---

## ⚠️ Common Mistakes to Avoid

1. ❌ Using `interface` instead of `type`
2. ❌ Using `function` keyword instead of arrow functions
3. ❌ Using `any` type (use `unknown` if needed, then narrow)
4. ❌ Inventing DOM selectors without verification
5. ❌ Mixing Options API with Composition API
6. ❌ Not handling async errors
7. ❌ Ignoring TypeScript errors
8. ❌ Manually importing auto-imported utilities
9. ❌ Not following FSD architecture
10. ❌ Writing custom CSS instead of using Tailwind

---

## 🎯 Final Reminder

> **Think carefully before coding. Calculate all moves mentally, then provide clean, type-safe, functional code that follows ALL the rules above.**

Always prioritize:
1. **Type Safety** - No `any`, strict types
2. **Functional Programming** - Arrow functions, pure functions
3. **Project Standards** - Follow existing patterns
4. **Code Quality** - Clean, maintainable, documented
5. **User Experience** - Error handling, loading states, responsive UI

---

*Last Updated: 2025*
*Project: Tinder Profile Scanner Browser Extension*