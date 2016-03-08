'use strict';

let middleware = ['dufing-jade', 'dufing-response'];

let args = {};

class Middle {
    constructor() {}

    regArgs(obj) {
        for (var i in obj) {
            args[i] = obj[i];
        }
    }

    add(obj) {
        var self = this;

        let name = 'dufing-' + obj.name;
        if (middleware.indexOf(name) == -1) {
            // thrid part middleware
        } else {
            // defaule middleware
            let middle = require('./' + name + '.js');
            for (var i in middle) {
                this[i] = function() {
                    middle[i].apply(args, arguments);
                }
            }
        }
    }
}

module.exports = new Middle();
