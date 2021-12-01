import * as leanClient from 'lean-client-js-node';
import { ProcessTransport } from 'lean-client-js-node';

export class Server extends leanClient.Server {
    transport: leanClient.ProcessTransport;
    executablePath: string;
    workingDirectory: string;
    options: Array<string>;
    messages: Array<leanClient.Message>
    
    constructor(){
        super(null);
    }

    connect(): void {
        try{
            this.options.push('-M');
            this.options.push('4096');
            this.options.push('-T');
            this.options.push('1000000');
            this.transport = new ProcessTransport(
                this.executablePath
               ,this.workingDirectory
               ,this.options
            );
            this.transport.connect();
            super.connect();
        }
        catch(e){
            super.restart();
        }
    }
}