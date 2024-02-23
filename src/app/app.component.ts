import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UploadFilesComponent } from "./upload-files/upload-files.component";
import { ChatComponent } from "./chat/chat.component";
import {MatTabsModule} from '@angular/material/tabs';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, UploadFilesComponent, ChatComponent, MatTabsModule]
})
export class AppComponent {
  title = 'LearnFromFiles';
}
