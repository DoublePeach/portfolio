# Tovin Portfolio · 郝桃桃

基于 Next.js 的个人作品集站点，展示 AI Agent / RAG 工程化经历与项目，支持暗色主题与动效。

## 本地开发

```bash
pnpm install
pnpm dev
```

浏览器访问 [http://localhost:5173](http://localhost:5173)。

## 环境变量

复制 `.env.example` 为 `.env` 并按需修改。上线前务必将 `NEXT_PUBLIC_APP_DOMAIN` 改为正式 HTTPS 域名。

## 部署（Vercel）

1. 导入本仓库，Framework 选择 **Next.js**
2. 在 Environment Variables 中配置与 `.env.example` 相同的 `NEXT_PUBLIC_*` 变量
3. Deploy

## 自定义内容

| 位置 | 说明 |
|------|------|
| `.env` | 姓名、简介、域名、GitHub 用户名 |
| `package.json` → `author` | 邮箱、博客、电话 |
| `src/app/data.ts` | 工作、教育、技能、项目 |
| `src/app/page.tsx` | 「关于」段落 |
| `public/me.jpg` | 头像（可选，无则显示姓名缩写） |
| `public/og.svg` | 社交分享预览图 |

## 技术栈

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · Motion

## 许可证

[MIT](LICENSE)
