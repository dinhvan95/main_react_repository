export const dateUpdateAt = (date) => {
    if(!date) {
        return "";
    }
    const dateToGet = date.slice(0,10);
    return dateToGet;
}