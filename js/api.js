// random number
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// get giff | gifer.com
function getGiff() {
    let tokenGiphy = "mV0DHfxJjVYuZwQAo5yMBu3zsvBYHmOM" // < YOU TOKEN HERE >
    let searchGiff = [
        "dance",
        "memes",
        "OMG"
    ]

    var url = "https://api.giphy.com/v1/gifs/search?api_key=" + tokenGiphy + "&q=" + searchGiff[getRandomInt(searchGiff.length-1)] + "&limit=1&offset=" + getRandomInt(500);

    $.get(url, function (data, textStatus, jqXHR) {
        var giffID = (data.data[0].id);
                // let previewGiff = "https://media3.giphy.com/media/" + giffID + "/480w_s.jpg";
        // $('#js-super-giff').attr("poster", previewGiff);
        let urlGiff = "https://media3.giphy.com/media/" + giffID +"/giphy.mp4"
        $('#js-super-giff').attr("src", urlGiff);
        $('#js-loader').hide();
        // $('#js-super-giff-loading').removeClass("super-giff-loading");
        // $('#js-skeleton-loading').removeClass("skeleton-loading");
    });
}

// get url img | 
function getUrlsImg() {
    return [
        '\"https://i.ytimg.com/vi/UsC9ydJ6i1Y/maxresdefault.jpg\"',
        '\"https://yandex.ru/images/search?pos=13&from=tabbar&img_url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FDyu59KNUwAAJk6K.jpg&text=memes+avatar&rpt=simage\"',
        '\"https://yandex.ru/images/search?p=3&text=memes+avatar&pos=200&rpt=simage&img_url=https%3A%2F%2Fsun9-9.userapi.com%2Fc850332%2Fv850332836%2F160809%2FRf_VEpebmS0.jpg&from=tabbar\"',
        '\"https://yandex.ru/images/search?p=4&text=memes+avatar&pos=243&rpt=simage&img_url=https%3A%2F%2Fsun9-42.userapi.com%2Fw7vxo4JwbrolcTFO4gAOKAg-ocUPu56-UotQWQ%2FzAfjAXwB5S4.jpg&from=tabbar\"',
        '\"https://yandex.ru/images/search?p=4&text=memes+avatar&pos=262&rpt=simage&img_url=https%3A%2F%2Fsun9-55.userapi.com%2Fc854120%2Fv854120593%2F1a5e2f%2F7KzOTH9yVHQ.jpg&from=tabbar\"',
        '\"https://yandex.ru/images/search?p=5&text=memes+avatar&pos=291&rpt=simage&img_url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FDxo9SdlU0AEvdrI.jpg&from=tabbar\"'
    ];
}

