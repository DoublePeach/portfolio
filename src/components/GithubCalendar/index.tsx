"use client"
import { useRequest } from 'ahooks';
import { useTheme } from "next-themes";
import { type FC, useMemo } from 'react';
import { ActivityCalendar, type ColorScheme } from 'react-activity-calendar';

import { buildCalendarData, createEmptyCalendarData, type GithubContributionDay } from './calendar-data';

import pkg from '#/package.json';

const CALENDAR_DAYS = 365;

type GithubContributionResponse = {
  /** GitHub 接口返回的每日贡献数据 */
  dailyCommits?: GithubContributionDay[];
};

/**
 * 展示 GitHub 贡献日历。
 * @returns GitHub 贡献日历组件。
 */
const GithubCalendar: FC = () => {
  const { theme } = useTheme();
  const fallbackCalendarData = useMemo(() => createEmptyCalendarData(CALENDAR_DAYS), []); // 首屏和接口异常时使用的非空兜底数据

  const { data, loading } = useRequest(async () => {
    const username = pkg.author.name; // 当前站点作者 GitHub 用户名
    const response = await fetch(`/api/github/${username}/contributions?days=${CALENDAR_DAYS}`, {
      cache: 'no-store', // 确保获取最新数据
    });

    if (!response.ok) {
      return fallbackCalendarData;
    }

    const result = await response.json() as GithubContributionResponse; // GitHub 贡献接口响应体
    const commits = result?.dailyCommits ?? []; // 接口返回的每日贡献明细

    return buildCalendarData(commits, CALENDAR_DAYS);
  }, {
    defaultParams: [],
  });

  const calendarData = data ?? fallbackCalendarData; // ActivityCalendar 不允许空数据，这里始终传入非空数组
  const colorScheme: ColorScheme = theme === 'dark' ? 'dark' : 'light'; // next-themes 的 system 主题统一交给日历 light 兜底

  /**
   * 将日期格式化为中文展示文案。
   * @param dateStr YYYY-MM-DD 格式的日期字符串。
   * @returns 中文日期文案。
   */
  function formatDateToChinese(dateStr: string) {
    const [year, month, day] = dateStr.split('-'); // 日期拆分后的年、月、日
    return `${year}年${parseInt(month)}月${parseInt(day)}日`;
  }

  return (
    <div className="w-full flex justify-center items-center">
      <ActivityCalendar
        data={calendarData}
        loading={loading}
        fontSize={12}
        theme={{
          light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
          dark: ['#383838', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
        }}
        colorScheme={colorScheme}
        tooltips={{
          activity: {
            text: activity => `${formatDateToChinese(activity.date)}有 ${activity.count} 次贡献`,
            placement: 'top',
            offset: 6,
            hoverRestMs: 300,
            transitionStyles: {
              duration: 100,
              common: { fontFamily: 'monospace' },
            },
            withArrow: true,
          },
        }}
        labels={{
          totalCount: '过去一年累计贡献 {{count}} 次'
        }}
      />
    </div>
  )
}
export default GithubCalendar;