// generate an object only using the keys with an empty string
export const getInitialState = (fieldKeys = {}) => {
  const state = {};
  fieldKeys.forEach((key) => {
    state[key] = "";
  });

  return state;
};

// returning every keys from any objects
export const getValues = (fieldKeys = {}) => {
  return fieldKeys.sort().map((key) => values[key]);
};
