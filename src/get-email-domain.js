const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let index = email.lastIndexOf('@');
  return email.slice(index + 1);
}

console.log(getEmailDomain('prettyandsimple@example.com'));

module.exports = {
  getEmailDomain
};
