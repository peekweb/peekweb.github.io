log = console.log;

function pic(str, rand) {
    if(rand) {
        rand = '?' + Math.random();
    } else {
        rand = '';
    }

    if(/\dx\d+/.test(str)) {
        var strs = str.split('x');
        return  'https://img.vpsok.com/w' + strs[0] + 'h' + strs[1] +'.png' + rand ;
    } else {
        return  'https://img.vpsok.com/w450h300.png';
    }
}


var $ = document.querySelectorAll.bind(document);

[].forEach.call($('img'), function (elm) {
    if(elm.getAttribute('tu')) {
        if(elm.getAttribute('rand')) {
            elm.src = pic(elm.getAttribute('tu', 'rand'));    
        } else {
            elm.src = pic(elm.getAttribute('tu'));    
        }
    }
});

