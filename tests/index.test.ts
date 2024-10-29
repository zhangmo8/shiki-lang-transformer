import { codeToHtml, type ShikiTransformer } from 'shiki'
import { describe, expect, it } from 'vitest'
import { transformerLanguageClass } from '../src'

function suite(
  name: string,
  files: Record<string, string>,
  transformers: ShikiTransformer[],
  replace?: (code: string) => string,
  outputSuffix = '',
) {
  describe(name, () => {
    for (const path of Object.keys(files)) {
      if (path.endsWith('.output.html')) continue

      it(path, async () => {
        const ext = path.split('.').pop()!

        let code = await codeToHtml(files[path], {
          lang: ext,
          theme: 'github-dark',
          transformers,
        })

        if (replace) code = replace(code)

        expect(code).toMatchFileSnapshot(`${path}${outputSuffix}.output.html`)
      })
    }
  })
}

suite(
  'lang-class',
  import.meta.glob('./fixtures/*.*', { as: 'raw', eager: true }),
  [transformerLanguageClass({ prefixClass: 'shiki-lang-' })],
  (code) => String(code),
)
