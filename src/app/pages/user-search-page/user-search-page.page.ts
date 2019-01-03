import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-user-search-page',
    templateUrl: './user-search-page.page.html',
    styleUrls: ['./user-search-page.page.scss'],
})
export class UserSearchPagePage implements OnInit {

    username: string;

    constructor(public router: Router) {
    }

    ngOnInit() {
    }

    getUserInformation(): void {
        this.router.navigateByUrl(`user-search-results/${this.username}`);
    }
}
