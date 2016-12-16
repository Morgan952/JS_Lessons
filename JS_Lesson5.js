function rgb2Hex(r,g,b){
	function dec2Hex(dec){
	    if (isNaN(dec)){
	        return console.log('Ошибка: параметр не является числом');
	    } else if(dec>255||dec<0) {
	        return console.log('Ошибка: допустимый диапазон 0-255');
	    } else {
	        return dec > 15 ? dec.toString(16) : '0' + dec.toString(16);
	    }
	}
	var rgb=[dec2Hex(r),dec2Hex(g),dec2Hex(b)]
    
  return rgb.join('');
}
console.log("Ваш цвет в шестнадцатеричном коде: " + "#" + rgb2Hex(3,16,213));