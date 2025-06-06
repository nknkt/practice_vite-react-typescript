# React + TypeScript + Vite

このテンプレートは、ViteでReactとTypeScriptを最小限のセットアップで動作させるためのものです。HMR（ホットモジュールリプレースメント）や一部のESLintルールも含まれています。

現在、2つの公式プラグインが利用可能です：

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)：[Babel](https://babeljs.io/)を使用し、Fast Refreshに対応
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc)：[SWC](https://swc.rs/)を使用し、Fast Refreshに対応

## ESLint設定の拡張

本番用アプリケーションを開発する場合は、型チェック対応のルールを有効にすることを推奨します。

```js
export default tseslint.config({
  extends: [
    // ...tseslint.configs.recommended を削除し、以下に置き換え
    ...tseslint.configs.recommendedTypeChecked,
    // より厳格なルールを使いたい場合はこちら
    ...tseslint.configs.strictTypeChecked,
    // スタイルに関するルールを追加したい場合はこちら
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // その他のオプション...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

React専用のLintルールを追加したい場合は、[eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) や [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) の導入もおすすめです。

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // react-x と react-dom プラグインを追加
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // その他のルール...
    // 推奨されるTypeScriptルールを有効化
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
## ディレクトリ構成と役割

| ディレクトリ                | 役割説明                                                                 |
|-----------------------------|--------------------------------------------------------------------------|
| src/assets/                 | 画像やSVGなどの静的アセットファイルを格納                                |
| src/components/             | UIコンポーネント群を格納（Atomic Designに基づき、atoms, molecules, organisms, templates などに分類） |
| src/components/atoms/       | ボタンや入力欄など最小単位の再利用可能なコンポーネント                   |
| src/components/molecules/   | 複数のatomを組み合わせた小さなUI部品                                     |
| src/components/organisms/   | 複数のmoleculeやatomを組み合わせた大きめのUI部品                         |
| src/components/templates/   | ページのレイアウトや構造を定義するコンポーネント                          |
| src/data/                   | ダミーデータや定数、APIレスポンスのモックなどを格納                       |
| src/hooks/                  | カスタムReactフックを格納                                                |
| src/pages/                  | ルーティング単位となるページコンポーネントを格納                          |
| src/styles/                 | グローバルCSSやユーティリティCSS、変数定義などのスタイルファイルを格納     |
| src/types/                  | TypeScriptの型定義ファイルを格納                                          |
| src/utils/                  | 汎用的なユーティリティ関数を格納                                          |