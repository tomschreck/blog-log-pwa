
import { isDate, format, isValid } from 'date-fns';
import { FactoryModel } from '@app/models/factory.model';
import { BlogModel } from '@app/models/blog/blog.model';

describe('FactoryModel', () =>
{
  let RAWJSON: {};

  // reset state before each test...
  beforeEach(() =>
  {
    const stringContainingDate: string = `Are you sure you want to change the due date to ${format('2018-07-02T05:00:00Z', 'MM/DD/YYYY')}?`;

    RAWJSON =
    {
      'ActionItemId': 26,
      'ActionItemTypeId': 5,
      'ActionItemTypeName': 'Research',
      'GlobalEntityId': '24889974-4dc5-446c-9141-daeff847ff6d',
      'GlobalEntityName': 'Rick Thompson',
      'GlobalEntityType': 'Contact',
      'AssignedToId': 1,
      'AssignedToName': 'Tom Schreck',
      'Description': 'Lorem ipsum dolor sit amet, vim eu legere volutpat interpretaris. Forensibus comprehensam est id, cu nulla dicant eruditi has. Cu libris interesset signiferumque vel? Qui choro corpora officiis cu! His nemore ancillae ullamcorper ut, eu quo malis dolore platonem, at quo autem everti? Vivendum partiendo conceptam duo in.',
      'CreateDate': '2018-09-27T14:45:56.417Z',
      'DueDate':    '2018-07-02T05:00:00Z',
      'CompletedDate': '05-03-04',
      'CancelledDate': '02/31/2018',
      'CancelledReason': stringContainingDate,
      'Status': 'Active',
      'IsComplete': false,
      'IsCancelled': false,
      'CreatedById': 1,
      'CreatedByName': 'Tom Schreck'
    };
  });

  it('should have createdAt a valid Date value', () =>
  {
    // arrange

    // act
    const actionItemModel: BlogModel = new BlogModel(RAWJSON);

    // assert
    expect(isDate(actionItemModel.createdAt)).toBe(true);
  });

  it('should have updatedAt a valid Date value', () =>
  {
    // arrange

    // act
    const actionItemModel: BlogModel = new BlogModel(RAWJSON);

    // assert
    expect(isDate(actionItemModel.updatedAt)).toBe(true);
  });

  it('should have title not be a date', () =>
  {
    // arrange

    // act
    const actionItemModel: BlogModel = new BlogModel(RAWJSON);

    // assert
    expect(isDate(actionItemModel.title)).toBe(false);
  });

  it('should have 03/15/2018 as a valid date object', () =>
  {
    // arrange
    const date = '03/15/2018';

    // act

    // assert
    expect(FactoryModel.isValidDateObject(date)).toBe(true);
  });

  it('should have "Are you sure you want to change the due date to 03/15/2018?" as an invalid date object via FactoryModel', () =>
  {
    // arrange
    const date = 'Are you sure you want to change the due date to 03/15/2018?';

    // act

    // assert
    expect(FactoryModel.isValidDateObject(date)).toBe(false);
  });

  it('should have "Are you sure you want to change the due date to 03/15/2018?" as a valid date object via JavaScript Date Object', () =>
  {
    // arrange
    const string = 'Are you sure you want to change the due date to 03/15/2018?';

    // act
    const someDate = new Date(string);

    // assert
    expect(isValid(someDate)).toBe(true);
  });
});
