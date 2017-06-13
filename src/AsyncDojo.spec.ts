import {expect, use} from "chai";
import {AsyncDojo} from "./AsyncDojo";
import * as chaiAsPromised from "chai-as-promised";

use(chaiAsPromised);

const calculator = new AsyncDojo();

// fibonacci elements 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
describe("AsyncDojo", () => {


    describe("when asked to calculate simple output", () => {


        describe("when asked to calculate string for 1 element only", () => {

            it("should return correct result", () => {

                return expect(calculator.getSimpleString([1])).to.eventually.equal("1");

            });

        });


        xdescribe("when asked to calculate string for more elements", () => {

            it("should return correct result", () => {

                return expect(calculator.getSimpleString([2, 3, 5])).to.eventually.equal("125");

            });

        });

    });


    xdescribe("when asked to calculate recursive output", () => {


        xdescribe("when asked to calculate string for 1 element only", () => {

            it("should return correct result", () => {

                return expect(calculator.getRecursiveString([1])).to.eventually.equal("1");

            });

        });


        xdescribe("when asked to calculate string for 2 elements", () => {

            it("should return elements with the second one incremented by the value of the previous element", () => {

                const inputElements = [3, 5],
                    expectedOutput = [2, 5 + 2];


                return expect(calculator.getRecursiveString(inputElements)).to.eventually.equal(expectedOutput.join(""));


            });

        });


        xdescribe("when asked to calculate string for more elements", () => {

            it("should return elements correct result", () => {

                const inputElements = [9, 8, 7, 6],
                    expectedOutput = [];

                expectedOutput[0] = 34;
                expectedOutput[1] = 21 + expectedOutput[0];
                expectedOutput[2] = 13 + expectedOutput[1];
                expectedOutput[3] = 8 + expectedOutput[2];


                return expect(calculator.getRecursiveString(inputElements)).to.eventually.equal(expectedOutput.join(""));


            });

        });


    });


});