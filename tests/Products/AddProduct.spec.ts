import test, { expect } from "@playwright/test";
import ProductPage from "../../pages/Products/ProductPage";
import { navigationUrl } from "../../config-data";
import { ProductsNames } from "../../helpers/products-enum";


test.beforeEach(async({page}) => {
    await page.goto(navigationUrl.productPageUrl);
});


test("Add single product to cart", async({page}) => {
    const productObj = new ProductPage(page);
    await productObj.addProductToCart(ProductsNames.FirstProduct);

    await expect(productObj.getProductButtonLocator(ProductsNames.FirstProduct), "Verify added cart product have Remove button should be visible").toHaveText("Remove");
    await expect(productObj.getProductButtonLocator(ProductsNames.SecondProduct), "Verify other product have Add to cart button should be visible").toHaveText("Add to cart");
    
    const actualProductCount = await productObj.getCartText();
    expect(actualProductCount, "Verify added product count should be 1").toEqual("1");
});

test("Add multiple products to cart", async({page}) => {
    const productObj = new ProductPage(page);
    await productObj.addProductToCart(ProductsNames.FirstProduct);
    await productObj.addProductToCart(ProductsNames.SecondProduct);
    
    await expect(productObj.getProductButtonLocator(ProductsNames.FirstProduct), "Verify added cart product have Remove button should be visible").toHaveText("Remove");
    await expect(productObj.getProductButtonLocator(ProductsNames.SecondProduct), "Verify other product have Add to cart button should be visible").toHaveText("Remove");

    const actualProductCount = await productObj.getCartText();
    expect(actualProductCount, "Verify added product count should be 2").toEqual("2");
});