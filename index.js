'use strict';
/**
 * @param {Date|string|int} current
 * @returns {Date}
 * @throws  An error if the provided date isn't a Date, string, or integer
 */
module.exports = function (current) {
    var next

    // date
    if(current instanceof Date) next = new Date(current.getTime())
    // string
    else if(typeof current === "string") next = new Date(current)
    // integer
    else if(typeof current === "number" && Number(current) === current && current % 1 === 0) next = new Date(current)
    // error
    else throw new Error("Provided date must be a Date object, a string, or an integer.")

    // next day
    next.setDate(next.getDate()+1)

    return next
}
