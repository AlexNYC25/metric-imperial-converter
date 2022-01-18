const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    test("32L should be 32.", function(){
        assert.equal(convertHandler.getNum("32L"), 32);
    })

    test("12mi should be 12.", function(){
        assert.equal(convertHandler.getNum("12mi"), 12);
    })

    test("34kg should be 34.", function(){
        assert.equal(convertHandler.getNum("34kg"), 34);
    })

    test("3.14kg should be 3.14.", function(){
        assert.equal(convertHandler.getNum("3.14kg"), 3.14);
    })

    test("5.6L should be 5.6.", function(){
        assert.equal(convertHandler.getNum("5.6L"), 5.6);
    })

    test("12.33333mi should be 12.33333.", function(){
        assert.equal(convertHandler.getNum("12.333333mi"), 12.333333);
    })

    test('1/2lb should be .5.', function(){
        assert.equal(convertHandler.getNum('1/2lb'), .5);
    })

    test('1/4mi should be .25.', function(){
        assert.equal(convertHandler.getNum('1/4mi'), .25);
    })

    test('1/3kg should be .33333.', function(){
        assert.equal(convertHandler.getNum('1/3kg'), 0.3333333333333333);
    })

    test('1.5/3 should be .5', function(){
        assert.equal(convertHandler.getNum('1.5/3mi'), .5);
    })

    test('.44/4 shuld be .11', function(){
        assert.equal(convertHandler.getNum('.44/4lb'), .11);
    })

    test('50.005/5 should be 10.001', function(){
        assert.equal(convertHandler.getNum('50.005/5mi'), 10.001000000000001);   
    })

    test('1/2/3 should be null', function(){
        assert.equal(convertHandler.getNum('1/2/3mi'), null);
    })

    test('1/2/3/4 should be null', function(){
        assert.equal(convertHandler.getNum('1/2/3/4kg'), null);
    })

    test('1/2/3/4/5 should be null', function(){
        assert.equal(convertHandler.getNum('1/2/3/4/5L'), null);
    })

    test('mi should be 1', function(){
        assert.equal(convertHandler.getNum('mi'), 1);
    })

    test('kg should be 1', function(){
        assert.equal(convertHandler.getNum('kg'), 1);
    })

    test('L should be 1', function(){
        assert.equal(convertHandler.getNum('L'), 1);
    })

    test("3mi should return mi", function(){
        assert.equal(convertHandler.getUnit("3mi"), "mi");
    })
    
    test("3km should return km", function(){
        assert.equal(convertHandler.getUnit("3km"), "km");
    })

    test("3lbs should return lbs", function(){
        assert.equal(convertHandler.getUnit("3lbs"), "lbs");
    })

    test("3kg should return kg", function(){
        assert.equal(convertHandler.getUnit("3kg"), "kg");
    })

    test("3gal should return gal", function(){
        assert.equal(convertHandler.getUnit("3gal"), "gal");
    })

    test("3L should return L", function(){
        assert.equal(convertHandler.getUnit("3L"), "L");
    })

    test("5in should return null", function(){
        assert.equal(convertHandler.getUnit("5in"), null);   
    })

    test("5cm should return null", function(){
        assert.equal(convertHandler.getUnit("5cm"), null);
    })

    test("5ft should return null", function(){
        assert.equal(convertHandler.getUnit("5ft"), null);
    })

    test("4gal should return L", function(){
        assert.equal(convertHandler.getReturnUnit(convertHandler.getUnit("4gal")), "L");
    })

    test("4L should return gal", function(){
        assert.equal(convertHandler.getReturnUnit(convertHandler.getUnit("4L")), "gal");
    })

    test("4mi should return km", function(){
        assert.equal(convertHandler.getReturnUnit(convertHandler.getUnit("4mi")), "km");
    })

    test("4km should return mi", function(){
        assert.equal(convertHandler.getReturnUnit(convertHandler.getUnit("4km")), "mi");
    })

    test("4lbs should return kg", function(){
        assert.equal(convertHandler.getReturnUnit(convertHandler.getUnit("4lbs")), "kg");
    })

    test("4kg should return lbs", function(){
        assert.equal(convertHandler.getReturnUnit(convertHandler.getUnit("4kg")), "lbs");
    })

    test("4km should return km", function(){
        assert.equal(convertHandler.spellOutUnit(convertHandler.getUnit("4km")), "kilometers");
    })

    test("4L should return liters", function(){
        assert.equal(convertHandler.spellOutUnit(convertHandler.getUnit("4L")), "liters");
    })

    test("4mi should return miles", function(){
        assert.equal(convertHandler.spellOutUnit(convertHandler.getUnit("4mi")), "miles");
    })

    test("4lbs should return pounds", function(){
        assert.equal(convertHandler.spellOutUnit(convertHandler.getUnit("4lbs")), "pounds");
    })

    test("4kg should return kilograms", function(){
        assert.equal(convertHandler.spellOutUnit(convertHandler.getUnit("4kg")), "kilograms");
    })

    test("5gal should return gallons", function(){
        assert.equal(convertHandler.spellOutUnit(convertHandler.getUnit("5gal")), "gallons");
    })
});



