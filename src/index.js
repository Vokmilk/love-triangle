/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  preferences.unshift('0');
  var triangles = 0;
    for (var i = 1; i < preferences.length; i++) 
    {
      var p=preferences[i]
      var k=preferences[p]
          if ( preferences[i] == p && preferences[p] == k && preferences[k] == i && i !== k && k !== p && i !== p)
            triangles++
        }
     return triangles/3;
};
