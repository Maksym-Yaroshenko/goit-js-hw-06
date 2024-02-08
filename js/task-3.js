class StringBuilder {
  #value;

  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    // const a = str.length;
    // const b = this.#value.length;
    // this.#value = this.#value.padEnd(a + b, str);
    this.#value += str; //                            На скільки закоментований варіант гірший за цей?
  }

  padStart(str) {
    // const a = str.length;
    // const b = this.#value.length;
    // this.#value = this.#value.padStart(a + b, str);
    this.#value = str + this.#value;
  }

  padBoth(str) {
    // let a = str.length;
    // let b = this.#value.length;
    // this.#value = this.#value.padStart(a + b, str);
    // a = str.length;
    // b = this.#value.length;
    // this.#value = this.#value.padEnd(a + b, str);

    this.padStart(str);
    this.padEnd(str);
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
