/***  Generated file, do not change.  */
import { Page } from 'ionic-angular/navigation/nav-util';
import { MenuComponent } from './menu/menu';
import { loginpage_PhonePortrait } from '../pages/loginpage/PhonePortrait/loginpage';
import { myhomepage_PhonePortrait } from '../pages/myhomepage/PhonePortrait/myhomepage';
export class Screens {
  static declarations: Page[] = [
    MenuComponent,
    loginpage_PhonePortrait,
    myhomepage_PhonePortrait
  ];
  static mapping = {
    'loginpage': {
      PhonePortrait: loginpage_PhonePortrait
    },
    'myhomepage': {
      PhonePortrait: myhomepage_PhonePortrait
    }
  }
}