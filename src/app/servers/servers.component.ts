import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']

})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  userName = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  toggleParagraphDisplay = false;
  buttons = [];
  increment = 0;

  showSecret = false;
  log = [];


  constructor() {
    setTimeout(() => {
    this.allowNewServer = true;
  }, 2000); //2000 milliseconds is 2 seconds
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onButtonClick() {
    this.toggleParagraphDisplay = true;
    this.increment = this.increment +1;
    this.buttons.push(this.increment);

  }

  getColor() {
    return this.increment > 4 ? 'blue' : 'purple';
  }

  onToggleDisplay() {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date);
  }





}
