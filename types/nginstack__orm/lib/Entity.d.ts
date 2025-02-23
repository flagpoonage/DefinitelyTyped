export = Entity;
declare function Entity(
    classKey: number,
    dataSet: DataSet,
    opt_options?: EntityOptions | Record<any, any>
): void;
declare class Entity {
    constructor(classKey: number, dataSet: DataSet, opt_options?: EntityOptions | Record<any, any>);
    userKey_: number;
    fieldsFilter_: null | string[] | ((arg0: Field) => boolean);
    dataSet_: DataSet;
    autoPersist_: boolean;
    customModelDef_: ModelDef;
    originalBookmark_: string | null;
    protected CloneClass_(): void;
    private cloneableProperties_;
    private fieldPermissions_;
    private modelDef_;
    private configDef_;
    private visibleFieldNames_;
    private visibleFieldNamesSet_;
    private changeableFieldNamesSet_;
    private visibleFieldIndexes_;
    private fields_;
    private editableProductFields_;
    private extraFilterFields_;
    private requiredFields_;
    private fieldsWithDefaultValue_;
    private masterDetailFields_;
    private editableNegativeKeys_;
    private autoPersistVersion_;
    key: number;
    classKey: number;
    autoPersist: boolean;
    postPending: boolean;
    state: EntityState;
    protected updateClass_(classKey: number): void;
    classKey_: number;
    private fieldTypeIsSupported_;
    private normalizeFieldValue_;
    private emitEvent_;
    private emitDataSetEvent_;
    private emitFieldEvent_;
    private emitFieldChangeEvent_;
    private getExtraFilters_;
    private permissionFieldLabels_;
    private checkPermission_;
    private checkPosition_;
    private checkIfIsEmpty_;
    private checkIfClassIsJustToGroup_;
    private checkIfCanChangeNegativeKey_;
    private checkRequiredFields_;
    private checkStrictMode_;
    private checkIfFieldIsReadOnly_;
    private checkIfCanChangeClass_;
    private validateLookupValue_;
    private executeMasterDetailActions_;
    private suggestDefaultValues_;
    protected insert_(): void;
    set(name: string, value: any): void;
    get(name: any): any;
    assign(values: { [x: string]: any }): void;
    edit(): void;
    cancel(): void;
    post(): void;
    delete(): void;
    bindDataSet(dataSet: DataSet): void;
    key_: any;
    clone(): Entity;
    persist(): number;
    private stringify_;
    toJSONString(): string;
    toJSONSchema(): any;
}
declare namespace Entity {
    export {
        ALWAYS_VISIBLE_FIELDS_,
        ALWAYS_INVISIBLE_FIELDS_,
        fromKey,
        fromDataSet,
        requiresStrictMode,
        ModelDef,
        ConfigDef,
        Field,
        Event,
        Emitter,
        FieldPermissions,
        DataSet,
        EntityOptions,
        EntityState,
    };
}
type DataSet = import('@nginstack/engine/lib/dataset/DataSet');
type EntityOptions = import('./EntityOptions');
type Field = import('@nginstack/engine/lib/classdef/Field');
type ModelDef = import('@nginstack/engine/lib/classdef/ModelDef');
import EntityState = require('./EntityState.js');
declare var ALWAYS_VISIBLE_FIELDS_: Record<string, boolean>;
declare var ALWAYS_INVISIBLE_FIELDS_: Record<string, boolean>;
declare function fromKey(
    key: number,
    opt_options?:
        | {
              userKey: number;
              fields: string[] | ((arg0: Field) => boolean);
          }
        | Record<any, any>
): Entity;
declare function fromDataSet(
    classKey: number,
    dataSet: DataSet,
    opt_options?:
        | {
              userKey: number;
              fields: string[] | ((arg0: Field) => boolean);
          }
        | Record<any, any>
): Entity;
declare var requiresStrictMode: boolean;
type ConfigDef = import('@nginstack/engine/lib/classdef/ConfigDef');
type Event = import('@nginstack/engine/lib/event/Event');
type Emitter = import('@nginstack/engine/lib/event/Emitter');
type FieldPermissions = import('@nginstack/engine/lib/security/FieldPermissions');
interface EntityState {
    UNCHANGED: number;
    ADDED: number;
    MODIFIED: number;
    DELETED: number;
    DETACHED: number;
}
