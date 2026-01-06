export const filterObjectList = (objectList, key, value) => {
	var result = [];
	if (
		objectList !== undefined &&
		objectList !== null &&
		objectList.length > 0
	) {
		result = objectList.filter((obj) => obj[key] === value);
	}
	return result;
};

export const filterObjectListById = (objectList, id) => {
	var result = [];
	var obj = {};
	if (
		objectList !== undefined &&
		objectList !== null &&
		objectList.length > 0
	) {
		result = objectList.filter((obj) => obj.id === id);
		if (result !== undefined && result !== null && result.length > 0) {
			obj = result[0];
		}
	}
	return obj;
};

export const replaceObjectListByKey = (objectList, object, key) => {
	var newList = [...objectList];
	if (newList.length < 1) {
		newList.push(object);
	} else {
		for (let i = 0; i < newList.length; i++) {
			if (newList[i][key] === object[key]) {
				newList[i] = object;
				break;
			}
		}
	}
	return newList;
};
