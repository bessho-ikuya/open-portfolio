Open Portfolioはオープンソースのポートフォリオサイトです。データベース不要でNextjsで作成されたモダンなポートフォリオサイトを簡単に自身の環境に構築できます。独自のデザインにカスタマイズして利用いただくこともできます。以下の機能が含まれます：
</br> </br>

**1. あなたのスキルの掲載**:
スキル、職務経験、自身の作成したサイト集など、ポートフォリオサイトによく掲載される内容を用意。

**2. モダンなデザインと豊富なカラーテーマ**:
shadcn/uiを使用したモダンなデザインと豊富なカラーテーマを用意。
ダークモードとライトモードの切り替えも可能です。

**3. 多言語化**:
英語、日本語、中国語など、あなたのポートフォリオサイトを多言語で表示できます。

**4. 技術ブログサービスとの連携**:
QiitaやZennなどの技術ブログサービスと連携し、ブログ記事をポートフォリオサイトに表示できます。

## Open Portfolioの使い方

オープンソースリポジトリをフォークし、自身のサーバーで構築いただくことで、ポートフォリオサイトを作成できます。

## 最新の情報を入手

GitHub上でOpen Portfolioにスターを付けることで、Open Portfolioに関する新しいニュースを受け取れます。

![star-us](https://github.com/user-attachments/assets/2e2b3797-d916-41b0-91e1-d7e2b6e8538d)

## クイックスタート

> Open Portfolioをインストールする前に、お使いのマシンが以下の最小システム要件を満たしていることを確認してください：
>
> - CPU >= 1コア
> - RAM >= 2GB

</br>

インストールコマンドを実行する前に、マシンに[Node.js](https://nodejs.org/en/download/)がインストールされていることを確認してください。

```bash
npm install
cp .env.example .env
npm run dev
```

実行後、ブラウザで[http://localhost:3000](http://localhost:3000)にアクセスし、動作を確認できます。

## 次のステップ

設定をカスタマイズする必要がある場合は、[ja_setting.json](src/i18n/dictionaries/ja_setting.json) ファイルのコメントを参照しながら対応する値を更新してください。

#### Vercelにデプロイ

Open Portfolioは[Vercel](https://vercel.com/) へのデプロイを推奨しています。
Githubを連携して、`.env.example` ファイルを参考に環境変数設定し、`Next.js`を指定することですぐにデプロイできます。

## 貢献

コードに貢献いただける方は、[Contribution Guide](CONTRIBUTING.md)を参照してください。

**貢献者**

準備中...

## コミュニティ & お問い合わせ

- [Github Discussion](https://github.com/bessho-ikuya/open-portfolio/discussions). 主に: フィードバックの共有や質問。
- [GitHub Issues](https://github.com/bessho-ikuya/open-portfolio/issues).

## ライセンス

このリポジトリは、[Open Portfolioオープンソースライセンス](LICENSE)の下で利用可能です。
