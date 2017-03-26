
//Qry: Why invoking 'readHugeList' here don't work?
// var list = readHugeList();

var readHugeList = function() {
    var arr = [1, '2', { name: "Pollob"}];
    return arr;
}

var list = readHugeList();

//Poi: Eventually will pop all elements from the list
var nextListItem = function() {
    var item = list.pop();
    if (item) {
        //Poi: Recursive call. This might cause stackoverflow
        // nextListItem();

        //Following is supposed to solve stackoverflow problem but it doesn't. Why?
        setTimeout(nextListItem, 10);
    }
};

console.log(list.length);//3

nextListItem();

console.log(list.length);//0