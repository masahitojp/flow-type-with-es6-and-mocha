const Hoge = require("../dest/hoge");
const assert = require("power-assert");

describe("Hoge", () => {
    it("should be ...", () => {
        const a = new Hoge(1);
        assert.equal(a.a, 1);
    });
});

