import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UploadFilesComponent } from "./upload-files/upload-files.component";
import { ChatComponent } from "./pages/chat/chat.component";
import { MatTabsModule } from '@angular/material/tabs';
import { SidebarComponent } from "./pages/layout/sidebar/sidebar.component";
import { HeaderComponent } from "./pages/layout/header/header.component";
import { MatMenuModule } from '@angular/material/menu';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
      CommonModule, 
      RouterOutlet, 
      UploadFilesComponent, 
      ChatComponent, 
      MatTabsModule, 
      MatMenuModule, 
      SidebarComponent, 
      HeaderComponent    
    ]
})
export class AppComponent {
  title = 'LearnFromFiles';
}
