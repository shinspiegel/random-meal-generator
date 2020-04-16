function getArrayFromObject(objectToCheck: object, stringToInclude: string): string[] {
  const resultArray = [];

  for (const key of Object.keys(objectToCheck)) {
    if (key.includes(stringToInclude)) {
      if (objectToCheck[key]) {
        resultArray.push(objectToCheck[key]);
      }
    }
  }

  return resultArray;
}

export default getArrayFromObject;
