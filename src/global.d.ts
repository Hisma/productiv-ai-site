// stub out Astro’s virtual content API
declare module 'astro:content' {
  /** Your own code only ever calls defineCollection, but this makes
   *  Starlight’s internals happy as well. */
  export function defineCollection<T = any>(config: any): any
}

// also keep your raw‐JSON import stub if you need it
declare module '*.jsonc?raw' {
  const json: string
  export default json
}