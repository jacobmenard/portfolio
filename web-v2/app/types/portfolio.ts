/** [heading, body] pair used by constraint and approach lists. */
export type Point = readonly [title: string, body: string]

/** [audience, things they can do]. */
export type Role = readonly [audience: string, items: readonly string[]]

/** [value, label], e.g. ['18', 'Screens designed and built']. */
export type Outcome = readonly [value: string, label: string]

/** [file name inside public/img/<slug>/{f,t}/ without extension, caption]. */
export type Shot = readonly [file: string, caption: string]

export type BentoSpan = 's-12' | 's-8' | 's-7' | 's-6' | 's-5' | 's-4' | 's-3'

export interface ProjectVideo {
  /** Path relative to the site root, e.g. img/negosyo-works/v/walkthrough.mp4 */
  src: string
  poster: string
  /** Display length, e.g. 1:46 */
  length: string
}

export interface Project {
  slug: string
  name: string
  year: number
  client: string
  span: BentoSpan
  latest?: boolean
  kicker: string
  platform: string
  /** Public https URL, or empty for private builds. */
  live: string
  video?: ProjectVideo
  short: string
  summary: string
  context: string
  roles: readonly Role[]
  constraints: readonly Point[]
  approach: readonly Point[]
  outcomes: readonly Outcome[]
  /** The first shot is the card image and the case study cover. */
  shots: readonly Shot[]
}

export interface ExperienceItem {
  years: string
  company: string
  role: string
  note: string
  location: string
}

export interface SocialLink {
  label: string
  /** Must be https; links with an empty or non-https URL are not rendered. */
  url: string
}

export type ShotSize = 'f' | 't'
