const enhancer = require("./enhancer.js");
// test away!

describe("enhancer.js", () => {
  describe("repair() function", () => {
    test("should return an object with durability 100", () => {
      expect(
        enhancer.repair({ name: "Iron Sword", durability: 20, enhancement: 12 })
      ).toStrictEqual({ name: "Iron Sword", durability: 100, enhancement: 12 });
    });
  });
  describe("success() function", () => {
    test("increase the enhancement level by 1", () => {
      expect(
        enhancer.success({
          name: "Iron Sword",
          durability: 20,
          enhancement: 12,
        })
      ).toStrictEqual({ name: "Iron Sword", durability: 20, enhancement: 13 });
    });
    test("if enhancement is 20 the value wont change", () => {
      expect(
        enhancer.success({
          name: "Iron Sword",
          durability: 20,
          enhancement: 20,
        })
      ).toStrictEqual({ name: "Iron Sword", durability: 20, enhancement: 20 });
    });
  });
  describe("fail() function", () => {
    test("if enhancement less than 15 the durability will decrease by 5 and never will be below 0", () => {
      expect(
        enhancer.fail({ name: "Iron Sword", durability: 20, enhancement: 12 })
      ).toStrictEqual({ name: "Iron Sword", durability: 15, enhancement: 12 });
      expect(
        enhancer.fail({ name: "Iron Sword", durability: 4, enhancement: 12 })
      ).toStrictEqual({ name: "Iron Sword", durability: 0, enhancement: 12 });
    });

    test("if enhancement is more than 15 the durability will decrease by 10 and never will be below 0", () => {
      expect(
        enhancer.fail({ name: "Iron Sword", durability: 20, enhancement: 15 })
      ).toStrictEqual({ name: "Iron Sword", durability: 10, enhancement: 15 });
      expect(
        enhancer.fail({ name: "Iron Sword", durability: 8, enhancement: 16 })
      ).toStrictEqual({ name: "Iron Sword", durability: 0, enhancement: 16 });
    });
    test("if enhancement is more than 16 the enhancement level will decrease by 1", () => {
      expect(
        enhancer.fail({ name: "Iron Sword", durability: 20, enhancement: 18 })
      ).toStrictEqual({ name: "Iron Sword", durability: 10, enhancement: 17 });
    });
  });
  describe("get() function", () => {
    test("add enhancement level in front of the item name if enhancement is below 0", () => {
      expect(
        enhancer.get({ name: "Iron Sword", durability: 20, enhancement: 18 })
      ).toStrictEqual({
        name: "[+18] Iron Sword",
        durability: 20,
        enhancement: 18,
      });
      expect(
        enhancer.get({ name: "Iron Sword", durability: 20, enhancement: 0 })
      ).toStrictEqual({
        name: "Iron Sword",
        durability: 20,
        enhancement: 0,
      });
    });
  });
});
