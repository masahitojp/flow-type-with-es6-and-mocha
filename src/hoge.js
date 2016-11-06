/* @flow */
class HogeImpl {
    a: number;
    constructor(prop: number) {
        this.a = prop;
    }

    xxx(): number {
        return this.a;
    }
}

module.exports = HogeImpl;
