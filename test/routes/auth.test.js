const { expect } = require("chai");
const supertest = require("supertest");
const app = require("../../app");

const request = supertest(app);

describe("authenticate the user", () => {
  it("demo app", () => {
    expect(1).to.equal(1);
  });
});
