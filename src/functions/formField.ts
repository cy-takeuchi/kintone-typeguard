import { KintoneFormFieldProperty } from "@kintone/rest-api-client";

const isRecordNumber = (field: KintoneFormFieldProperty.OneOf): field is KintoneFormFieldProperty.RecordNumber =>
  field.type === "RECORD_NUMBER";
const isCreator = (field: KintoneFormFieldProperty.OneOf): field is KintoneFormFieldProperty.Creator => field.type === "CREATOR";
const isCreatedTime = (field: KintoneFormFieldProperty.OneOf): field is KintoneFormFieldProperty.CreatedTime =>
  field.type === "CREATED_TIME";
const isModifier = (field: KintoneFormFieldProperty.OneOf): field is KintoneFormFieldProperty.Modifier => field.type === "MODIFIER";
const isUpdatedTime = (field: KintoneFormFieldProperty.OneOf): field is KintoneFormFieldProperty.UpdatedTime =>
  field.type === "UPDATED_TIME";
const isSingleLineText = (field: KintoneFormFieldProperty.OneOf): field is KintoneFormFieldProperty.SingleLineText =>
  field.type === "SINGLE_LINE_TEXT";
const isMultiLineText = (field: KintoneFormFieldProperty.OneOf): field is KintoneFormFieldProperty.MultiLineText =>
  field.type === "MULTI_LINE_TEXT";
const isRichText = (field: KintoneFormFieldProperty.OneOf): field is KintoneFormFieldProperty.RichText => field.type === "RICH_TEXT";
const isNumber = (field: KintoneFormFieldProperty.OneOf): field is KintoneFormFieldProperty.Number => field.type === "NUMBER";
const isCalc = (field: KintoneFormFieldProperty.OneOf): field is KintoneFormFieldProperty.Calc => field.type === "CALC";
const isCheckBox = (field: KintoneFormFieldProperty.OneOf): field is KintoneFormFieldProperty.CheckBox => field.type === "CHECK_BOX";
const isRadioButton = (field: KintoneFormFieldProperty.OneOf): field is KintoneFormFieldProperty.RadioButton =>
  field.type === "RADIO_BUTTON";
const isMultiSelect = (field: KintoneFormFieldProperty.OneOf): field is KintoneFormFieldProperty.MultiSelect =>
  field.type === "MULTI_SELECT";
const isDropDown = (field: KintoneFormFieldProperty.OneOf): field is KintoneFormFieldProperty.Dropdown => field.type === "DROP_DOWN";
const isUserSelect = (field: KintoneFormFieldProperty.OneOf): field is KintoneFormFieldProperty.UserSelect => field.type === "USER_SELECT";
const isOrganizationSelect = (field: KintoneFormFieldProperty.OneOf): field is KintoneFormFieldProperty.OrganizationSelect =>
  field.type === "ORGANIZATION_SELECT";
const isGroupSelect = (field: KintoneFormFieldProperty.OneOf): field is KintoneFormFieldProperty.GroupSelect =>
  field.type === "GROUP_SELECT";
const isDate = (field: KintoneFormFieldProperty.OneOf): field is KintoneFormFieldProperty.Date => field.type === "DATE";
const isTime = (field: KintoneFormFieldProperty.OneOf): field is KintoneFormFieldProperty.Time => field.type === "TIME";
const isDatetime = (field: KintoneFormFieldProperty.OneOf): field is KintoneFormFieldProperty.DateTime => field.type === "DATETIME";
const isLink = (field: KintoneFormFieldProperty.OneOf): field is KintoneFormFieldProperty.Link => field.type === "LINK";
const isFile = (field: KintoneFormFieldProperty.OneOf): field is KintoneFormFieldProperty.File => field.type === "FILE";
const isLookup = (field: KintoneFormFieldProperty.OneOf): field is KintoneFormFieldProperty.Lookup =>
  (field.type === "SINGLE_LINE_TEXT" || field.type === "NUMBER") && "lookup" in field;
const isSubtable = (
  field: KintoneFormFieldProperty.OneOf,
): field is KintoneFormFieldProperty.Subtable<{ [fieldCode: string]: KintoneFormFieldProperty.InSubtable }> => field.type === "SUBTABLE";
const isGroup = (field: KintoneFormFieldProperty.OneOf): field is KintoneFormFieldProperty.Group => field.type === "GROUP";
const isReferenceTable = (field: KintoneFormFieldProperty.OneOf): field is KintoneFormFieldProperty.ReferenceTable =>
  field.type === "REFERENCE_TABLE";
const isCategory = (field: KintoneFormFieldProperty.OneOf): field is KintoneFormFieldProperty.Category => field.type === "CATEGORY";
const isStatus = (field: KintoneFormFieldProperty.OneOf): field is KintoneFormFieldProperty.Status => field.type === "STATUS";
const isStatusAssignee = (field: KintoneFormFieldProperty.OneOf): field is KintoneFormFieldProperty.StatusAssignee =>
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
  isLookup,
  isSubtable,
  isGroup,
  isReferenceTable,
  isCategory,
  isStatus,
  isStatusAssignee,
};
