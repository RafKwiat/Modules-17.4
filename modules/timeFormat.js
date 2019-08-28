function timeConvert(sek) {
        var num = sek;
        var hours = (num / 3600);
        var roundedHours = Math.floor(hours);
        var minutes = (hours - roundedHours) * 60;
        var roundedMinutes = Math.floor(minutes);
        var seconds = Math.round((minutes - roundedMinutes) * 60);
        var time = roundedHours + " godz. " + roundedMinutes + " min. " + seconds + " sek.";
    
        return time;
}


exports.timeConvert = timeConvert;
