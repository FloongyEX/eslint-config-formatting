# eslint-config-styling

<div align="center">
  <span>🌐 Language</span><br>
  <a href="README.md">English</a>
  <span>|</span>
  <span>简体中文</span>
</div>

ESLint 可共享配置，基于 [ESLint Stylistic](https://eslint.style/)
定制，包含了与代码格式/风格相关的 ESLint 规则，专注于代码风格检查与格式化。

此配置是基于我个人的需求配置的，不一定适合您的需求，建议查看[规则](#规则)以确认是否符合您的风格需求。

## 安装

将此包作为开发依赖（devDependency）安装：

```shell
npm install --save-dev  @floongyex/eslint-config-styling  
```

## 使用方法

将共享配置对象添加到您的 ESLint 扁平化配置文件的配置数组中：

```JavaScript file:eslint.config.js
import { defineConfig } from "eslint/config"
// 导入配置
import stylingConfig from '@floongyex/eslint-config-styling'

export default defineConfig([
  // 你的其他配置项
  // ……

  // 添加配置
  stylingConfig.stylistic,
])
```

更多信息请参阅 [ESLint 官方文档](https://eslint.org/docs/head/use/configure/configuration-files)。

## 规则

可以查看源代码（[stylistic](lib/stylistic.js)）来了解已配置的规则。

关于规则的更多信息请参阅 [ESLint Stylistic 规则](https://eslint.style/packages/default#rules)。

## 许可证

MIT © FloongyEX
