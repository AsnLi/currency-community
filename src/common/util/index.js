const dateFormat = (format) => {
    const data = new Date()
    const week = ["日", "一", "二", "三", "四", "五", "六"]
    const o = {
        "M+": data.getMonth() + 1, //month
        "d+": data.getDate(),    //day
        "h+": data.getHours(),   //hour
        "m+": data.getMinutes(), //minute
        "s+": data.getSeconds(), //second
        "q+": Math.floor((data.getMonth() + 3) / 3),  //quarter
        "S": data.getMilliseconds() //millisecond
    }

    if (/(y+)/.test(format)) 
        format = format.replace(RegExp.$1,(data.getFullYear() + "").substr(4 - RegExp.$1.length));

    for (let k in o) 

        if (new RegExp("(" + k + ")").test(format))
            format = format.replace(RegExp.$1,RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));

    if (/(w+)/.test(format))
            format = format.replace(/w/g, week[data.getDay()])

    return format;
}

const sliceDate = (sDateStr) => {
    return sDateStr.substring(sDateStr.indexOf(" ") + 1, sDateStr.lastIndexOf(":"))
}

export {
    dateFormat,
    sliceDate
}