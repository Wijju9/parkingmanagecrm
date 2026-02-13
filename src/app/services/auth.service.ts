import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  login(email: string, password: string): boolean {
    return email.trim().length > 3 && password.trim().length > 3;
  }
}
