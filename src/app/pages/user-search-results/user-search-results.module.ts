import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {ComponentsModule} from '../../components/components.module';
import {UserSearchResultsPage} from './user-search-results.page';

const routes: Routes = [
    {
        path: '',
        component: UserSearchResultsPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        // ComponentsModule
    ],
    declarations: [UserSearchResultsPage]
})
export class UserSearchResultsPageModule {
}
