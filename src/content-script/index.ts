// This import css file is used to style the iframe that is injected into the page

import { usersObserver } from "@/features/users-collect"
import "./index.css"
import { name } from "~/package.json"
import { pinia } from "src/utils/pinia"

const src = chrome.runtime.getURL("src/ui/content-script-iframe/index.html")

const iframe = new DOMParser().parseFromString(
  `<iframe class="crx-iframe ${name}" src="${src}" title="${name}"></iframe>`,
  "text/html",
).body.firstElementChild

if (iframe) {
  document.body?.append(iframe)
}

self.onerror = function (message, source, lineno, colno, error) {
  console.info("Error: " + message)
  console.info("Source: " + source)
  console.info("Line: " + lineno)
  console.info("Column: " + colno)
  console.info("Error object: " + error)
}

console.info("hello world from content-script")

const startUsersObserver = () => {
  console.info("-startUsersObserver-")
  createApp({}).use(pinia)

  const body = document.querySelector("body")

  useMutationObserver(body, usersObserver, { childList: true, subtree: true })
}

startUsersObserver()

// @ts-expect-error test
// eslint-disable-next-line @typescript-eslint/no-explicit-any
chrome.runtime.onMessage.addListener((request: any) => {
  if ("isShown" in request && iframe && "style" in iframe) {
    const height = request.isShown ? "420px" : "80px"
    const left = request.isShown ? "24%" : "0px"
    const width = request.isShown ? "50%" : "375px"
    ;(iframe as HTMLElement).style.minHeight = height
    ;(iframe as HTMLElement).style.height = height
    ;(iframe as HTMLElement).style.left = left
    ;(iframe as HTMLElement).style.width = width
    
    return
  }
  if ("onClickUserId" in request) {
    location.href = `https://tinder.com/app/messages/${request.onClickUserId}`
  }
})
