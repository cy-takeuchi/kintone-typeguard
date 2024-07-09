import type { KintoneRecordField } from "@kintone/rest-api-client";
import type { kintoneRecordFieldEvent } from "../exportTypes/recordFieldEvent";
import type { kintoneRecordFieldGet } from "../exportTypes/recordFieldGet";
import type { kintoneRecordFieldSet } from "../exportTypes/recordFieldSet";

type F<A, B> = A extends B ? B : A;
type FF<A, B, C> = F<A, F<B, F<C, never>>>;
type FFF<A, B, C, D> = F<A, F<B, F<C, F<D, never>>>>;

const isRecordNumber = (
	field:
		| KintoneRecordField.OneOf
		| kintoneRecordFieldGet.OneOf
		| kintoneRecordFieldSet.OneOf
		| kintoneRecordFieldEvent.OneOf,
): field is FFF<
	KintoneRecordField.RecordNumber,
	kintoneRecordFieldGet.RecordNumber,
	kintoneRecordFieldSet.RecordNumber,
	kintoneRecordFieldEvent.RecordNumber
> => field.type === "RECORD_NUMBER";
const isCreator = (
	field:
		| KintoneRecordField.OneOf
		| kintoneRecordFieldGet.OneOf
		| kintoneRecordFieldSet.OneOf
		| kintoneRecordFieldEvent.OneOf,
): field is FFF<
	KintoneRecordField.Creator,
	kintoneRecordFieldGet.Creator,
	kintoneRecordFieldSet.Creator,
	kintoneRecordFieldEvent.Creator
> => field.type === "CREATOR";
const isCreatedTime = (
	field:
		| KintoneRecordField.OneOf
		| kintoneRecordFieldGet.OneOf
		| kintoneRecordFieldSet.OneOf
		| kintoneRecordFieldEvent.OneOf,
): field is
	| KintoneRecordField.CreatedTime
	| kintoneRecordFieldGet.CreatedTime
	| kintoneRecordFieldSet.CreatedTime
	| kintoneRecordFieldEvent.CreatedTime => field.type === "CREATED_TIME";
const isModifier = (
	field:
		| KintoneRecordField.OneOf
		| kintoneRecordFieldGet.OneOf
		| kintoneRecordFieldSet.OneOf
		| kintoneRecordFieldEvent.OneOf,
): field is
	| KintoneRecordField.Modifier
	| kintoneRecordFieldGet.Modifier
	| kintoneRecordFieldSet.Modifier
	| kintoneRecordFieldEvent.Modifier => field.type === "MODIFIER";
const isUpdatedTime = (
	field:
		| KintoneRecordField.OneOf
		| kintoneRecordFieldGet.OneOf
		| kintoneRecordFieldSet.OneOf
		| kintoneRecordFieldEvent.OneOf,
): field is
	| KintoneRecordField.UpdatedTime
	| kintoneRecordFieldGet.UpdatedTime
	| kintoneRecordFieldSet.UpdatedTime
	| kintoneRecordFieldEvent.UpdatedTime => field.type === "UPDATED_TIME";
const isSingleLineText = (
	field:
		| KintoneRecordField.OneOf
		| kintoneRecordFieldGet.OneOf
		| kintoneRecordFieldSet.OneOf
		| kintoneRecordFieldEvent.OneOf,
): field is FFF<
	KintoneRecordField.SingleLineText,
	kintoneRecordFieldGet.SingleLineText,
	kintoneRecordFieldEvent.SingleLineText,
	kintoneRecordFieldSet.SingleLineText
> => field.type === "SINGLE_LINE_TEXT";
const isMultiLineText = (
	field:
		| KintoneRecordField.OneOf
		| kintoneRecordFieldGet.OneOf
		| kintoneRecordFieldSet.OneOf
		| kintoneRecordFieldEvent.OneOf,
): field is FFF<
	KintoneRecordField.MultiLineText,
	kintoneRecordFieldGet.MultiLineText,
	kintoneRecordFieldSet.MultiLineText,
	kintoneRecordFieldEvent.MultiLineText
> => field.type === "MULTI_LINE_TEXT";
const isRichText = (
	field:
		| KintoneRecordField.OneOf
		| kintoneRecordFieldGet.OneOf
		| kintoneRecordFieldSet.OneOf
		| kintoneRecordFieldEvent.OneOf,
): field is FFF<
	KintoneRecordField.RichText,
	kintoneRecordFieldGet.RichText,
	kintoneRecordFieldSet.RichText,
	kintoneRecordFieldEvent.RichText
> => field.type === "RICH_TEXT";
const isNumber = (
	field:
		| KintoneRecordField.OneOf
		| kintoneRecordFieldGet.OneOf
		| kintoneRecordFieldSet.OneOf
		| kintoneRecordFieldEvent.OneOf,
): field is FFF<
	KintoneRecordField.Number,
	kintoneRecordFieldGet.Number,
	kintoneRecordFieldSet.Number,
	kintoneRecordFieldEvent.Number
> => field.type === "NUMBER";
const isCalc = (
	field:
		| KintoneRecordField.OneOf
		| kintoneRecordFieldGet.OneOf
		| kintoneRecordFieldSet.OneOf
		| kintoneRecordFieldEvent.OneOf,
): field is FFF<
	KintoneRecordField.Calc,
	kintoneRecordFieldGet.Calc,
	kintoneRecordFieldSet.Calc,
	kintoneRecordFieldEvent.Calc
> => field.type === "CALC";
const isCheckBox = (
	field:
		| KintoneRecordField.OneOf
		| kintoneRecordFieldGet.OneOf
		| kintoneRecordFieldSet.OneOf
		| kintoneRecordFieldEvent.OneOf,
): field is FFF<
	KintoneRecordField.CheckBox,
	kintoneRecordFieldGet.CheckBox,
	kintoneRecordFieldSet.CheckBox,
	kintoneRecordFieldEvent.CheckBox
> => field.type === "CHECK_BOX";
const isRadioButton = (
	field:
		| KintoneRecordField.OneOf
		| kintoneRecordFieldGet.OneOf
		| kintoneRecordFieldSet.OneOf
		| kintoneRecordFieldEvent.OneOf,
): field is FFF<
	KintoneRecordField.RadioButton,
	kintoneRecordFieldGet.RadioButton,
	kintoneRecordFieldSet.RadioButton,
	kintoneRecordFieldEvent.RadioButton
> => field.type === "RADIO_BUTTON";
const isMultiSelect = (
	field:
		| KintoneRecordField.OneOf
		| kintoneRecordFieldGet.OneOf
		| kintoneRecordFieldSet.OneOf
		| kintoneRecordFieldEvent.OneOf,
): field is FFF<
	KintoneRecordField.MultiSelect,
	kintoneRecordFieldGet.MultiSelect,
	kintoneRecordFieldSet.MultiSelect,
	kintoneRecordFieldEvent.MultiSelect
> => field.type === "MULTI_SELECT";
const isDropDown = (
	field:
		| KintoneRecordField.OneOf
		| kintoneRecordFieldGet.OneOf
		| kintoneRecordFieldSet.OneOf
		| kintoneRecordFieldEvent.OneOf,
): field is FFF<
	KintoneRecordField.Dropdown,
	kintoneRecordFieldGet.Dropdown,
	kintoneRecordFieldSet.Dropdown,
	kintoneRecordFieldEvent.Dropdown
> => field.type === "DROP_DOWN";
const isUserSelect = (
	field:
		| KintoneRecordField.OneOf
		| kintoneRecordFieldGet.OneOf
		| kintoneRecordFieldSet.OneOf
		| kintoneRecordFieldEvent.OneOf,
): field is FFF<
	KintoneRecordField.UserSelect,
	kintoneRecordFieldGet.UserSelect,
	kintoneRecordFieldSet.UserSelect,
	kintoneRecordFieldEvent.UserSelect
> => field.type === "USER_SELECT";
const isOrganizationSelect = (
	field:
		| KintoneRecordField.OneOf
		| kintoneRecordFieldGet.OneOf
		| kintoneRecordFieldSet.OneOf
		| kintoneRecordFieldEvent.OneOf,
): field is FFF<
	KintoneRecordField.OrganizationSelect,
	kintoneRecordFieldGet.OrganizationSelect,
	kintoneRecordFieldSet.OrganizationSelect,
	kintoneRecordFieldEvent.OrganizationSelect
> => field.type === "ORGANIZATION_SELECT";
const isGroupSelect = (
	field:
		| KintoneRecordField.OneOf
		| kintoneRecordFieldGet.OneOf
		| kintoneRecordFieldSet.OneOf
		| kintoneRecordFieldEvent.OneOf,
): field is FFF<
	KintoneRecordField.GroupSelect,
	kintoneRecordFieldGet.GroupSelect,
	kintoneRecordFieldSet.GroupSelect,
	kintoneRecordFieldEvent.GroupSelect
> => field.type === "GROUP_SELECT";
const isDate = (
	field:
		| KintoneRecordField.OneOf
		| kintoneRecordFieldGet.OneOf
		| kintoneRecordFieldSet.OneOf
		| kintoneRecordFieldEvent.OneOf,
): field is FFF<
	KintoneRecordField.Date,
	kintoneRecordFieldGet.Date,
	kintoneRecordFieldSet.Date,
	kintoneRecordFieldEvent.Date
> => field.type === "DATE";
const isTime = (
	field:
		| KintoneRecordField.OneOf
		| kintoneRecordFieldGet.OneOf
		| kintoneRecordFieldSet.OneOf
		| kintoneRecordFieldEvent.OneOf,
): field is FFF<
	KintoneRecordField.Time,
	kintoneRecordFieldGet.Time,
	kintoneRecordFieldSet.Time,
	kintoneRecordFieldEvent.Time
> => field.type === "TIME";
const isDatetime = (
	field:
		| KintoneRecordField.OneOf
		| kintoneRecordFieldGet.OneOf
		| kintoneRecordFieldSet.OneOf
		| kintoneRecordFieldEvent.OneOf,
): field is FFF<
	KintoneRecordField.DateTime,
	kintoneRecordFieldGet.DateTime,
	kintoneRecordFieldSet.DateTime,
	kintoneRecordFieldEvent.DateTime
> => field.type === "DATETIME";
const isLink = (
	field:
		| KintoneRecordField.OneOf
		| kintoneRecordFieldGet.OneOf
		| kintoneRecordFieldSet.OneOf
		| kintoneRecordFieldEvent.OneOf,
): field is FFF<
	KintoneRecordField.Link,
	kintoneRecordFieldGet.Link,
	kintoneRecordFieldSet.Link,
	kintoneRecordFieldEvent.Link
> => field.type === "LINK";
const isFile = (
	field:
		| KintoneRecordField.OneOf
		| kintoneRecordFieldGet.OneOf
		| kintoneRecordFieldSet.OneOf
		| kintoneRecordFieldEvent.OneOf,
): field is FFF<
	KintoneRecordField.File,
	kintoneRecordFieldGet.File,
	kintoneRecordFieldSet.File,
	kintoneRecordFieldEvent.File
> => field.type === "FILE";
const isSubtable = (
	field:
		| KintoneRecordField.OneOf
		| kintoneRecordFieldGet.OneOf
		| kintoneRecordFieldSet.OneOf
		| kintoneRecordFieldEvent.OneOf,
): field is FFF<
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
	}
> => field.type === "SUBTABLE";
const isCategory = (
	field:
		| KintoneRecordField.OneOf
		| kintoneRecordFieldGet.OneOf
		| kintoneRecordFieldSet.OneOf
		| kintoneRecordFieldEvent.OneOf,
): field is FFF<
	KintoneRecordField.Category,
	kintoneRecordFieldGet.Category,
	kintoneRecordFieldSet.Category,
	kintoneRecordFieldEvent.Category
> => field.type === "CATEGORY";
const isStatus = (
	field:
		| KintoneRecordField.OneOf
		| kintoneRecordFieldGet.OneOf
		// | kintoneRecordFieldSet.OneOf
		| kintoneRecordFieldEvent.OneOf,
): field is FF<
	KintoneRecordField.Status,
	kintoneRecordFieldGet.Status,
	// kintoneRecordFieldSet.Status,
	kintoneRecordFieldEvent.Status
> => field.type === "STATUS";
const isStatusAssignee = (
	field:
		| KintoneRecordField.OneOf
		| kintoneRecordFieldGet.OneOf
		// | kintoneRecordFieldSet.OneOf
		| kintoneRecordFieldEvent.OneOf,
): field is FF<
	KintoneRecordField.StatusAssignee,
	kintoneRecordFieldGet.StatusAssignee,
	// kintoneRecordFieldSet.StatusAssignee,
	kintoneRecordFieldEvent.StatusAssignee
> => field.type === "STATUS_ASSIGNEE";
const isID = (
	field:
		| KintoneRecordField.OneOf
		| kintoneRecordFieldGet.OneOf
		// | kintoneRecordFieldSet.OneOf
		| kintoneRecordFieldEvent.OneOf,
): field is FF<
	KintoneRecordField.ID,
	kintoneRecordFieldGet.ID,
	// kintoneRecordFieldSet.ID,
	kintoneRecordFieldEvent.ID
> => field.type === "__ID__";
const isRevision = (
	field:
		| KintoneRecordField.OneOf
		| kintoneRecordFieldGet.OneOf
		// | kintoneRecordFieldSet.OneOf
		| kintoneRecordFieldEvent.OneOf,
): field is FF<
	KintoneRecordField.Revision,
	kintoneRecordFieldGet.Revision,
	// kintoneRecordFieldSet.Revision,
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
