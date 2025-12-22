import type { KintoneRecordField } from "@kintone/rest-api-client";
import type { kintoneRecordFieldEvent } from "../exportTypes/recordFieldEvent";
import type { kintoneRecordFieldGet } from "../exportTypes/recordFieldGet";
import type { kintoneRecordFieldSet } from "../exportTypes/recordFieldSet";
import type { kintoneRecordFieldUnified } from "../exportTypes/recordFieldUnified";

type F<A, B> = A extends B ? B : A;
type FFF<A, B, C, D> = F<A, F<B, F<C, F<D, never>>>>;
type FFFF<A, B, C, D, E> = F<A, F<B, F<C, F<D, F<E, never>>>>>;

/** すべてのフィールド型のユニオン（5つのコンテキストに対応） */
type AllFieldTypes =
	| KintoneRecordField.OneOf
	| kintoneRecordFieldGet.OneOf
	| kintoneRecordFieldSet.OneOf
	| kintoneRecordFieldEvent.OneOf
	| kintoneRecordFieldUnified.OneOf;

const isRecordNumber = (
	field: AllFieldTypes,
): field is FFFF<
	KintoneRecordField.RecordNumber,
	kintoneRecordFieldGet.RecordNumber,
	kintoneRecordFieldSet.RecordNumber,
	kintoneRecordFieldEvent.RecordNumber,
	kintoneRecordFieldUnified.RecordNumber
> => field.type === "RECORD_NUMBER";

const isCreator = (
	field: AllFieldTypes,
): field is FFFF<
	KintoneRecordField.Creator,
	kintoneRecordFieldGet.Creator,
	kintoneRecordFieldSet.Creator,
	kintoneRecordFieldEvent.Creator,
	kintoneRecordFieldUnified.Creator
> => field.type === "CREATOR";

const isCreatedTime = (
	field: AllFieldTypes,
): field is FFFF<
	KintoneRecordField.CreatedTime,
	kintoneRecordFieldGet.CreatedTime,
	kintoneRecordFieldSet.CreatedTime,
	kintoneRecordFieldEvent.CreatedTime,
	kintoneRecordFieldUnified.CreatedTime
> => field.type === "CREATED_TIME";

const isModifier = (
	field: AllFieldTypes,
): field is FFFF<
	KintoneRecordField.Modifier,
	kintoneRecordFieldGet.Modifier,
	kintoneRecordFieldSet.Modifier,
	kintoneRecordFieldEvent.Modifier,
	kintoneRecordFieldUnified.Modifier
> => field.type === "MODIFIER";

const isUpdatedTime = (
	field: AllFieldTypes,
): field is FFFF<
	KintoneRecordField.UpdatedTime,
	kintoneRecordFieldGet.UpdatedTime,
	kintoneRecordFieldSet.UpdatedTime,
	kintoneRecordFieldEvent.UpdatedTime,
	kintoneRecordFieldUnified.UpdatedTime
> => field.type === "UPDATED_TIME";

const isSingleLineText = (
	field: AllFieldTypes,
): field is FFFF<
	KintoneRecordField.SingleLineText,
	kintoneRecordFieldGet.SingleLineText,
	kintoneRecordFieldSet.SingleLineText,
	kintoneRecordFieldEvent.SingleLineText,
	kintoneRecordFieldUnified.SingleLineText
> => field.type === "SINGLE_LINE_TEXT";

const isMultiLineText = (
	field: AllFieldTypes,
): field is FFFF<
	KintoneRecordField.MultiLineText,
	kintoneRecordFieldGet.MultiLineText,
	kintoneRecordFieldSet.MultiLineText,
	kintoneRecordFieldEvent.MultiLineText,
	kintoneRecordFieldUnified.MultiLineText
> => field.type === "MULTI_LINE_TEXT";

const isRichText = (
	field: AllFieldTypes,
): field is FFFF<
	KintoneRecordField.RichText,
	kintoneRecordFieldGet.RichText,
	kintoneRecordFieldSet.RichText,
	kintoneRecordFieldEvent.RichText,
	kintoneRecordFieldUnified.RichText
> => field.type === "RICH_TEXT";

const isNumber = (
	field: AllFieldTypes,
): field is FFFF<
	KintoneRecordField.Number,
	kintoneRecordFieldGet.Number,
	kintoneRecordFieldSet.Number,
	kintoneRecordFieldEvent.Number,
	kintoneRecordFieldUnified.Number
> => field.type === "NUMBER";

const isCalc = (
	field: AllFieldTypes,
): field is FFFF<
	KintoneRecordField.Calc,
	kintoneRecordFieldGet.Calc,
	kintoneRecordFieldSet.Calc,
	kintoneRecordFieldEvent.Calc,
	kintoneRecordFieldUnified.Calc
> => field.type === "CALC";

const isCheckBox = (
	field: AllFieldTypes,
): field is FFFF<
	KintoneRecordField.CheckBox,
	kintoneRecordFieldGet.CheckBox,
	kintoneRecordFieldSet.CheckBox,
	kintoneRecordFieldEvent.CheckBox,
	kintoneRecordFieldUnified.CheckBox
> => field.type === "CHECK_BOX";

const isRadioButton = (
	field: AllFieldTypes,
): field is FFFF<
	KintoneRecordField.RadioButton,
	kintoneRecordFieldGet.RadioButton,
	kintoneRecordFieldSet.RadioButton,
	kintoneRecordFieldEvent.RadioButton,
	kintoneRecordFieldUnified.RadioButton
> => field.type === "RADIO_BUTTON";

const isMultiSelect = (
	field: AllFieldTypes,
): field is FFFF<
	KintoneRecordField.MultiSelect,
	kintoneRecordFieldGet.MultiSelect,
	kintoneRecordFieldSet.MultiSelect,
	kintoneRecordFieldEvent.MultiSelect,
	kintoneRecordFieldUnified.MultiSelect
> => field.type === "MULTI_SELECT";

const isDropDown = (
	field: AllFieldTypes,
): field is FFFF<
	KintoneRecordField.Dropdown,
	kintoneRecordFieldGet.Dropdown,
	kintoneRecordFieldSet.Dropdown,
	kintoneRecordFieldEvent.Dropdown,
	kintoneRecordFieldUnified.Dropdown
> => field.type === "DROP_DOWN";

const isUserSelect = (
	field: AllFieldTypes,
): field is FFFF<
	KintoneRecordField.UserSelect,
	kintoneRecordFieldGet.UserSelect,
	kintoneRecordFieldSet.UserSelect,
	kintoneRecordFieldEvent.UserSelect,
	kintoneRecordFieldUnified.UserSelect
> => field.type === "USER_SELECT";

const isOrganizationSelect = (
	field: AllFieldTypes,
): field is FFFF<
	KintoneRecordField.OrganizationSelect,
	kintoneRecordFieldGet.OrganizationSelect,
	kintoneRecordFieldSet.OrganizationSelect,
	kintoneRecordFieldEvent.OrganizationSelect,
	kintoneRecordFieldUnified.OrganizationSelect
> => field.type === "ORGANIZATION_SELECT";

const isGroupSelect = (
	field: AllFieldTypes,
): field is FFFF<
	KintoneRecordField.GroupSelect,
	kintoneRecordFieldGet.GroupSelect,
	kintoneRecordFieldSet.GroupSelect,
	kintoneRecordFieldEvent.GroupSelect,
	kintoneRecordFieldUnified.GroupSelect
> => field.type === "GROUP_SELECT";

const isDate = (
	field: AllFieldTypes,
): field is FFFF<
	KintoneRecordField.Date,
	kintoneRecordFieldGet.Date,
	kintoneRecordFieldSet.Date,
	kintoneRecordFieldEvent.Date,
	kintoneRecordFieldUnified.Date
> => field.type === "DATE";

const isTime = (
	field: AllFieldTypes,
): field is FFFF<
	KintoneRecordField.Time,
	kintoneRecordFieldGet.Time,
	kintoneRecordFieldSet.Time,
	kintoneRecordFieldEvent.Time,
	kintoneRecordFieldUnified.Time
> => field.type === "TIME";

const isDatetime = (
	field: AllFieldTypes,
): field is FFFF<
	KintoneRecordField.DateTime,
	kintoneRecordFieldGet.DateTime,
	kintoneRecordFieldSet.DateTime,
	kintoneRecordFieldEvent.DateTime,
	kintoneRecordFieldUnified.DateTime
> => field.type === "DATETIME";

const isLink = (
	field: AllFieldTypes,
): field is FFFF<
	KintoneRecordField.Link,
	kintoneRecordFieldGet.Link,
	kintoneRecordFieldSet.Link,
	kintoneRecordFieldEvent.Link,
	kintoneRecordFieldUnified.Link
> => field.type === "LINK";

const isFile = (
	field: AllFieldTypes,
): field is FFFF<
	KintoneRecordField.File,
	kintoneRecordFieldGet.File,
	kintoneRecordFieldSet.File,
	kintoneRecordFieldEvent.File,
	kintoneRecordFieldUnified.File
> => field.type === "FILE";

const isSubtable = (
	field: AllFieldTypes,
): field is FFFF<
	KintoneRecordField.Subtable<{
		[fieldCode: string]: KintoneRecordField.InSubtable;
	}>,
	{
		type: "SUBTABLE";
		value: {
			id: string;
			value: { [fieldCode: string]: kintoneRecordFieldGet.InSubtable };
		}[];
	},
	{
		type: "SUBTABLE";
		value: {
			id?: string;
			value: { [fieldCode: string]: kintoneRecordFieldSet.InSubtable };
		}[];
	},
	{
		type: "SUBTABLE";
		value: {
			id: string;
			value: { [fieldCode: string]: kintoneRecordFieldEvent.InSubtable };
		}[];
	},
	kintoneRecordFieldUnified.Subtable
> => field.type === "SUBTABLE";

const isCategory = (
	field: AllFieldTypes,
): field is FFFF<
	KintoneRecordField.Category,
	kintoneRecordFieldGet.Category,
	kintoneRecordFieldSet.Category,
	kintoneRecordFieldEvent.Category,
	kintoneRecordFieldUnified.Category
> => field.type === "CATEGORY";

/** isStatus/isStatusAssignee/isID/isRevision は Set には存在しないため、Setを除く型に対応 */
type AllFieldTypesWithoutSet =
	| KintoneRecordField.OneOf
	| kintoneRecordFieldGet.OneOf
	| kintoneRecordFieldEvent.OneOf
	| kintoneRecordFieldUnified.OneOf;

const isStatus = (
	field: AllFieldTypesWithoutSet,
): field is FFF<
	KintoneRecordField.Status,
	kintoneRecordFieldGet.Status,
	kintoneRecordFieldEvent.Status,
	kintoneRecordFieldUnified.Status
> => field.type === "STATUS";

const isStatusAssignee = (
	field: AllFieldTypesWithoutSet,
): field is FFF<
	KintoneRecordField.StatusAssignee,
	kintoneRecordFieldGet.StatusAssignee,
	kintoneRecordFieldEvent.StatusAssignee,
	kintoneRecordFieldUnified.StatusAssignee
> => field.type === "STATUS_ASSIGNEE";

const isID = (
	field: AllFieldTypesWithoutSet,
): field is FFF<
	KintoneRecordField.ID,
	kintoneRecordFieldGet.ID,
	kintoneRecordFieldEvent.ID,
	kintoneRecordFieldUnified.ID
> => field.type === "__ID__";

const isRevision = (
	field: AllFieldTypesWithoutSet,
): field is FFF<
	KintoneRecordField.Revision,
	kintoneRecordFieldGet.Revision,
	kintoneRecordFieldEvent.Revision,
	kintoneRecordFieldUnified.Revision
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
