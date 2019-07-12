import { Component } from '@angular/core';
import { Tag } from 'cloudee';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';

  tags: Tag[] = [
    { weight: 6, text: 'why', image: 'https://i.pinimg.com/236x/7d/62/f1/7d62f13ef597ed5eedf00c59f4f3370f.jpg' },
    { weight: 6, text: 'not', image: 'https://i.pinimg.com/236x/7d/62/f1/7d62f13ef597ed5eedf00c59f4f3370f.jpg' },
    { weight: 6, text: 'zoidberg', image: 'https://i.pinimg.com/236x/7d/62/f1/7d62f13ef597ed5eedf00c59f4f3370f.jpg' },
    { weight: 6, text: '?', image: 'https://drawninandquartered.files.wordpress.com/2012/02/zoidberg-why.png' }


  ];

  options: TagCanvasOptions = {
    dragControl: true,
    //centreImage:'https://i.pinimg.com/236x/7d/62/f1/7d62f13ef597ed5eedf00c59f4f3370f.jpg',
    clickToFront: 500,
    initial: [.1, 0],
    weight: true,
    imageScale: 0.1,



    imageMode: 'both'
  };

  constructor() {

  }

  tagClicked(tag) {
    console.log(tag);
  }

}
