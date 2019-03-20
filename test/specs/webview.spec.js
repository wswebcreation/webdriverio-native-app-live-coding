import Menu from '../screen-objects/menu'
import WebviewScreen from '../screen-objects/webview'
import LoginScreen from '../screen-objects/login'
import { LOGIN_USERS } from '../helpers/e2eConstants'
import ItemList from '../screen-objects/item-list'
import { CONTEXT_REF } from '../helpers/WebView'

describe('webview', () => {
    it('should be able to open a website in the webview', () => {
        LoginScreen.waitForShown();
        LoginScreen.signIn(LOGIN_USERS.STANDARD);
        ItemList.waitForShown();

        Menu.open();
        Menu.openWebview();

        WebviewScreen.waitForShown();
        WebviewScreen.submitUrl('https://www.saucelabs.com');

        WebviewScreen.waitForWebsiteLoaded();
        WebviewScreen.switchToContext(CONTEXT_REF.WEBVIEW);

        const cookieButton = '.cc-btn.cc-dismiss'
        expect($(cookieButton).waitForDisplayed(15000)).toEqual(true);
        $(cookieButton).click();
        expect($(cookieButton).waitForDisplayed(15000, true)).toEqual(true);
    });
});
