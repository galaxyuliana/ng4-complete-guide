import { Component } from '@angular/core'

// Using decorator to tell
// This is not only a class
// decorator uses @
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

// export class to use it from outside
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}
// component is a TypeScript class
