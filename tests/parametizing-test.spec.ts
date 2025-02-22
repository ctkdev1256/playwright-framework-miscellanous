import { test } from "@playwright/test";

const credentials = [
  {
    username: "Admin",
    password: "admin123"
  },
  {
    username: "Admin123",
    password: "admin123"
  }
];

credentials.forEach(data => {
  test(`Login test with credential ${data.username} + ${data.password}`, async ({
    page
  }) => {
    await page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    await page.getByRole("textbox", { name: "Username" }).fill(data.username);

    await page.getByRole("textbox", { name: "Password" }).fill(data.password);

    await page.locator(".oxd-button").click();

    // Ensure successful login by checking for user dropdown
    await page.locator(".oxd-userdropdown-tab").waitFor({ state: "visible" });

    await page.locator(".oxd-userdropdown-tab").click();

    await page
      .locator("//a[normalize-space()='Logout']")
      .waitFor({ state: "visible" });

    await page.locator("//a[normalize-space()='Logout']").click();

    await page.close();
  });
});

// test("Login test", async ({ page }) => {
//   await page.goto(
//     "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
//   );
//   await page.getByRole("textbox", { name: "Username" }).fill("Admin");

//   await page.getByRole("textbox", { name: "Password" }).fill("admin123");

//   await page.locator(".oxd-button").click();

//   // Ensure successful login by checking for user dropdown
//   await page.locator(".oxd-userdropdown-tab").waitFor({ state: "visible" });

//   await page.locator(".oxd-userdropdown-tab").click();

//   await page
//     .locator("//a[normalize-space()='Logout']")
//     .waitFor({ state: "visible" });

//   await page.locator("//a[normalize-space()='Logout']").click();

//   await page.close();
// });

// test("Login test", async ({ page }) => {
//   await page.goto(
//     "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
//   );
//   await page.getByRole("textbox", { name: "Username" }).fill("Admin");

//   await page.getByRole("textbox", { name: "Password" }).fill("admin123");

//   await page.locator(".oxd-button").click();

//   // Ensure successful login by checking for user dropdown
//   await page.locator(".oxd-userdropdown-tab").waitFor({ state: "visible" });

//   await page.locator(".oxd-userdropdown-tab").click();

//   await page
//     .locator("//a[normalize-space()='Logout']")
//     .waitFor({ state: "visible" });

//   await page.locator("//a[normalize-space()='Logout']").click();

//   await page.close();
// });
