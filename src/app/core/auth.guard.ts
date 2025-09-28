import { inject, Injectable } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

export const authGuard: CanActivateFn = (route, state) => {
    const router = inject(Router);
    const platformId = inject(PLATFORM_ID);

    let isLoggedIn = false;

    if( isPlatformBrowser(platformId) ) {
        isLoggedIn = !!localStorage.getItem('token');
    }

    if (!isLoggedIn) {
        router.navigate(['/login']);
        return false;
    }
    return true;
}