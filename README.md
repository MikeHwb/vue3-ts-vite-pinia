### 项目依赖版本号

```
"node": "^18.12.0"
"pnpm": "^7.14.1"
```

### 下载&运行

```
pnpm install
pnpm run dev
```

### git 提交规范

```
feature: 新功能、新特性
fix: 修改 bug
style: 在不影响功能逻辑的基础上修改样式
test: 测试用例新增、修改
perf: 更改代码，以提高性能（在不影响代码内部行为的前提下，对程序性能进行优化）
refactor: 代码重构（重构，在不影响代码内部行为、功能下的代码修改）
chore: 开发工具变动(构建、脚手架工具等)
docs: 文档修改
ci: 项目架构相关部署
build: 影响项目构建或依赖项修改
revert: 恢复上一次提交
release: 发布新版本
```

### 项目结构

```
oa_web_v3
├─ .husky
├─ .gitignore
├─ .cz-config.cjs
├─ .eslintrc.cjs
├─ .prettierrc   // 自动化配置项目规范(以上所有)
├─ build        // 打包配置
├─ index.html
├─ pnpm-lock.yaml
├─ package.json  // 依赖文件
├─ public
│  └─ vite.svg
├─ src
│  ├─ assets  // 静态资源
│  │  ├─ logo.png
│  │  ├─ images
│  │  └─ css
│  │     ├─ reset.css
│  │     └─ element-variables.scss
│  ├─ presets     // 预配置-文件自动生成
│  │  ├─ eslint
│  │  │  └─ eslintrc-auto-import.json  // eslint配置文件
│  │  └─ types
│  │     ├─ auto-imports.d.ts  // api自动导入声明文件位置
│  │     └─ components.d.ts    // 组件自动导入声明文件位置
│  ├─ interfaces // ts类型
│  │  └─ index.ts
│  ├─ api
│  │  └─ login.ts
│  ├─ axios  // http 方法封装
│  │  ├─ index.ts
│  │  └─ request.ts
│  ├─ routers  // 路由配置
│  │  ├─ index.ts
│  │  └─ route.ts
│  ├─ stores  // 状态管理库配置
│  │  └─ index.ts
│  ├─ utils  // 公共方法
│  │  └─ index.ts
│  ├─ layouts   // 布局系统
│  │  └─ notFound.vue
│  ├─ components  // 公共组件
│  │  └─ demo.vue
│  ├─ views   // 业务页面
│  │  └─ business.vue
│  ├─ App.vue
│  ├─ main.ts
│  └─ env.d.ts
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts // vite 配置
```

### 路由配置说明

```
1. 授权标识perm命名为简单英文,且命名必须唯一
2. 动态路由：新增、编辑路由页面的组件路径、授权标识、菜单URL等必填，组件路径为views文件夹下面的对应组件路径。
3. 页面缓存：组件的name必须唯一，且与菜单的授权标识perm一样
```
