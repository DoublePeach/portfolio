import assert from 'node:assert/strict';
import test from 'node:test';

import { buildCalendarData, createEmptyCalendarData, getContributionLevel } from './calendar-data.ts';

test('接口返回空数据时生成连续非空的零贡献日历', () => {
  const calendarData = buildCalendarData([], 3, new Date('2026-06-25T12:00:00Z'));

  assert.deepEqual(calendarData, [
    { date: '2026-06-23', count: 0, level: 0 },
    { date: '2026-06-24', count: 0, level: 0 },
    { date: '2026-06-25', count: 0, level: 0 },
  ]);
});

test('接口返回部分日期时补齐缺失日期并转换贡献等级', () => {
  const calendarData = buildCalendarData(
    [
      { date: '2026-06-24', contributionCount: 4 },
      { date: '2026-06-25', contributionCount: 8 },
    ],
    3,
    new Date('2026-06-25T12:00:00Z'),
  );

  assert.deepEqual(calendarData, [
    { date: '2026-06-23', count: 0, level: 0 },
    { date: '2026-06-24', count: 4, level: 2 },
    { date: '2026-06-25', count: 8, level: 4 },
  ]);
});

test('贡献等级按提交数量分段计算', () => {
  assert.equal(getContributionLevel(0), 0);
  assert.equal(getContributionLevel(3), 1);
  assert.equal(getContributionLevel(5), 2);
  assert.equal(getContributionLevel(7), 3);
  assert.equal(getContributionLevel(8), 4);
});

test('生成空日历时至少返回一天数据', () => {
  const calendarData = createEmptyCalendarData(0, new Date('2026-06-25T12:00:00Z'));

  assert.deepEqual(calendarData, [{ date: '2026-06-25', count: 0, level: 0 }]);
});