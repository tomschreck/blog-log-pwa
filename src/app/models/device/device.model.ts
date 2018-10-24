import { FactoryModel } from '@app/models/factory.model';

export class DeviceModel
{
  isSmall: boolean = false;
  isMedium: boolean = false;
  isMediumAndUp: boolean = false;
  isLarge: boolean = false;
  isExtraLarge: boolean = false;
  isExtraLargeAndUp: boolean = false;
  isLandscape: boolean = false;
  isPortrait: boolean = false;
  isRetina2: boolean = false;
  isRetina3: boolean = false;
  isMobile: boolean = false;
  isDesktop: boolean = false;
  isStandalone: boolean = false;

  constructor(rawJson?: {})
  {
    if (rawJson)
    {
      FactoryModel.CreateIt<DeviceModel>(this, rawJson);
    }
  }
}
