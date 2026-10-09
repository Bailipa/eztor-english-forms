# EZTor English Forms

> Small, dependency-free TypeScript helpers for English irregular forms and vocabulary answer matching.

[English](README.md) · [中文](README.zh-CN.md)

[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](./src) [![Tests](https://img.shields.io/badge/tests-Vitest-6e9f18)](./tests) [![License](https://img.shields.io/badge/license-GPL--3.0-green)](./LICENSE)

## Live demo

[Open the interactive demo](https://bailipa.github.io/eztor-english-forms/) · [Try the examples](examples/)

This package contains the word-form logic used by EZTor vocabulary exercises. It recognizes irregular verbs and nouns, generates form hints, derives alternate stems, and checks learner answers without a database or language model.

## Install or copy

```bash
npm install @eztor/english-forms
```

```ts
import { getIrregularForms, isCorrectAnswer } from '@eztor/english-forms'

getIrregularForms('write') // ['write', 'wrote', 'written']
isCorrectAnswer('written', 'write') // true
```

## Included helpers

- `getIrregularForms` returns known noun and verb forms.
- `isCorrectAnswer` accepts irregular forms and safe derived forms.
- `getFormHint` labels common plural, past, participle, comparative, and progressive forms.
- `getAlternateStems` supports common spelling changes such as `study` → `studies`.

## Data and limitations

The irregular word data is derived from wink-lexicon, released under the MIT license, with attribution in the source file. This is a compact learner-oriented helper, not a complete morphological analyzer; applications should keep their own editorial rules for edge cases.

## Run tests

```bash
npm install
npm test
```

## License

GPL-3.0 for this package. See [`LICENSE`](LICENSE).
