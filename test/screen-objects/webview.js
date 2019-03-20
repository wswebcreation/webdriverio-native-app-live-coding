import WebView from '../helpers/WebView'

class WebviewScreen extends WebView{

    get input(){
        return $('~test-enter a https url here...');
    }

    get button(){
        return $('~test-GO TO SITE');
    }

    waitForShown(){
        return this.input.waitForDisplayed(15000);
    }

    submitUrl(url){
        this.input.addValue(url);

        return this.button.click();
    }
}

export default new WebviewScreen();
