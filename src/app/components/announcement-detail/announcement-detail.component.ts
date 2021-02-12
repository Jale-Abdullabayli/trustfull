import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from 'src/app/services/announcement.service';
import { Announce } from 'src/app/models/announce';
import { OwnerService } from 'src/app/services/owner.service';
import { Owner } from 'src/app/models/owner';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-announcement-detail',
  templateUrl: './announcement-detail.component.html',
  styleUrls: ['./announcement-detail.component.scss']
})
export class AnnouncementDetailComponent implements OnInit {

  announceId: number;
  owners:Owner[];
  announcement: Announce;
  similarAnnouncements: Announce[];
  owner: Owner;
  activeRate:number=0;
  activeRate2:number=0;
  aboutOpenState=false;
  requirementOpenState=false;
  videoOpenState=false;
  biographyOpenState=false;
  contactOpenState=false;
  certificateOpenState=false;

  
  constructor(private announcementService: AnnouncementService,
    private ownerService: OwnerService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.announceId = Number(params.get("announcementId"));
      this.announcementService.getAnnouncementsById(this.announceId).subscribe(data => {
        this.announcement = data;
        this.ownerService.getOwnersById(this.announcement.ownerId).subscribe(data => {
          this.owner = data;
        })
        if(this.announcement.categoryId==1){
          this.announcementService.getFreeAnnouncements().subscribe(data => {
            this.similarAnnouncements = data;
            this.similarAnnouncements.forEach((value, index) => {
              if(value.id==this.announceId){
                this.similarAnnouncements.splice(index,1);
              }
            })
          })
        }
        else{
          this.announcementService.getAnnouncementsByCategoryId(this.announcement.categoryId).subscribe(data => {
            this.similarAnnouncements = data;
            this.similarAnnouncements.forEach((value, index) => {
              if(value.id==this.announceId){
                this.similarAnnouncements.splice(index,1);
              }
            })
          })
        }
      })
    })  
    
    this.ownerService.getOwners().subscribe(data => {
      this.owners = data;
    })

  }

  rate(index:number){
    this.activeRate=index;
    this.activeRate2=index;   
  }

  hoverStar(index:number){
    this.activeRate=index;
  }

  leaveStar(index:number){
    this.activeRate=this.activeRate2;
  }



}
