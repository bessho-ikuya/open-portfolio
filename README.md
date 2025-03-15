# アプリケーションセットアップ

```bash
npm install
cp .env.example .env
npm run dev
```

# プライベートリポジトリで構築する方法

## repositoryのセットアップ

1. あらかじめプライベートリポジトリを作成しておきます。
2. gitコマンドでfork対象のリポジトリをローカルインストールします。

```bash
git clone https://github.com/bessho-ikuya/open-portfolio
```

3. 作成したプライベートリポジトリにPushする。

```bash
git push https://github.com/自分の/Fork先のPrivateリポジトリのURL
```

## fork対象のリポジトリの最新版の変更の反映方法

```bash
git pull https://github.com/bessho-ikuya/open-portfolio --ff
```