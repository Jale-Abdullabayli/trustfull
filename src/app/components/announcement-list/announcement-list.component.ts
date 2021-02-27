import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Announce } from 'src/app/models/announce';
import { Category } from 'src/app/models/category';
import { Owner } from 'src/app/models/owner';
import { AnnouncementService } from 'src/app/services/announcement.service';
import { CategoryService } from 'src/app/services/category.service';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-announcement-list',
  templateUrl: './announcement-list.component.html',
  styleUrls: ['./announcement-list.component.scss']
})
export class AnnouncementListComponent implements OnInit {
  categories: Category[];
  announcements: Announce[];
  activeCategoryId: number = 0;
  owners: Owner[];
  activeCategoryId2: number = 0;
  filterLineOpenState: boolean = true;
  total:string;
  currentPage: number = 1;
  constructor(private categoryService: CategoryService,
    private announcementService: AnnouncementService,
    private ownerService: OwnerService,
    private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
this.activeCategoryId=Number(this.route.snapshot.paramMap.get('categoryId'));

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });

    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })

    if (this.activeCategoryId == 0) {
      this.announcementService.getFreeAnnouncements().subscribe(data => {
        this.announcements = data;
      })
    }
    else {
      this.announcementService.getAnnouncementsByCategoryId(this.activeCategoryId + 1).subscribe(data => {
        this.announcements = data;
      })
    }

    this.ownerService.getOwners().subscribe(data => {
      this.owners = data;
    })
  }
  changeCategory(index: number) {
    this.activeCategoryId = index;
    this.activeCategoryId2 = index;
    if (index == 0) {
      this.announcementService.getFreeAnnouncements().subscribe(data => {
        this.announcements = data;
      })
    }
    else {
      this.announcementService.getAnnouncementsByCategoryId(this.activeCategoryId + 1).subscribe(data => {
        this.announcements = data;
      })
    }
  }

  hoverCategory(index: number) {
    this.activeCategoryId = index;
  }

  leaveCategory(index: number) {
    this.activeCategoryId = this.activeCategoryId2;
  }

  pageChanged(event){
    this.currentPage=event;
    window.scrollTo(0, 0)
  }

}
