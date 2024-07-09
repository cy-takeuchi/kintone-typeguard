namespace kintoneRecordFieldSet {
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
		value: { code: string; name: string }[];
	}

	export interface OrganizationSelect {
		type: "ORGANIZATION_SELECT";
		value: { code: string; name: string }[];
	}

	export interface GroupSelect {
		type: "GROUP_SELECT";
		value: { code: string; name: string }[];
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
		value: { fileKey: string }[];
	}

	// export interface Lookup {
	// }

	export type Subtable = {
		type: "SUBTABLE";
		value: { id?: string; value: { [fieldCode: string]: InSubtable } }[];
	};

	export type Category = {
		type: "CATEGORY";
		value: string[];
	};

	// export type Status = {
	// 	type: "STATUS";
	// 	value: string;
	// };

	// export type StatusAssignee = {
	// 	type: "STATUS_ASSIGNEE";
	// 	value: { code: string; name: string }[];
	// };

	// export type ID = {
	// 	type: "__ID__";
	// 	value: string;
	// };

	// export type Revision = {
	// 	type: "__REVISION__";
	// 	value: string;
	// };

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
		// | Status
		// | StatusAssignee
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
		| Subtable;
	// | ID
	// | Revision;

	export type Record = {
		[fieldCode: string]: OneOf;
	};
}

export { kintoneRecordFieldSet };
