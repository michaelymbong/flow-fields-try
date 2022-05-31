import { getRandomAngle, getRandomColor } from "../utils";

describe("utils", () => {
  describe("getRandomAngle()", () => {
    test("returns a number between and including 0 and 360", () => {
      const angle = getRandomAngle();
      expect(angle).toBeGreaterThanOrEqual(0);
      expect(angle).toBeLessThanOrEqual(360);
    });
  });

  describe("getRandomColor()", () => {
    test("returns a string of length 7", () => {
      const color = getRandomColor();
      expect(color.length).toBe(7);
    });
  });
});
