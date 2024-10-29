# shiki-lang-transformer [![npm](https://img.shields.io/npm/v/shiki-lang-transformer.svg)](https://npmjs.com/package/shiki-lang-transformer)

[![Unit Test](https://github.com/zhangmo8/shiki-lang-transformer/actions/workflows/unit-test.yml/badge.svg)](https://github.com/zhangmo8/shiki-lang-transformer/actions/workflows/unit-test.yml)

<!-- Remove belows -->

Generate from [sxzz/ts-lib-starter](https://github.com/sxzz/ts-lib-starter)

If you need to generate language classes on code elements, you may need to use this plugin

````md
```ts
console.log('Hello Shiki')
```
````

- The outer `<code>` tag is modified: `<code class="language-ts">`

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
    // If you need a custom prefix, you can use the prefixClass option
    transformerLanguageClass({
      prefixClass: 'shiki-lang-',
    }),
    // ...
  ],
})
```
