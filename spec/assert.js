(function(exports){
  var assert = {
    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
      }     else {
        console.log("Assertion passed: " + assertionToCheck)
      }
    },
    isArray: function(assertionToCheck) {
      if (typeof assertionToCheck === 'object') {
        console.log("is an array")
      }
      else {
        throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
      }
   }
  }
  exports.assert = assert;
})(this);
