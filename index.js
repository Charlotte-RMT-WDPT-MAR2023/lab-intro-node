class SortedList {
  constructor(items, length) {
    this.items = items ? items.sort((a, b) => a - b) : [];
    this.length = this.items.length;
  }



  add(item) {
    let i
    for (i= 0; i < this.length; i++) {
      if (item < this.items[i]) {
        break;
      }
    }
    this.items.splice(i, 0, item);
    this.length++;
  }

  get(pos) {
    if (pos >= this.length) {
      throw new Error("OutOfBounds");
    } else {
      let result = this.items[pos];
      return result;
    }
  }

  max() {
    if (!this.length) {
      throw new Error("EmptySortedList");
    } else {
      let max = this.items[this.length - 1];
      return max;
    }
  }

  min() {
    if (!this.length) {
      throw new Error("EmptySortedList");
    } else {
      let min = this.items[0];
      return min;
    }
  }

  sum() {
    if (!this.length) {
      return 0;
    } else {
      let total = 0;
      this.items.forEach((element) => {
        total += element;
      });
      return total;
    }
  }

  avg() {
    if (!this.length) {
      throw new Error("EmptySortedList");
    } else {
      let total = 0;
      this.items.forEach((element) => {
        total += element;
      });
      let avg = total / this.length;
      return avg;
    }
  }
}


module.exports = SortedList;
