class LoginScreen {

    get LoginScreen(){
        return $('~test-Login');
    }

    get Username(){
        return $('~test-Username');
    }

    get Password(){
        return $('~test-Password');
    }

    get LoginButton(){
        return $('~test-LOGIN');
    }

    get ErrorMessageContainer(){
        return $('~test-Error message');
    }

    waitForShown(){
        return this.LoginScreen.waitForDisplayed(15000);
    }

    signIn(data){
        const {username, password} = data;

        this.Username.addValue(username);
        this.Password.addValue(password);
        this.LoginButton.click();
    }

    waitForErrorMessageShown(){
        return this.ErrorMessageContainer.waitForDisplayed(15000);
    }
}

export default new LoginScreen();
