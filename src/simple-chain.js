const chainMaker = {
  a : [],

  getLength() {
    return this.a.length;
  },
  addLink(value = ``) {
    this.a.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (this.a[position - 1]) {
      this.a.splice(position - 1, 1);
      return this;
    } else {
      this.a = [];
      throw 'Error';
    }
  },
  reverseChain() {
    this.a.reverse();
    return this;
  },
  finishChain() {
    let res = this.a.slice();
    this.a = [];
    return res.join('~~');
  }
};

module.exports = chainMaker;