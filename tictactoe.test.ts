import { Builder, Capabilities, By } from "selenium-webdriver"
import { convertToObject } from "typescript"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    await driver.sleep(3000)
});

describe('Exploiting bugs with cells. (Game 1)', ()=>{
    test('Clicking the top left cell will put an X', async()=>{
        let cell0 = await driver.findElement(By.id('cell-0'))
        let cell1 = await driver.findElement(By.id('cell-1'))
        await cell0.click()
    
        await driver.sleep(5000)
    })
    test('Clicking the top right cell should put an X', async()=>{
        let cell2 = await driver.findElement(By.id('cell-2'))
        await cell2.click()
        // await expect(cell1).toBe('O')
        await driver.sleep(3000)
    })
    test('Clicking the middle cell will put an X', async()=>{
        let cell4 = await driver.findElement(By.id('cell-4'))
        await cell4.click()
        await driver.sleep(3000)
    })
    // test('Clicking the top left cell will put an X', ()=>{

    // })
    // test('Clicking the top left cell will put an X', ()=>{

    // })
    // test('Clicking the top left cell will put an X', ()=>{

    // })
    


    // test('Does winner message show correct winner', async()=>{
    //     let lostMsg = await (await driver).findElement(By.xpath('/html/body/h1'))
    //     await driver.sleep(10000)
    // })
})

