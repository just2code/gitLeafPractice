import {test} from "@playwright/test"

test("Open google and search", ({page})=>
{
    page.goto("https://www.google.com")
})