export const validateContent = (text) => {
    if (!text) {
      return "No se puede dejar vacio";
    }
  };
  
  export const validateLength = (text, size=4) => {
    if (text && text.length < size) {
      return `Debe tener ${4} caracteres o mas`;
    }
  };

  export const validateField = (validators, value) => {
    let error = '';
    validators.forEach((validator) => {
      const validationError = validator(value);
      if (validationError) {
        error = validationError;
      }
    });
    return error;
  };