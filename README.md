# OnePage

一个基于 GitHub Pages 的开源个人网站生成器，通过简单的 YAML 配置文件即可快速生成专业的个人作品集网站。

[在线预览](https://example.com) · [使用文档](./docs/OnePage产品设计文档.md)

## 特性

- 🚀 **零代码**：仅通过修改 YAML 配置文件即可完成全部内容管理
- 💰 **零成本**：基于 GitHub Pages 托管，无需服务器费用
- ⚡ **一键部署**：fork 后自动触发部署，无需手动操作
- 🎨 **现代设计**：基于 Astro + Tailwind CSS，性能优异
- 🌙 **暗色模式**：支持亮色/暗色主题自动切换
- 📱 **响应式设计**：完美适配移动端、平板、桌面
- 🎯 **蓝色主题**：专业清爽的蓝色配色方案

## 快速开始

### 1. Fork 本仓库

点击 GitHub 仓库页面的 `Fork` 按钮，将仓库创建到你的 GitHub 账户。

### 2. 重命名仓库

将仓库名修改为 `{your-username}.github.io`，其中 `{your-username}` 为你的 GitHub 用户名。

> **重要**：仓库名必须是 `{your-username}.github.io` 格式，才能通过 `https://{your-username}.github.io` 访问

### 3. 修改配置

编辑仓库根目录下的 `config.yaml`，按照注释说明填写你的个人信息：

```yaml
profile:
  name: "你的名字"
  title: "你的职位"
  bio: "你的简介"
  # ...
```

### 4. 等待部署

GitHub Actions 会自动检测配置文件的修改，触发构建并部署。等待 1-2 分钟后即可访问 `https://{your-username}.github.io`

## 部署到 GitHub Pages

### 自动部署（推荐）

项目已配置好 GitHub Actions，fork 并重命名仓库后即可自动部署：

1. **Fork 仓库**：点击仓库右上角的 "Fork" 按钮
2. **重命名仓库**：进入仓库 Settings → 将仓库名改为 `{your-username}.github.io`
3. **修改配置**：编辑 `config.yaml` 填写个人信息
4. **等待构建**：进入 Actions 页面查看构建状态，等待部署完成
5. **访问网站**：访问 `https://{your-username}.github.io`

### 部署检查清单

| 步骤 | 操作              | 说明                                            |
| ---- | ----------------- | ----------------------------------------------- |
| 1    | Fork 仓库         | 创建个人副本                                    |
| 2    | 重命名仓库        | 必须是 `{username}.github.io` 格式              |
| 3    | 修改 config.yaml  | 填写个人信息                                    |
| 4    | 启用 GitHub Pages | Settings → Pages → Source 设为 "GitHub Actions" |
| 5    | 检查 Actions      | 等待 workflow 运行完成                          |
| 6    | 访问网站          | 打开 `https://{username}.github.io`             |

### 手动部署（如自动部署失败）

```bash
# 克隆仓库
git clone https://github.com/{username}/{username}.github.io.git
cd {username}.github.io

# 安装依赖
npm install

# 构建
npm run build

# 推送构建结果
# 方法1：通过 GitHub Actions（推荐）
git add .
git commit -m "Update config"
git push

# 方法2：手动部署到 gh-pages 分支
npm run build
cd dist
git init
git add .
git commit -m "Deploy"
git push -f https://github.com/{username}/{username}.github.io.git master:gh-pages
```

然后在 Settings → Pages 中设置 Source 为 "gh-pages" 分支。

## 配置说明

### 基础信息

```yaml
site:
  title: "网站标题"
  description: "网站描述（SEO用）"

profile:
  name: "姓名"
  avatar: "/images/avatar.jpg" # 头像图片路径
  title: "职位/头衔"
  bio: "个人简介"
  email: "your@email.com"
```

### 社交链接

```yaml
profile:
  socials:
    - platform: "GitHub"
      url: "https://github.com/username"
      icon: "github"
    - platform: "LinkedIn"
      url: "https://linkedin.com/in/username"
      icon: "linkedin"
```

### 技能展示

```yaml
skills:
  - name: "前端开发"
    items:
      - "React"
      - "Vue"
      - "TypeScript"
```

### 教育/工作经历

```yaml
education:
  - school: "学校名"
    degree: "学位"
    period: "时间"

experience:
  - company: "公司名"
    position: "职位"
    period: "时间"
```

### 项目案例

```yaml
projects:
  - name: "项目名"
    description: "项目描述"
    tech: ["技术栈"]
    image: "/images/projects/project.jpg" # 项目配图
    link: "https://github.com/xxx" # 代码链接
    demo: "https://demo.xxx.com" # 演示链接
    qrcode: "https://example.com/qr.png" # 二维码（可选）
    screenshots: # 截图（可选）
      - "/images/screenshot1.jpg"
      - "/images/screenshot2.jpg"
```

> **提示**：项目案例支持二维码和截图展示，适合小程序/App 等无法直接跳转的项目。配置 `qrcode` 或 `screenshots` 后，卡片上会显示「点击查看」按钮。

### 主题设置

```yaml
theme:
  mode: "auto" # light / dark / auto（跟随系统）
  theme: "blue"
```

可选主题：
| 主题 | 主色 | 强调色 | 风格 |
|------|------|--------|------|
| blue | #3B82F6 | #06B6D4 | 专业清爽（默认） |

## 项目结构

```
onepage/
├── src/
│   ├── components/     # Astro 组件
│   ├── layouts/        # 布局
│   ├── pages/          # 页面
│   ├── styles/         # 样式
│   └── utils/          # 工具函数
├── public/             # 静态资源
│   └── images/         # 图片目录
├── .github/
│   └── workflows/     # GitHub Actions
├── config.yaml         # 用户配置文件
└── package.json
```

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 自定义域名

如需绑定个人域名：

1. 购买域名
2. 在域名服务商处添加 CNAME 记录，指向 `{your-username}.github.io`
3. 在仓库 Settings → Pages → Custom domain 中填写你的域名
4. 勾选 "Enforce HTTPS"

## 添加图片

将图片放入 `public/images/` 目录：

```
public/
├── images/
│   ├── avatar.jpg              # 头像
│   └── projects/
│       ├── project-1.jpg       # 项目配图
│       └── screenshot.jpg      # 项目截图
```

然后在 `config.yaml` 中引用：

```yaml
profile:
  avatar: "/images/avatar.jpg"

projects:
  - image: "/images/projects/project-1.jpg"
```

## 许可证

MIT License - 详见 [LICENSE](./LICENSE)

## 贡献

欢迎提交 Issue 和 Pull Request！
