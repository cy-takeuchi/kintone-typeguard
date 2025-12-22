import type { KintoneRecordField } from "@kintone/rest-api-client";
import type { kintoneRecordFieldEvent } from "../exportTypes/recordFieldEvent";
import type { kintoneRecordFieldGet } from "../exportTypes/recordFieldGet";
import type { kintoneRecordFieldSet } from "../exportTypes/recordFieldSet";

type F<A, B> = A extends B ? B : A;
type FFF<A, B, C, D> = F<A, F<B, F<C, F<D, never>>>>;

/**
 * すべてのフィールド型のユニオン（4つのコンテキストに対応）
 * kintoneRecordFieldUnifiedはKintoneRecordFieldと同一のため含まない
 */
type AllFieldTypes =
	| KintoneRecordField.OneOf
	| kintoneRecordFieldGet.OneOf
	| kintoneRecordFieldSet.OneOf
	| kintoneRecordFieldEvent.OneOf;

const isRecordNumber = (
	field: AllFieldTypes,
): field is FFF<
	KintoneRecordField.RecordNumber,
	kintoneRecordFieldGet.RecordNumber,
	kintoneRecordFieldEvent.RecordNumber,
	kintoneRecordFieldSet.RecordNumber
> => field.type === "RECORD_NUMBER";

const isCreator = (
	field: AllFieldTypes,
): field is FFF<
	KintoneRecordField.Creator,
	kintoneRecordFieldGet.Creator,
	kintoneRecordFieldEvent.Creator,
	kintoneRecordFieldSet.Creator
> => field.type === "CREATOR";

const isCreatedTime = (
	field: AllFieldTypes,
): field is FFF<
	KintoneRecordField.CreatedTime,
	kintoneRecordFieldGet.CreatedTime,
	kintoneRecordFieldEvent.CreatedTime,
	kintoneRecordFieldSet.CreatedTime
> => field.type === "CREATED_TIME";

const isModifier = (
	field: AllFieldTypes,
): field is FFF<
	KintoneRecordField.Modifier,
	kintoneRecordFieldGet.Modifier,
	kintoneRecordFieldEvent.Modifier,
	kintoneRecordFieldSet.Modifier
> => field.type === "MODIFIER";

const isUpdatedTime = (
	field: AllFieldTypes,
): field is FFF<
	KintoneRecordField.UpdatedTime,
	kintoneRecordFieldGet.UpdatedTime,
	kintoneRecordFieldEvent.UpdatedTime,
	kintoneRecordFieldSet.UpdatedTime
> => field.type === "UPDATED_TIME";

const isSingleLineText = (
	field: AllFieldTypes,
): field is FFF<
	KintoneRecordField.SingleLineText,
	kintoneRecordFieldGet.SingleLineText,
	kintoneRecordFieldEvent.SingleLineText,
	kintoneRecordFieldSet.SingleLineText
> => field.type === "SINGLE_LINE_TEXT";

const isMultiLineText = (
	field: AllFieldTypes,
): field is FFF<
	KintoneRecordField.MultiLineText,
	kintoneRecordFieldGet.MultiLineText,
	kintoneRecordFieldEvent.MultiLineText,
	kintoneRecordFieldSet.MultiLineText
> => field.type === "MULTI_LINE_TEXT";

const isRichText = (
	field: AllFieldTypes,
): field is FFF<
	KintoneRecordField.RichText,
	kintoneRecordFieldGet.RichText,
	kintoneRecordFieldEvent.RichText,
	kintoneRecordFieldSet.RichText
> => field.type === "RICH_TEXT";

const isNumber = (
	field: AllFieldTypes,
): field is FFF<
	KintoneRecordField.Number,
	kintoneRecordFieldGet.Number,
	kintoneRecordFieldEvent.Number,
	kintoneRecordFieldSet.Number
> => field.type === "NUMBER";

const isCalc = (
	field: AllFieldTypes,
): field is FFF<
	KintoneRecordField.Calc,
	kintoneRecordFieldGet.Calc,
	kintoneRecordFieldEvent.Calc,
	kintoneRecordFieldSet.Calc
> => field.type === "CALC";

const isCheckBox = (
	field: AllFieldTypes,
): field is FFF<
	KintoneRecordField.CheckBox,
	kintoneRecordFieldGet.CheckBox,
	kintoneRecordFieldEvent.CheckBox,
	kintoneRecordFieldSet.CheckBox
> => field.type === "CHECK_BOX";

const isRadioButton = (
	field: AllFieldTypes,
): field is FFF<
	KintoneRecordField.RadioButton,
	kintoneRecordFieldGet.RadioButton,
	kintoneRecordFieldEvent.RadioButton,
	kintoneRecordFieldSet.RadioButton
> => field.type === "RADIO_BUTTON";

const isMultiSelect = (
	field: AllFieldTypes,
): field is FFF<
	KintoneRecordField.MultiSelect,
	kintoneRecordFieldGet.MultiSelect,
	kintoneRecordFieldEvent.MultiSelect,
	kintoneRecordFieldSet.MultiSelect
> => field.type === "MULTI_SELECT";

const isDropDown = (
	field: AllFieldTypes,
): field is FFF<
	KintoneRecordField.Dropdown,
	kintoneRecordFieldGet.Dropdown,
	kintoneRecordFieldEvent.Dropdown,
	kintoneRecordFieldSet.Dropdown
> => field.type === "DROP_DOWN";

const isUserSelect = (
	field: AllFieldTypes,
): field is FFF<
	KintoneRecordField.UserSelect,
	kintoneRecordFieldGet.UserSelect,
	kintoneRecordFieldEvent.UserSelect,
	kintoneRecordFieldSet.UserSelect
> => field.type === "USER_SELECT";

const isOrganizationSelect = (
	field: AllFieldTypes,
): field is FFF<
	KintoneRecordField.OrganizationSelect,
	kintoneRecordFieldGet.OrganizationSelect,
	kintoneRecordFieldEvent.OrganizationSelect,
	kintoneRecordFieldSet.OrganizationSelect
> => field.type === "ORGANIZATION_SELECT";

const isGroupSelect = (
	field: AllFieldTypes,
): field is FFF<
	KintoneRecordField.GroupSelect,
	kintoneRecordFieldGet.GroupSelect,
	kintoneRecordFieldEvent.GroupSelect,
	kintoneRecordFieldSet.GroupSelect
> => field.type === "GROUP_SELECT";

const isDate = (
	field: AllFieldTypes,
): field is FFF<
	KintoneRecordField.Date,
	kintoneRecordFieldGet.Date,
	kintoneRecordFieldEvent.Date,
	kintoneRecordFieldSet.Date
> => field.type === "DATE";

const isTime = (
	field: AllFieldTypes,
): field is FFF<
	KintoneRecordField.Time,
	kintoneRecordFieldGet.Time,
	kintoneRecordFieldEvent.Time,
	kintoneRecordFieldSet.Time
> => field.type === "TIME";

const isDatetime = (
	field: AllFieldTypes,
): field is FFF<
	KintoneRecordField.DateTime,
	kintoneRecordFieldGet.DateTime,
	kintoneRecordFieldEvent.DateTime,
	kintoneRecordFieldSet.DateTime
> => field.type === "DATETIME";

const isLink = (
	field: AllFieldTypes,
): field is FFF<
	KintoneRecordField.Link,
	kintoneRecordFieldGet.Link,
	kintoneRecordFieldEvent.Link,
	kintoneRecordFieldSet.Link
> => field.type === "LINK";

const isFile = (
	field: AllFieldTypes,
): field is FFF<
	KintoneRecordField.File,
	kintoneRecordFieldGet.File,
	kintoneRecordFieldEvent.File,
	kintoneRecordFieldSet.File
> => field.type === "FILE";

const isSubtable = (
	field: AllFieldTypes,
): field is FFF<
	KintoneRecordField.Subtable<{
		[fieldCode: string]: KintoneRecordField.InSubtable;
	}>,
	kintoneRecordFieldGet.Subtable,
	kintoneRecordFieldEvent.Subtable,
	kintoneRecordFieldSet.Subtable
> => field.type === "SUBTABLE";

const isCategory = (
	field: AllFieldTypes,
): field is FFF<
	KintoneRecordField.Category,
	kintoneRecordFieldGet.Category,
	kintoneRecordFieldEvent.Category,
	kintoneRecordFieldSet.Category
> => field.type === "CATEGORY";

/** isStatus/isStatusAssignee/isID/isRevision は Set には存在しないため、Setを除く型に対応 */
type AllFieldTypesWithoutSet =
	| KintoneRecordField.OneOf
	| kintoneRecordFieldGet.OneOf
	| kintoneRecordFieldEvent.OneOf;

type FF<A, B, C> = F<A, F<B, F<C, never>>>;

const isStatus = (
	field: AllFieldTypesWithoutSet,
): field is FF<
	KintoneRecordField.Status,
	kintoneRecordFieldGet.Status,
	kintoneRecordFieldEvent.Status
> => field.type === "STATUS";

const isStatusAssignee = (
	field: AllFieldTypesWithoutSet,
): field is FF<
	KintoneRecordField.StatusAssignee,
	kintoneRecordFieldGet.StatusAssignee,
	kintoneRecordFieldEvent.StatusAssignee
> => field.type === "STATUS_ASSIGNEE";

const isID = (
	field: AllFieldTypesWithoutSet,
): field is FF<
	KintoneRecordField.ID,
	kintoneRecordFieldGet.ID,
	kintoneRecordFieldEvent.ID
> => field.type === "__ID__";

const isRevision = (
	field: AllFieldTypesWithoutSet,
): field is FF<
	KintoneRecordField.Revision,
	kintoneRecordFieldGet.Revision,
	kintoneRecordFieldEvent.Revision
> => field.type === "__REVISION__";

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
