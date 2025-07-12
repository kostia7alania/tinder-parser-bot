import { User } from "../types"

export const useUsersStore = defineStore("users", () => {
  const { data: users } = useBrowserSyncStorage<User[]>("users", [])

  const checkIsUserAdded = (user: User) => {
    return users.value.find(
      (usersItem) =>
        usersItem.id === user.id && usersItem.distance === user.distance,
    )
  }
  const addUser = (user: User) => {
    users.value.push(user)
  }

  return {
    addUser,
    checkIsUserAdded,
    users: readonly(users),
  }
})
