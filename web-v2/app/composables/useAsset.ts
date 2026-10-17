import type { Project, ShotSize } from '~/types/portfolio'

/**
 * Resolves files in /public against the app's baseURL, so the site keeps working
 * when it is deployed under a sub-path (NUXT_APP_BASE_URL=/portfolio/).
 */
export function useAsset() {
  const base = useRuntimeConfig().app.baseURL.replace(/\/?$/, '/')

  const asset = (path: string): string => base + path.replace(/^\//, '')
  const shotSrc = (slug: string, file: string, size: ShotSize): string => asset(`img/${slug}/${size}/${file}.webp`)
  const coverSrc = (p: Project): string => {
    const first = p.shots[0]
    return first ? shotSrc(p.slug, first[0], 'f') : ''
  }

  return { asset, shotSrc, coverSrc }
}
