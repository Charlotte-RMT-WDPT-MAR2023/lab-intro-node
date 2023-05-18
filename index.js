class SortedList {
  constructor(items, length) {
    this.items = items || [];
    this.length = this.items.length;
  }

  add(item) {
    for (let i = 0; i < this.items.length; i++) {
      if (item >= this.items[i]) {
        this.items.splice(i, 0, item);
        break;
      }
    }

    this.length++;
  }

  get(pos) {
    if (pos >= this.items.length) {
      throw new Error("OutOfBounds");
    } else {
      let result = this.items[pos];
      return result;
    }
  }

  max() {
    if (!this.items.length) {
      throw new Error("EmptySortedList");
    } else {
      let max = this.items[this.items.length - 1];
      return max;
    }
  }

  min() {
    if (!this.items.length) {
      throw new Error("EmptySortedList");
    } else {
      let min = this.items[0];
      return min;
    }
  }

  sum() {
    if (!this.items.length) {
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
    if (!this.items.length) {
      throw new Error("EmptySortedList");
    } else {
      let total = 0;
      this.items.forEach((element) => {
        total += element;
      });
      let avg = total / this.items.length;
      return avg;
    }
  }
}


module.exports = SortedList;
