import { plainToClass } from 'class-transformer';
import { Type } from '@angular/core';
import { ModelFactory } from 'ngx-model';
import { isValid, isDate, parse } from 'date-fns';

export class FactoryModel
{
  static Create(classType: Type<any>, rawJson?: any ): any
  {
    return plainToClass(classType, rawJson);
  }

  static CreateIt<T>(sourceObject: T, rawJson: any): void
  {
    const modelFactory: ModelFactory<T> = new ModelFactory();
    const model = modelFactory.create(rawJson).get();

    // LOOP OVER EACH KEY AND ATTEMPT TO CONVERT INTO A DATE
    Object.keys(model).map((key: string) => model[key] = FactoryModel.tryParseDate(model[key]));

    // sourceObject is the 'this' from the different models
    // assign model property data onto sourceObject
    Object.assign(sourceObject, model);
  }

  static tryParseDate(value: any)
  {
    if (typeof value === 'string')
    {
      const canBeParsedIntoADate = FactoryModel.isValidDateObject(value);

      if (canBeParsedIntoADate)
      {
        return new Date(value);
      }
    }

    return value;
  }

  /*
  NOTE:
  JavaScript Date Object accepts a string value as a date (eg 02/31/2018)

  isValidDateObject only checks to see if string is a valid Date object, not a valid date

  this function should not be used as proper data validation for a date

  AVOIDS SCENARIOS WHERE STRING HAS A DATE IN IT LIKE:  `Are you sure you want to change the due date to 03/15/2018?`
  */
  static isValidDateObject(string)
  {
    const separators = ['\\.', '\\-', '\\/', '\\T', '\\Z'];
    const bits = string.split(new RegExp(separators.join('|'), 'g'));

    // MAKES SURE THE FIRST 3 BITS ARE NUMBERS.  AVOIDS SCENARIOS WHERE STRING HAS A DATE IN IT LIKE:  `Are you sure you want to change the due date to 03/15/2018?`
    if (bits.length >= 3 && Number.isInteger(Number(bits[0])) && Number.isInteger(Number(bits[1])) && Number.isInteger(Number(bits[2])))
    {
      const possibleDateFromParts = `${bits[0]}/${bits[1]}/${bits[2]}`;
      const parsedDate: Date = parse(possibleDateFromParts);
      const isValidDate = isValid(parsedDate);

      // console.log('AGGGAAAAIN', bits, string, parsedDate, isValidDate);

      return isValidDate;
    }

    return false;
  }
}
