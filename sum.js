function getSum(arr){
	if (arr == null){
		return -1;
	}
	if (arr[2]!=null){
		return -1;
	}
	if ((Number.isInteger(arr[0]) && arr[0] >= 0) &&
		(Number.isInteger(arr[1]) && arr[1] >= 0)){
		return arr[0]+arr[1];
	}
	else {
		return -1;
	}
}

module.exports = getSum;
