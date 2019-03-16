module.exports = function check(str, bracketsConfig) {
	let ourBrackets = Array.from(str);
	let arr = [];
        for ( let i = 0; i < ourBrackets.length; i++){
            if (ourBrackets[i] == ('(' || '{' || '[' || '1' || '3' || '5') ){
            	arr.push(ourBrackets[i]);
            }else {
            	if (( arr[arr.length - 1] == '(' && ourBrackets[i] == ')' ) ||
            	 	( arr[arr.length - 1] == '|' && ourBrackets[i] == '|' ) || 
            	 	( arr[arr.length - 1] == '{' && ourBrackets[i] == '}' ) || 
            	 	( arr[arr.length - 1] == '[' && ourBrackets[i] == ']' ) || 
            	 	( arr[arr.length - 1] == '1' && ourBrackets[i] == '2')  || 
            	 	( arr[arr.length - 1] == '3' && ourBrackets[i] == '4' ) || 
            	 	( arr[arr.length - 1] == '5' && ourBrackets[i] == '6' ) ||
            	 	( arr[arr.length - 1] == '7' && ourBrackets[i] == '7' ) ||
            	 	( arr[arr.length - 1] == '8' && ourBrackets[i] == '8' )  ) {
            	 		arr.pop(); 
            	} else {
            	 	if ((( ourBrackets[i] == '|' && 
            	 		   !arr.includes('|')) &&
            	 		   ourBrackets[i-1] !== '|') ||
            	 		((ourBrackets[i] == '7' && 
            	 		  !arr.includes('7')) && 
            	 		  ourBrackets[i-1] !== '7')  ||
            	 		(( ourBrackets[i] == '8' && 
            	 		   !arr.includes('8')) && 
            	 		   ourBrackets[i-1] !== '8')
            	 		){
            	 			arr.push(ourBrackets[i]);
            	 	} else if( 
            	 		(ourBrackets[i] == '|' && arr[arr.length - 1] == '|') ||
            	 		(ourBrackets[i] == '7' && arr[arr.length - 1] == '7') ||
            	 		(ourBrackets[i] == '8' && arr[arr.length - 1] == '8') ) {
            	 			arr.pop();	
            	 	} else {
            	 		arr.push(ourBrackets[i]);
            	 	}	
            	 }
            }  
        }
    if (arr.length == 0) {     
        return true;	
        } else {	
        return false;
    }
}
