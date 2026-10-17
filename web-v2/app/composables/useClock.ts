import { PROFILE } from '~/data/portfolio'

let timer: ReturnType<typeof setInterval> | undefined

/**
 * Local time in Butuan City (HH:MM, 24h). Renders "--:--" on the server and during
 * hydration so the markup matches, then ticks in the browser. One shared interval
 * serves every clock on the page.
 */
export function useClock() {
  const time = useState('clock:time', () => '--:--')

  onMounted(() => {
    if (timer) return
    const fmt = new Intl.DateTimeFormat('en-GB', { timeZone: PROFILE.timeZone, hour: '2-digit', minute: '2-digit', hour12: false })
    const tick = () => {
      time.value = fmt.format(new Date())
    }
    tick()
    timer = setInterval(tick, 10_000)
  })

  return time
}
