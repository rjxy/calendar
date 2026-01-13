export const getMonthDays = (year: number, month: number) => {
  // 获取该月第一天是周几 (0是周日, 1是周一...)
  const firstDay = new Date(year, month - 1, 1).getDay();
  // 获取该月总天数
  const daysInMonth = new Date(year, month, 0).getDate();

  // 填充空白日期（如果1号是周三，前面需要留出周日、周一、周二的空位）
  const days = [];
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }
  return days;
};