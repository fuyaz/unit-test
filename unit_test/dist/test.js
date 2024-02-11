"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("./main");
describe('Merge Function', function () {
    test('merge 3 collection and sort', function () {
        var collection1 = [1, 4, 6, 8];
        var collection2 = [2, 5, 7, 7];
        var collection3 = [9, 5, 3, 1];
        var result = main_1.default.merge(collection1, collection2, collection3);
        expect(result).toEqual([1, 1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 9]);
    });
});
