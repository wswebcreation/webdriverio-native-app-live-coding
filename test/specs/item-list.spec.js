import LoginScreen  from '../screen-objects/login'
import ItemList  from '../screen-objects/item-list'
import { LOGIN_USERS } from '../helpers/e2eConstants'

describe('item list', () => {
    it('should be able to select the Sauce Labs Onesie', () => {
        LoginScreen.waitForShown();
        LoginScreen.signIn(LOGIN_USERS.STANDARD);
        ItemList.waitForShown();

        // Find the element that contains the text 'Sauce Labs Onesie' and add it to the cart
        ItemList.addSwagItem('Sauce Labs Onesie');

        browser.pause(5000);

        ItemList.removeSwagItem('Sauce Labs Onesie');

        browser.pause(5000);

    })
})
