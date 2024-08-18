# eslintrc-to-flatfile

> Example showing how to migrate an existing eslinrc.json to new flat file config for using ESLint v9 and above in a CommonJS project


This is the accompanying example project for the  []().

To follow along with the guide, clone this repo an inspect the branches for ESLint v8 (old eslintrc config) and v9 (new flat-file config).

*Note:* Since the needed dependencies change when migrating from ESLint v8 to v9, you'll need to to a `npm install` after switching the branch.

```bash
# clone the example project
git clone https://github.com/tsmx/eslintrc-to-flatfile.git

# check out/switch to the original ESLint v8 project using eslintrc.json
git checkout eslint-v8
npm install

# check out/switch to the migrated ESLint v9 project using new eslint.config.js
git checkout eslint-v9
npm install
```