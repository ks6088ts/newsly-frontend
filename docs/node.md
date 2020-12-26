```bash
npx create-react-app app --template typescript
mv app/* .
mv app/.gitignore .gitignore

yarn start

# format
yarn add -D \
    prettier \
    eslint-config-prettier

# lint
# eslint は既に入っているため追加しない
yarn add -D \
    @typescript-eslint/parser \
    @typescript-eslint/eslint-plugin

npx eslint --init
# ? How would you like to use ESLint? To check syntax and find problems
# ? What type of modules does your project use? JavaScript modules (import/export)
# ? Which framework does your project use? React
# ? Does your project use TypeScript? Yes
# ? Where does your code run? Browser
# ? What format do you want your config file to be in? JavaScript
# ? Would you like to install them now with npm? No # yarn でインストールするため
# 列挙されたモジュールを手動インストール
yarn add -D eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest eslint@latest
yarn build

# コマンドを package.json に追加
yarn format
yarn lint
```
