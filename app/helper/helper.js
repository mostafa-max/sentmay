export const formatTimeForDisplay = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const hourNum = parseInt(hours);
    return `${hourNum % 12 || 12}:${minutes} ${hourNum >= 12 ? 'م' : 'ص'}`;
  };

export  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('ar-EG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };