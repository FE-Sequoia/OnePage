# OnePage 产品设计文档

## 一、产品概述

### 1.1 产品定位

OnePage 是一款基于 GitHub Pages 的开源个人网站生成器，通过简单的 YAML 配置文件，用户无需编写代码即可快速生成专业的个人作品集网站。定位为技术人员和创意工作者的零门槛个人品牌展示工具。

### 1.2 核心价值主张

- **零代码**：仅通过修改 YAML 配置文件即可完成全部内容管理
- **零成本**：基于 GitHub Pages 托管，无需服务器费用
- **一键部署**：fork 后自动触发部署，无需手动操作
- **高性能**：基于 Astro 构建，首屏加载极速
- **可扩展**：预留主题系统和功能模块扩展能力

### 1.3 产品口号

> 你的个人品牌，从一份 YAML 开始

---

## 二、目标用户与市场

### 2.1 核心目标用户

| 用户类型    | 典型场景           | 核心需求             |
| ----------- | ------------------ | -------------------- |
| 求职开发者  | 面试时展示项目经验 | 快速搭建、专业的视觉 |
| 自由职业者  | 展示接案能力       | 作品集、案例展示     |
| 学生/应届生 | 实习/校招求职      | 教育背景、项目经历   |
| 技术博主    | 个人品牌建立       | 博客、社交链接       |

### 2.2 用户画像

**典型用户 A：前端开发者**

- 25-30 岁，有 2-5 年工作经验
- 熟悉 Git 和 GitHub，但不想花时间做网站
- 面试时需要向 HR 展示项目
- 期望：30 分钟内完成网站搭建

**典型用户 B：应届生**

- 22-24 岁，计算机专业应届毕业生
- Git 基础薄弱，需要详细教程
- 期望：能展示实习项目和毕业设计

### 2.3 市场机会

- 现有竞品多为代码导向，需要修改多个文件
- 缺乏面向中国用户的完整教程和中文文档
- 团队/工作室场景几乎是市场空白
- 主题生态商业模式清晰可见

---

## 三、功能列表

### 3.1 MVP 功能（必须）

| 功能模块       | 说明                                      | 优先级 |
| -------------- | ----------------------------------------- | ------ |
| **个人信息**   | 姓名、头像、简介、职位、地理位置          | P0     |
| **教育经历**   | 学校、学位、专业、时间段                  | P0     |
| **工作经历**   | 公司、职位、职责描述、时间段              | P0     |
| **项目作品**   | 项目名称、描述、技术栈、图片、链接        | P0     |
| **技能展示**   | 技能标签或分类展示                        | P1     |
| **联系方式**   | 邮箱、GitHub、LinkedIn、Twitter等社交链接 | P1     |
| **首页展示**   | 综合展示以上内容，单页滚动式              | P0     |
| **暗色模式**   | 支持亮色/暗色主题切换                     | P1     |
| **响应式设计** | 完美适配移动端、平板、桌面                | P0     |
| **SEO 优化**   | 页面标题、描述、OG 标签                   | P1     |

### 3.2 V1.0 版本功能（规划中）

| 功能模块       | 说明                           | 优先级 |
| -------------- | ------------------------------ | ------ |
| **博客/文章**  | Markdown 写博客，列表页+详情页 | P2     |
| **读书笔记**   | 书籍展示、读后感链接           | P2     |
| **摄影集**     | 图片相册、轮播展示             | P2     |
| **多主题**     | 2-3 套预置主题                 | P2     |
| **自定义域名** | 绑定个人域名                   | P2     |
| **评论系统**   | 接入 Giscus 或其他评论         | P2     |

### 3.3 V2.0 版本功能（规划中）

| 功能模块            | 说明                         | 优先级 |
| ------------------- | ---------------------------- | ------ |
| **团队/工作室模式** | 团队成员、案例展示、新闻动态 | P3     |
| **主题市场**        | 社区主题上传、下载           | P3     |
| **在线配置器**      | Web 可视化配置生成 YAML      | P3     |
| **CLI 工具**        | 本地脚手架创建和管理         | P3     |

---

## 四、页面结构

### 4.1 MVP 页面架构

采用单页滚动式设计（One-page Scroll），所有内容聚合在一个页面，通过顶部导航锚点跳转。

```
┌─────────────────────────────────────┐
│            顶部导航栏                 │
│  [首页] [关于] [经历] [作品] [联系]   │
├─────────────────────────────────────┤
│              Hero 区域               │
│         头像 + 姓名 + 职位            │
│           一句话简介                  │
│        [社交链接] [下载简历]          │
├─────────────────────────────────────┤
│              关于区域                │
│         个人简介 + 技能展示           │
├─────────────────────────────────────┤
│            教育经历区域              │
│        时间线形式展示学校            │
├─────────────────────────────────────┤
│            工作经历区域              │
│        时间线形式展示公司            │
├─────────────────────────────────────┤
│            项目作品区域              │
│       卡片网格展示项目作品            │
│      [项目名] [描述] [技术栈]        │
├─────────────────────────────────────┤
│            联系方式区域              │
│        邮箱 + 社交媒体链接           │
├─────────────────────────────────────┤
│              页脚                    │
│        © 2024 Name. All Rights      │
└─────────────────────────────────────┘
```

### 4.2 页面组件说明

| 组件         | 说明           | 参数                                |
| ------------ | -------------- | ----------------------------------- |
| `Hero`       | 首屏展示区域   | name, title, avatar, intro, socials |
| `About`      | 个人简介区域   | bio, skills                         |
| `Education`  | 教育经历时间线 | education[]                         |
| `Experience` | 工作经历时间线 | experience[]                        |
| `Projects`   | 项目作品网格   | projects[]                          |
| `Contact`    | 联系方式区域   | email, socials                      |
| `Footer`     | 页脚           | copyright                           |

---

## 五、配置说明

### 5.1 配置文件结构

用户仅需修改 `config.yaml` 一个文件即可完成全部配置。

```yaml
# ==========================================
# OnePage 个人网站配置文件
# ==========================================

# 站点基础信息
site:
  title: "张三的个人网站"
  description: "前端开发者 / 技术爱好者"
  favicon: "/favicon.ico"

# 个人基本信息
profile:
  name: "张三"
  avatar: "/images/avatar.jpg"
  title: "前端开发者"
  location: "北京，中国"
  bio: |
    热爱技术与设计，专注于前端开发。
    拥有 5 年互联网工作经验，曾任职于 BAT。
  email: "zhangsan@example.com"
  # 社交链接
  socials:
    - platform: "GitHub"
      url: "https://github.com/zhangsan"
      icon: "github"
    - platform: "LinkedIn"
      url: "https://linkedin.com/in/zhangsan"
      icon: "linkedin"
    - platform: "Twitter"
      url: "https://twitter.com/zhangsan"
      icon: "twitter"

# 技能展示
skills:
  - name: "前端开发"
    items: ["React", "Vue", "TypeScript", "Tailwind CSS"]
  - name: "后端开发"
    items: ["Node.js", "Python", "PostgreSQL"]
  - name: "工具/其他"
    items: ["Git", "Docker", "Figma"]

# 教育经历
education:
  - school: "清华大学"
    degree: "计算机科学与技术 学士"
    period: "2015 - 2019"
    description: "主修课程：数据结构、算法、操作系统"

  - school: "斯坦福大学"
    degree: "计算机科学 硕士"
    period: "2019 - 2021"
    description: "主修课程：机器学习、分布式系统"

# 工作经历
experience:
  - company: "阿里巴巴"
    position: "前端开发工程师"
    period: "2021 - 现在"
    description: |
      - 负责公司核心业务前端开发
      - 主导了多个重要项目的技术选型和架构设计
      - 提升团队开发效率 30%

  - company: "字节跳动"
    position: "前端开发实习生"
    period: "2020 - 2021"
    description: |
      - 参与短视频产品前端开发
      - 负责多个功能模块的实现

# 项目作品
projects:
  - name: "电商后台管理系统"
    description: "一套完整的企业级后台管理系统，包含权限管理、订单管理、数据统计等功能。"
    tech: ["React", "TypeScript", "Ant Design", "Node.js"]
    image: "/images/projects/project-1.jpg"
    link: "https://github.com/zhangsan/ecommerce-admin"
    demo: "https://demo.example.com"

  - name: "个人博客系统"
    description: "基于 Next.js 开发的静态博客，支持 Markdown 文章、SEO 优化。"
    tech: ["Next.js", "Tailwind CSS", "MDX"]
    image: "/images/projects/project-2.jpg"
    link: "https://github.com/zhangsan/blog"

  - name: "开源 UI 组件库"
    description: "一个轻量级的 React 组件库，已开源并获得 500+ Star。"
    tech: ["React", "TypeScript", "Storybook"]
    image: "/images/projects/project-3.jpg"
    link: "https://github.com/zhangsan/ui-lib"

# 主题设置
theme:
  mode: "auto" # light / dark / auto
  primaryColor: "#3b82f6" # 主题色
  accentColor: "#10b981" # 强调色
```

### 5.2 配置字段说明

| 字段路径             | 类型   | 必填 | 说明                      |
| -------------------- | ------ | ---- | ------------------------- |
| `site.title`         | string | 是   | 网站标题                  |
| `site.description`   | string | 否   | 网站描述，用于 SEO        |
| `profile.name`       | string | 是   | 姓名                      |
| `profile.avatar`     | string | 否   | 头像路径                  |
| `profile.title`      | string | 是   | 职位/头衔                 |
| `profile.bio`        | string | 否   | 个人简介                  |
| `profile.email`      | string | 否   | 邮箱地址                  |
| `profile.socials`    | array  | 否   | 社交链接列表              |
| `skills`             | array  | 否   | 技能分类列表              |
| `education`          | array  | 否   | 教育经历列表              |
| `experience`         | array  | 否   | 工作经历列表              |
| `projects`           | array  | 否   | 项目作品列表              |
| `theme.mode`         | string | 否   | 主题模式：light/dark/auto |
| `theme.primaryColor` | string | 否   | 主题色 HEX 值             |

---

## 六、技术架构

### 6.1 技术栈

| 层级      | 技术选型       | 说明                           |
| --------- | -------------- | ------------------------------ |
| **框架**  | Astro          | 主框架，静态站点生成，性能最优 |
| **UI**    | Tailwind CSS   | 原子化 CSS，方便主题定制       |
| **语言**  | TypeScript     | 类型安全                       |
| **配置**  | YAML           | 用户配置格式                   |
| **部署**  | GitHub Pages   | 免费托管                       |
| **CI/CD** | GitHub Actions | 自动构建部署                   |

### 6.2 项目结构

```
onepage/
├── src/
│   ├── components/        # Astro 组件
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Education.astro
│   │   ├── Experience.astro
│   │   ├── Projects.astro
│   │   ├── Skills.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro   # 基础布局
│   ├── pages/
│   │   └── index.astro    # 首页
│   ├── styles/
│   │   └── global.css     # 全局样式
│   └── utils/
│       └── config.ts     # 配置加载工具
├── public/
│   ├── images/           # 图片资源
│   │   ├── avatar.jpg
│   │   └── projects/
│   └── favicon.ico
├── config.yaml           # 用户配置文件（示例）
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── README.md
```

### 6.3 核心模块设计

#### 配置加载模块

```typescript
// src/utils/config.ts
import fs from "node:fs";
import yaml from "js-yaml";
import type { Config } from "./types";

export function loadConfig(): Config {
  const configPath = "./config.yaml";
  const fileContents = fs.readFileSync(configPath, "utf8");
  const config = yaml.load(fileContents) as Config;
  return config;
}
```

#### 主题切换模块

- 使用 CSS 变量 + Tailwind CSS 的 `dark:` 配合
- 支持三种模式：light / dark / auto（跟随系统）
- 主题色通过 Tailwind 配置注入

### 6.4 性能目标

| 指标               | 目标值             |
| ------------------ | ------------------ |
| Lighthouse 性能分  | ≥ 90               |
| 首屏加载时间 (FCP) | < 1s               |
| 页面体积 (gzipped) | < 100KB            |
| JS 依赖            | 0KB（纯静态 HTML） |

---

## 七、部署流程

### 7.1 快速开始

```
1. Fork 本仓库
2. 修改仓库名为 {username}.github.io
3. 修改 config.yaml 配置个人信息
4. 等待 GitHub Actions 自动构建
5. 访问 https://{username}.github.io
```

### 7.2 详细步骤

#### 步骤 1：Fork 仓库

点击 GitHub 仓库页面的 "Fork" 按钮，选择创建到自己的 GitHub 账户。

#### 步骤 2：重命名仓库

将仓库名修改为 `{your-username}.github.io`，其中 `{your-username}` 为你的 GitHub 用户名。

#### 步骤 3：修改配置

编辑仓库根目录下的 `config.yaml`，按照文档说明填写个人信息。

#### 步骤 4：等待部署

GitHub Actions 会自动检测配置文件的修改，触发构建并部署。等待 1-2 分钟后即可访问。

#### 步骤 5：自定义域名（可选）

如需绑定个人域名，在 Settings → Pages 中配置自定义域名即可。

### 7.3 GitHub Actions 工作流

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: "20"

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## 八、商业模式

### 8.1 商业模式画布

| 模块         | 内容                                     |
| ------------ | ---------------------------------------- |
| **价值主张** | 零代码、零成本、快速搭建专业个人网站     |
| **目标客户** | 技术求职者、自由职业者、学生             |
| **渠道**     | GitHub、掘金/思否、知乎、少数派          |
| **客户关系** | 社区支持、GitHub Issues、Discord         |
| **收入来源** | 高级主题、技术支持、定制开发             |
| **核心资源** | 开源模板、社区、文档                     |
| **关键活动** | 主题开发、社区运营、内容产出             |
| **关键合作** | 主题贡献者、KOL 推广                     |
| **成本结构** | 域名/托管（GitHub Pages 免费）、开发时间 |

### 8.2 定价策略

| 层级           | 价格    | 内容                                          |
| -------------- | ------- | --------------------------------------------- |
| **Free**       | $0      | 开源版 + 1 套基础主题 + 标准支持              |
| **Pro**        | $9.9/月 | 全部主题 + 高级组件（博客、摄影集）+ 优先支持 |
| **Team**       | $29/月  | 团队版（10人）+ 多站点管理 + 优先支持         |
| **Enterprise** | 定制    | 私有部署 + 定制开发 + SLA                     |

### 8.3 变现路径

1. **早期（MVP）**：纯开源，积累用户和社区
2. **V1.0**：推出 Pro 版订阅，解锁高级主题
3. **V2.0**：推出 Team 版，瞄准小工作室
4. **长期**：主题市场抽成、定制服务

### 8.4 成本估算

| 项目         | 成本                 |
| ------------ | -------------------- |
| 域名（可选） | ~$10/年              |
| 托管         | $0（GitHub Pages）   |
| 支付通道     | Stripe / Paddle      |
| 客服         | 社区 + GitHub Issues |

---

## 九、竞品分析

### 9.1 竞品对比

| 产品                    | 类型       | 配置方式    | 团队支持 | 主题生态 | 定价       |
| ----------------------- | ---------- | ----------- | -------- | -------- | ---------- |
| **OnePage**             | 开源模板   | YAML        | 规划中   | 规划中   | Free       |
| mldangelo/personal-site | 开源模板   | 代码修改    | 无       | 无       | Free       |
| developer-portfolio     | 开源模板   | JSON        | 无       | 无       | Free       |
| PRISM                   | 开源模板   | TOML        | 学术向   | 无       | Free       |
| HugoBlox                | 完整系统   | YAML/可视化 | 有       | 50+模块  | Free + Pro |
| Webstudio               | 可视化构建 | 拖拽        | 无       | 有       | Free + Pro |

### 9.2 竞争优势

1. **配置极简化**：竞品多需修改代码文件，OnePage 只需一个 YAML
2. **中国本地化**：中文文档、中文教程
3. **团队场景**：市场空白，专注小工作室官网需求
4. **主题机制**：预留主题系统，后期可做生态
5. **Astro 性能**：比 Next.js 更轻量，纯静态输出

### 9.3 竞争劣势

1. **起步晚**：竞品已有一定用户基础
2. **功能少**：MVP 阶段功能较基础
3. **社区弱**：需时间积累

### 9.4 发展策略

1. 先聚焦个人用户，打磨产品体验
2. 通过中文内容平台（掘金、知乎）获取早期用户
3. 重视 GitHub Star 增长，打造开源影响力
4. V1.0 后推出 Pro 版，开始商业化尝试

---

## 十、发展路线图

### 10.1 版本规划

```
┌─────────────────────────────────────────────────────────────┐
│                        OnePage 发展路线图                     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  MVP (v0.1.0)  ──────  v1.0  ──────  v2.0  ──────  v3.0   │
│     │                 │              │              │       │
│     ▼                 ▼              ▼              ▼       │
│  个人网站基础      博客/多主题     团队模式       生态化      │
│  YAML配置         摄影集          主题市场       CLI工具      │
│  单页滚动         自定义域名      在线配置器     增值服务      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 10.2 MVP 阶段（v0.1.0）

**时间**：第 1-2 个月

**目标**：完成基础产品，收集早期用户反馈

**交付物**：

- [ ] 基础模板代码（Astro + Tailwind）
- [ ] 配置文件示例（config.yaml）
- [ ] 快速开始文档
- [ ] 1 套基础主题
- [ ] GitHub Actions 自动部署

**成功指标**：

- GitHub Star ≥ 100
- 用户使用案例 ≥ 10 个

### 10.3 V1.0 阶段

**时间**：第 3-4 个月

**目标**：增加内容能力，准备商业化

**交付物**：

- [ ] 博客功能（Markdown）
- [ ] 2-3 套预置主题
- [ ] 暗色模式
- [ ] 自定义域名支持
- [ ] Pro 版订阅系统

**成功指标**：

- GitHub Star ≥ 500
- Pro 付费用户 ≥ 50

### 10.4 V2.0 阶段

**时间**：第 5-8 个月

**目标**：拓展团队市场，建立生态

**交付物**：

- [x] 团队/工作室模式
- [ ] 主题市场
- [ ] 在线配置器
- [ ] CLI 工具
- [ ] Team 版订阅

**成功指标**：

- GitHub Star ≥ 2000
- 团队版付费用户 ≥ 20

### 10.5 V3.0 阶段

**时间**：第 9-12 个月

**目标**：生态化运营，形成网络效应

**交付物**：

- [ ] 主题开发者平台
- [ ] 社区主题市场
- [ ] 国际化（i18n）
- [ ] 更多增值服务

---

## 十一、团队/工作室模式设计（V2.0）

### 11.1 概述

团队/工作室模式是 OnePage V2.0 的核心功能，旨在帮助小型工作室和团队快速搭建企业官网，用于展示接案能力、团队状况、成功案例和最新动态。

**入口方式**：在 `config.yaml` 中设置 `mode: team` 即可切换到团队模式。

### 11.2 配置文件结构

团队模式采用多 YAML 文件配置，每个文件负责一个独立模块：

```
config/
├── config.yaml       # 基础配置 + 模式选择
├── members.yaml      # 团队成员列表
├── portfolio.yaml    # 案例展示
├── services.yaml     # 服务范围
└── news.yaml         # 新闻动态
```

### 11.3 config.yaml（团队模式）

```yaml
# 站点模式
mode: team # personal / team

# 站点基础信息
site:
  title: "工作室名称"
  description: "工作室描述"
  logo: "/images/logo.png"
  favicon: "/favicon.ico"

# 公司信息
company:
  name: "公司名称"
  founded: "2020年"
  description: |
    公司简介内容...
  values:
    - "价值观1"
    - "价值观2"
  address: "地址"
  phone: "电话"
  email: "email@example.com"

# 社交链接
socials:
  - platform: "微信"
    url: "wechat"
    icon: "wechat"
  - platform: "微博"
    url: "https://weibo.com/xxx"
    icon: "weibo"

# 主题配置
theme:
  mode: "auto"
  theme: "blue" # 复用个人版主题
```

### 11.4 members.yaml（团队成员）

```yaml
members:
  - name: "成员姓名"
    role: "职位"
    avatar: "/images/members/avatar1.jpg"
    bio: "成员简介"
    socials:
      - platform: "GitHub"
        url: "https://github.com/xxx"
      - platform: "LinkedIn"
        url: "https://linkedin.com/in/xxx"

  - name: "成员姓名2"
    role: "职位2"
    avatar: "/images/members/avatar2.jpg"
    bio: "成员简介2"
```

### 11.5 portfolio.yaml（案例展示）

```yaml
projects:
  - name: "项目名称"
    client: "客户名称/Logo"
    description: "项目描述"
    year: "2024"
    tags:
      - "Web开发"
      - "移动端"
    images:
      - "/images/portfolio/project1-1.jpg"
      - "/images/portfolio/project1-2.jpg"
    link: "https://project-demo.com"
    results:
      - "性能提升 50%"
      - "用户增长 100万+"
```

### 11.6 services.yaml（服务范围）

```yaml
services:
  - name: "Web开发"
    icon: "code"
    description: "提供高质量的Web开发服务"
    features:
      - "前端开发"
      - "后端开发"
      - "API设计"

  - name: "移动端开发"
    icon: "mobile"
    description: "iOS/Android 原生或跨平台开发"
    features:
      - "iOS 开发"
      - "Android 开发"
      - "Flutter/React Native"

  - name: "UI/UX设计"
    icon: "design"
    description: "专业的界面和体验设计"
    features:
      - "UI设计"
      - "用户体验优化"
      - "品牌设计"
```

### 11.7 news.yaml（新闻动态）

```yaml
news:
  - title: "新闻标题1"
    date: "2024-01-15"
    category: "公司动态"
    content: |
      新闻详细内容...

  - title: "技术文章标题"
    date: "2024-01-10"
    category: "技术分享"
    content: |
      技术文章内容...
```

### 11.8 页面结构

团队模式采用多页独立结构：

```
/OnePage/
├── index.html          # 首页
├── about.html         # 关于我们
├── portfolio.html     # 案例展示
├── services.html      # 服务范围
├── news.html         # 新闻动态
└── contact.html       # 联系我们
```

### 11.9 页面设计

#### 11.9.1 首页 (index.html)

```
┌─────────────────────────────────────┐
│            顶部导航栏                 │
│  [首页] [关于] [案例] [服务] [动态]   │
├─────────────────────────────────────┤
│              Hero 区域               │
│         Logo + Slogan               │
│        [案例展示] [联系我们]          │
├─────────────────────────────────────┤
│            核心案例展示               │
│       3-4个代表性项目卡片             │
├─────────────────────────────────────┤
│            团队亮点                   │
│     成立时间 | 案例数量 | 客户数量    │
├─────────────────────────────────────┤
│            服务领域                   │
│        快速概览服务类型               │
├─────────────────────────────────────┤
│              动态区域                 │
│        最新新闻/文章预览              │
├─────────────────────────────────────┤
│              底部                    │
│        联系方式 + 社交链接            │
└─────────────────────────────────────┘
```

#### 11.9.2 关于我们 (about.html)

```
┌─────────────────────────────────────┐
│            顶部导航栏                 │
├─────────────────────────────────────┤
│            公司介绍                   │
│      Logo + 成立时间 + 简介          │
├─────────────────────────────────────┤
│            核心价值观                 │
│         3-4个价值观卡片               │
├─────────────────────────────────────┤
│            团队成员                   │
│      成员头像 + 姓名 + 职位           │
│      悬停显示简介 + 社交链接          │
└─────────────────────────────────────┘
```

#### 11.9.3 案例展示 (portfolio.html)

```
┌─────────────────────────────────────┐
│            顶部导航栏                 │
├─────────────────────────────────────┤
│            案例筛选                   │
│      按标签/年份筛选                 │
├─────────────────────────────────────┤
│            案例列表                   │
│      大卡片展示：                    │
│      - 项目图片                      │
│      - 项目名称                      │
│      - 客户Logo                      │
│      - 描述                          │
│      - 成果数据                      │
│      - 查看详情/演示链接              │
└─────────────────────────────────────┘
```

#### 11.9.4 服务范围 (services.html)

```
┌─────────────────────────────────────┐
│            顶部导航栏                 │
├─────────────────────────────────────┤
│            服务介绍                   │
│      一句话描述服务定位               │
├─────────────────────────────────────┤
│            服务列表                   │
│      图标 + 服务名 + 描述             │
│      展开显示详细功能列表             │
└─────────────────────────────────────┘
```

#### 11.9.5 新闻动态 (news.html)

```
┌─────────────────────────────────────┐
│            顶部导航栏                 │
├─────────────────────────────────────┤
│            新闻列表                   │
│      日期 + 分类 + 标题               │
│      摘要 + 阅读更多                  │
├─────────────────────────────────────┤
│            侧边栏                    │
│      分类列表                         │
│      热门文章                         │
└─────────────────────────────────────┘
```

#### 11.9.6 联系我们 (contact.html)

```
┌─────────────────────────────────────┐
│            顶部导航栏                 │
├─────────────────────────────────────┤
│            联系信息                   │
│      地址 + 电话 + 邮箱              │
├─────────────────────────────────────┤
│            联系表单                   │
│      姓名 + 邮箱 + 消息               │
│      (可对接 Formspree 等服务)        │
├─────────────────────────────────────┤
│            地图/位置                  │
│      (可选：嵌入地图)                │
└─────────────────────────────────────┘
```

### 11.10 主题系统扩展

团队模式复用个人版的主题系统，并新增以下扩展：

| 主题           | 说明                |
| -------------- | ------------------- |
| team-corporate | 企业风格（蓝/深蓝） |
| team-creative  | 创意风格（橙/多彩） |
| team-minimal   | 简约风格（灰/黑白） |

主题配置示例：

```yaml
theme:
  mode: "auto"
  theme: "team-corporate"
```

### 11.11 与个人版的差异

| 特性     | 个人版           | 团队版                    |
| -------- | ---------------- | ------------------------- |
| 配置方式 | 单一 config.yaml | 多配置文件                |
| 页面结构 | 单页滚动         | 多页独立                  |
| 数据模型 | 个人简历         | 公司/团队                 |
| 主题     | 5套基础主题      | 基础 + 团队主题           |
| 部署     | GitHub Pages     | GitHub Pages + 自定义域名 |

### 11.12 技术实现要点

1. **配置加载**：根据 `mode` 字段加载不同的配置结构
2. **路由生成**：团队模式生成多个 HTML 页面
3. **主题系统**：扩展主题配置，支持团队场景
4. **静态资源**：支持图片、案例截图、成员头像等

---

## 附录

### A. 配置示例文件

完整配置示例见各配置文件。

### B. 依赖版本

```json
{
  "astro": "^4.0.0",
  "tailwindcss": "^3.4.0",
  "typescript": "^5.3.0",
  "js-yaml": "^4.1.0"
}
```

### C. 浏览器支持

- Chrome >= 90
- Firefox >= 88
- Safari >= 14
- Edge >= 90

### D. 开源协议

MIT License

---

**文档版本**：v0.2.0  
**更新日期**：2024年  
**作者**：OnePage Team
