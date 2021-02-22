"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
// for node modules in typescript, do npm install @types/node
var fs_1 = __importDefault(require("fs"));
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filename) {
        this.filename = filename;
        this.data = [];
    }
    CsvFileReader.prototype.read = function () {
        this.data = fs_1.default.readFileSync(this.filename, {
            // encoding utf-8 returns a string for us
            encoding: 'utf-8'
        })
            .split('\n')
            .map(function (row) {
            return row.split(',');
        });
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
