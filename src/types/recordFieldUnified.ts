import type { KintoneRecordField } from "@kintone/rest-api-client";

/**
 * kintoneの4つのコンテキスト（Event/Get/Set/REST API）で統一的に使用できるフィールド型
 *
 * この型は以下のすべてと互換性があります：
 * - kintoneRecordFieldEvent: JavaScriptイベント（app.record.detail.showなど）
 * - kintoneRecordFieldGet: レコード取得時
 * - kintoneRecordFieldSet: レコード設定時
 * - KintoneRecordField (@kintone/rest-api-client): REST API操作
 *
 * asキャストなしで@kintone/rest-api-clientに渡すことができます。
 */
namespace kintoneRecordFieldUnified {
	/** ユーザー/組織/グループの共通エンティティ型 */
	export interface Entity {
		code: string;
		name: string;
	}

	/** ファイル情報（取得時・イベント時） */
	export interface FileInformation {
		contentType: string;
		fileKey: string;
		name: string;
		size: string;
	}

	/** ファイル情報（設定時） */
	export interface FileInformationForSet {
		fileKey: string;
	}

	// ===== システムフィールド（読み取り専用） =====

	export interface RecordNumber {
		type: "RECORD_NUMBER";
		value: string;
	}

	export interface Creator {
		type: "CREATOR";
		value: Entity;
	}

	export interface CreatedTime {
		type: "CREATED_TIME";
		value: string;
	}

	export interface Modifier {
		type: "MODIFIER";
		value: Entity;
	}

	export interface UpdatedTime {
		type: "UPDATED_TIME";
		value: string;
	}

	export interface ID {
		type: "__ID__";
		value: string;
	}

	export interface Revision {
		type: "__REVISION__";
		value: string;
	}

	// ===== テキスト系フィールド =====

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

	export interface Link {
		type: "LINK";
		value: string;
	}

	// ===== 数値・計算フィールド =====

	export interface Number {
		type: "NUMBER";
		value: string;
	}

	export interface Calc {
		type: "CALC";
		value: string;
	}

	// ===== 選択系フィールド =====

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

	/**
	 * ドロップダウン
	 * @kintone/rest-api-clientと互換性を持たせるため string | null
	 */
	export interface Dropdown {
		type: "DROP_DOWN";
		value: string | null;
	}

	// ===== ユーザー選択系フィールド =====

	export interface UserSelect {
		type: "USER_SELECT";
		value: Entity[];
	}

	export interface OrganizationSelect {
		type: "ORGANIZATION_SELECT";
		value: Entity[];
	}

	export interface GroupSelect {
		type: "GROUP_SELECT";
		value: Entity[];
	}

	// ===== 日時系フィールド =====

	/**
	 * 日付フィールド
	 * @kintone/rest-api-clientと互換性を持たせるため string | null
	 */
	export interface Date {
		type: "DATE";
		value: string | null;
	}

	/**
	 * 時刻フィールド
	 * @kintone/rest-api-clientと互換性を持たせるため string | null
	 */
	export interface Time {
		type: "TIME";
		value: string | null;
	}

	export interface DateTime {
		type: "DATETIME";
		value: string;
	}

	// ===== ファイルフィールド =====

	/**
	 * ファイルフィールド（取得時）
	 * FileInformation配列を持つ
	 */
	export interface File {
		type: "FILE";
		value: FileInformation[];
	}

	/**
	 * ファイルフィールド（設定時）
	 * fileKeyのみを持つ
	 */
	export interface FileForSet {
		type: "FILE";
		value: FileInformationForSet[];
	}

	// ===== サブテーブル =====

	/** サブテーブル内で使用可能なフィールド型 */
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

	/** サブテーブル内で使用可能なフィールド型（設定時） */
	export type InSubtableForSet =
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
		| FileForSet
		| Date
		| Time
		| DateTime
		| UserSelect
		| OrganizationSelect
		| GroupSelect;

	/** サブテーブル行 */
	export interface SubtableRow<
		T extends { [fieldCode: string]: InSubtable } = {
			[fieldCode: string]: InSubtable;
		},
	> {
		id: string;
		value: T;
	}

	/** サブテーブル行（設定時、idはオプショナル） */
	export interface SubtableRowForSet<
		T extends { [fieldCode: string]: InSubtableForSet } = {
			[fieldCode: string]: InSubtableForSet;
		},
	> {
		id?: string;
		value: T;
	}

	export interface Subtable<
		T extends { [fieldCode: string]: InSubtable } = {
			[fieldCode: string]: InSubtable;
		},
	> {
		type: "SUBTABLE";
		value: SubtableRow<T>[];
	}

	export interface SubtableForSet<
		T extends { [fieldCode: string]: InSubtableForSet } = {
			[fieldCode: string]: InSubtableForSet;
		},
	> {
		type: "SUBTABLE";
		value: SubtableRowForSet<T>[];
	}

	// ===== プロセス管理系フィールド =====

	export interface Category {
		type: "CATEGORY";
		value: string[];
	}

	export interface Status {
		type: "STATUS";
		value: string;
	}

	export interface StatusAssignee {
		type: "STATUS_ASSIGNEE";
		value: Entity[];
	}

	// ===== 統合型 =====

	/** すべてのフィールド型のユニオン（取得・参照用） */
	export type OneOf =
		| RecordNumber
		| Creator
		| CreatedTime
		| Modifier
		| UpdatedTime
		| ID
		| Revision
		| SingleLineText
		| MultiLineText
		| RichText
		| Link
		| Number
		| Calc
		| CheckBox
		| RadioButton
		| MultiSelect
		| Dropdown
		| UserSelect
		| OrganizationSelect
		| GroupSelect
		| Date
		| Time
		| DateTime
		| File
		| Subtable
		| Category
		| Status
		| StatusAssignee;

	/** 書き込み可能なフィールド型のユニオン（設定・登録・更新用） */
	export type OneOfForSet =
		| SingleLineText
		| MultiLineText
		| RichText
		| Link
		| Number
		| CheckBox
		| RadioButton
		| MultiSelect
		| Dropdown
		| UserSelect
		| OrganizationSelect
		| GroupSelect
		| Date
		| Time
		| DateTime
		| FileForSet
		| SubtableForSet;

	/** レコード型（取得用） */
	export type Record = {
		$id?: ID;
		$revision?: Revision;
	} & {
		[fieldCode: string]: Exclude<OneOf, ID | Revision>;
	};

	/** レコード型（設定用） */
	export type RecordForSet = {
		[fieldCode: string]: OneOfForSet;
	};

	// ===== @kintone/rest-api-client互換型ヘルパー =====

	/**
	 * KintoneRecordField.OneOfに変換可能であることを保証する型
	 * この型はKintoneRecordField.OneOfにasキャストなしで代入可能
	 */
	export type AsKintoneRecordField<T extends OneOf> = T extends File
		? KintoneRecordField.File
		: T extends Subtable<infer U>
			? KintoneRecordField.Subtable<{
					[K in keyof U]: U[K] extends InSubtable
						? AsKintoneRecordFieldInSubtable<U[K]>
						: never;
				}>
			: T;

	type AsKintoneRecordFieldInSubtable<T extends InSubtable> = T extends File
		? KintoneRecordField.File
		: T;
}

export { kintoneRecordFieldUnified };
