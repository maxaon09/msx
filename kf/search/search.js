var MAX_INPUT_LENGTH = 32;
var MAX_PAGE_X = 12;
var MAX_PAGE_Y = 6;
var SEARCH_HEADLINE = "{ico:search} {INPUT}";
var RESULTS_HEADLINE = "{ITEMS} найдено";
var createInputButton = function (input, key, x, y) {
    return {
        type: "button",
        layout: x + "," + y + ",1,1",
        label: input,
        key: key,
        action: "interaction:commit",
        data: {
            action: "search:input:" + input,
        },
    };
};
var createControlButton = function (control, key, x, y) {
    var label = null;
    if (control == "back") {
        label = "{ico:backspace}";
    } else if (control == "clear") {
        label = "{ico:clear}";
    } else if (control == "space") {
        label = "{ico:space-bar}";
    } else if (control == "space") {
        label = "{ico:space-bar}";
    } else if (control == "language") {
        label = "{ico:language}";
    } else if (control == "done") {
        label = "{ico:done}";
    }
    return {
        type: "button",
        layout: x + "," + y + ",3,1",
        label: label,
        key: key,
        action: "interaction:commit",
        data: { action: "search:control:" + control },
    };
};
var languageEN = {
    language: "EN",
    headline: null,
    offset: "0,0,0,0.1",
    items: [
        createInputButton("1", "1", 0, 0),
        createInputButton("2", "2", 1, 0),
        createInputButton("3", "3", 2, 0),
        createInputButton("4", "4", 3, 0),
        createInputButton("5", "5", 4, 0),
        createInputButton("6", "6", 5, 0),
        createInputButton("7", "7", 6, 0),
        createInputButton("8", "8", 7, 0),
        createInputButton("9", "9", 8, 0),
        createInputButton("0", "0", 9, 0),
        createInputButton("A", "a", 0, 1),
        createInputButton("B", "b", 1, 1),
        createInputButton("C", "c", 2, 1),
        createInputButton("D", "d", 3, 1),
        createInputButton("E", "e", 4, 1),
        createInputButton("F", "f", 5, 1),
        createInputButton("G", "g", 6, 1),
        createInputButton("H", "h", 7, 1),
        createInputButton("I", "i", 8, 1),
        createInputButton("J", "j", 9, 1),
        createInputButton("K", "k", 10, 1),
        createInputButton("L", "l", 11, 1),
        createInputButton("M", "m", 0, 2),
        createInputButton("N", "n", 1, 2),
        createInputButton("O", "o", 2, 2),
        createInputButton("P", "p", 3, 2),
        createInputButton("Q", "q", 4, 2),
        createInputButton("R", "r", 5, 2),
        createInputButton("S", "s", 6, 2),
        createInputButton("T", "t", 7, 2),
        createInputButton("U", "u", 8, 2),
        createInputButton("V", "v", 9, 2),
        createInputButton("W", "w", 10, 2),
        createInputButton("X", "x", 11, 2),
        createInputButton("Y", "y", 0, 3),
        createInputButton("Z", "z", 1, 3),
        createControlButton("back", "delete", 0, 4),
        createControlButton("clear", "home|end", 3, 4),
        createControlButton("space", "space|insert", 6, 4),
        createControlButton("language", "language", 9, 4),
    ],
};
var languageRU = {
    language: "RU",
    headline: null,
    offset: "0,0,0,0.1",
    items: [
        createInputButton("1", "1", 0, 0),
        createInputButton("2", "2", 1, 0),
        createInputButton("3", "3", 2, 0),
        createInputButton("4", "4", 3, 0),
        createInputButton("5", "5", 4, 0),
        createInputButton("6", "6", 5, 0),
        createInputButton("7", "7", 6, 0),
        createInputButton("8", "8", 7, 0),
        createInputButton("9", "9", 8, 0),
        createInputButton("0", "0", 9, 0),
        createInputButton("А", "а", 0, 1),
        createInputButton("Б", "б", 1, 1),
        createInputButton("В", "в", 2, 1),
        createInputButton("Г", "г", 3, 1),
        createInputButton("Д", "д", 4, 1),
        createInputButton("Е", "е", 5, 1),
        createInputButton("Ё", "ё", 6, 1),
        createInputButton("Ж", "ж", 7, 1),
        createInputButton("З", "з", 8, 1),
        createInputButton("И", "и", 9, 1),
        createInputButton("Й", "й", 10, 1),
        createInputButton("К", "к", 11, 1),
        createInputButton("Л", "л", 0, 2),
        createInputButton("М", "м", 1, 2),
        createInputButton("Н", "н", 2, 2),
        createInputButton("О", "о", 3, 2),
        createInputButton("П", "п", 4, 2),
        createInputButton("Р", "р", 5, 2),
        createInputButton("С", "с", 6, 2),
        createInputButton("Т", "т", 7, 2),
        createInputButton("У", "у", 8, 2),
        createInputButton("Ф", "ф", 9, 2),
        createInputButton("Х", "х", 10, 2),
        createInputButton("Ц", "ц", 11, 2),
        createInputButton("Ч", "ч", 0, 3),
        createInputButton("Ш", "ш", 1, 3),
        createInputButton("Щ", "щ", 2, 3),
        createInputButton("Ъ", "ъ", 3, 3),
        createInputButton("Ы", "ы", 4, 3),
        createInputButton("Ь", "ь", 5, 3),
        createInputButton("Э", "э", 6, 3),
        createInputButton("Ю", "ю", 7, 3),
        createInputButton("Я", "я", 8, 3),
        createControlButton("back", "delete", 0, 4),
        createControlButton("clear", "home|end", 3, 4),
        createControlButton("space", "space|insert", 6, 4),
        createControlButton("language", "language", 9, 4),
    ],
};
var inputPage = null;
var defaultLanguage = "RU";
if (defaultLanguage === "RU") {
    inputPage = languageRU;
} else {
    inputPage = languageEN;
}
var search = {
    cache: false,
    type: "list",
    important: true,
    headline: null,
    transparent: 2,
    background: "https://catherineasquithgallery.com/uploads/posts/2021-02/1614147664_30-p-serebryanii-fon-na-telefon-33.jpg",
    template: {
        type: "separate",
        layout: "0,0,2,4",
    },
    pages: null,
};
function SearchHandler() {
    var searchInput = TVXServices.urlParams.getFullStr("input", "");
    var testItems = null;
    var resultItems = null;
    var searchURL = decodeURI(TVXServices.urlParams.get("url"));
    var createPages = function (items, filterCallback, itemCallback, pageCallback) {
        var x = 0;
        var y = 0;
        var w = 2;
        var h = 4;
        var page = null;
        var index = 0;
        if (items != null && items.length > 0) {
            for (var i in items) {
                var item = items[i];
                var pageItem = {
                    type: "separate",
                    layout: x + "," + y + "," + w + "," + h,
                    badge: item.badge ? item.badge : null,
                    badgeColor: item.badgeColor ? item.badgeColor : null,
                    title: item.title ? item.title : null,
                    titleFooter: item.titleFooter ? item.titleFooter : null,
                    image: item.image ? item.image : null,
                    imageFiller: item.imageFiller ? item.imageFiller : null,
                    action: item.action ? item.action : null,
                    data: item.data ? item.data : null,
                };
                itemCallback(item, pageItem, index);
                if (page == null) {
                    page = { items: [] };
                    pageCallback(page);
                }
                page.items.push(pageItem);
                x += w;
                if (x + w > MAX_PAGE_X) {
                    x = 0;
                    y += h;
                    if (y + h > MAX_PAGE_Y) {
                        y = 0;
                        page = null;
                    }
                }
                index++;
            }
        }
    };
    var handleSearchInput = function (input) {
        if (searchInput.length < MAX_INPUT_LENGTH) {
            searchInput += input;
        }
    };
    var handleSearchControl = function (control) {
        if (control == "back") {
            if (searchInput.length > 0) {
                searchInput = searchInput.substr(0, searchInput.length - 1);
            }
        } else if (control == "clear") {
            searchInput = "";
        } else if (control == "space") {
            if (searchInput.length > 0 && searchInput.length < MAX_INPUT_LENGTH && searchInput[searchInput.length - 1] != " ") {
                searchInput += " ";
            }
        } else if (control == "done") {
            searchInput = searchInput;
        } else if (control == "language") {
            if (inputPage.language === "RU") {
                inputPage = languageEN;
            } else {
                inputPage = languageRU;
            }
        } else {
            TVXInteractionPlugin.warn("Unknown search control: '" + control + "'");
        }
    };
    var updateSearch = function () {
        search.headline = SEARCH_HEADLINE.replace("{INPUT}", searchInput);
        search.pages = [inputPage];
        resultItems = [];
        if (searchInput.length > 0) {
            var searchToken = TVXTools.strTrim(searchInput.toLowerCase());
            TVXServices.ajax.get(searchURL.replace("{QUERY}", searchToken), {
                success: function (data) {
                    testItems = data.items;
                },
                error: function (error) {
                    TVXInteractionPlugin.error("Setup test items failed: " + error);
                    testItems = null;
                },
            });
            createPages(
                testItems,
                function (testItem) {
                    var hit = 0;
                    if (TVXTools.isFullStr(testItem.icon)) {
                        for (var i = 0; i < searchToken.length; i++) {
                            if (testItem.icon.indexOf(searchToken[i]) >= 0) {
                                hit++;
                            }
                        }
                    }
                    return hit == searchToken.length;
                },
                function (resultItem, pageItem, index) {
                    resultItems.push(resultItem);
                },
                function (page) {
                    search.pages.push(page);
                }
            );
            inputPage.headline = RESULTS_HEADLINE.replace("{ITEMS}", resultItems.length + " " + (resultItems.length == 1 ? "видео" : "видео"));
        } else {
            inputPage.headline = null;
        }
    };
    var reloadSearch = function () {
        TVXInteractionPlugin.executeAction("reload:content");
    };
    this.init = function () {};
    this.ready = function () {};
    this.handleData = function (data) {
        if (data.data != null && TVXTools.isFullStr(data.data.action)) {
            var action = data.data.action;
            if (action.indexOf("search:") == 0) {
                var searchAction = action.substr(7);
                if (searchAction.indexOf("init:") == 0) {
                    searchInput = searchAction.substr(5);
                    updateSearch();
                } else if (searchAction.indexOf("input:") == 0) {
                    handleSearchInput(searchAction.substr(6));
                    reloadSearch();
                } else if (searchAction.indexOf("control:") == 0) {
                    handleSearchControl(searchAction.substr(8));
                    reloadSearch();
                } else if (searchAction == "reload") {
                    reloadSearch();
                } else {
                    TVXInteractionPlugin.warn("Unknown search action: '" + searchAction + "'");
                }
            } else {
                TVXInteractionPlugin.warn("Invalid search action: '" + action + "'");
            }
        } else {
            TVXInteractionPlugin.warn("Unknown search data");
        }
    };
    this.handleRequest = function (dataId, data, callback) {
        if (dataId == "init") {
            updateSearch();
            callback(search);
        } else {
            TVXInteractionPlugin.warn("Unknown request data ID: '" + dataId + "'");
            callback();
        }
    };
}
window.onload = function () {
    TVXInteractionPlugin.setupHandler(new SearchHandler());
    TVXInteractionPlugin.init();
};
