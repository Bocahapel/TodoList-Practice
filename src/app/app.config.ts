import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    // 1. Required for PrimeNG animations (overlays, ripples, etc.)
    provideAnimationsAsync(),
    // 2. PrimeNG Configuration
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          cssLayer: {
            name: 'primeng', // This matches the @layer primeng above
            order: 'primeng, tailwind-utilities', // This enforces the sequence
          },
        },
      },
    }),
  ],
};
