import {test} from "@playwright/test"

test("Open google and search", ({page})=>
{
    page.goto("https://www.google.com")
    page.getByRole("combobox",{name:'Search'}).fill("French riots")
    page.getByRole("button",{name:'Google Search'}).click()
})