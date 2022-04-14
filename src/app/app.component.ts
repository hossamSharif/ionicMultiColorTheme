import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  selectedIdx : any;
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {
       // Use matchMedia to check the user preference
       const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

       this.toggleDarkTheme(prefersDark.matches);
   
       // Listen for changes to the prefers-color-scheme media query
       prefersDark.addListener((mediaQuery) => this.toggleDarkTheme(mediaQuery.matches));
   
       // Add or remove the "dark" class based on if the media query matches
  }



  filter(indx){
    console.log(indx) 
    this.selectedIdx = indx 
    if (indx == 'black') { 
      document.body.setAttribute('data-theme', 'dark');
    } else if (indx == 'light') { 
      document.body.setAttribute('data-theme', 'light');
    } else if (indx == 'gray') { 
      document.body.setAttribute('data-theme', 'gray');
    }else if (indx == 'yallow') { 
      document.body.setAttribute('data-theme', 'yallow');
    }
  }



  toggleDarkTheme(shouldAdd) {
    document.body.classList.toggle('dark', shouldAdd);
  }

  
  onClick(event){
    let systemDark = window.matchMedia("(prefers-color-scheme: dark)");
    systemDark.addListener(this.colorTest);
    if(event.detail.checked){
      document.body.setAttribute('data-theme', 'dark');
    }
    else{
      document.body.setAttribute('data-theme', 'light');
    }
  }

  checkhange(ev){
    console.log(ev)
    console.log(ev.target.value)
    document.body.setAttribute('data-theme', 'gray');
  }
  
   colorTest(systemInitiatedDark) {
    if (systemInitiatedDark.matches) {
      document.body.setAttribute('data-theme', 'dark');		
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
  }
}
