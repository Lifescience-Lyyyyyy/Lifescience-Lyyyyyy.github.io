你现在位于我的个人网站代码仓库中（基于 al-folio Jekyll 主题）。请帮我根据根目录下的 `./Curriculum_Vitae.pdf` 和 `./Transcript_YaoLu_PKU.pdf` 文件，将这个模板修改为我的专属学术主页。我是北京大学生命科学专业（辅修人工智能）的本科生 Yao Lu。

请你按顺序完成以下任务：

1. **更新全局配置**：
   - 读取并修改 `_config.yml`。
   - 将网站的 title、author、description 等字段更新为我的信息（Yao Lu）。
   - 从简历中提取我的邮箱、GitHub 等联系方式，更新到 `_config.yml` 的社交媒体配置部分。

2. **移除不需要的模块（Teaching 和 People）**
   
3. **撰写主页 (About)**：
   - 读取 `_pages/about.md`。
   - 根据我的简历和成绩单，重写主页的个人简介（profile）。请保持学术、专业的基调，突出我在计算神经科学、计算机视觉等方向的研究经历、编程技能以及教育背景。

4. **更新简历页面 (CV)**：
   - 请检查仓库中使用的是 `_data/cv.yml` 还是 `assets/json/resume.json` 来渲染简历页面。
   - 将我 PDF 简历中的教育经历、科研项目、技能等结构化信息提取出来，并按原有格式更新到相应的配置文件中。

5. **将Publications和Repositories留空**

请一步步执行。在修改每个关键文件（特别是 `_config.yml` 和主页内容）前，请先阅读原文件的结构，确保你的修改符合 al-folio 主题的语法规范。完成后请在本地尝试构建检查是否有错误。

export ANTHROPIC_BASE_URL="https://api.deepseek.com/anthropic"
export ANTHROPIC_AUTH_TOKEN="sk-95b71f4e917149f8b92752bfb69b6d3f"
export ANTHROPIC_MODEL="deepseek-v4-pro[1m]"
export CLAUDE_CODE_SUBAGENT_MODEL="deepseek-v4-flash"
export CLAUDE_CODE_EFFORT_LEVEL="max"

claude