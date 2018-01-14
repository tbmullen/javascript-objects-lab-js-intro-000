var recipes = {
  eggs: 1,
  chocolate: 2,
  cake: 3
};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object,  { [key]: value });
}
