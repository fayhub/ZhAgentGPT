## 🚀 汉化修改内容

1. 简单汉化了下，核心是在预添加的前置提示词，指定回复的答案要和提问的语言类型一致，就可以实现用户用什么语言提问，回答就用什么语言回答。
2. 网站内容简单翻译了下。
3. 生成 PDF 的时候会有乱码，换了一个中文的字体库。
4. 已经部署在 vercel 上，部署的时候注意 next.config.mjs 下的这行代码可以注释掉：

```bash
//!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));
```

做了个 demo，大家可以看看：

- [Click here](https://agentgpt.jinchun.vip/).

## 👨‍🚀 Getting Started

### 🐳 Docker Setup

Docker 是在本地运行 AgentGPT 最简单的方法。
以下是一个方便的设置脚本。

```bash
./setup.sh --docker
```

### 👷 Local Development Setup

如果你想在本地开发 AgentGPT，最简单的方法是使用以下的设置脚本。

```bash
./setup.sh --local
```

### 🛠️ Manual Setup

> 🚧 你需要安装 [Nodejs +18 (LTS recommended)](https://nodejs.org/en/)。

1. 创建存储库分支:

- [Click here](https://github.com/reworkd/AgentGPT/fork).

2. 克隆存储库:

```bash
git clone git@github.com:YOU_USER/AgentGPT.git
```

3. 安装依赖项:

```bash
cd AgentGPT
npm install
```

4. 使用以下内容创建.env:

> 🚧 环境变量必须符合以下 [架构](https://github.com/reworkd/AgentGPT/blob/main/src/env/schema.mjs).

```bash
# 部署环境:
NODE_ENV=development

# Next Auth 配置:
# 用`openssl rand -base64 32`生成NEXTAUTH_SECRET的秘密
NEXTAUTH_SECRET=changeme
NEXTAUTH_URL=http://localhost:3000
DATABASE_URL=file:./db.sqlite

# 你的open api密钥
OPENAI_API_KEY=changeme
```

5. 使用 sqlite 修改 prisma 架构:

```bash
./prisma/useSqlite.sh
```

**注意:** 使用 sqlite 时才需要执行此步骤。

6. 准备就绪 🥳，现在可以运行了:

```bash
# 创建数据库迁移
npx prisma db push
npm run dev
```

### 🚀 GitHub Codespaces

使用[GitHub Codespaces](https://github.com/features/codespaces)在云端设置 AgentGPT。

1. 从 GitHub 存储库中，单击绿色的 "Code" 按钮并选择 "Codespaces"。
2. 创建一个新的 Codespace 或选择之前已创建的 Codespace。
3. Codespaces opens in a separate tab in your browser.
4. 在终端中运行 `bash ./setup.sh --local`。
5. 当终端中提示时，添加你的 OpenAI API 密钥。
6. 当构建过程完成后，单击 "Open in browser"。

- 如果要关闭 AgentGPT，请在终端中输入 Ctrl+C
- 如果要重启 AgentGPT, 请在终端中运行 `npm run dev`。

运行该项目 🥳

```
npm run dev
```
