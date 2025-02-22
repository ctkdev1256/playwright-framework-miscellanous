import { test } from "@playwright/test";

// test.skip("Skipped Test", async () => {
//   console.log("Demo skipped test");
// });

// test.skip("Skipped Webkit test", async ({ browserName }) => {
//   test.skip(browserName === "webkit", "Feature will not be implemented");
//   console.log("Skipped this condition");
// });

// test("Skipped Webkit", async ({ page, browserName }) => {
//   test.skip(browserName === "webkit", "Feature will not be implemented");
//   console.log("Skipped test condition");
// });

// test("Failed Test", async () => {
//   test.fail();
//   console.log("Failed test");
// });

// test.skip("Failed on Webkit browser", async ({ page, browserName }) => {
//   test.fail(browserName === "webkit", "Feature will not be implemented");
//   console.log("Failed with condition test");
// });

// test.fixme("Fix test", async () => {
//   console.log("Demo fixed test");
// });

test("Slow Test", async ({}) => {
  console.log("Demo slow test");
  test.slow();
});

test("Slow Test with Condition", async ({ browserName }) => {
  test.slow(browserName === "webkit", "Feature will not be implemented");
});

test.only("Only Test", async () => {
  console.log("Demo only test");
});
