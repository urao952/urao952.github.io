var _ramdomS = new Array();

//ランダム文設定
_ramdomS[0] = 'い';
_ramdomS[1] = 'に';
_ramdomS[2] = 'さ';
_ramdomS[3] = 'よ';
_ramdomS[4] = 'ご';

var _noS = Math.floor(Math.random() * _ramdomS.length);

// 表示する
document.write(_ramdomS[_noS]);