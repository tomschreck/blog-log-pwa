import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LogCreateModel } from '@app/models/log/log-create-model';
import { NoWhitespaceValidator } from '@app/shared/form-library/validators/no-white-space/no-whitespace.validator';
import { BlogTypeEnum } from '@app/models/blog/blog-type.enum';
import { IImage } from '@app/core/services/image-compressor/image.model';
import { ImageUtilityService } from '@app/core/services/image-compressor/ImageUtilityService';
import { MatChipInputEvent } from '@angular/material';

@Component({
  selector: 'app-log-create-form',
  templateUrl: './log-create-form.component.html',
  styleUrls: [ './log-create-form.component.scss' ]
})
export class LogCreateFormComponent implements OnInit, OnDestroy
{
  dataEntryForm1: FormGroup;
  dataEntryForm2: FormGroup;
  blogTypeEnum = BlogTypeEnum;
  processedImageList: IImage[];
  editorInit: {};

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  @Input() logCreateModel: LogCreateModel;
  @Output('onFormSubmit') formSubmitEventEmitter: EventEmitter<LogCreateModel> = new EventEmitter<LogCreateModel>();
  @Output('onFormCancel') cancelFormEventEmitter: EventEmitter<void> = new EventEmitter();

  constructor
  (
    private formBuilder: FormBuilder
  )
  {
  }

  ngOnInit()
  {
    this.initializeDataEntryForm();

    this.editorInit = {
      theme: 'modern',
      mobile: {
        theme: 'mobile',
        plugins: [ 'autosave', 'lists', 'autolink' ]
      }};
  }

  ngOnDestroy()
  {
  }

  onFormSubmit()
  {
    if (this.dataEntryForm1.valid && this.dataEntryForm2.valid && this.dataEntryForm1.valid)
    {
      if (this.formSubmitEventEmitter.observers.length > 0)
      {
        const logCreateModel: LogCreateModel = new LogCreateModel();
        logCreateModel.Title = this.dataEntryForm1.controls.Title.value;
        logCreateModel.BlogType = this.dataEntryForm1.controls.BlogType.value;
        logCreateModel.ShortDescription = this.dataEntryForm2.controls.ShortDescription.value;
        logCreateModel.LongDescription = this.dataEntryForm2.controls.LongDescription.value;
        logCreateModel.TagList = this.dataEntryForm2.controls.TagList.value;

        if (this.processedImageList && this.processedImageList.length > 0)
        {
          logCreateModel.ImageList = this.processedImageList.map((item: IImage) => item.file);
        }

        this.formSubmitEventEmitter.emit(logCreateModel);
      }
    }
  }

  onCancelForm()
  {
    if (this.cancelFormEventEmitter.observers.length > 0)
    {
      this.cancelFormEventEmitter.emit();
    }
  }

  onImagesSelected(event)
  {
    if (event && event.target && event.target.files)
    {
      // initialize processedImageList
      this.processedImageList = this.processedImageList || [];

      const fileList: File[] = Array.from(event.target.files);
      const imagesOnlyList: File[] = fileList.filter((item: File) => item.type.match(/^image\//) );

      imagesOnlyList.map((item: File) =>
      {
        ImageUtilityService.convertFileToImage(item)
          .subscribe
          (
            (processedItem: IImage) =>
            {
              this.processedImageList.push(processedItem);
            }
          );
      });
    }
  }

  onResetFileSelection()
  {
    this.processedImageList = undefined;
  }

  onRemoveImageClick(item: IImage)
  {
    this.processedImageList = this.processedImageList.filter((thumbnail: IImage) => thumbnail !== item);
  }

  addTagItem(event: MatChipInputEvent): void
  {
    const input = event.input;
    const value = event.value;

    // ADD TAG
    if ((value || '').trim())
    {
      const existingTagList: string[] = this.dataEntryForm2.controls.TagList.value || [];

      existingTagList.push(value);

      this.dataEntryForm2.controls.TagList.patchValue(existingTagList);
    }

    // RESET INPUT VALUE
    if (input)
    {
      input.value = '';
    }
  }

  removeTagItem(tag: string): void
  {
    const existingTagList: string[] = this.dataEntryForm2.controls.TagList.value;
    const index = existingTagList.indexOf(tag);

    if (index >= 0)
    {
      existingTagList.splice(index, 1);
      this.dataEntryForm2.controls.TagList.patchValue(existingTagList);
    }
  }

  private initializeDataEntryForm()
  {
    this.logCreateModel = this.logCreateModel || new LogCreateModel();

    this.dataEntryForm1 = this.formBuilder.group
      ({
        Title: [ this.logCreateModel.Title, Validators.compose([ Validators.required, NoWhitespaceValidator ]) ],
        BlogType: [ this.logCreateModel.BlogType, Validators.compose([ Validators.required ]) ],
      });

    this.dataEntryForm2 = this.formBuilder.group
      ({
        ShortDescription: [ this.logCreateModel.ShortDescription ],
        LongDescription: [ this.logCreateModel.LongDescription ],
        TagList: [ this.logCreateModel.TagList ]
      });
  }
}
