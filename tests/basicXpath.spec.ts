import test from "@playwright/test";

test('Learn basic xpath',async({page})=>{
    await page.goto('https://leaftaps.com/opentaps/control/login')
    //enter username
    await page.locator('//input[@id="username"]').fill('democsr')
    //enter password
    await page.locator('//label[text()="Password"]').fill('crmsfa')
    await page.locator('//input[contains(@class,"decorative")]').click()
    await page.waitForLoadState('domcontentloaded')
    await page.locator("//a[normalize-space()='CRM/SFA']").click()
})
