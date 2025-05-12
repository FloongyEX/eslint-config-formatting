# eslint-config-styling

<div align="center">
  <span>🌐 Language</span><br>
  <span>English</span>
  <span>|</span>
  <a href="README.zh-CN.md">简体中文</a>
</div>

ESLint shareable configuration, customized based on
[ESLint Stylistic](https://eslint.style/),
contains ESLint rules related to code formatting/styling,
focusing on code style checking and formatting.

This configuration is based on my personal needs and may not suit yours,
it's recommended to check [Rules](#rules)
to confirm if it meets your style needs.

## Install

Install this package as a devDependency:

```shell
npm install --save-dev  @floongyex/eslint-config-styling  
```

## Usage

Add the shared configuration object to the configuration array
in your ESLint flat config file:

```JavaScript file:eslint.config.js
import { defineConfig } from "eslint/config"
// import config
import sharedConfigForStyling from '@floongyex/eslint-config-styling'

export default defineConfig([
  // your other config items
  // ...

  // add config
  sharedConfigForStyling.stylistic,
])
```

For more details,
check the [ESLint official docs](https://eslint.org/docs/head/use/configure/configuration-files).

## Rules

You can check the source code ([stylistic](lib/stylistic.js))
to see the configured rules.

For more details about the rules, refer to
the [ESLint Stylistic Rules](https://eslint.style/packages/default#rules).

## License

MIT © FloongyEX
