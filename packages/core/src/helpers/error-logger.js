export const logError = (error, info = {}) => {
  console.info('Error here!: ', error, info);

  return error;
};
