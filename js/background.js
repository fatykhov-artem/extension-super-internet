// var url = window.location.href;

$("#js-super-button").click(function () {
    // параметры
    let colorBg = '#333';
    let colorText = '#fff';

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {
                code: '$("img").each(function (index, value) { ' + 

                    'function getRandomInt(max) {return Math.floor(Math.random() * Math.floor(max));}' +

                    ' $("img").each(function (index, value) {  let urlsImg = [' + getUrlsImg() + '];  $(value).attr("src", urlsImg[getRandomInt(5)]);  }); ' +

                ' });'
            }
        );
    })
});



