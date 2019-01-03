import {Component, OnInit} from '@angular/core';
import {GithubService} from '../../providers/github.service';
import {User} from '../../models/user.interface';
import {Repository} from '../../models/repository.interface';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-user-search-results',
    templateUrl: './user-search-results.page.html',
    styleUrls: ['./user-search-results.page.scss'],
})
export class UserSearchResultsPage implements OnInit {

    username: string;
    user: User;
    repositories: Repository[];

    constructor(private githubService: GithubService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.username = this.route.snapshot.paramMap.get('id');

        if (this.username){
            this.getUserInformation();
        }
    }

    getUserInformation(): void {
        this.githubService.getUserInformation(this.username)
            .subscribe((data: User) => this.user = data);

        this.githubService.getRepositoryInformation(this.username)
            .subscribe((data: Repository[]) => this.repositories = data);
    }
}
