# 環境

- Typescript
- webpack
- husky
- ESLint
- Prettier

# 使用方法

` npm run start` 開発用コマンド
` npm run build` 本番用コマンド

# 参考 URL

https://qiita.com/YSasago/items/778eef2a50d5664da572
https://qiita.com/YSasago/items/121f8dee0d43a39e95bd

#　解決点
## image画像が表示されない
- 相対パスをlayout.tsからではなく、index.html（idが起点のため）を起点として記述する。
