import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SidenavMenu } from './components/shared/sidebar/sidebar-menu.model';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public url : any;

  public sidenavMenuItems:Array<any>;

  public currencies = ['USD', 'EUR'];
  public currency:any;
  public flags = [
    { name:'English', image: 'assets/images/flags/gb.svg' },
    { name:'German', image: 'assets/images/flags/de.svg' },
    { name:'French', image: 'assets/images/flags/fr.svg' },
    { name:'Russian', image: 'assets/images/flags/ru.svg' },
    { name:'Turkish', image: 'assets/images/flags/tr.svg' }
  ]
  public flag:any;

  title = 'ecommerce-sophia-new';
  scrollElem;

  constructor(private spinner: NgxSpinnerService, public router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
      window.scrollTo(0, 0)
    } );

    this.router.events.subscribe(evt => {
      if (evt instanceof NavigationEnd) {
           document.body.scrollTop = 0; // scroll top to body element
      }
  });
  }


  navItems: SidenavMenu[] = [
    {
      displayName: 'Home',
      iconName: 'recent_actors',
      route: '/home'
    },
    {
      displayName: 'Products',
          iconName: 'feedback',
          route: '/home/products/all'
    },
    {
      displayName: 'Shop',
      iconName: 'movie_filter',
      children: [
        {
          displayName: 'Emergency & Exit Lights & Systems',
          iconName: 'group',
          children: [
            {
              displayName: 'Central Monitoring Systems',
              iconName: 'person',
              route: 'michael-prentice',
            },
            {
              displayName: 'Central Battery Systems',
              iconName: 'person',
              route: 'stephen-fluin',
               },
            {
              displayName: 'LED Exit Lights',
              iconName: 'person',
              route: 'mike-brocchi',
           },
           {
            displayName: 'LED Emergency Light',
            iconName: 'person',
            route: 'mike-brocchi',
         }

          ]
        },
        {
          displayName: 'LED Lighting',
          iconName: 'speaker_notes',
          children: [
            {
              displayName: 'LED Downlights',
              iconName: 'star_rate',
              route: 'material-design'
            },
            {
              displayName: 'LED Panels',
              iconName: 'star_rate',
              route: 'what-up-web'
            },
            {
              displayName: 'LED Strips',
              iconName: 'star_rate',
              route: 'my-ally-cli'
            },
            {
              displayName: 'LED Diodas',
              iconName: 'star_rate',
              route: 'become-angular-tailer'
            }
          ]
        },
        {
          displayName: 'HVAC',
          iconName: 'feedback',
          children: [
            {
              displayName: 'HVAC Valves',
              iconName: 'star_rate',
              route: 'material-design'
            },
            {
              displayName: 'HVAC Valve Actuators',
              iconName: 'star_rate',
              route: 'what-up-web'
            },
            {
              displayName: 'Heating Cables',
              iconName: 'star_rate',
              route: 'my-ally-cli'
            },
            {
              displayName: 'Thermostats',
              iconName: 'star_rate',
              route: 'become-angular-tailer'
            }
          ]
        },
        {
          displayName: 'KNX',
          iconName: 'feedback',
          children: [
            {
              displayName: 'Car & Motorbike',
              iconName: 'star_rate',
              route: 'material-design'
            },
            {
              displayName: 'Shop for Bike',
              iconName: 'star_rate',
              route: 'what-up-web'
            },
            {
              displayName: 'Industrial Supplies',
              iconName: 'star_rate',
              route: 'my-ally-cli'
            },
            {
              displayName: 'Cold stores',
              iconName: 'star_rate',
              route: 'become-angular-tailer'
            }
          ]
        }
      ]
    },
    {
      displayName: 'Blog',
      iconName: 'report_problem',
      children: [
        {
          displayName: 'Blog List',
          iconName: 'group',
          route: '/blog/blog-list'
        },
        {
          displayName: 'Blog Columns',
          iconName: 'speaker_notes',
          route: '/blog/blog-column',
        },
        {
          displayName: 'Blog Details',
          iconName: 'feedback',
          route: '/blog/blog-details'
        }
      ]
    },
    {
      displayName: 'Pages',
      iconName: 'report_problem',
      children: [
        {
          displayName: 'About Us',
          iconName: 'group',
          route: '/pages/about'
        },
        {
          displayName: 'FAQ',
          iconName: 'speaker_notes',
          route: '/pages/faq',
        },
        {
          displayName: 'Contact',
          iconName: 'feedback',
          route: '/pages/contact'
        },
        {
          displayName: 'Wishlist',
          iconName: 'group',
          route: '/pages/wishlist'
        },
        {
          displayName: 'Compare',
          iconName: 'speaker_notes',
          route: '/pages/compare',
        },
        {
          displayName: 'Checkout',
          iconName: 'feedback',
          route: '/pages/checkout'
        },
        {
          displayName: 'Cart',
          iconName: 'group',
          route: '/pages/cart'
        },
        {
          displayName: 'My Account',
          iconName: 'speaker_notes',
          route: '/pages/my-account',
        },
        {
          displayName: '404',
          iconName: 'feedback',
          route: '/pages/error'
        }
      ]
    },
    {
      displayName: 'Contact',
          iconName: 'feedback',
          route: '/pages/contact'
    }
  ];



  ngOnInit() {

    this.currency = this.currencies[0];
    this.flag = this.flags[0];
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);

    this.scrollElem = document.querySelector('#moveTop');
    // this.scrollElem.scrollIntoView();
  }



  public changeCurrency(currency){
    this.currency = currency;
  }
  public changeLang(flag){
    this.flag = flag;
  }

  onActivate(event) {
    const scrollToTop = window.setInterval(() => {
        const pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 20); // how far to scroll on each step
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 16);
}


}
