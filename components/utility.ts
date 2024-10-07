import moment from "jalali-moment";

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
    return number?.toLocaleString('fa-IR') || "";
}


export const convertToJalali = (dateString) => {
    const gregorianMoment = moment(dateString, 'YYYY-MM-DDTHH:mm:ss.SSSZ');

    const jalaliDate = gregorianMoment.locale('fa').format('YYYY/MM/DD');

    const [year, month, day] = jalaliDate.split('/');

    const persianMonths = [
        'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور',
        'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'
    ];

    return `${parseInt(day)} ${persianMonths[parseInt(month) - 1]} ${year}`;
}


function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts: any = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

export const checkUserStatus = () => {
    const isAdmin = getCookie('isAdmin');
    const isLoggedIn = !!getCookie('isAdmin');

    return {
        isLoggedIn: isLoggedIn,
        isAdmin: isAdmin === 'true',
    };
}


export const setLocalStorage = (key: string, value: unknown) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.error({e});
    }
};

export const getLocalStorage = (key: string, initialValue: unknown) => {
    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : initialValue;
    } catch (e) {
        console.error(e);
        return initialValue;
    }
};

