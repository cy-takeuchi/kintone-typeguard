import type { kintoneRecordFieldGet } from "../exportTypes/recordFieldGet";
import type { kintoneRecordFieldSet } from "../exportTypes/recordFieldSet";
import {
	isCalc,
	isCategory,
	isCheckBox,
	isCreatedTime,
	isCreator,
	isDate,
	isDatetime,
	isDropDown,
	isGroupSelect,
	isID,
	isLink,
	isModifier,
	isMultiLineText,
	isMultiSelect,
	isNumber,
	isOrganizationSelect,
	isRadioButton,
	isRecordNumber,
	isRevision,
	isRichText,
	isSingleLineText,
	isStatus,
	isStatusAssignee,
	isSubtable,
	isTime,
	isUpdatedTime,
	isUserSelect,
} from "./record";

export const getToSet = (
	record: kintoneRecordFieldGet.Record,
): kintoneRecordFieldSet.Record => {
	const convertedRecord: kintoneRecordFieldSet.Record = {};

	for (const [fieldCode, field] of Object.entries(record)) {
		// 読み取り専用フィールドを除外
		if (
			isID(field) ||
			isRevision(field) ||
			isRecordNumber(field) ||
			isCreator(field) ||
			isCreatedTime(field) ||
			isModifier(field) ||
			isUpdatedTime(field) ||
			isCategory(field) ||
			isStatus(field) ||
			isStatusAssignee(field)
		) {
			continue;
		}

		// File型の変換
		if (field.type === "FILE") {
			convertedRecord[fieldCode] = {
				type: "FILE",
				value: field.value.map((file) => ({
					fileKey: file.fileKey,
				})),
			};
			continue;
		}

		// その他のフィールドはそのまま変換
		if (
			isSingleLineText(field) ||
			isNumber(field) ||
			isCalc(field) ||
			isMultiLineText(field) ||
			isRichText(field) ||
			isLink(field) ||
			isCheckBox(field) ||
			isRadioButton(field) ||
			isDropDown(field) ||
			isMultiSelect(field) ||
			isDate(field) ||
			isTime(field) ||
			isDatetime(field) ||
			isUserSelect(field) ||
			isOrganizationSelect(field) ||
			isGroupSelect(field) ||
			isSubtable(field)
		) {
			convertedRecord[fieldCode] = field;
		}
	}

	return convertedRecord;
};
