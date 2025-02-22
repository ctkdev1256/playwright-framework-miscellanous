import { test, expect } from "@playwright/test";
import * as orangeData from "./testData/jsonData.json";

test("Login test with credential", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page
    .getByRole("textbox", { name: "Username" })
    .fill(orangeData.validUsername);

  await page
    .getByRole("textbox", { name: "Password" })
    .fill(orangeData.validPassword);

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
