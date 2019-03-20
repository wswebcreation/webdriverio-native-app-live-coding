import Gestures from '../helpers/Gestures'

class ItemList {

    get SwagScreen(){
        return $('~test-PRODUCTS');
    }

    get SwagItems(){
        return $$('~test-Item');
    }

    waitForShown(){
        return this.SwagScreen.waitForDisplayed(15000);
    }

    swagItem(needle){
        const selector = browser.isIOS ?
            `//*[contains(@value, '${needle}')]//ancestor::*[@name="test-Item"]` :
            `//*[contains(@text, '${needle}')]//ancestor::*[@content-desc="test-Item"]`;

        for(let i = 0; i < 10 ; i++){
            const elm = $(selector);

            if(elm.isDisplayed()){
                return elm;
            }

            Gestures.swipeUp(0.5)
        }
    }

    addSwagItem(needle){
        const swagAddButton = this.swagItem(needle).$('~test-ADD TO CART');

        Gestures.swipeUpToElement(swagAddButton, 2);

        return swagAddButton.click();
    }

    removeSwagItem(needle){
        const swagAddButton = this.swagItem(needle).$('~test-REMOVE');

        Gestures.swipeUpToElement(swagAddButton, 2);

        return swagAddButton.click();
    }
}

export default new ItemList();
