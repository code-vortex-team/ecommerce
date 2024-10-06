export const timeAgo = (date: string) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now - new Date(date)) / 1000);

    if (diffInSeconds < 60) {
        return diffInSeconds === 1 ? 'یک ثانیه پیش' : `${diffInSeconds} ثانیه پیش`;
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
        return diffInMinutes === 1 ? 'یک دقیقه پیش' : `${diffInMinutes} دقیقه پیش`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
        return diffInHours === 1 ? 'یک ساعت پیش' : `${diffInHours} ساعت پیش`;
    }

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 30) {
        return diffInDays === 1 ? 'یک روز پیش' : `${diffInDays} روز پیش`;
    }

    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths < 12) {
        return diffInMonths === 1 ? 'یک ماه پیش' : `${diffInMonths} ماه پیش`;
    }

    const diffInYears = Math.floor(diffInMonths / 12);
    return diffInYears === 1 ? 'یک سال پیش' : `${diffInYears} سال پیش`;
}

export const formatToToman = (number) => {
    return number.toLocaleString('fa-IR');
}