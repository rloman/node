module.exports = function(message, assertion) {
  if(!assertion) {
    throw new Error(message);
  }
}
