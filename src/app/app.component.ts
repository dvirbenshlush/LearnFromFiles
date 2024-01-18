import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UploadFilesComponent } from "./upload-files/upload-files.component";
import { ChatComponent } from "./chat/chat.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, UploadFilesComponent, ChatComponent]
})
export class AppComponent {
  title = 'LearnFromFiles';
}
