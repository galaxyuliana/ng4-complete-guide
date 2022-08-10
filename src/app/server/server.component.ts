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

    getServerStatus() {
        return this.serverStatus;
    }
}
// component is a TypeScript class
