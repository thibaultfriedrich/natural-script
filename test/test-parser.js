const chai = require('chai');
const should = chai.should;
const expect = chai.expect;

const dates = require('./config');

const ns = require('../src/parser');
// ns.parse('wake me up at 3pm everyday', 'wake me up [date:date1]')

describe('parse', function () {
    
    describe('empty', function () {
        it('should return true', function () {
            expect(ns.parse('','')).to.be.true;
            expect(ns.parse(' ',' ')).to.be.true;
            expect(ns.parse('',' ')).to.be.true;
            expect(ns.parse(' ','')).to.be.true;
        });
        it('should return false', function () {
            expect(ns.parse('test','')).to.be.false;
            expect(ns.parse('','test')).to.be.false;
        });
    });

    describe('1 word', function () {
        it('should return true', function () {
            expect(ns.parse('test','test')).to.be.true;
            expect(ns.parse('testa','testb')).to.be.true;
        });
        it('should return false', function () {
            expect(ns.parse('test','test test')).to.be.false;
            expect(ns.parse('testaaaadd','testbbbb')).to.be.false;

        });
    });

    describe('2 words', function () {
        it('should return true', function () {
            expect(ns.parse('testaaa testbbb','testaaa testbbb')).to.be.true;
            expect(ns.parse('testaaa,testbbb','testaaa testbbb')).to.be.true;
            expect(ns.parse('testaaa:testbbb','testaaa testbbb')).to.be.true;
            expect(ns.parse('testaaa-testbbb','testaaa testbbb')).to.be.true;
        });
        it('should return false', function () {
            expect(ns.parse('testaaaa testbbbb','testbbbb testaaa')).to.be.false;
        });
    });

    describe('3 words', function () {
        it('should return true', function () {
            expect(ns.parse('testaaa testbbb testccc','testaaa testbbb testccc')).to.be.true;
            expect(ns.parse('testaaa,testbbb','testaaa testbbb')).to.be.true;
            expect(ns.parse('testaaa:testbbb','testaaa testbbb')).to.be.true;
            expect(ns.parse('testaaa-testbbb','testaaa testbbb')).to.be.true;
        });
        it('should return false', function () {
            expect(ns.parse('testaaaa testbbbb testccc','testbbbb testaaa testccc')).to.be.false;
        });
    });

    describe('2 words + date', function () {

        dates.forEach(function (date) {
            var s = 'testaaa testbbbb '+date;
            var ref = 'testaaa testbbbb {{date}}';
            it('"'+s+'" -> "'+ref+'" should return true', function () {
                // console.log(ns.parse(s, ref));
                expect(ns.parse(s, ref)).to.be.true;
            });
        });
    });
});