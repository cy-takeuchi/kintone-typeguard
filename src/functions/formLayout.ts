import { Field, Subtable, Group, Row } from "@kintone/rest-api-client/lib/src/KintoneFields/exportTypes/layout";
import { InSubtable } from "@kintone/rest-api-client/lib/src/KintoneFields/types/fieldLayout";

const isSingleLineText = (field: Field.OneOf): field is Field.SingleLineText => field.type === "SINGLE_LINE_TEXT";
const isMultiLineText = (field: Field.OneOf): field is Field.MultiLineText => field.type === "MULTI_LINE_TEXT";
const isRichText = (field: Field.OneOf): field is Field.RichText => field.type === "RICH_TEXT";
const isNumber = (field: Field.OneOf): field is Field.Number => field.type === "NUMBER";
const isCalc = (field: Field.OneOf): field is Field.Calc => field.type === "CALC";
const isRadioButon = (field: Field.OneOf): field is Field.RadioButton => field.type === "RADIO_BUTTON";
const isCheckBox = (field: Field.OneOf): field is Field.CheckBox => field.type === "CHECK_BOX";
const isMultiSelect = (field: Field.OneOf): field is Field.MultiSelect => field.type === "MULTI_SELECT";
const isDropDown = (field: Field.OneOf): field is Field.Dropdown => field.type === "DROP_DOWN";
const isDate = (field: Field.OneOf): field is Field.Date => field.type === "DATE";
const isTime = (field: Field.OneOf): field is Field.Time => field.type === "TIME";
const isDatetime = (field: Field.OneOf): field is Field.DateTime => field.type === "DATETIME";
const isFile = (field: Field.OneOf): field is Field.File => field.type === "FILE";
const isLink = (field: Field.OneOf): field is Field.Link => field.type === "LINK";
const isUserSelect = (field: Field.OneOf): field is Field.UserSelect => field.type === "USER_SELECT";
const isOrganizationSelect = (field: Field.OneOf): field is Field.OrganizationSelect => field.type === "ORGANIZATION_SELECT";
const isGroupSelect = (field: Field.OneOf): field is Field.GroupSelect => field.type === "GROUP_SELECT";
const isReferenceTable = (field: Field.OneOf): field is Field.ReferenceTable => field.type === "REFERENCE_TABLE";
const isRecordNumber = (field: Field.OneOf): field is Field.RecordNumber => field.type === "RECORD_NUMBER";
const isCreator = (field: Field.OneOf): field is Field.Creator => field.type === "CREATOR";
const isCreatedTime = (field: Field.OneOf): field is Field.CreatedTime => field.type === "CREATED_TIME";
const isModifier = (field: Field.OneOf): field is Field.Modifier => field.type === "MODIFIER";
const isUpdatedTime = (field: Field.OneOf): field is Field.UpdatedTime => field.type === "UPDATED_TIME";
const isSpacer = (field: Field.OneOf): field is Field.Spacer => field.type === "SPACER";
const isHr = (field: Field.OneOf): field is Field.HR => field.type === "HR";
const isLabel = (field: Field.OneOf): field is Field.Label => field.type === "LABEL";
const isRow = (field: Row<Field.OneOf[]> | Subtable<InSubtable[]> | Group<Row<Field.OneOf[]>[]>): field is Row<Field.OneOf[]> =>
  field.type === "ROW";
const isSubtable = (
  field: Row<Field.OneOf[]> | Subtable<InSubtable[]> | Group<Row<Field.OneOf[]>[]>,
): field is Subtable<Field.InSubtable[]> => field.type === "SUBTABLE";
const isGroup = (
  field: Row<Field.OneOf[]> | Subtable<InSubtable[]> | Group<Row<Field.OneOf[]>[]>,
): field is Group<Array<Row<Field.OneOf[]>>> => field.type === "GROUP";

export {
  isSingleLineText,
  isMultiLineText,
  isRichText,
  isNumber,
  isCalc,
  isRadioButon,
  isCheckBox,
  isMultiSelect,
  isDropDown,
  isDate,
  isTime,
  isDatetime,
  isFile,
  isLink,
  isUserSelect,
  isOrganizationSelect,
  isGroupSelect,
  isReferenceTable,
  isRecordNumber,
  isCreator,
  isCreatedTime,
  isModifier,
  isUpdatedTime,
  isSpacer,
  isHr,
  isLabel,
  isRow,
  isSubtable,
  isGroup,
};
