import { KintoneRecordField } from "@kintone/rest-api-client";

const isRecordNumber = (field: { type?: string; value: unknown }): field is KintoneRecordField.RecordNumber =>
  field.type === "RECORD_NUMBER";
const isCreator = (field: { type?: string; value: unknown }): field is KintoneRecordField.Creator => field.type === "CREATOR";
const isCreatedTime = (field: { type?: string; value: unknown }): field is KintoneRecordField.CreatedTime => field.type === "CREATED_TIME";
const isModifier = (field: { type?: string; value: unknown }): field is KintoneRecordField.Modifier => field.type === "MODIFIER";
const isUpdatedTime = (field: { type?: string; value: unknown }): field is KintoneRecordField.UpdatedTime => field.type === "UPDATED_TIME";
const isSingleLineText = (field: { type?: string; value: unknown }): field is KintoneRecordField.SingleLineText =>
  field.type === "SINGLE_LINE_TEXT";
const isMultiLineText = (field: { type?: string; value: unknown }): field is KintoneRecordField.MultiLineText =>
  field.type === "MULTI_LINE_TEXT";
const isRichText = (field: { type?: string; value: unknown }): field is KintoneRecordField.RichText => field.type === "RICH_TEXT";
const isNumber = (field: { type?: string; value: unknown }): field is KintoneRecordField.Number => field.type === "NUMBER";
const isCalc = (field: { type?: string; value: unknown }): field is KintoneRecordField.Calc => field.type === "CALC";
const isCheckBox = (field: { type?: string; value: unknown }): field is KintoneRecordField.CheckBox => field.type === "CHECK_BOX";
const isRadioButton = (field: { type?: string; value: unknown }): field is KintoneRecordField.RadioButton => field.type === "RADIO_BUTTON";
const isMultiSelect = (field: { type?: string; value: unknown }): field is KintoneRecordField.MultiSelect => field.type === "MULTI_SELECT";
const isDropDown = (field: { type?: string; value: unknown }): field is KintoneRecordField.Dropdown => field.type === "DROP_DOWN";
const isUserSelect = (field: { type?: string; value: unknown }): field is KintoneRecordField.UserSelect => field.type === "USER_SELECT";
const isOrganizationSelect = (field: { type?: string; value: unknown }): field is KintoneRecordField.OrganizationSelect =>
  field.type === "ORGANIZATION_SELECT";
const isGroupSelect = (field: { type?: string; value: unknown }): field is KintoneRecordField.GroupSelect => field.type === "GROUP_SELECT";
const isDate = (field: { type?: string; value: unknown }): field is KintoneRecordField.Date => field.type === "DATE";
const isTime = (field: { type?: string; value: unknown }): field is KintoneRecordField.Time => field.type === "TIME";
const isDatetime = (field: { type?: string; value: unknown }): field is KintoneRecordField.DateTime => field.type === "DATETIME";
const isLink = (field: { type?: string; value: unknown }): field is KintoneRecordField.Link => field.type === "LINK";
const isFile = (field: { type?: string; value: unknown }): field is KintoneRecordField.File => field.type === "FILE";
const isSubtable = (field: {
  type?: string;
  value: unknown;
}): field is KintoneRecordField.Subtable<{ [fieldCode: string]: KintoneRecordField.InSubtable }> => field.type === "SUBTABLE";
const isCategory = (field: { type?: string; value: unknown }): field is KintoneRecordField.Category => field.type === "CATEGORY";
const isStatus = (field: { type?: string; value: unknown }): field is KintoneRecordField.Status => field.type === "STATUS";
const isStatusAssignee = (field: { type?: string; value: unknown }): field is KintoneRecordField.StatusAssignee =>
  field.type === "STATUS_ASSIGNEE";

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
