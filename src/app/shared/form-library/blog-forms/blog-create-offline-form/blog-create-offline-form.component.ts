import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NoWhitespaceValidator } from '@app/shared/form-library/validators/no-white-space/no-whitespace.validator';
import { MatChipInputEvent } from '@angular/material';

import { BlogTypeEnum } from '@app/models/blog/blog-type.enum';
import { BlogCreateModel } from '@app/models/blog/blog-create.model';

import { IImage } from '@app/core/services/image-compressor/image.model';
import { ImageUtilityService } from '@app/core/services/image-compressor/ImageUtilityService';
import { ScrollService } from '@app/core/services/scroll/scroll.service';

@Component({
  selector: 'app-blog-create-offline-form',
  templateUrl: './blog-create-offline-form.component.html',
  styleUrls: [ './blog-create-offline-form.component.scss' ]
})
export class BlogCreateOfflineFormComponent implements OnInit, OnDestroy
{
  dataEntryForm1: FormGroup;
  dataEntryForm2: FormGroup;
  blogTypeEnum = BlogTypeEnum;
  processedImageList: IImage[];
  targetInput = 'input0';

  readonly separatorKeysCodes: number[] = [ ENTER, COMMA ];

  @Input() blogCreateModel: BlogCreateModel;
  @Output('onFormSubmit') formSubmitEventEmitter: EventEmitter<BlogCreateModel> = new EventEmitter<BlogCreateModel>();
  @Output('onFormCancel') cancelFormEventEmitter: EventEmitter<void> = new EventEmitter();

  constructor
  (
    private formBuilder: FormBuilder,
    private scrollService: ScrollService
  )
  {
  }

  ngOnInit()
  {
    this.initializeDataEntryForm();
  }

  ngOnDestroy()
  {
  }

  onFormSubmit()
  {
    if (this.dataEntryForm1.valid && this.dataEntryForm2.valid)
    {
      if (this.formSubmitEventEmitter.observers.length > 0)
      {
        this.blogCreateModel.Title = this.dataEntryForm1.controls.Title.value;
        this.blogCreateModel.BlogType = this.dataEntryForm1.controls.BlogType.value;
        this.blogCreateModel.ShortDescription = this.dataEntryForm2.controls.ShortDescription.value;
        this.blogCreateModel.LongDescription = this.dataEntryForm2.controls.LongDescription.value;
        this.blogCreateModel.TagList = this.dataEntryForm2.controls.TagList.value;

        if (this.processedImageList && this.processedImageList.length > 0)
        {
          this.blogCreateModel.ImageList = this.processedImageList.map((item: IImage) => item.file);
        }

        // console.log('BLOG CREATE MODEL:', this.blogCreateModel);

        this.formSubmitEventEmitter.emit(this.blogCreateModel);
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
      const imagesOnlyList: File[] = fileList.filter((item: File) => item.type.match(/^image\//));

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

  onChange(event: any)
  {
    const index = String(event.selectedIndex);
    this.targetInput = `input${index}`;
    this.setFocus();
  }

  resetForm1()
  {
    this.dataEntryForm1.reset();
    this.dataEntryForm1.markAsPristine();
    this.dataEntryForm1.markAsUntouched();
    this.targetInput = `input0`;
    this.setFocus();
  }

  resetForm2()
  {
    this.dataEntryForm2.reset();
    this.dataEntryForm2.markAsPristine();
    this.dataEntryForm2.markAsUntouched();
    this.targetInput = `input1`;
    this.setFocus();
  }


  private initializeDataEntryForm()
  {
    this.blogCreateModel = this.blogCreateModel || new BlogCreateModel();

    this.dataEntryForm1 = this.formBuilder.group
      ({
        Title: [ this.blogCreateModel.Title, Validators.compose([ Validators.required, NoWhitespaceValidator ]) ],
        BlogType: [ this.blogCreateModel.BlogType, Validators.compose([ Validators.required ]) ],
      });

    this.dataEntryForm2 = this.formBuilder.group
      ({
        ShortDescription: [ this.blogCreateModel.ShortDescription ],
        LongDescription: [ this.blogCreateModel.LongDescription ],
        TagList: [ this.blogCreateModel.TagList ]
      });
  }

  private setFocus()
  {
    const targetElem = document.getElementById(this.targetInput);

    this.scrollService.scrollToTop();

    setTimeout(function waitTargetElem()
    {
      if (document.body.contains(targetElem))
      {
        targetElem.focus();
      }
      else
      {
        setTimeout(waitTargetElem, 100);
      }
    }, 100);
  }
}
