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
  Lookup,
  Subtable,
  Group,
  ReferenceTable,
  Category,
  Status,
  StatusAssignee,
  InSubtable,
  OneOf,
} from "@kintone/rest-api-client/lib/src/KintoneFields/exportTypes/property";

const isRecordNumber = (field: OneOf): field is RecordNumber => field.type === "RECORD_NUMBER";
const isCreator = (field: OneOf): field is Creator => field.type === "CREATOR";
const isCreatedTime = (field: OneOf): field is CreatedTime => field.type === "CREATED_TIME";
const isModifier = (field: OneOf): field is Modifier => field.type === "MODIFIER";
const isUpdatedTime = (field: OneOf): field is UpdatedTime => field.type === "UPDATED_TIME";
const isSingleLineText = (field: OneOf): field is SingleLineText => field.type === "SINGLE_LINE_TEXT";
const isMultiLineText = (field: OneOf): field is MultiLineText => field.type === "MULTI_LINE_TEXT";
const isRichText = (field: OneOf): field is RichText => field.type === "RICH_TEXT";
const isNumber = (field: OneOf): field is Number => field.type === "NUMBER";
const isCalc = (field: OneOf): field is Calc => field.type === "CALC";
const isCheckBox = (field: OneOf): field is CheckBox => field.type === "CHECK_BOX";
const isRadioButton = (field: OneOf): field is RadioButton => field.type === "RADIO_BUTTON";
const isMultiSelect = (field: OneOf): field is MultiSelect => field.type === "MULTI_SELECT";
const isDropDown = (field: OneOf): field is Dropdown => field.type === "DROP_DOWN";
const isUserSelect = (field: OneOf): field is UserSelect => field.type === "USER_SELECT";
const isOrganizationSelect = (field: OneOf): field is OrganizationSelect => field.type === "ORGANIZATION_SELECT";
const isGroupSelect = (field: OneOf): field is GroupSelect => field.type === "GROUP_SELECT";
const isDate = (field: OneOf): field is Date => field.type === "DATE";
const isTime = (field: OneOf): field is Time => field.type === "TIME";
const isDatetime = (field: OneOf): field is DateTime => field.type === "DATETIME";
const isLink = (field: OneOf): field is Link => field.type === "LINK";
const isFile = (field: OneOf): field is File => field.type === "FILE";
const isLookup = (field: OneOf): field is Lookup => (field.type === "SINGLE_LINE_TEXT" || field.type === "NUMBER") && "lookup" in field;
const isSubtable = (field: OneOf): field is Subtable<{ [fieldCode: string]: InSubtable }> => field.type === "SUBTABLE";
const isGroup = (field: OneOf): field is Group => field.type === "GROUP";
const isReferenceTable = (field: OneOf): field is ReferenceTable => field.type === "REFERENCE_TABLE";
const isCategory = (field: OneOf): field is Category => field.type === "CATEGORY";
const isStatus = (field: OneOf): field is Status => field.type === "STATUS";
const isStatusAssignee = (field: OneOf): field is StatusAssignee => field.type === "STATUS_ASSIGNEE";

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
