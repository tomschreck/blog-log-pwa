import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BREAKPOINT } from '@angular/flex-layout';

/*
  isSmall: boolean = false;
  isMedium: boolean = false;
  isMediumAndUp: boolean = false;
  isLarge: boolean = false;
  isExtraLarge: boolean = false;
  isExtraLargeAndUp: boolean = false;
  isLandscape: boolean = false;
  isPortrait: boolean = false;
  isRetina: boolean = false;
  isMobile: boolean = false;
  isDesktop: boolean = false;
  isStandalone: boolean = false;
*/

// isSmall
const BREAKPOINT_SMALL =
  [ {
    alias: 'sm',
    suffix: 'Sm',
    mediaQuery: 'only screen and (min-width : 0) and (max-width: 37.46875rem)',
    overlapping: false
  } ];
// isMedium
const BREAKPOINT_MEDIUM =
  [ {
    alias: 'md',
    suffix: 'Md',
    mediaQuery: 'only screen and (min-width : 37.5rem) and (max-width : 63.96875rem)',
    overlapping: false
  } ];
// isMediumAndUp
const BREAKPOINT_MEDIUM_UP =
  [ {
    alias: 'md-up',
    suffix: 'MdUp',
    mediaQuery: 'only screen and (min-width : 37.5rem)',
    overlapping: false
  } ];
// isLarge
const BREAKPOINT_LARGE =
  [ {
    alias: 'lg',
    suffix: 'Lg',
    mediaQuery: 'only screen and (min-width: 64rem) and (max-width : 74.9375rem)',
    overlapping: false
  } ];
// isExtraLarge
const BREAKPOINT_EXTRA_LARGE =
  [ {
    alias: 'xl',
    suffix: 'Xl',
    mediaQuery: 'only screen and (min-width: 75rem) and (max-width : 112.4375rem)',
    overlapping: false
  } ];
// isExtraLargeAndUp
const BREAKPOINT_EXTRA_LARGE_UP =
  [ {
    alias: 'xl-up',
    suffix: 'XlUp',
    mediaQuery: 'only screen and (min-width: 112.5rem)',
    overlapping: false
  } ];
// isLandscape
const BREAKPOINT_LANDSCAPE =
  [ {
    alias: 'landscape',
    suffix: 'landscape',
    mediaQuery: '(orientation: landscape)',
    overlapping: false
  } ];
// isPortrait
const BREAKPOINT_PORTRAIT =
  [ {
    alias: 'portrait',
    suffix: 'portrait',
    mediaQuery: '(orientation: portrait)',
    overlapping: false
  } ];
// isRetina2
const BREAKPOINT_RETINA2 =
  [ {
    alias: 'retina2',
    suffix: 'retina2',
    mediaQuery: '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)',
    overlapping: false
  } ];
// isRetina3
const BREAKPOINT_RETINA3 =
  [ {
    alias: 'retina3',
    suffix: 'retina3',
    mediaQuery: '(-webkit-min-device-pixel-ratio: 3), (min-resolution: 192dpi)',
    overlapping: false
  } ];
// isStandalone
const BREAKPOINT_STANDALONE =
  [ {
    alias: 'standalone',
    suffix: 'standalone',
    mediaQuery: '(display-mode: standalone)',
    overlapping: false
  } ];

@NgModule({
  imports:
    [
      CommonModule
    ],
  declarations:
    [
    ]
})
export class BreakpointModule
{
  static forRoot(): ModuleWithProviders
  {
    return {
      ngModule: BreakpointModule,
      providers:
        [
          {
            provide: BREAKPOINT,
            useValue: BREAKPOINT_SMALL,
            multi: true
          },
          {
            provide: BREAKPOINT,
            useValue: BREAKPOINT_MEDIUM,
            multi: true
          },
          {
            provide: BREAKPOINT,
            useValue: BREAKPOINT_MEDIUM_UP,
            multi: true
          },
          {
            provide: BREAKPOINT,
            useValue: BREAKPOINT_LARGE,
            multi: true
          },
          {
            provide: BREAKPOINT,
            useValue: BREAKPOINT_EXTRA_LARGE,
            multi: true
          },
          {
            provide: BREAKPOINT,
            useValue: BREAKPOINT_EXTRA_LARGE_UP,
            multi: true
          },
          {
            provide: BREAKPOINT,
            useValue: BREAKPOINT_LANDSCAPE,
            multi: true
          },
          {
            provide: BREAKPOINT,
            useValue: BREAKPOINT_PORTRAIT,
            multi: true
          },
          {
            provide: BREAKPOINT,
            useValue: BREAKPOINT_RETINA2,
            multi: true
          },
          {
            provide: BREAKPOINT,
            useValue: BREAKPOINT_RETINA3,
            multi: true
          },
          {
            provide: BREAKPOINT,
            useValue: BREAKPOINT_STANDALONE,
            multi: true
          }
        ]
    };
  }
}
