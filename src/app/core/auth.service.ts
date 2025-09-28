import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs";

@Injectable({ providedIn: 'root' })

export class AuthService {
    private apiUrl = "http://localhost:8000/api/auth";

    constructor(private http: HttpClient) { }

    login(credentials: { email: string, password: string }) {
        return this.http.post(`${this.apiUrl}/login`, credentials)
            .pipe(tap((response: any) => {
                localStorage.setItem('token', response.token);
            }));
    }

    logout() {
        localStorage.removeItem('token');
    }

    isAuthenticated(): boolean {
        return !!localStorage.getItem('token');
    }

    getToken(): string | null {
        return localStorage.getItem('token');
    }

    register(user: { firstName: string, lastName: string, email: string, password: string }) {
        return this.http.post(`${this.apiUrl}/register`, user);
    }
}