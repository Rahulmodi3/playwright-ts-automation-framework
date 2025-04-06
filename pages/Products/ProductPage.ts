import { Locator, Page } from "@playwright/test";
import { step } from "../../utilities/step-decorator";

export default class ProductPage {
    page: Page;
    readonly productsItem: Locator;
    readonly productButton: Locator;
    readonly cartLink: Locator;


    constructor(page: Page){
        this.page = page;
        this.productsItem = this.page.locator(".inventory_item");
        this.productButton = this.page.locator(".btn_inventory");
        this.cartLink = this.page.locator(".shopping_cart_link");

    }

    @step("Add product: {productName} to cart")
    async addProductToCart(productName: string): Promise<void> {
        await this.getProductButtonLocator(productName).click();
    }

    @step("Get product count from cart icon")
    async getCartText(): Promise<string | undefined> {
        const productNumber = await this.cartLink.textContent();
        return productNumber?.trim();
    }

    getProductButtonLocator(productName: string): Locator {
        return this.productsItem.filter({hasText : productName}).locator(this.productButton);
    }


}