# shiki-lang-transformer [![npm](https://img.shields.io/npm/v/shiki-lang-transformer.svg)](https://npmjs.com/package/shiki-lang-transformer)

<!-- Remove belows -->

Generate from [sxzz/ts-lib-starter](https://github.com/sxzz/ts-lib-starter)

## Install

```bash
npm i shiki-lang-transformer
```

## Usage

```ts
import { codeToHtml } from 'shiki'
import { transformerLanguageClass } from 'shiki-lang-transformer'

const code = `console.log('hello')`
const html = await codeToHtml(code, {
  lang: 'ts',
  transformers: [
    // ...
    transformerLanguageClass(),
    // ...
  ],
})
```
