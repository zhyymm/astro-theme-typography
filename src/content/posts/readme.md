---
title: 操作说明
pubDate: 2026-01-16 01:34
categories: ['']
description: ''
slug: 
tags: []
draft: true
---
# 📝 Astro 站点作者系统维护指南 (Author System Guide)

本站采用 **“名实解耦”** 的架构设计，旨在解决中文路径兼容性报错（500 Error）以及大规模内容渲染时的内存溢出（Out of Memory）问题。

* * *

## 🏛️ 核心架构逻辑

我们将作者信息拆分为两个独立字段，确立“因果清晰、名相统一”的数据结构：

1.  **名 (Slug/ID)**：使用英文或拼音，用于 URL 路由和文件检索（如 `beiming`）。

2.  **实 (Display Name)**：使用中文，直接存储在文章中，用于前端展示（如 `悲鸣`）。


* * *

## 🛠️ 内容维护规范

### 1\. 新增导师档案 (One-time Setup)

当有新导师加入时，需在档案库中建立其“身份证明”：

-   **路径**：`src/content/authors/{拼音名}.md`

-   **示例**：`src/content/authors/yideng.md`

-   **内容要求**：

    Markdown

        ---
        name: "一灯"
        title: "法义导师"
        bio: "依止阿含，如实开示。"
        avatar: "/images/authors/yideng.jpg"
        ---


### 2\. 发布文章规范 (Standard Workflow)

在撰写文章时，必须在 Frontmatter 中显式声明作者的双字段：

-   **字段说明**：

    -   `author`: 对应档案库的文件名（拼音）。

    -   `authorName`: 页面显示的中文名（建议与档案库中的 `name` 一致）。

-   **示例**：

    YAML

        title: "论五蕴之空寂"
        author: "yideng"      # 影响链接：/authors/yideng/
        authorName: "一灯"    # 影响页面显示


* * *

## ⚡ 性能与稳定性优势

-   **零查询延迟 (Zero-Query)**：文章列表页直接读取 `authorName`，无需通过 `getEntry` 异步查询数据库，首屏渲染极快。

-   **内存清净 (Memory Efficiency)**：去除了不必要的异步阻塞逻辑，彻底解决了 Astro 在开发模式下因内容关联导致的 `JavaScript heap out of memory` 错误。

-   **路径稳健**：全站 URL 均不含中文，完美兼容各种服务器环境及社交媒体分享链接。


* * *

## 🎬 教学视频关键点 (Video Tips)

在制作 Moho 教学视频或站点介绍时，可参考以下话术：

> “我们的站点架构遵循‘法不假他缘’的原则。文章自备名号（authorName），无需在渲染时向外索求（getEntry）。这种名与实的分离，既保证了中文展示的庄严，又确保了底层代码的稳健与高效。”

* * *

## 🧹 故障排除

-   **作者显示为“管理员”？** 说明该文章未填写 `authorName`，系统自动启用了 `src/content/config.ts` 中的默认值。

-   **点击作者链接 404？** 请检查文章的 `author` 拼音是否与 `src/content/authors/` 下的 `.md` 文件名完全一致。

-   **修改了导师简介没生效？** 请尝试删除项目根目录的 `.astro` 缓存文件夹并重启服务。


* * *

**愿此架构助你弘法顺利，项目运行如理如法，清净无碍。**



