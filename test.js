var assert = require('assert')
var nextday = require("./")

describe('Next Day', function() {
    describe('Using a Date object', function () {
        it('Should give the next day', function () {
            var current = new Date(2015, 9, 17)
            var next = nextday(current)

            assert.equal(current.getFullYear(), next.getFullYear())
            assert.equal(current.getMonth(), next.getMonth())
            assert.equal(current.getDate()+1, next.getDate())
        })

        it('Should not return the same Date object', function () {
            var current = new Date(2015, 9, 17)
            var next = nextday(current)

            assert.notEqual(current, next)
        })
    })

    describe('Using a string object', function () {
        it('Should give the next day', function () {
            var currentStr = "2015-10-17"
            var next = nextday(currentStr)

            var currentDate = new Date(currentStr)

            assert.equal(currentDate.getFullYear(), next.getFullYear())
            assert.equal(currentDate.getMonth(), next.getMonth())
            assert.equal(currentDate.getDate()+1, next.getDate())
        })
    })

    describe('Using an integer', function () {
        it('Should give the next day', function () {
            var currentInt = new Date(2015,9,17).getTime()
            var next = nextday(currentInt)

            var currentDate = new Date(currentInt)

            assert.equal(currentDate.getFullYear(), next.getFullYear())
            assert.equal(currentDate.getMonth(), next.getMonth())
            assert.equal(currentDate.getDate()+1, next.getDate())
        })
    })

    describe('Using a float', function () {
        it('Should throw an exception', function () {
            var currentFloat = "1.1"
            assert.throws(nextday(currentFloat, Error))
        })
    })

    describe("At the end of the month", function() {
        it("Should return the first of the next month", function() {
            var current = new Date(2015, 9, 31)
            var next = nextday(current)

            assert.equal(2015, next.getFullYear())
            assert.equal(10, next.getMonth())
            assert.equal(1, next.getDate())
        })
    })

    describe("At the end of the year", function() {
        it("Should return the first of the next year", function() {
            var current = new Date(2015, 11, 31)
            var next = nextday(current)

            assert.equal(2016, next.getFullYear())
            assert.equal(0, next.getMonth())
            assert.equal(1, next.getDate())
        })
    })
})