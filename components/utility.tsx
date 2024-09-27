import moment from "jalali-moment";

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