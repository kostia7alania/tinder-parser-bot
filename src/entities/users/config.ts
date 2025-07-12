import { TableColumn } from "@nuxt/ui"
import { User } from "./types"
export const usersTableHeaders: TableColumn<User>[] = [
  { header: "", accessorKey: "isVerified" },
  { header: "Имя", accessorKey: "name" },
  { header: "Расстояние", accessorKey: "distance" },
  { header: "Возраст", accessorKey: "age" },
  { header: "Рост", accessorKey: "height" },
  { header: "DateMatched", accessorKey: "dateMatched" },
  { header: "Я был", accessorKey: "currentCity" },
  { header: "Added", accessorKey: "currentDate" },
]
