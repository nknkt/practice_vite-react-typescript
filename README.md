# React + TypeScript + Vite

## 🚀 プロジェクトの特徴

- **React 19** - 最新のReactライブラリ
- **TypeScript** - 型安全な開発環境
- **Vite** - 高速な開発サーバーとビルドツール
- **React Router DOM** - SPAのルーティング
- **CSS Modules** - スコープ化されたCSS
- **destyle.css** - CSSリセット
- **ESLint** - コード品質の維持

## 📦 インストールと実行

### 依存関係のインストール
```bash
npm install
```

### 開発サーバーの起動
```bash
npm run dev
```

### プロダクションビルド
```bash
npm run build
```

### プレビューサーバーの起動
```bash
npm run preview
```

### Lintの実行
```bash
npm run lint
```
## 📁 プロジェクト構成

```
practice_vite-react-typescript/
├── index.html                 # エントリーポイントHTML
├── package.json              # プロジェクト設定と依存関係
├── vite.config.ts            # Vite設定ファイル
├── tsconfig.json             # TypeScript設定
├── eslint.config.js          # ESLint設定
├── postcss.config.cjs        # PostCSS設定
├── README.md                 # プロジェクトドキュメント
└── src/
    ├── App.tsx               # メインアプリケーションコンポーネント
    ├── main.tsx             # Reactアプリケーションのエントリーポイント
    ├── vite-env.d.ts        # Vite環境の型定義
    ├── assets/              # 静的アセット
    │   ├── images/          # 画像ファイル
    │   │   ├── common/      # 共通画像（ロゴなど）
    │   │   └── home/        # ホーム専用画像
    │   ├── scripts/         # JavaScriptファイル
    │   └── styles/          # グローバルスタイル
    │       ├── global.css   # グローバルCSS
    │       ├── _variables.css # CSS変数
    │       ├── _fonts.css   # フォント設定
    │       ├── _layout.css  # レイアウト用CSS
    │       └── _util.css    # ユーティリティCSS
    ├── components/          # UIコンポーネント
    │   ├── common/          # 共通コンポーネント
    │   │   ├── Button.tsx   # ボタンコンポーネント
    │   │   └── MainVisual.tsx # メインビジュアルコンポーネント
    │   ├── feature/         # 機能特化コンポーネント
    │   │   └── ContactForm.tsx # お問い合わせフォーム
    │   └── layout/          # レイアウトコンポーネント
    │       ├── Layout.tsx   # 全体レイアウト
    │       ├── Header.tsx   # ヘッダー
    │       ├── Footer.tsx   # フッター
    │       └── Navigation.tsx # ナビゲーション
    └── pages/               # ページコンポーネント
        ├── Home.tsx         # ホームページ
        ├── About.tsx        # 会社概要ページ
        └── Contact.tsx      # お問い合わせページ
```

## 🎯 ページとルーティング

このプロジェクトには以下のページが実装されています：

- **Home** (`/`) - トップページ
- **About** (`/about`) - 会社概要ページ
- **Contact** (`/contact`) - お問い合わせページ

ルーティングには `react-router-dom` を使用しており、SPA（Single Page Application）として動作します。

## 🎨 スタイリング

- **CSS Modules** - コンポーネント単位でスコープ化されたスタイル
- **destyle.css** - ブラウザデフォルトスタイルのリセット
- **カスタムCSS変数** - 一貫したデザインシステムの構築
- **レスポンシブデザイン** - モバイルファーストアプローチ

## 🛠️ 開発で使用している技術

### フロントエンド
- **React 19.1.0** - UIライブラリ
- **TypeScript 5.8.3** - 型安全なJavaScript
- **React Router DOM 7.6.0** - SPAルーティング

### 開発環境
- **Vite 6.3.5** - 高速ビルドツール
- **ESLint 9.25.0** - コード品質チェック
- **PostCSS 8.5.3** - CSS処理
