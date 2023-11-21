import {
  RecordNumber,
  Creator,
  CreatedTime,
  Modifier,
  UpdatedTime,
  SingleLineText,
  MultiLineText,
  RichText,
  Number,
  Calc,
  CheckBox,
  RadioButton,
  MultiSelect,
  Dropdown,
  UserSelect,
  OrganizationSelect,
  GroupSelect,
  Date,
  Time,
  DateTime,
  Link,
  File,
  Subtable,
  Category,
  Status,
  StatusAssignee,
  InSubtable,
} from "@kintone/rest-api-client/lib/src/KintoneFields/exportTypes/field";

const isRecordNumber = (field: { type?: string; value: unknown }): field is RecordNumber => field.type === "RECORD_NUMBER";
const isCreator = (field: { type?: string; value: unknown }): field is Creator => field.type === "CREATOR";
const isCreatedTime = (field: { type?: string; value: unknown }): field is CreatedTime => field.type === "CREATED_TIME";
const isModifier = (field: { type?: string; value: unknown }): field is Modifier => field.type === "MODIFIER";
const isUpdatedTime = (field: { type?: string; value: unknown }): field is UpdatedTime => field.type === "UPDATED_TIME";
const isSingleLineText = (field: { type?: string; value: unknown }): field is SingleLineText => field.type === "SINGLE_LINE_TEXT";
const isMultiLineText = (field: { type?: string; value: unknown }): field is MultiLineText => field.type === "MULTI_LINE_TEXT";
const isRichText = (field: { type?: string; value: unknown }): field is RichText => field.type === "RICH_TEXT";
const isNumber = (field: { type?: string; value: unknown }): field is Number => field.type === "NUMBER";
const isCalc = (field: { type?: string; value: unknown }): field is Calc => field.type === "CALC";
const isCheckBox = (field: { type?: string; value: unknown }): field is CheckBox => field.type === "CHECK_BOX";
const isRadioButton = (field: { type?: string; value: unknown }): field is RadioButton => field.type === "RADIO_BUTTON";
const isMultiSelect = (field: { type?: string; value: unknown }): field is MultiSelect => field.type === "MULTI_SELECT";
const isDropDown = (field: { type?: string; value: unknown }): field is Dropdown => field.type === "DROP_DOWN";
const isUserSelect = (field: { type?: string; value: unknown }): field is UserSelect => field.type === "USER_SELECT";
const isOrganizationSelect = (field: { type?: string; value: unknown }): field is OrganizationSelect =>
  field.type === "ORGANIZATION_SELECT";
const isGroupSelect = (field: { type?: string; value: unknown }): field is GroupSelect => field.type === "GROUP_SELECT";
const isDate = (field: { type?: string; value: unknown }): field is Date => field.type === "DATE";
const isTime = (field: { type?: string; value: unknown }): field is Time => field.type === "TIME";
const isDatetime = (field: { type?: string; value: unknown }): field is DateTime => field.type === "DATETIME";
const isLink = (field: { type?: string; value: unknown }): field is Link => field.type === "LINK";
const isFile = (field: { type?: string; value: unknown }): field is File => field.type === "FILE";
const isSubtable = (field: { type?: string; value: unknown }): field is Subtable<{ [fieldCode: string]: InSubtable }> =>
  field.type === "SUBTABLE";
const isCategory = (field: { type?: string; value: unknown }): field is Category => field.type === "CATEGORY";
const isStatus = (field: { type?: string; value: unknown }): field is Status => field.type === "STATUS";
const isStatusAssignee = (field: { type?: string; value: unknown }): field is StatusAssignee => field.type === "STATUS_ASSIGNEE";

export {
  isRecordNumber,
  isCreator,
  isCreatedTime,
  isModifier,
  isUpdatedTime,
  isSingleLineText,
  isMultiLineText,
  isRichText,
  isNumber,
  isCalc,
  isCheckBox,
  isRadioButton,
  isMultiSelect,
  isDropDown,
  isUserSelect,
  isOrganizationSelect,
  isGroupSelect,
  isDate,
  isTime,
  isDatetime,
  isLink,
  isFile,
  isSubtable,
  isCategory,
  isStatus,
  isStatusAssignee,
};
