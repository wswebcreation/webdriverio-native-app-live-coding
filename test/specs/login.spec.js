import { getTextOfElement } from '../helpers/utils'
import LoginScreen  from '../screen-objects/login'
import { LOGIN_USERS } from '../helpers/e2eConstants'

describe('Login', () => {
    beforeEach(()=> browser.reset());

    it('should be able to login with a standard user', () => {
        expect(LoginScreen.waitForShown()).toEqual(true);
        LoginScreen.signIn(LOGIN_USERS.STANDARD)
        expect($('~test-PRODUCTS').waitForDisplayed(15000)).toEqual(true);
        console.log('text = ', $$('~test-Item')[0].getText())
    });

    it('should not be able to login with a locked user', () => {
        expect(LoginScreen.waitForShown()).toEqual(true);
        expect(LoginScreen.ErrorMessageContainer.isDisplayed()).toEqual(false)
        LoginScreen.signIn(LOGIN_USERS.LOCKED);
        expect(LoginScreen.waitForErrorMessageShown()).toEqual(true);
        expect(getTextOfElement(LoginScreen.ErrorMessageContainer)).toContain('Sorry, this user has been locked out')
    });

    xit('should show an error when no username is provided', () => {
    });

    xit('should show an error when no password is provided', () => {
    });

    xit('should show an error when no match is found', () => {
    });
})
