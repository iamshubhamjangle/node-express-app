/**
 * Create standardize the response structure for errors and successes
 * @param {Boolean} success true | false
 * @param {String} message "Creation Successfull" | "User doesn't exist"
 * @param {Object} data
 * @returns {Object}
 */
const createResponseJSON = (success, message, data = null) => {
  return {
    success,
    message,
    data,
  };
};

module.exports = createResponseJSON;
