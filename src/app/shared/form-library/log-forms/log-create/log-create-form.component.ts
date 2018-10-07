import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LogCreateModel } from '@app/models/log/log-create-model';
import { NoWhitespaceValidator } from '@app/shared/form-library/validators/no-white-space/no-whitespace.validator';
import { BlogTypeEnum } from '@app/models/blog/blog-type.enum';

@Component({
  selector: 'app-log-create-form',
  templateUrl: './log-create-form.component.html',
  styleUrls: [ './log-create-form.component.scss' ]
})
export class LogCreateFormComponent implements OnInit, OnDestroy
{
  dataEntryForm1: FormGroup;
  dataEntryForm2: FormGroup;
  dataEntryForm3: FormGroup;
  blogTypeEnum = BlogTypeEnum;

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
  }

  ngOnDestroy()
  {
  }

  onFormSubmit({ value, valid }: { value: LogCreateModel, valid: boolean })
  {
    if (valid)
    {
      if (this.formSubmitEventEmitter.observers.length > 0)
      {
        this.formSubmitEventEmitter.emit(value);
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

  private initializeDataEntryForm()
  {
    this.logCreateModel = this.logCreateModel || new LogCreateModel();

    this.dataEntryForm1 = this.formBuilder.group
      ({
        WorkingTitle: [ this.logCreateModel.WorkingTitle, Validators.compose([ Validators.required, NoWhitespaceValidator ]) ],
        BlogType: [ this.logCreateModel.BlogType, Validators.compose([ Validators.required ]) ],
      });

    this.dataEntryForm2 = this.formBuilder.group
      ({
        ShortDescription: [ this.logCreateModel.ShortDescription ],
        LongDescription: [ this.logCreateModel.LongDescription ],
      });

    this.dataEntryForm3 = this.formBuilder.group
      ({
        TagList: [ this.logCreateModel.TagList ],
        ImageList: [ this.logCreateModel.ImageList ]
      });
  }
}
