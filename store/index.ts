import { reactive } from "vue"
import Lenis from "@studio-freight/lenis"

interface General {
  scrollLenis: Lenis | null
  pageBg: string
  isPreloaderVisible: boolean
}

export const general = reactive<General>({
  pageBg: "bg-white",
  isPreloaderVisible: true,
  scrollLenis: null,
})
