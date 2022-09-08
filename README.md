# vue3-component
从0开发自己的vue3组件库

## 初始化项目
1. 创建vue3-component目录

```bash
mkdir vue3-component

cd vue3-component

pnpm init -y
```

2. 创建 packages 组件库目录

```bash
mkdir packages

touch pnpm-workspace.yaml

vi pnpm-workspace.yaml

# 输入以下内容：
# packages:
#  - example # 存放我们组件测试的时候的代码
#  - docs # 存放我们组件文档的
#  - "packages/**"
```

3. 创建组件库example目录

```bash
pnpm create vite example
# 选择 vue && typescript
```

4. 创建组件库文档目录
```bash
mkdir docs

cd docs

pnpm init -y

pnpm install -D vuepress

# 配置package.json
# "dev": "vitepress dev ."
```

5. 通过根目录启动example项目

修改vue3-component/package.json的script
```json
    "scripts": {
        "dev": "pnpm -C example dev",
        "doc:dev": "pnpm -C docs dev"
    }
```