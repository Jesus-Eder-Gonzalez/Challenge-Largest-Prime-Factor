var primeModule = require("../largestPrimeFactor.js");
var chai = require('chai');
var should = chai.should();

describe("The largest Prime Factor", function () {

  it("for 13195 should be 29", function () {
    var primeNumber = primeModule.largestPrimeFactor(13195);
    primeNumber.should.equal(29);
  });

  // it("for 600851475143 should be 6857", function () {
  //   var primeNumber = primeModule.largestPrimeFactor(600851475143);
  //   primeNumber.should.equal(6857);
  // });

  it("for 22 should be 11", function () {
    var primeNumber = primeModule.largestPrimeFactor(22);
    primeNumber.should.equal(11);
  });

  it("for 250 should be 5", function () {
    var primeNumber = primeModule.largestPrimeFactor(250);
    primeNumber.should.equal(5);
  });

  it("for 90 should be 5", function () {
    var primeNumber = primeModule.largestPrimeFactor(90);
    primeNumber.should.equal(5);
  });

  it("for 70 should be 7", function () {
    var primeNumber = primeModule.largestPrimeFactor(70);
    primeNumber.should.equal(7);
  });

  it("for 133 should be 19", function () {
    var primeNumber = primeModule.largestPrimeFactor(133);
    primeNumber.should.equal(19);
  });

  it("for 2993 should be 73", function () {
    var primeNumber = primeModule.largestPrimeFactor(133);
    primeNumber.should.equal(19);
  });

});