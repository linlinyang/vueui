export default function oneOf(value,arr){
	for(let len = arr.length;len--;){
		if(value === arr[len]){
			return true;
		}
	}
	return false;
}