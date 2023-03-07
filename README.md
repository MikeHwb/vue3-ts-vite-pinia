vue3-ts-vite-pinia 是一个 vue3 基础搭建模板，它是基于 vue3,ts 和 vite，项目都是以 composition api 风格编写。

版本：

vue3 发布之后，性能增强，速度 vue2 的倍数，打包体积都在减小（treeshaking），composition api 增加了项目可读性。

项目目的：

学习 vue3+ts
保持 composition api 风格

目录结构
├─ .cz-config.cjs
├─ .eslintrc.cjs
├─ .gitignore
├─ .husky
│ ├─ \_
│ │ ├─ .gitignore
│ │ └─ husky.sh
│ └─ pre-commit
├─ .prettierrc
├─ .vscode
│ ├─ extensions.json
│ └─ settings.json
├─ README.md
├─ commitlint.config.cjs
├─ env.d.ts
├─ index.html
├─ package-lock.json
├─ package.json
├─ pnpm-lock.yaml
├─ public
│ └─ vite.svg
├─ src
│ ├─ App.vue
│ ├─ assets
│ │ ├─ css
│ │ │ └─ global.scss
│ │ └─ vue.svg
│ ├─ axios
│ │ ├─ index.ts
│ │ ├─ request.ts
│ │ └─ types.ts
│ ├─ components
│ │ └─ HelloWorld.vue
│ ├─ main.ts
│ ├─ presets
│ │ └─ types
│ │ ├─ auto-imports.d.ts
│ │ └─ components.d.ts
│ ├─ routers
│ │ ├─ index.ts
│ │ └─ route.ts
│ ├─ store
│ │ ├─ index.ts
│ │ └─ modules
│ │ ├─ app.ts
│ │ ├─ menu.ts
│ │ ├─ tab.ts
│ │ └─ user.ts
│ └─ style.css
├─ tree.txt
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

项目采用技术:

vue3 + composition api
typescript3.9
sass (dart sass)
vue next 系列:

element-plus
pinia
Setup

前后端都启动
pnpm run dev

提交代码：
pnpm run git

"git": "git add . && git cz && git push"
