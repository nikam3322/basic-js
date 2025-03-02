const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],

    getLength() {
        return this.arr.length


    },
    addLink(value) {

        this.arr.push(`( ${value} )`)
        return chainMaker


    },
    removeLink(position) {
        if (this.arr[position-1] === undefined) {
            this.arr = []
            throw Error("You can't remove incorrect link!")
        }
        this.arr.splice(position - 1, 1)
        return chainMaker

    },
    reverseChain() {
        this.arr.reverse()
        return chainMaker
    },
    finishChain() {
        let returnArray = this.arr.filter((elem) => {
            return elem !== undefined
        })
        this.arr = []
        return returnArray.join("~~")
    }
};

module.exports = {
  chainMaker
};
