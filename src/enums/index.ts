import { Enum } from 'enum-plus';

/**
 * @description: 请求状态
 */
export const RESPONSE = Enum({
  SUCCESS: { value: 200, label: '请求成功' },
  FAIL: { value: 500, label: '请求失败' }
})

/**
 * @description: 主题模式
 */
export const THEME_MODE = Enum({
  LIGHT: { value: 'light', label: 'Light', icon: 'sun' },
  DARK: { value: 'dark', label: 'Dark', icon: 'moon' },
  SYSTEM: { value: 'system', label: 'System', icon: 'laptop' }
});

/**
 * @description: 页面锚点区块
 */
export const SECTION = Enum({
  HERO: { value: 'hero', label: '作者' },
  ABOUT: { value: 'about', label: '关于' },
  WORK: { value: 'work', label: '工作经历' },
  EDUCATION: { value: 'education', label: '教育背景' },
  SKILLS: { value: 'skills', label: '专业技能' },
  PROJECTS: { value: 'projects', label: '项目经历' },
  HONORS: { value: 'honors', label: '校园荣誉' },
  BLOG: { value: 'blog', label: '技术博客' },
});
