import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  private outSession: boolean = false;

  constructor() { }

  public setOutSession(outSession: boolean): void{
    this.outSession = outSession;
  }
  
  public getOutSession(): boolean{
    return this.outSession;
  }
}
