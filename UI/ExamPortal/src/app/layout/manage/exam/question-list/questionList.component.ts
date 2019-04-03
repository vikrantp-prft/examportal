import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Router, ActivatedRoute } from "@angular/router";
import { commonService } from "src/app/common/services/common.service";
import { Http } from "@angular/http";
import swal from "sweetalert2";
import { ToastrService } from "ngx-toastr";
import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  Validators
} from "@angular/forms";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { FileUploader } from "ng2-file-upload";
import { ExcelService } from "src/app/common/services/excel.service";
import { instantiateRendererFactory } from "@angular/platform-browser/animations/src/providers";
// const URL = '';

@Component({
  selector: "question-list",
  templateUrl: "./questionList.html",
  styleUrls: ['./questionList.component.css'],
  providers: [commonService, ExcelService]
})
export class questionListComponent implements OnInit {
  public examID = "";
  public url = "";
  public questionForm: FormGroup;
  public categoryList = [];
  public departmentsUrl = "api/Dropdown/Categories";
  public formTitle: string = "Add";
  public singleSelectFlag: boolean;
  public singleSelectEdit: boolean;
  public exportData = [];
  public multipleSelectFlag: boolean;
  public multipleSelectEdit: boolean;
  public subjectiveFlag: boolean;
  public questionModel: any = {
    id: this.examID,
    filter: "string",
    pageSize: 10,
    pageNumber: 1,
    totleRecords: 0,
    filterBy: "string",
    sortBy: "string",
    isDescending: true
  };
  public i: Number = 0;
  public startrecordno: Number = 1;
  public endrecord: Number = 1;
  public recordno = 0;
  public totalItems = 10;
  public questionList = [];
  public previewQuestionList = [];
  public questionDetail: any;
  public questionListUrl = "api/Questions/listQuestionsByExamId";
  public questionDetailUrl = "api/Questions/GetQuestionById";
  public deleteQuestionUrl = "api/Questions/DeleteQuestion";
  public validdationOptionText = false;
  public validdationOptionIsCorrect = false;
  public displayErrorOption = false;
  public formDataCustom: any = {
    id: null,
    examId: "",
    categoryId: "",
    questionType: null,
    question: "",
    isActive: true,
    options: [],
    isDeleted: false
  };
  public questionDetailModel: any = {
    id: ""
  };

  // for import file
  filedata: string;
  //public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'fileUpload' });

  // Constructor
  constructor(
    private ngxService: NgxUiLoaderService,
    public fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private CommonService: commonService,
    public http: Http,
    private toastr: ToastrService,
    private excelService: ExcelService
  ) {
    this.route.params.subscribe(params1 => {
      this.examID = params1["id"];
    });
    this.questionForm = this.fb.group({
      id: new FormControl(null),
      questionCategory: ["", [Validators.required]],
      questionType: ["", [Validators.required]],
      questionText: [null, [Validators.required, Validators.minLength(10)]],
      examID: new FormControl(this.examID),
      singleSelectOptionsCorrectAns: new FormControl(null),
      obj_multiSelectOptions: this.fb.array([
        this.addSubMultipleSelectOption(null, false, null)
      ]),
      obj_singleSelectOptions: this.fb.array([
        this.addSubSingleSelectOption(null, false, null)
      ])
    });

  }
  addSubMultipleSelectOption(param, flag, optionID) {
    return this.fb.group({
      multipleSelectOptionsID: optionID,
      multipleSelectOptions: param,
      multipleSelectOptionsCorrectAns: flag
    });
  }

  addSubSingleSelectOption(param, flag, optionID) {
    return this.fb.group({
      singleSelectOptionsID: optionID,
      singleSelectOptions: param,
      singleSelectOptionsCorrectAns: flag
    });
  }
  ngOnInit() {
    this.questionModel = {
      id: this.examID,
      pageSize: 10,
      pageNumber: 1
    };
    this.getQuestionsList();
    this.disbleAllFlag();
    this.multipleSelectEdit = false;
    this.singleSelectEdit = false;
    this.fn_bindCategories();
    this.clear_obj_multiSelectOptions();
    this.clear_obj_singleSelectOptions();

    // import question file
    // this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    // this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
    //   console.log('ImageUpload:uploaded:', item, status, response);
    //   alert('File uploaded successfully');
    // };
  }
  fn_bindCategories() {
    this.ngxService.start();
    this.CommonService.fn_Get(this.departmentsUrl).subscribe(
      (data: any) => {
        this.categoryList = data.data;
        this.ngxService.stop();
      },
      err => console.error(err),
      () => { }
    );
  }
  disbleAllFlag() {
    this.singleSelectFlag = false;
    this.multipleSelectFlag = false;
    this.subjectiveFlag = false;
  }
  // Function for  pagination
  setRecordPerPage(event: any): void {
    this.questionModel.pageNumber = 1;
    this.questionModel.pageSize = parseInt(event.target.value);
    this.getQuestionsList();
  }
  pageChanged(event: any): void {
    this.questionModel.pageNumber = parseInt(event.page);
    this.questionModel.pageSize = parseInt(event.itemsPerPage);
    this.getQuestionsList();
  }
  // Searching
  searchRecord(event: any): void {
    if (event.keyCode == 13) {
      this.questionModel.pageNumber = 1;
      this.questionModel.pageSize = 10;
      this.questionModel.filter = this.trimming_fn(event.target.value);
      this.getQuestionsList();
    }
  }
  trimming_fn(x) {
    return x ? x.replace(/^\s+|\s+$/gm, "") : "";
  }
  // Function to get list of Exam
  getQuestionsList() {
    this.ngxService.start();
    this.CommonService.fn_PostWithData(
      this.questionModel,
      this.questionListUrl
    ).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.questionList = rs.data;
        console.log(this.questionList);
        this.getExportArray();
        this.ngxService.stop();
        this.totalItems = rs.totalRecords;
      } else {
      }
    });
  }
  getExportArray() {
    for (const iterator of this.questionList) {
      // const exportModel = ;
      this.exportData.push({
        Category: iterator.category.name,
        Question: iterator.question,
        'Question Type': iterator.questionType
      });
    }
    console.log(this.exportData);
  }
  getPreviewQuestionList() {
    const url = 'api/Questions/ListQuestionsByExamId';
    const questionModel = {
      "id": this.examID,
      "pageSize": 300
    };
    this.fn_getPreviewQuestionLsit(questionModel, url);
  }
  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.exportData, 'sample');
  }
  fn_getPreviewQuestionLsit(modal, url) {
    this.ngxService.start();
    this.CommonService.fn_PostWithData(modal, url).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.previewQuestionList = rs.data;
        this.ngxService.stop();
      }
    });
  }
  loadQuestionForm() {
    this.ngxService.start();
    this.frmReset();
    this.formTitle = "Add";
    this.disbleAllFlag();
    this.multipleSelectEdit = false;
    this.singleSelectEdit = false;
    this.clear_obj_multiSelectOptions();
    this.clear_obj_singleSelectOptions();
    this.ngxService.stop();
  }
  frmReset() {
    this.questionForm.reset();
    this.questionForm.controls.questionCategory.setValue("");
    this.questionForm.controls.questionType.setValue("");

  }
  deleteQuestion(questionID) {
    if (questionID != null) {
      swal({
        title: "Are you sure?",
        text: "You want to delete the Question!",
        buttonsStyling: true,
        confirmButtonClass: "btn btn-success",
        showCancelButton: true,
        cancelButtonClass: "btn btn-danger",
        confirmButtonText: "Yes, delete it!"
      }).then(x => {
        if (x.value == true) {
          this.deleteQuestionConfirm(questionID);
          this.formTitle = "Add";
        }
      });
    }
  }
  deleteQuestionConfirm(questionID) {
    this.questionDetailModel.id = questionID;
    this.CommonService.fn_PostWithData(
      this.questionDetailModel,
      this.deleteQuestionUrl
    ).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.toastr.success("Question Deleted Successfully");
        this.getQuestionsList();
      } else {
        this.toastr.error("Failed to Delete Question");
      }
    });
    this.resetAll();
    this.getQuestionsList();
  }
  editQuestion(questionID) {
    this.resetAll();
    this.ngxService.start();
    this.getQuestionDetails(questionID);
    this.questionForm.controls.id.setValue(questionID);
    this.formTitle = "Edit";
    this.ngxService.stop();
  }
  getQuestionDetails(questionID) {
    this.questionDetailModel.id = questionID;
    this.CommonService.fn_PostWithData(
      this.questionDetailModel,
      this.questionDetailUrl
    ).subscribe((result: any) => {
      const rs = result;
      if (rs.statusCode == 200) {
        this.questionDetail = rs.data;
        this.setEditValues();
      } else {
      }
    });
  }
  setEditValues() {
    this.questionForm.controls.questionCategory.setValue(
      this.questionDetail.categoryId
    );
    var array = {
      0: "SingleSelect",
      1: "multipleSelect",
      2: "subjective"
    };
    this.questionForm.controls.questionType.setValue(
      array[this.questionDetail.questionType]
    );
    this.questionForm.controls.questionText.setValue(
      this.questionDetail.question
    );

    this.questionForm.controls.singleSelectOptionsCorrectAns.setValue(null);
    const control_obj_singleSelectOptions = <FormArray>(
      this.questionForm.controls["obj_singleSelectOptions"]
    );
    const control_obj_multiSelectOptions = <FormArray>(
      this.questionForm.controls["obj_multiSelectOptions"]
    );
    this.questionDetail.options.forEach((item, index) => {
      if (this.questionDetail.questionType == 0) {
        this.singleSelectFlag = true;
        this.singleSelectEdit = true;
        if (item.isCorrect)
          this.questionForm.controls.singleSelectOptionsCorrectAns.setValue(
            index.toString()
          );
        control_obj_singleSelectOptions.push(
          this.addSubSingleSelectOption(
            item.option,
            item.isCorrect,
            item.optionId
          )
        );
      } else if (this.questionDetail.questionType == 1) {
        this.multipleSelectFlag = true;
        this.multipleSelectEdit === true;
        control_obj_multiSelectOptions.push(
          this.addSubMultipleSelectOption(
            item.option,
            item.isCorrect,
            item.optionId
          )
        );
      }

    });
  }
  onSubmit = function (formData) {
    if (this.questionForm.valid) {
      if (formData.value.questionType == "SingleSelect") {
        this.clear_obj_multiSelectOptions();
        this.formDataCustom.questionType = 0;
        var options = [];
        for (let key in formData.value.obj_singleSelectOptions) {
          var isCorrectVal = false;
          if (key === formData.value.singleSelectOptionsCorrectAns)
            isCorrectVal = true;
          options.push({
            optionId:
              formData.value.obj_singleSelectOptions[key][
              "singleSelectOptionsID"
              ],
            option:
              formData.value.obj_singleSelectOptions[key][
              "singleSelectOptions"
              ],
            isCorrect: isCorrectVal
          });
        }
      } else if (formData.value.questionType == "multipleSelect") {
        this.clear_obj_singleSelectOptions();
        this.formDataCustom.questionType = 1;
        var options = [];
        for (let key in formData.value.obj_multiSelectOptions) {
          var isCorrectVal = false;
          if (
            formData.value.obj_multiSelectOptions[key][
            "multipleSelectOptionsCorrectAns"
            ]
          )
            isCorrectVal = true;
          options.push({
            optionId:
              formData.value.obj_multiSelectOptions[key][
              "multipleSelectOptionsID"
              ],
            option:
              formData.value.obj_multiSelectOptions[key][
              "multipleSelectOptions"
              ],
            isCorrect: isCorrectVal
          });
        }
      } else {
        this.clear_obj_singleSelectOptions();
        this.clear_obj_multiSelectOptions();
        this.formDataCustom.questionType = 2;
        var options = [];
      }

      this.validdationOptionText = true;
      options.forEach(item => {
        if (item.option == "") {
          this.validdationOptionText = false;
        }
        if (item.isCorrect) {
          this.validdationOptionIsCorrect = true;
        }
      });

      if (formData.value.questionType != "subjective") {
        if (!this.validdationOptionText || !this.validdationOptionIsCorrect) {
          this.displayErrorOption = true;
          return false;
        }
      }

      this.formDataCustom.options = options;
      this.formDataCustom.question = formData.value.questionText;
      this.formDataCustom.categoryId = formData.value.questionCategory;
      this.formDataCustom.examId = this.examID;
      this.formDataCustom.id = this.questionForm.value.id;

      this.url = "api/Questions";
      var formMsg = "Question added successfully!";
      if (this.formDataCustom.id != null) {
        this.url = "api/Questions/UpdateQuestions";
        formMsg = "Question Updated successfully!";
      }
      //this.questionForm.valid = true;

      this.CommonService.fn_PostWithData(
        this.formDataCustom,
        this.url
      ).subscribe((result: any) => {
        const rs = result;
        if (rs.statusCode == 200) {
          this.toastr.success(formMsg);
          this.validdationOptionText = false;
          this.questionForm.markAsUntouched();
          this.getQuestionsList();
          this.resetAll();
        } else {
          this.toastr.error("Failed to Add/Update Question");
        }
      });
    } else {
      this.CommonService.validateAllFormFields(this.questionForm);
      this.toastr.error("Please fill required details");
      return false;
    }
    this.validdationOptionText = false;
    this.validdationOptionIsCorrect = false;
    this.resetAll();
    this.getQuestionsList();
  };
  resetAll() {
    this.validdationOptionIsCorrect = false;
    this.displayErrorOption = false;
    this.url = "";
    this.questionForm.controls.id.setValue(null);
    this.questionForm.controls.questionCategory.setValue("");
    this.questionForm.controls.questionType.setValue("");
    this.questionForm.controls.questionText.setValue("");
    this.questionForm.controls.singleSelectOptionsCorrectAns.setValue(null);
    this.questionForm.controls.obj_multiSelectOptions.reset();
    this.questionForm.controls.obj_singleSelectOptions.reset();
    this.clear_obj_multiSelectOptions();
    this.clear_obj_singleSelectOptions();
    this.disbleAllFlag();
    this.formTitle = "Add";
  }
  clear_obj_multiSelectOptions() {
    const control_obj_multiSelectOptions = <FormArray>(
      this.questionForm.controls["obj_multiSelectOptions"]
    );
    this.multipleSelectEdit = false;
    var obj_multiSelectOptions_count = control_obj_multiSelectOptions.length;
    for (var i = 0; i < obj_multiSelectOptions_count; i++) {
      control_obj_multiSelectOptions.removeAt(
        control_obj_multiSelectOptions.length - 1
      );
    }
  }
  clear_obj_singleSelectOptions() {
    this.singleSelectEdit = false;
    this.questionForm.controls.singleSelectOptionsCorrectAns.setValue(null);
    const control_obj_singleSelectOptions = <FormArray>(
      this.questionForm.controls["obj_singleSelectOptions"]
    );
    var obj_singleSelectOptions_count = control_obj_singleSelectOptions.length;
    for (var i = 0; i < obj_singleSelectOptions_count; i++) {
      control_obj_singleSelectOptions.removeAt(
        control_obj_singleSelectOptions.length - 1
      );
    }
  }
  addSubstractMultipleSelectOptions(actionType) {
    const control = <FormArray>(
      this.questionForm.controls["obj_multiSelectOptions"]
    );
    this.multipleSelectEdit = true;
    if (actionType == "add") {
      if (control.length >= 5) {
        this.toastr.warning("Can add only Max 5 Options");
      } else {
        control.push(this.addSubMultipleSelectOption(null, false, null));
      }
    }
    if (actionType == "sub") {
      if (control.length <= 2) {
        this.toastr.warning("Min 2 Options are Mandatory");
      } else {
        control.removeAt(control.length - 1);
      }
    }
  }
  addSubstractSingleSelectOptions(actionType) {
    const control = <FormArray>(
      this.questionForm.controls["obj_singleSelectOptions"]
    );
    this.singleSelectEdit = true;
    if (actionType == "add") {
      if (control.length >= 5) {
        this.toastr.warning("Can add only Max 5 Options");
      } else {
        control.push(this.addSubSingleSelectOption(null, false, null));
      }
    }
    if (actionType == "sub") {
      if (control.length <= 2) {
        this.toastr.warning("Min 2 Options are Mandatory");
      } else {
        control.removeAt(control.length - 1);
      }
    }
  }
  loadOptions(questionTypeValue) {
    this.disbleAllFlag();
    if (questionTypeValue == "multipleSelect") {
      this.multipleSelectFlag = true;
      if (this.multipleSelectEdit === false) {
        const control = <FormArray>(
          this.questionForm.controls["obj_multiSelectOptions"]
        );
        control.push(this.addSubMultipleSelectOption(null, false, null));
        control.push(this.addSubMultipleSelectOption(null, false, null));
        this.multipleSelectEdit = true;
      }
    }
    if (questionTypeValue == "SingleSelect") {
      this.singleSelectFlag = true;
      if (this.singleSelectEdit === false) {
        const control = <FormArray>(
          this.questionForm.controls["obj_singleSelectOptions"]
        );
        control.push(this.addSubSingleSelectOption(null, false, null));
        control.push(this.addSubSingleSelectOption(null, false, null));
        this.singleSelectEdit = true;
      }
    }
    if (questionTypeValue == "subjective") {
      this.subjectiveFlag = true;
    }
  }
  isFieldValid(form: FormGroup, field: string) {
    return !form.get(field).valid && form.get(field).touched;
  }

  fn_fileChange(event) {
    const fileList: FileList = event.target.files;
    this.filedata = event.target.files[0].name;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const formData = new FormData();
      formData.set('examId', this.examID);
      formData.append('uploadFile', file, file.name);
      const apiUrl = 'api/Questions/ImportQuestions';
      this.CommonService.fn_UploadImage(apiUrl, formData).subscribe(
        (result: any) => {
          const rs = result;
          if (rs == true) {
            this.toastr.success('Questions imported successfully!');
            this.getQuestionsList();
          }
          else {
            this.toastr.success('Failed to import questions!');
          }
        }
      );
    }
  }

  exportAllQuestions() {
    const url = 'api/Questions/ExportQuestions';
    const questionModel = {
      'examId': this.examID
    };
    this.fn_exportAllQuestions(questionModel, url);
  }

  fn_exportAllQuestions(model, url) {
    this.ngxService.start();
    console.log(model);
    console.log(url);
    this.CommonService.fn_PostWithData(model, url).subscribe(
      (data: any) => {
      //  // console.log(data);
      //  debugger;
      //  return this.http.get(data, { responseType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      //   this.ngxService.stop();
      },
      err => console.error(err),
      () => { }
    );
  }
}
