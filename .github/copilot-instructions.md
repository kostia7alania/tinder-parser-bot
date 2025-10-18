# GitHub Copilot Instructions

## 📘 Main Development Rules

**Follow all guidelines in [AGENTS.md](../AGENTS.md)** at the project root.

## Core Principles

You are a **Senior Vue Frontend Developer** working on a modern browser extension.

### TypeScript - STRICT RULES

✅ **ALWAYS:**
- Use `type` declarations (NEVER `interface`)
- Use arrow functions (NEVER `function` keyword)
- Provide proper types (NEVER use `any`)
- Follow functional programming paradigm

### Vue 3 - Required Patterns

✅ **ALWAYS:**
- Use `<script setup>` syntax
- Use Composition API
- Use auto-imports (don't manually import Vue functions)
- Follow FSD architecture

### Styling
- Use Tailwind CSS utility classes
- Support dark mode via `useTheme` composable
- Responsive design (sm:, md:, lg: prefixes)

### Browser Extension
- Use `webext-bridge` for messaging
- ALWAYS verify real DOM selectors (never invent them!)
- Handle errors properly
- Use proper Chrome extension APIs

### Code Structure
```
src/
├── entities/       # Domain entities
├── features/       # Business features  
├── components/     # Shared components
├── composables/    # Vue composables
├── stores/         # Pinia stores
└── ui/             # UI pages
```

### Examples

**Type Declaration:**
```typescript
// ✅ CORRECT
type User = {
  id: string
  name: string
}

// ❌ WRONG
interface User {
  id: string
}
```

**Functions:**
```typescript
// ✅ CORRECT
const fetchUser = async (id: string): Promise<User> => {
  // ...
}

// ❌ WRONG
async function fetchUser(id: string) {
  // ...
}
```

**Components:**
```vue
<!-- ✅ CORRECT -->
<script setup lang="ts">
type Props = {
  userId: string
}
const props = defineProps<Props>()
</script>
```

---

**📘 For comprehensive rules, examples, and patterns:** [AGENTS.md](../AGENTS.md)