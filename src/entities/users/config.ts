import { TableColumn } from "@nuxt/ui"
import { User } from "./types"
export const usersTableHeaders: TableColumn<User>[] = [
  { header: "", accessorKey: "isVerified" },
  { header: "Name", accessorKey: "name" },
  { header: "Distance", accessorKey: "distance" },
  { header: "Age", accessorKey: "age" },
  { header: "Height", accessorKey: "height" },
  { header: "DateMatched", accessorKey: "dateMatched" },
  { header: "I was in..", accessorKey: "currentCity" },
  { header: "Added", accessorKey: "createdAt" },
]
