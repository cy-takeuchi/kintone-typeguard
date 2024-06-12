import type { KintoneRecordField } from "@kintone/rest-api-client";

namespace kintoneRecordReadType {
	export interface RecordNumber {
		type: "RECORD_NUMBER";
		value: string;
	}

	export interface Creator {
		type: "CREATOR";
		value: { code: string; name: string };
	}

	export interface CreatedTime {
		type: "CREATED_TIME";
		value: string;
	}

	export interface Modifier {
		type: "MODIFIER";
		value: { code: string; name: string };
	}

	export interface UpdatedTime {
		type: "UPDATED_TIME";
		value: string;
	}

	export interface SingleLineText {
		type: "SINGLE_LINE_TEXT";
		value: string;
	}

	export interface MultiLineText {
		type: "MULTI_LINE_TEXT";
		value: string;
	}

	export interface RichText {
		type: "RICH_TEXT";
		value: string;
	}

	export interface Number {
		type: "NUMBER";
		value: string;
	}

	export interface Calc {
		type: "CALC";
		value: string;
	}

	export interface CheckBox {
		type: "CHECK_BOX";
		value: string[];
	}

	export interface RadioButton {
		type: "RADIO_BUTTON";
		value: string;
	}

	export interface MultiSelect {
		type: "MULTI_SELECT";
		value: string[];
	}

	export interface Dropdown {
		type: "DROP_DOWN";
		value: string | null;
	}

	export interface UserSelect {
		type: "USER_SELECT";
		value: Array<{ code: string; name: string }>;
	}

	export interface OrganizationSelect {
		type: "ORGANIZATION_SELECT";
		value: Array<{ code: string; name: string }>;
	}

	export interface GroupSelect {
		type: "GROUP_SELECT";
		value: Array<{ code: string; name: string }>;
	}

	export interface Date {
		type: "DATE";
		value: string;
	}

	export interface Time {
		type: "TIME";
		value: string;
	}

	export interface DateTime {
		type: "DATETIME";
		value: string;
	}

	export interface Link {
		type: "LINK";
		value: string;
	}

	export interface File {
		type: "FILE";
		value: Array<{
			contentType: string;
			fileKey: string;
			name: string;
			size: string;
		}>;
	}

	// export interface Lookup {
	// }

	export type Subtable = {
		type: "SUBTABLE";
		value: { id: string; value: { [fieldCode: string]: InSubtable } }[];
	};

	export type Category = {
		type: "CATEGORY";
		value: string[];
	};

	export type Status = {
		type: "STATUS";
		value: string;
	};

	export type StatusAssignee = {
		type: "STATUS_ASSIGNEE";
		value: Array<{ code: string; name: string }>;
	};

	export type ID = {
		type: "__ID__";
		value: string;
	};

	export type Revision = {
		type: "__REVISION__";
		value: string;
	};

	export type InSubtable =
		| SingleLineText
		| Number
		| Calc
		| MultiLineText
		| RichText
		| Link
		| CheckBox
		| RadioButton
		| Dropdown
		| MultiSelect
		| File
		| Date
		| Time
		| DateTime
		| UserSelect
		| OrganizationSelect
		| GroupSelect;
	// | Lookup;

	export type OneOf =
		| RecordNumber
		| Creator
		| CreatedTime
		| Modifier
		| UpdatedTime
		| Category
		| Status
		| StatusAssignee
		| SingleLineText
		| Number
		| Calc
		| MultiLineText
		| RichText
		| Link
		| CheckBox
		| RadioButton
		| Dropdown
		| MultiSelect
		| File
		| Date
		| Time
		| DateTime
		| UserSelect
		| OrganizationSelect
		| GroupSelect
		// | Lookup
		| Subtable
		| ID
		| Revision;

	export type Record = {
		[fieldCode: string]: kintoneRecordReadType.OneOf;
	};
}

namespace kintoneRecordWriteType {
	export interface SingleLineText {
		type: "SINGLE_LINE_TEXT";
		value: string;
	}

	export interface File {
		type: "FILE";
		value: Array<{
			fileKey: string;
		}>;
	}

	export type OneOf = SingleLineText | File;
}

const isRecordNumber = (
	field:
		| KintoneRecordField.OneOf
		| kintoneRecordReadType.OneOf
		| kintoneRecordWriteType.OneOf,
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
	field:
		| KintoneRecordField.OneOf
		| kintoneRecordReadType.OneOf
		| kintoneRecordWriteType.OneOf,
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
	kintoneRecordReadType,
};
