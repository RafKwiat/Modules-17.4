

function timeConvert(sek) {
        var num = sek;
        var hours = (num / 3600);
        var rHours = Math.floor(hours);
        var minutes = (hours - rHours) * 60;
        var rMinutes = Math.floor(minutes);
        var seconds = Math.round((minutes - rMinutes) * 60);
        return num + " sekund = " + rHours + " godz. " + rMinutes + " min. " + seconds + " sek.";
}

module.exports = timeConvert;

