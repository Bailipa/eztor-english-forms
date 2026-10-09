# EZTor English Forms

> 面向英语词形和词汇练习答案判断的轻量级 TypeScript 工具。

[English](README.md) · 中文

[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](./src) [![测试](https://img.shields.io/badge/测试-Vitest-6e9f18)](./tests) [![许可证](https://img.shields.io/badge/许可证-GPL--3.0-green)](./LICENSE)

## 在线 Demo

[打开交互式 Demo](https://bailipa.github.io/eztor-english-forms/) · [查看示例](examples/)

这是 EZTor 词汇练习使用的词形处理逻辑，支持不规则动词和名词、词形提示、常见词干变化，以及不依赖数据库或语言模型的答案判断。

## 安装或复制

```bash
npm install @eztor/english-forms
```

```ts
import { getIrregularForms, isCorrectAnswer } from '@eztor/english-forms'

getIrregularForms('write') // ['write', 'wrote', 'written']
isCorrectAnswer('written', 'write') // true
```

## 包含的工具

- `getIrregularForms`：返回已知的不规则名词和动词词形。
- `isCorrectAnswer`：接受不规则变化和安全的派生形式。
- `getFormHint`：标记复数、过去式、过去分词、比较级和进行时等常见词形。
- `getAlternateStems`：处理 `study` → `studies` 等常见拼写变化。

## 数据来源与限制

不规则词数据来自采用 MIT 许可证的 wink-lexicon，源文件中保留了来源说明。这是面向学习场景的紧凑工具，不是完整的形态学分析器；复杂边界情况仍应由应用自行维护规则。

## 运行测试

```bash
npm install
npm test
```

## 许可证

本包代码采用 GPL-3.0，详见 [`LICENSE`](LICENSE)。
