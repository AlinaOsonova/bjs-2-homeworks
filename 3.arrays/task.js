function compareArrays(arr1, arr2) {
	return arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {

	const newList = users.filter(user => user.gender === gender);
	if (newList.length === 0) return 0;

	const averageAge = newList.reduce((sum, user) => sum + user.age, 0) / newList.length;

	return averageAge;
}