export const updateObjectInArray = (items,itemId,objPropName,followedObj) => {
  return items.map(e => {
        if (e[objPropName] === itemId) {

            return {...e, ...followedObj}
        }
        return e
})
}
