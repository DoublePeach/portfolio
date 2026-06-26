export type GithubContributionDay = {
  /** GitHub 返回的贡献日期，格式为 YYYY-MM-DD */
  date: string;
  /** GitHub 返回的当天贡献次数 */
  contributionCount: number;
};

export type CalendarActivity = {
  /** 日历组件展示用日期，格式为 YYYY-MM-DD */
  date: string;
  /** 日历组件展示用贡献次数 */
  count: number;
  /** 日历组件展示用贡献等级，取值范围为 0-4 */
  level: 0 | 1 | 2 | 3 | 4;
};

/**
 * 根据贡献次数计算日历颜色等级。
 * @param count 当天贡献次数。
 * @returns 日历组件需要的贡献等级。
 */
export function getContributionLevel(count: number): CalendarActivity['level'] {
  if (count <= 0) return 0;
  if (count <= 3) return 1;
  if (count <= 5) return 2;
  if (count <= 7) return 3;
  return 4;
}

/**
 * 创建连续的零贡献日历数据，避免日历组件收到空数组后崩溃。
 * @param days 需要生成的日历天数。
 * @param endDate 日历结束日期，默认使用当前日期。
 * @returns 连续且非空的日历组件数据。
 */
export function createEmptyCalendarData(days = 365, endDate = new Date()): CalendarActivity[] {
  const normalizedDays = Math.max(1, Math.floor(days)); // 规范化后的天数，至少保留一天
  const endDateOnly = new Date(Date.UTC(endDate.getUTCFullYear(), endDate.getUTCMonth(), endDate.getUTCDate())); // 去掉时间部分后的结束日期
  const startDate = new Date(endDateOnly); // 日历开始日期
  startDate.setUTCDate(endDateOnly.getUTCDate() - normalizedDays + 1);

  return Array.from({ length: normalizedDays }, (_unusedItem, dayIndex) => {
    const currentDate = new Date(startDate); // 当前遍历到的日期
    currentDate.setUTCDate(startDate.getUTCDate() + dayIndex);

    return {
      date: currentDate.toISOString().slice(0, 10),
      count: 0,
      level: 0,
    };
  });
}

/**
 * 将 GitHub 贡献数据转换为日历组件需要的连续数据。
 * @param commits GitHub 接口返回的每日贡献数据。
 * @param days 需要展示的日历天数。
 * @param endDate 日历结束日期，默认使用当前日期。
 * @returns 补齐空日期后的日历组件数据。
 */
export function buildCalendarData(
  commits: GithubContributionDay[] = [],
  days = 365,
  endDate = new Date(),
): CalendarActivity[] {
  const emptyCalendarData = createEmptyCalendarData(days, endDate); // 兜底日历数据，保证返回值永远非空
  const contributionCountByDate = new Map<string, number>(); // 日期到贡献次数的映射表

  commits.forEach(commitItem => {
    contributionCountByDate.set(commitItem.date, commitItem.contributionCount);
  });

  return emptyCalendarData.map(calendarItem => {
    const contributionCount = contributionCountByDate.get(calendarItem.date) ?? 0; // 当前日期对应的贡献次数

    return {
      date: calendarItem.date,
      count: contributionCount,
      level: getContributionLevel(contributionCount),
    };
  });
}