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

//2. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, 'сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
function num2Obj(num){
	if (isNaN(num)){
	  console.log('Ошибка: параметр не является числом');
	} else if(num>999 || num<0){
		console.log('Ошибка: допустимый диапазон 0-999');
	  var obj={};
	  return obj;
	} else {
		var digits=['единицы','десятки','сотни'];
	  var obj={};
	  for(var i=0; num!=0; i++){
	  	obj[digits[i]]=num%10;
	  	num=(num-num%10)/10;
		}
		}	
		return obj;
	}
console.log(num2Obj(245));
console.log(num2Obj(45));
console.log(num2Obj(5));

//3. Реализовать функцию objectToQueryString(object), которая принимает аргументом объект, возвращает строку.
function objectToQueryString(obj){
	return Object.keys(obj).map(function(key) { return key + '=' + obj[key]; }).join('&');
};
console.log(objectToQueryString({user: 'Dmitry'}));
console.log(objectToQueryString({user: 'Dmitry', password: 'pass'}));
console.log(objectToQueryString({user: 'Dmitry', password: 'pass', id:1}));