function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function countdown() {
    var daysElement = getElementByXpath("/html/body/div/div/table/tbody/tr/td[1]/h1");
    var hoursElement = getElementByXpath("/html/body/div/div/table/tbody/tr/td[2]/h1");
    var minutesElement = getElementByXpath("/html/body/div/div/table/tbody/tr/td[3]/h1");
    var secondsElement = getElementByXpath("/html/body/div/div/table/tbody/tr/td[4]/h1");

    var today = new Date();
    var targetDate = new Date(2022, 5, 10);

    var now = today.getTime();
    var targetTime = targetDate.getTime();

    var remainingTime = targetTime - now;

    if (remainingTime <= 0) {
        daysElement.textContent = "0";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";
    } else {
        var seconds = Math.floor(remainingTime / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);
        var days = Math.floor(hours / 24);

        seconds %= 60;
        minutes %= 60;
        hours %= 24;

        seconds = (seconds < 10) ? "0" + seconds : seconds;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        hours = (hours < 10) ? "0" + hours : hours;
        days = (days == 0) ? "0" : days;

        if (daysElement.textContent != days) {
            daysElement.textContent = days;
        } else if (hoursElement.textContent != hours) {
            hoursElement.textContent = hours;
        } else if (minutesElement.textContent != minutes) {
            minutesElement.textContent = minutes;
        } else if (secondsElement.textContent != seconds) {
            secondsElement.textContent = seconds;
        }

        setTimeout(countdown, 0.1);
    }
}

document.addEventListener("DOMContentLoaded", function() {
  countdown();
});
