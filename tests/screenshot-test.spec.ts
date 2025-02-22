import { test } from "@playwright/test";

test("Login test", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.getByRole("textbox", { name: "Username" }).fill("Admin");

  await page.getByRole("textbox", { name: "Password" }).fill("admin");

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
