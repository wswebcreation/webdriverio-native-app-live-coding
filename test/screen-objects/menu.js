class Menu {

    get menuButton(){
        return $('~test-Menu');
    }

    get webview(){
        return $('~test-WEBVIEW');
    }

    waitForShown(){
        return this.webview.waitForDisplayed(15000);
    }

    waitForHidden(){
        return this.webview.waitForDisplayed(15000, true);
    }

    open(){
        this.menuButton.click();
        return this.waitForShown();
    }

    openWebview(){
        return this.webview.click();
    }
}

export default new Menu();
