const capitalize = require("./App").capitalize;
const reverse = require("./App").reverse;
const add = require("./App").add;
const subtract = require("./App").subtract;
const multiply = require("./App").multiply;
const divide = require("./App").divide
const cypher = require("./App").cypher
const getBasicProps = require("./App").getBasicProps

describe("String manipulation", () => {
  describe("capitalizes a string", () => {
    test("capitalizes a one word string", () => {
      expect(capitalize("babel")).toBe("Babel")
    })
    test("capitalizes a sentence", () => {
      expect(capitalize("a sentence")).toBe("A sentence")
    })
    test("has no effect on empty strings", () => {
      expect(capitalize("")).toBe("")
    })
    test("has no effect on strings beggining with whitespace", () => {
      expect(capitalize("  s")).toBe("  s")
    })
  })

  describe("reverses a string", () => {
    test("reverses a single word string", () => {
      expect(reverse("asd")).toBe("dsa")
    })
    test("reverses a sentence", () => {
      expect(reverse("a sentence")).toBe("ecnetnes a")
    })
    test("has no effect on a letter",() => {
      expect(reverse("a")).toBe("a")
    })
    test("has no effect on empty strings", () => {
      expect(reverse("")).toBe("")
    })
  })
  describe("cyphers a string", () => {
    test("cyphers a letter", () => {
      expect(cypher('a', 3)).toBe("d")
    })
    test("cyphers a word", () => {
      expect(cypher("abc", 3)).toBe("def")
    })
    test("cyphers a sentence", () => {
      expect(cypher("a cd", 3)).toBe("d fg")
    })
    test("preserves case", () => {
      expect(cypher("Ae c",2)).toBe("Cg e")
    })
    test("works with offsets more than 26", () => {
      expect(cypher("abc", 29)).toBe("def")
    })
    test("ignore punctuation", () => {
      expect(cypher("abc!", 3)).toBe("def!")
    })
  })
})

describe("solves basic calculations", () => {
  describe("add", () => {
    test("adds two numbers", () => {
      expect(add(1, 2)).toBe(3);
    })
    test("adds multiple numbers", () => {
      expect(add(1, 2, 3)).toBe(6);
    })
  })
  describe("subtract", () => {
    test("substracts two numbers", () => {
      expect(subtract(1, 2)).toBe(-1);
    })
  })
  describe("multiply", () => {
    test("multiplies two numbers", () => {
      expect(multiply(2,5)).toBe(10);
    })
    test("multiplies multiple numbers", () => {
      expect(multiply(2,5,10)).toBe(100);
    })
  })
  describe("divide", () => {
    test("divides two numbers", () => {
      expect(divide(2,4)).toBe(0.50);
    })
    test("divides two numbers", () => {
      expect(divide(1,3)).toBe(0.33);
    })
  })
})

describe("array manipulation", () => {
  describe("basic properties", () => {
    test("returns an object of properties of the array", () => {
      expect(getBasicProps([1,2,3,4,5])).toEqual({
        average: 3,
        min: 1,
        max: 5,
        length: 5,
      })
    })
  })
})