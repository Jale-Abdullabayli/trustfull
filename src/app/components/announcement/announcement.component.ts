import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Announce } from 'src/app/models/announce';
import { CategoryService } from 'src/app/services/category.service';
import { AnnouncementService } from 'src/app/services/announcement.service';
import { OwnerService } from 'src/app/services/owner.service';
import { Owner } from 'src/app/models/owner';
import {  NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {
  categories: Category[];
  announcements: Announce[];
  activeCategoryId: number = 0;
  owners:Owner[];
  activeCategoryId2:number=0;
  filterLineOpenState:boolean=true;

  constructor(private categoryService: CategoryService,
    private announcementService:AnnouncementService,
    private ownerService:OwnerService,
    private router: Router) { }

  ngOnInit(): void {

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });

    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })

    this.announcementService.getFreeAnnouncements().subscribe(data => {
      this.announcements = data;
    })

    this.ownerService.getOwners().subscribe(data => {
      this.owners = data;
    })
  }
  changeCategory(index:number){
    this.activeCategoryId=index;
    this.activeCategoryId2=index;
    if(index==0){
      this.announcementService.getFreeAnnouncements().subscribe(data => {
        this.announcements = data;
      })
    }
    else{
      this.announcementService.getAnnouncementsByCategoryId(this.activeCategoryId+1).subscribe(data => {
        this.announcements = data;
      })
    }  
  }

  hoverCategory(index:number){
    this.activeCategoryId=index;
  }

  leaveCategory(index:number){
    this.activeCategoryId=this.activeCategoryId2;
  }

}
