export const getInitialState = (fieldKeys = {}) => {
  const state = {};
  fieldKeys.forEach((key) => {
    state[key] = "";
  });

  return state;
};


export const getValues = (fieldKeys = {}) => {
  return fieldKeys.sort().map((key) => values[key]);
};
