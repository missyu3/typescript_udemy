- パッケージ管理
  - package.json
- TypeScript のインストール
  - 最新 Version の確認
    - npm info typescript
  - インストールコマンド
    - npm install --save-dev typescript@3.9.7
    - 開発環境でのみ必要なため、--save-dev を追加している
  - JS への変換
    - tsc
    - ./node_modules/.bin/tsc src/install-typescript.ts
    - npx tsc src/install-typescript.ts
- ツールの紹介

  - ts-node
    - コンパイルと実行を同時に実行してくれる
    - npx ts-node src/install-typescript.ts
  - ts-node-dev
    - バックグラウンドで対象のファイルを監視し、変更を感知した場合コンパイルしてくれる
    - npx ts-node-dev --respawn src/install-typescript.ts
    - npm run dev src/install-typescript.ts
      - package.json にコマンドを追加しているため、使用できる。
  - axios

- tsconfig.json のデフォルト設定の作成
  - npx tsc --init
- VSCode の TypeScript の Version と Global の Version を合わせる方法
  - 右下に表示されている Version をクリック
  - 表示に合わせてクリック

## TypeScript の説明

- JS に型が導入されたもの。
- TypeScript で作成されたソースはコンパイルされることで、JS のソースとなる。
