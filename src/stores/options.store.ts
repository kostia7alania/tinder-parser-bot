export const useOptionsStore = defineStore("options", () => {
  const { isDark, toggleDark } = useTheme()

  const { data: profile } = useBrowserSyncStorage<{
    name: string
    age: number
  }>("profile", {
    name: "Const",
    age: 300,
  })

  const { data: others } = useBrowserLocalStorage<{
    awesome: boolean
    counter: number
  }>("options", {
    awesome: true,
    counter: 0,
  })

  return {
    isDark,
    toggleDark,
    profile,
    others,
  }
})
