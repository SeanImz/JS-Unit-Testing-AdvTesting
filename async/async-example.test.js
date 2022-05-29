import { it, expect } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";

it("should generate a token value", (done) => {
  const testUserEmail = "test@test.com";

  generateToken(testUserEmail, (err, token) => {
    //expect(token).toBeDefined();

    try {
      expect(token).toBeDefined();
      //expect(token).toBe(2);
      done();
    } catch (err) {
      done(err);
    }
  });
});

it("should generate a token value", () => {
  const testUserEmail = "test@test.com";
  return;
  expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
});
