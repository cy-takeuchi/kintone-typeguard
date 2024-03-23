// import { Field, Subtable, Group, Row } from "@kintone/rest-api-client/lib/src/KintoneFields/exportTypes/layout";
// import { InSubtable } from "@kintone/rest-api-client/lib/src/KintoneFields/types/fieldLayout";
import { KintoneFormLayout } from "@kintone/rest-api-client";

const isSingleLineText = (field: KintoneFormLayout.Field.OneOf): field is KintoneFormLayout.Field.SingleLineText =>
  field.type === "SINGLE_LINE_TEXT";
const isMultiLineText = (field: KintoneFormLayout.Field.OneOf): field is KintoneFormLayout.Field.MultiLineText =>
  field.type === "MULTI_LINE_TEXT";
const isRichText = (field: KintoneFormLayout.Field.OneOf): field is KintoneFormLayout.Field.RichText => field.type === "RICH_TEXT";
const isNumber = (field: KintoneFormLayout.Field.OneOf): field is KintoneFormLayout.Field.Number => field.type === "NUMBER";
const isCalc = (field: KintoneFormLayout.Field.OneOf): field is KintoneFormLayout.Field.Calc => field.type === "CALC";
const isRadioButon = (field: KintoneFormLayout.Field.OneOf): field is KintoneFormLayout.Field.RadioButton => field.type === "RADIO_BUTTON";
const isCheckBox = (field: KintoneFormLayout.Field.OneOf): field is KintoneFormLayout.Field.CheckBox => field.type === "CHECK_BOX";
const isMultiSelect = (field: KintoneFormLayout.Field.OneOf): field is KintoneFormLayout.Field.MultiSelect => field.type === "MULTI_SELECT";
const isDropDown = (field: KintoneFormLayout.Field.OneOf): field is KintoneFormLayout.Field.Dropdown => field.type === "DROP_DOWN";
const isDate = (field: KintoneFormLayout.Field.OneOf): field is KintoneFormLayout.Field.Date => field.type === "DATE";
const isTime = (field: KintoneFormLayout.Field.OneOf): field is KintoneFormLayout.Field.Time => field.type === "TIME";
const isDatetime = (field: KintoneFormLayout.Field.OneOf): field is KintoneFormLayout.Field.DateTime => field.type === "DATETIME";
const isFile = (field: KintoneFormLayout.Field.OneOf): field is KintoneFormLayout.Field.File => field.type === "FILE";
const isLink = (field: KintoneFormLayout.Field.OneOf): field is KintoneFormLayout.Field.Link => field.type === "LINK";
const isUserSelect = (field: KintoneFormLayout.Field.OneOf): field is KintoneFormLayout.Field.UserSelect => field.type === "USER_SELECT";
const isOrganizationSelect = (field: KintoneFormLayout.Field.OneOf): field is KintoneFormLayout.Field.OrganizationSelect =>
  field.type === "ORGANIZATION_SELECT";
const isGroupSelect = (field: KintoneFormLayout.Field.OneOf): field is KintoneFormLayout.Field.GroupSelect => field.type === "GROUP_SELECT";
const isReferenceTable = (field: KintoneFormLayout.Field.OneOf): field is KintoneFormLayout.Field.ReferenceTable =>
  field.type === "REFERENCE_TABLE";
const isRecordNumber = (field: KintoneFormLayout.Field.OneOf): field is KintoneFormLayout.Field.RecordNumber =>
  field.type === "RECORD_NUMBER";
const isCreator = (field: KintoneFormLayout.Field.OneOf): field is KintoneFormLayout.Field.Creator => field.type === "CREATOR";
const isCreatedTime = (field: KintoneFormLayout.Field.OneOf): field is KintoneFormLayout.Field.CreatedTime => field.type === "CREATED_TIME";
const isModifier = (field: KintoneFormLayout.Field.OneOf): field is KintoneFormLayout.Field.Modifier => field.type === "MODIFIER";
const isUpdatedTime = (field: KintoneFormLayout.Field.OneOf): field is KintoneFormLayout.Field.UpdatedTime => field.type === "UPDATED_TIME";
const isSpacer = (field: KintoneFormLayout.Field.OneOf): field is KintoneFormLayout.Field.Spacer => field.type === "SPACER";
const isHr = (field: KintoneFormLayout.Field.OneOf): field is KintoneFormLayout.Field.HR => field.type === "HR";
const isLabel = (field: KintoneFormLayout.Field.OneOf): field is KintoneFormLayout.Field.Label => field.type === "LABEL";
const isRow = (
  field:
    | KintoneFormLayout.Row<KintoneFormLayout.Field.OneOf[]>
    | KintoneFormLayout.Subtable<KintoneFormLayout.Field.InSubtable[]>
    | KintoneFormLayout.Group<KintoneFormLayout.Row<KintoneFormLayout.Field.OneOf[]>[]>,
): field is KintoneFormLayout.Row<KintoneFormLayout.Field.OneOf[]> => field.type === "ROW";
const isSubtable = (
  field:
    | KintoneFormLayout.Row<KintoneFormLayout.Field.OneOf[]>
    | KintoneFormLayout.Subtable<KintoneFormLayout.Field.InSubtable[]>
    | KintoneFormLayout.Group<KintoneFormLayout.Row<KintoneFormLayout.Field.OneOf[]>[]>,
): field is KintoneFormLayout.Subtable<KintoneFormLayout.Field.InSubtable[]> => field.type === "SUBTABLE";
const isGroup = (
  field:
    | KintoneFormLayout.Row<KintoneFormLayout.Field.OneOf[]>
    | KintoneFormLayout.Subtable<KintoneFormLayout.Field.InSubtable[]>
    | KintoneFormLayout.Group<KintoneFormLayout.Row<KintoneFormLayout.Field.OneOf[]>[]>,
): field is KintoneFormLayout.Group<Array<KintoneFormLayout.Row<KintoneFormLayout.Field.OneOf[]>>> => field.type === "GROUP";

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
