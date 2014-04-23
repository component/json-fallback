
describe('JSON', function(){
  var json = require('json-fallback');
  var assert = require('assert');

  it('should not leak to the global scope', function(){
    assert(json != window.JSON);
  })

  it('should parse json', function(){
    assert(0 == json.parse('[0]')[0]);
  })

  it('should stringify json', function(){
    assert('[0]' == json.stringify([0]));
  })
})
