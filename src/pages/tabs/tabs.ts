import {Component} from "@angular/core";
import {FavoritesPage} from "../favorites/favorites";
import {QuotesPage} from "../quotes/quotes";
/**
 * Created by konrad on 20.05.2017.
 */

@Component({
  selector: "tabs-page",
  template: `
    <ion-tabs selectedIndex="0"> <!-- selectIndex ustawia defaultowa zaznaczona pages. -->
      <ion-tab [root]="favouritesPage" tabTitle="Favourites" tabIcon="star"></ion-tab>
      <ion-tab [root]="quotesPage" tabTitle="Quotes" tabIcon="book"></ion-tab>
    </ion-tabs> 
  `
})
export class TabsPage {
  private favouritesPage = FavoritesPage;
  private quotesPage = QuotesPage;
}
