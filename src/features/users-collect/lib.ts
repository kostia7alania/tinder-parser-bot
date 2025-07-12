import { User, useUsersStore } from "@/entities/users"

const getUserFromPage = (): User | undefined => {
  const kmsAway = [
    ...document.querySelectorAll(
      ".profileCard__card>div:nth-child(2)>div>div div",
    ),
  ]?.find((e) => e.textContent?.includes("kilometers away"))
  const height = [
    ...document.querySelectorAll(
      ".profileCard__card>div:nth-child(2)>div>div div",
    ),
  ]?.find((e) => e.textContent?.endsWith(" cm"))

  const matchedAt = document
    .querySelector("#main-content .Expand iframe + div h1")
    ?.textContent?.split(" on ")
    ?.at(-1)

  if (!kmsAway) return

  const [name, years] =
    document.querySelectorAll("[aria-label$=' years'] span") ?? []

  const isVerified = Boolean(
    [...document.querySelectorAll("title")]?.find(
      (e) => e.textContent === "Verified!",
    )?.textContent,
  )

  return {
    id: location.href.split("/").at(-1)?.toString() ?? "-",
    name: name?.textContent?.toString() ?? "",
    distance: parseInt(kmsAway.textContent || "0") ?? 0,
    height: parseInt(height?.textContent || "0") ?? 0,
    age: parseInt(years?.textContent ?? "0") ?? 0,
    isVerified,
    currentCity: "Canggu",
    currentCountry: "Indonesia",
    matchedAt,
    createdAt: +new Date(),
  }
}

export const usersObserver = () => {
  const { addUser, checkIsUserAdded } = useUsersStore()
  const user = getUserFromPage()
  if (!user) {
    // console.warn("user not full", { user })
    return
  }

  // console.info("try user add", { user })

  if (checkIsUserAdded(user)) {
    // console.info("---- USER ALREADY ADDED", user)
    return
  }
  addUser(user)
  // console.info("++++ user added +++++", { user })
}
