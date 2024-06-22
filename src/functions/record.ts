import type { KintoneRecordField } from "@kintone/rest-api-client";
import type { kintoneRecordFieldEvent } from "../exportTypes/recordFieldEvent";
import type { kintoneRecordFieldGet } from "../exportTypes/recordFieldGet";
import type { kintoneRecordFieldSet } from "../exportTypes/recordFieldSet";

type F<A, B> = A extends B ? B : A;
type FF<A, B, C, D> = F<A, F<B, F<C, F<D, never>>>>;

const isRecordNumber = (
	field:
		| KintoneRecordField.OneOf
		| kintoneRecordFieldGet.OneOf
		| kintoneRecordFieldSet.OneOf
		| kintoneRecordFieldEvent.OneOf,
): field is KintoneRecordField.RecordNumber => field.type === "RECORD_NUMBER";
const isCreator = (
	field: FF<
		KintoneRecordField.OneOf,
		kintoneRecordFieldGet.OneOf,
		kintoneRecordFieldSet.OneOf,
		kintoneRecordFieldEvent.OneOf
	>,
): field is KintoneRecordField.Creator => field.type === "CREATOR";
const isCreatedTime = (
	field: FF<
		KintoneRecordField.OneOf,
		kintoneRecordFieldGet.OneOf,
		kintoneRecordFieldSet.OneOf,
		kintoneRecordFieldEvent.OneOf
	>,
): field is KintoneRecordField.CreatedTime => field.type === "CREATED_TIME";
const isModifier = (
	field: FF<
		KintoneRecordField.OneOf,
		kintoneRecordFieldGet.OneOf,
		kintoneRecordFieldSet.OneOf,
		kintoneRecordFieldEvent.OneOf
	>,
): field is KintoneRecordField.Modifier => field.type === "MODIFIER";
const isUpdatedTime = (
	field: FF<
		KintoneRecordField.OneOf,
		kintoneRecordFieldGet.OneOf,
		kintoneRecordFieldSet.OneOf,
		kintoneRecordFieldEvent.OneOf
	>,
): field is KintoneRecordField.UpdatedTime => field.type === "UPDATED_TIME";
const isSingleLineText = (
	field: FF<
		KintoneRecordField.OneOf,
		kintoneRecordFieldGet.OneOf,
		kintoneRecordFieldSet.OneOf,
		kintoneRecordFieldEvent.OneOf
	>,
): field is KintoneRecordField.SingleLineText =>
	field.type === "SINGLE_LINE_TEXT";
const isMultiLineText = (
	field: FF<
		KintoneRecordField.OneOf,
		kintoneRecordFieldGet.OneOf,
		kintoneRecordFieldSet.OneOf,
		kintoneRecordFieldEvent.OneOf
	>,
): field is KintoneRecordField.MultiLineText =>
	field.type === "MULTI_LINE_TEXT";
const isRichText = (
	field: FF<
		KintoneRecordField.OneOf,
		kintoneRecordFieldGet.OneOf,
		kintoneRecordFieldSet.OneOf,
		kintoneRecordFieldEvent.OneOf
	>,
): field is KintoneRecordField.RichText => field.type === "RICH_TEXT";
const isNumber = (
	field: FF<
		KintoneRecordField.OneOf,
		kintoneRecordFieldGet.OneOf,
		kintoneRecordFieldSet.OneOf,
		kintoneRecordFieldEvent.OneOf
	>,
): field is KintoneRecordField.Number => field.type === "NUMBER";
const isCalc = (
	field: FF<
		KintoneRecordField.OneOf,
		kintoneRecordFieldGet.OneOf,
		kintoneRecordFieldSet.OneOf,
		kintoneRecordFieldEvent.OneOf
	>,
): field is KintoneRecordField.Calc => field.type === "CALC";
const isCheckBox = (
	field: FF<
		KintoneRecordField.OneOf,
		kintoneRecordFieldGet.OneOf,
		kintoneRecordFieldSet.OneOf,
		kintoneRecordFieldEvent.OneOf
	>,
): field is KintoneRecordField.CheckBox => field.type === "CHECK_BOX";
const isRadioButton = (
	field: FF<
		KintoneRecordField.OneOf,
		kintoneRecordFieldGet.OneOf,
		kintoneRecordFieldSet.OneOf,
		kintoneRecordFieldEvent.OneOf
	>,
): field is KintoneRecordField.RadioButton => field.type === "RADIO_BUTTON";
const isMultiSelect = (
	field: FF<
		KintoneRecordField.OneOf,
		kintoneRecordFieldGet.OneOf,
		kintoneRecordFieldSet.OneOf,
		kintoneRecordFieldEvent.OneOf
	>,
): field is KintoneRecordField.MultiSelect => field.type === "MULTI_SELECT";
const isDropDown = (
	field: FF<
		KintoneRecordField.OneOf,
		kintoneRecordFieldGet.OneOf,
		kintoneRecordFieldSet.OneOf,
		kintoneRecordFieldEvent.OneOf
	>,
): field is KintoneRecordField.Dropdown => field.type === "DROP_DOWN";
const isUserSelect = (
	field: FF<
		KintoneRecordField.OneOf,
		kintoneRecordFieldGet.OneOf,
		kintoneRecordFieldSet.OneOf,
		kintoneRecordFieldEvent.OneOf
	>,
): field is KintoneRecordField.UserSelect => field.type === "USER_SELECT";
const isOrganizationSelect = (
	field: FF<
		KintoneRecordField.OneOf,
		kintoneRecordFieldGet.OneOf,
		kintoneRecordFieldSet.OneOf,
		kintoneRecordFieldEvent.OneOf
	>,
): field is KintoneRecordField.OrganizationSelect =>
	field.type === "ORGANIZATION_SELECT";
const isGroupSelect = (
	field: FF<
		KintoneRecordField.OneOf,
		kintoneRecordFieldGet.OneOf,
		kintoneRecordFieldSet.OneOf,
		kintoneRecordFieldEvent.OneOf
	>,
): field is KintoneRecordField.GroupSelect => field.type === "GROUP_SELECT";
const isDate = (
	field: FF<
		KintoneRecordField.OneOf,
		kintoneRecordFieldGet.OneOf,
		kintoneRecordFieldSet.OneOf,
		kintoneRecordFieldEvent.OneOf
	>,
): field is KintoneRecordField.Date => field.type === "DATE";
const isTime = (
	field: FF<
		KintoneRecordField.OneOf,
		kintoneRecordFieldGet.OneOf,
		kintoneRecordFieldSet.OneOf,
		kintoneRecordFieldEvent.OneOf
	>,
): field is KintoneRecordField.Time => field.type === "TIME";
const isDatetime = (
	field: FF<
		KintoneRecordField.OneOf,
		kintoneRecordFieldGet.OneOf,
		kintoneRecordFieldSet.OneOf,
		kintoneRecordFieldEvent.OneOf
	>,
): field is KintoneRecordField.DateTime => field.type === "DATETIME";
const isLink = (
	field: FF<
		KintoneRecordField.OneOf,
		kintoneRecordFieldGet.OneOf,
		kintoneRecordFieldSet.OneOf,
		kintoneRecordFieldEvent.OneOf
	>,
): field is KintoneRecordField.Link => field.type === "LINK";
const isFile = (
	field: FF<
		KintoneRecordField.OneOf,
		kintoneRecordFieldGet.OneOf,
		kintoneRecordFieldSet.OneOf,
		kintoneRecordFieldEvent.OneOf
	>,
): field is KintoneRecordField.File => field.type === "FILE";
const isSubtable = (
	field: FF<
		KintoneRecordField.OneOf,
		kintoneRecordFieldGet.OneOf,
		kintoneRecordFieldSet.OneOf,
		kintoneRecordFieldEvent.OneOf
	>,
): field is KintoneRecordField.Subtable<{
	[fieldCode: string]: KintoneRecordField.InSubtable;
}> => field.type === "SUBTABLE";
const isCategory = (
	field: FF<
		KintoneRecordField.OneOf,
		kintoneRecordFieldGet.OneOf,
		kintoneRecordFieldSet.OneOf,
		kintoneRecordFieldEvent.OneOf
	>,
): field is KintoneRecordField.Category => field.type === "CATEGORY";
const isStatus = (
	field: FF<
		KintoneRecordField.OneOf,
		kintoneRecordFieldGet.OneOf,
		kintoneRecordFieldSet.OneOf,
		kintoneRecordFieldEvent.OneOf
	>,
): field is KintoneRecordField.Status => field.type === "STATUS";
const isStatusAssignee = (
	field: FF<
		KintoneRecordField.OneOf,
		kintoneRecordFieldGet.OneOf,
		kintoneRecordFieldSet.OneOf,
		kintoneRecordFieldEvent.OneOf
	>,
): field is KintoneRecordField.StatusAssignee =>
	field.type === "STATUS_ASSIGNEE";
const isID = (
	field: FF<
		KintoneRecordField.OneOf,
		kintoneRecordFieldGet.OneOf,
		kintoneRecordFieldSet.OneOf,
		kintoneRecordFieldEvent.OneOf
	>,
): field is KintoneRecordField.ID => field.type === "__ID__";
const isRevision = (
	field: FF<
		KintoneRecordField.OneOf,
		kintoneRecordFieldGet.OneOf,
		kintoneRecordFieldSet.OneOf,
		kintoneRecordFieldEvent.OneOf
	>,
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
