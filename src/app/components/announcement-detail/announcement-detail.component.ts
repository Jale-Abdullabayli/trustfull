import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from 'src/app/services/announcement.service';
import { Announce } from 'src/app/models/announce';
import { OwnerService } from 'src/app/services/owner.service';
import { Owner } from 'src/app/models/owner';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-announcement-detail',
  templateUrl: './announcement-detail.component.html',
  styleUrls: ['./announcement-detail.component.scss']
})
export class AnnouncementDetailComponent implements OnInit {

  announceId: number;
  owners: Owner[];
  announcement: Announce;
  similarAnnouncements: Announce[];
  owner: Owner;
  activeRate: number = 0;
  activeRate2: number = 0;
  aboutOpenState = false;
  requirementOpenState = false;
  videoOpenState = false;
  biographyOpenState = false;
  contactOpenState = false;
  certificateOpenState = false;
  diplomaOpenState = false;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  certificateImages: Array<object> = [{
    image: 'https://binaries.templates.cdn.office.net/support/templates/en-us/lt04027254_quantized.png',
    thumbImage: 'https://binaries.templates.cdn.office.net/support/templates/en-us/lt04027254_quantized.png'
  }, {
    image: 'https://binaries.templates.cdn.office.net/support/templates/en-us/lt04027254_quantized.png',
    thumbImage: 'https://binaries.templates.cdn.office.net/support/templates/en-us/lt04027254_quantized.png'
  }, {
    image: 'https://binaries.templates.cdn.office.net/support/templates/en-us/lt04027254_quantized.png',
    thumbImage: 'https://binaries.templates.cdn.office.net/support/templates/en-us/lt04027254_quantized.png'
  }, {
    image: 'https://binaries.templates.cdn.office.net/support/templates/en-us/lt04027254_quantized.png',
    thumbImage: 'https://binaries.templates.cdn.office.net/support/templates/en-us/lt04027254_quantized.png'
  }, {
    image: 'https://binaries.templates.cdn.office.net/support/templates/en-us/lt04027254_quantized.png',
    thumbImage: 'https://binaries.templates.cdn.office.net/support/templates/en-us/lt04027254_quantized.png'
  },
  ];

  diplomaImages: Array<object> = [{
    image: 'https://i.pinimg.com/564x/77/0a/34/770a343ad3c24d6b9f7ca8d56639471e.jpg',
    thumbImage: 'https://i.pinimg.com/564x/77/0a/34/770a343ad3c24d6b9f7ca8d56639471e.jpg'
  }, {
    image: 'https://i.pinimg.com/564x/77/0a/34/770a343ad3c24d6b9f7ca8d56639471e.jpg',
    thumbImage: 'https://i.pinimg.com/564x/77/0a/34/770a343ad3c24d6b9f7ca8d56639471e.jpg'
  }, {
    image: 'https://i.pinimg.com/564x/77/0a/34/770a343ad3c24d6b9f7ca8d56639471e.jpg',
    thumbImage: 'https://i.pinimg.com/564x/77/0a/34/770a343ad3c24d6b9f7ca8d56639471e.jpg'
  }, {
    image: 'https://i.pinimg.com/564x/77/0a/34/770a343ad3c24d6b9f7ca8d56639471e.jpg',
    thumbImage: 'https://i.pinimg.com/564x/77/0a/34/770a343ad3c24d6b9f7ca8d56639471e.jpg'
  }, {
    image: 'https://i.pinimg.com/564x/77/0a/34/770a343ad3c24d6b9f7ca8d56639471e.jpg',
    thumbImage: 'https://i.pinimg.com/564x/77/0a/34/770a343ad3c24d6b9f7ca8d56639471e.jpg'
  },
  ];

  videos: Array<object> = [{
    video: 'https://www.youtube.com/embed/tgbNymZ7vqY'
},
{
  video: 'https://www.youtube.com/embed/tgbNymZ7vqY',
    posterImage: 'https://www.levistrauss.com/wp-content/uploads/2020/05/Black_Box.png'

},
{
  video: 'https://www.youtube.com/embed/tgbNymZ7vqY',
  },
  {
    video: 'https://www.youtube.com/embed/tgbNymZ7vqY',
      posterImage: 'https://www.levistrauss.com/wp-content/uploads/2020/05/Black_Box.png'
    },
    {
      video: 'https://www.youtube.com/embed/tgbNymZ7vqY',
        posterImage: 'https://www.levistrauss.com/wp-content/uploads/2020/05/Black_Box.png'
      }
];

  constructor(private announcementService: AnnouncementService,
    private ownerService: OwnerService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });

    this.route.paramMap.subscribe(params => {
      this.announceId = Number(params.get("announcementId"));
      this.announcementService.getAnnouncementsById(this.announceId).subscribe(data => {
        this.announcement = data;
        this.ownerService.getOwnersById(this.announcement.ownerId).subscribe(data => {
          this.owner = data;
        })
        if (this.announcement.categoryId == 1) {
          this.announcementService.getFreeAnnouncements().subscribe(data => {
            this.similarAnnouncements = data;
            this.similarAnnouncements.forEach((value, index) => {
              if (value.id == this.announceId) {
                this.similarAnnouncements.splice(index, 1);
              }
            })
          })
        }
        else {
          this.announcementService.getAnnouncementsByCategoryId(this.announcement.categoryId).subscribe(data => {
            this.similarAnnouncements = data;
            this.similarAnnouncements.forEach((value, index) => {
              if (value.id == this.announceId) {
                this.similarAnnouncements.splice(index, 1);
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

  rate(index: number) {
    this.activeRate = index;
    this.activeRate2 = index;
  }

  hoverStar(index: number) {
    this.activeRate = index;
  }

  leaveStar(index: number) {
    this.activeRate = this.activeRate2;
  }



}
