import { TestBed, inject } from '@angular/core/testing';
import { Pastebin, Languages } from './pastebin';
import { PastebinService } from './pastebin.service';
import { AppTestingModule } from './app-testing-module';
import { HttpClientModule } from '@angular/common/http';

let testService: PastebinService;
let mockPaste: Pastebin;
let mockPaste2: Pastebin;
let responsePropertyNames;
let expectedPropertyNames;

describe('PastebinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppTestingModule],
    });

    testService = TestBed.get(PastebinService);
    mockPaste = {
      id: 999,
      title: 'Hello world',
      language: Languages[2],
      paste: 'console.log(\'Hello world\');'
    };
    mockPaste2 = {
      id: 1,
      title: 'A new title',
      language: Languages[2],
      paste: 'console.log(\'Hello world\');'
    };
  });

  it('#getPastebin should return an array with Pastebin objects', async () => {

    testService.getPastebin().subscribe(value => {
      // Checking the property names of the returned object and the mockPaste object
      responsePropertyNames = Object.getOwnPropertyNames(value[0]);
      expectedPropertyNames = Object.getOwnPropertyNames(mockPaste);

      expect(responsePropertyNames).toEqual(expectedPropertyNames);
    });
  });

  it('#addPaste should return async paste', async () => {
       testService.addPaste(mockPaste).subscribe(value => {
          expect(value).toEqual(mockPaste);
       });
    });

  it('#updatePaste should update', async () => {
     // Update existing paste with id 1
    testService.updatePaste(mockPaste2).subscribe(value => {
      expect(value).toEqual(mockPaste2);
    });
  });

  it('#deletePaste should return null', async () => {
    testService.deletePaste(mockPaste).subscribe(value => {
        expect(value).toEqual(null);
    });
  });

});
