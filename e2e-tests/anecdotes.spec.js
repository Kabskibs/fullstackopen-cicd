const { test, expect, describe } = require('@playwright/test')

describe('Anecdotes app', () => {
  test('anecdote page renders correctly', async ({ page }) => {
    await page.goto('/')

    let locator = await page.getByText('anecdotes')
    await expect(locator).toBeVisible()
    locator = await page.getByText('filter')
    await expect(locator).toBeVisible()
    locator = await page.getByText('create new')
    await expect(locator).toBeVisible()
    await expect(page.getByText('If there is no data or actions feel broken:')).toBeVisible()
  })
})