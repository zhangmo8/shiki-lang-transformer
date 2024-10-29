/// <reference types="vite/client" />

import type { ShikiTransformer } from 'shiki'

export interface TransformerLangOptions {
  /**
   * Prefix Class for code element
   * @default: `language-`
   */
  prefixClass?: string
}

/**
 * Render code element with language class
 */
export function transformerLanguageClass(
  options: TransformerLangOptions = {},
): ShikiTransformer {
  const { prefixClass = 'language-' } = options

  return {
    name: '@shikijs/transformers:language-class',
    code(node) {
      this.addClassToHast(node, `${prefixClass}${this.options.lang}`)
    },
  }
}
