import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../models/user.interface';
import {GithubService} from '../../providers/github.service';

@Component({
    selector: 'app-user-search-page',
    templateUrl: './user-search-page.page.html',
    styleUrls: ['./user-search-page.page.scss'],
})
export class UserSearchPagePage implements OnInit {

    username: string;
    users: User[];

    constructor(private githubService: GithubService,
                private router: Router) {
    }

    ngOnInit() {
    }

    searchUserInformation(): void {
        this.users = [];

        this.githubService.searchUserInformation(this.username)
            .subscribe((data: User[]) => this.users = data);
    }

    getUserInformation(user: User): void {
        this.router.navigateByUrl(`user-search-results/${user.login}`);
    }
}
