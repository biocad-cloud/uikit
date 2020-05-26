namespace uikit.table_editor {

    export interface editorConfig {
        style?: string;
        className?: string;
        tdConfig?: columnConfig[];
        warning?: Delegate.Action;
        deleteRow?: Delegate.Sub;
        showRowNumber: boolean;
        allowsAddNew: boolean;
        names?: buttonNames;
    }

    export interface buttonNames {
        remove: string;
        edit: string;
        OK: string;
        cancel: string;
        actions: string;
    }

    export interface columnConfig {
        width?: string;
        lockEditor?: boolean;
        title?: string;
        asUrl?: Delegate.Func<string>; 
    }

    export function defaultButtonNames(): buttonNames {
        return <buttonNames>{
            remove: "Remove",
            edit: "Edit",
            OK: "Okey",
            cancel: "Cancel",
            actions: "Actions"
        };
    }

    export function defaultConfig(): editorConfig {
        return <editorConfig>{
            style: null,
            className: "table",
            tdConfig: null,
            warning: DoNothing,
            showRowNumber: false,
            allowsAddNew: true,
            names: defaultButtonNames()
        }
    }

    export function contains(opts: editorConfig, i: number) {
        return (isNullOrUndefined(opts.tdConfig) || opts.tdConfig.length <= i);
    }
}