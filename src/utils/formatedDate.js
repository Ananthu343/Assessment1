export default function getFormattedDate(targetDate) {
    const today = new Date();
    const target = new Date(targetDate);

    const day = target.getDate();
  const month = target.toLocaleString('default', { month: 'short' });
  const hours = target.getHours() % 12 || 12;
  const ampm = target.getHours() >= 12 ? 'pm' : 'am';

  const ordinalSuffix = getOrdinalSuffix(day);
  
    const date = `${day}${ordinalSuffix} ${month} ${hours}${ampm}`;

    const dateOptionToday = {
        hour12: true,
        hour: 'numeric',
        minute: '2-digit'
      };
  
    if (target.toDateString() === today.toDateString()) {
      return `Today ${target.toLocaleTimeString('en-US', dateOptionToday)}`;
    } else {
      return date;
    }
  }

  function getOrdinalSuffix(num) {
    switch (num) {
      case 1:
      case 21:
      case 31:
        return 'st';
      case 2:
      case 22:
        return 'nd';
      case 3:
      case 23:
        return 'rd';
      default:
        return 'th';
    }
  }