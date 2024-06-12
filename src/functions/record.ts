import type { KintoneRecordField } from "@kintone/rest-api-client";

const isRecordNumber = (
	field: KintoneRecordField.OneOf,
): field is KintoneRecordField.RecordNumber => field.type === "RECORD_NUMBER";
const isCreator = (
	field: KintoneRecordField.OneOf,
): field is KintoneRecordField.Creator => field.type === "CREATOR";
const isCreatedTime = (
	field: KintoneRecordField.OneOf,
): field is KintoneRecordField.CreatedTime => field.type === "CREATED_TIME";
const isModifier = (
	field: KintoneRecordField.OneOf,
): field is KintoneRecordField.Modifier => field.type === "MODIFIER";
const isUpdatedTime = (
	field: KintoneRecordField.OneOf,
): field is KintoneRecordField.UpdatedTime => field.type === "UPDATED_TIME";
const isSingleLineText = (
	field: KintoneRecordField.OneOf,
): field is KintoneRecordField.SingleLineText =>
	field.type === "SINGLE_LINE_TEXT";
const isMultiLineText = (
	field: KintoneRecordField.OneOf,
): field is KintoneRecordField.MultiLineText =>
	field.type === "MULTI_LINE_TEXT";
const isRichText = (
	field: KintoneRecordField.OneOf,
): field is KintoneRecordField.RichText => field.type === "RICH_TEXT";
const isNumber = (
	field: KintoneRecordField.OneOf,
): field is KintoneRecordField.Number => field.type === "NUMBER";
const isCalc = (
	field: KintoneRecordField.OneOf,
): field is KintoneRecordField.Calc => field.type === "CALC";
const isCheckBox = (
	field: KintoneRecordField.OneOf,
): field is KintoneRecordField.CheckBox => field.type === "CHECK_BOX";
const isRadioButton = (
	field: KintoneRecordField.OneOf,
): field is KintoneRecordField.RadioButton => field.type === "RADIO_BUTTON";
const isMultiSelect = (
	field: KintoneRecordField.OneOf,
): field is KintoneRecordField.MultiSelect => field.type === "MULTI_SELECT";
const isDropDown = (
	field: KintoneRecordField.OneOf,
): field is KintoneRecordField.Dropdown => field.type === "DROP_DOWN";
const isUserSelect = (
	field: KintoneRecordField.OneOf,
): field is KintoneRecordField.UserSelect => field.type === "USER_SELECT";
const isOrganizationSelect = (
	field: KintoneRecordField.OneOf,
): field is KintoneRecordField.OrganizationSelect =>
	field.type === "ORGANIZATION_SELECT";
const isGroupSelect = (
	field: KintoneRecordField.OneOf,
): field is KintoneRecordField.GroupSelect => field.type === "GROUP_SELECT";
const isDate = (
	field: KintoneRecordField.OneOf,
): field is KintoneRecordField.Date => field.type === "DATE";
const isTime = (
	field: KintoneRecordField.OneOf,
): field is KintoneRecordField.Time => field.type === "TIME";
const isDatetime = (
	field: KintoneRecordField.OneOf,
): field is KintoneRecordField.DateTime => field.type === "DATETIME";
const isLink = (
	field: KintoneRecordField.OneOf,
): field is KintoneRecordField.Link => field.type === "LINK";
const isFile = (
	field: KintoneRecordField.OneOf,
): field is KintoneRecordField.File => field.type === "FILE";
const isSubtable = (
	field: KintoneRecordField.OneOf,
): field is KintoneRecordField.Subtable<{
	[fieldCode: string]: KintoneRecordField.InSubtable;
}> => field.type === "SUBTABLE";
const isCategory = (
	field: KintoneRecordField.OneOf,
): field is KintoneRecordField.Category => field.type === "CATEGORY";
const isStatus = (
	field: KintoneRecordField.OneOf,
): field is KintoneRecordField.Status => field.type === "STATUS";
const isStatusAssignee = (
	field: KintoneRecordField.OneOf,
): field is KintoneRecordField.StatusAssignee =>
	field.type === "STATUS_ASSIGNEE";
const isID = (
	field: KintoneRecordField.OneOf,
): field is KintoneRecordField.ID => field.type === "__ID__";
const isRevision = (
	field: KintoneRecordField.OneOf,
): field is KintoneRecordField.Revision => field.type === "__REVISION__";

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
	isID,
	isRevision,
};
