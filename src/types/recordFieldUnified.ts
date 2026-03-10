import type { KintoneRecordField } from "@kintone/rest-api-client";

/**
 * kintoneの4つのコンテキスト（Event/Get/Set/REST API）で統一的に使用できるフィールド型
 *
 * この型は@kintone/rest-api-clientのKintoneRecordFieldを再エクスポートし、
 * 追加のユーティリティ型を提供します。
 *
 * asキャストなしで@kintone/rest-api-clientに渡すことができます。
 */
namespace kintoneRecordFieldUnified {
	// ===== @kintone/rest-api-clientからの再エクスポート =====

	export type ID = KintoneRecordField.ID;
	export type Revision = KintoneRecordField.Revision;
	export type RecordNumber = KintoneRecordField.RecordNumber;
	export type Creator = KintoneRecordField.Creator;
	export type CreatedTime = KintoneRecordField.CreatedTime;
	export type Modifier = KintoneRecordField.Modifier;
	export type UpdatedTime = KintoneRecordField.UpdatedTime;
	export type SingleLineText = KintoneRecordField.SingleLineText;
	export type Number = KintoneRecordField.Number;
	export type Calc = KintoneRecordField.Calc;
	export type MultiLineText = KintoneRecordField.MultiLineText;
	export type RichText = KintoneRecordField.RichText;
	export type Link = KintoneRecordField.Link;
	export type CheckBox = KintoneRecordField.CheckBox;
	export type RadioButton = KintoneRecordField.RadioButton;
	export type Dropdown = KintoneRecordField.Dropdown;
	export type MultiSelect = KintoneRecordField.MultiSelect;
	export type File = KintoneRecordField.File;
	export type Date = KintoneRecordField.Date;
	export type Time = KintoneRecordField.Time;
	export type DateTime = KintoneRecordField.DateTime;
	export type UserSelect = KintoneRecordField.UserSelect;
	export type OrganizationSelect = KintoneRecordField.OrganizationSelect;
	export type GroupSelect = KintoneRecordField.GroupSelect;
	export type Category = KintoneRecordField.Category;
	export type Status = KintoneRecordField.Status;
	export type StatusAssignee = KintoneRecordField.StatusAssignee;
	export type InSubtable = KintoneRecordField.InSubtable;
	export type Subtable<
		T extends { [fieldCode: string]: InSubtable } = {
			[fieldCode: string]: InSubtable;
		},
	> = KintoneRecordField.Subtable<T>;
	export type OneOf = KintoneRecordField.OneOf;

	// ===== ユーティリティ型 =====

	/** ユーザー/組織/グループの共通エンティティ型 */
	export interface Entity {
		code: string;
		name: string;
	}

	/** ファイル情報 */
	export interface FileInformation {
		contentType: string;
		fileKey: string;
		name: string;
		size: string;
	}

	/** レコード型 */
	export type Record = {
		$id?: ID;
		$revision?: Revision;
	} & {
		[fieldCode: string]: Exclude<OneOf, ID | Revision>;
	};
}

export { kintoneRecordFieldUnified };
