// @ts-check

import { test, expect } from '@playwright/test';

test('step 1', async ({ page }) => {
  await page.goto('http://localhost:8070', {
    waitUntil: 'domcontentloaded',
  });
  await expect(page.locator('select')).toBeVisible();
  const firstOption = await page.getByRole('option');
  const firstOptionData = await firstOption.allTextContents();
  await expect(firstOptionData[0]).toEqual('Все');
});

test('step 2', async ({ page }) => {
  await page.goto('http://localhost:8070', {
    waitUntil: 'domcontentloaded',
  });
  const cafesTable = await page.locator('.cafesTable');
  await expect(cafesTable).toBeVisible();
  await expect(cafesTable.locator('select')).toBeVisible();
  const cafesList = await cafesTable.locator('.cardsList');
  await expect(cafesList).toBeVisible();
});

test('step 3', async ({ page }) => {
  await page.goto('http://localhost:8070', {
    waitUntil: 'domcontentloaded',
  });
  const cafesTable = await page.locator('.cafesTable');
  await expect(cafesTable).toBeVisible();
  const cardsList = await cafesTable.locator('.cardsList');
  await expect(cardsList).toBeVisible();
  const cards = await cardsList.locator('li');
  await expect(cards).toHaveCount(6);
  const options = await page.locator('select option').allTextContents();
  await expect(options).toEqual([
    'Все',
    'Московская',
    'Арбат',
    'Александровский сад',
    'Парк Культуры',
    'Театральная',
  ]);
});

test('step 4', async ({ page }) => {
  await page.goto('http://localhost:8070', {
    waitUntil: 'domcontentloaded',
  });

  // Проверяем, что фильтр работает для "Moscow"
  const select = page.locator('select');
  await select.selectOption('Moscow');
  const liCountMoscow = await page.locator('ul').locator('li').count();
  console.log('Количество кафе для Moscow:', liCountMoscow);
  await expect(liCountMoscow).toBe(2);

  // Проверяем, что фильтр работает для "Culture"
  await select.selectOption('Culture');
  const liCountCulture = await page.locator('ul').locator('li').count();
  console.log('Количество кафе для Culture:', liCountCulture);
  await expect(liCountCulture).toBe(0);

  // Проверяем, что фильтр "All" показывает все кафе
  await select.selectOption('All');
  const liCountAll = await page.locator('ul').locator('li').count();
  console.log('Количество кафе для All:', liCountAll);
  await expect(liCountAll).toBe(6);
});
