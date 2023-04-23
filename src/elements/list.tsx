import {classname, ListItemProps, ListProps, mergeStyling, wrapCssInClass} from "../core";
import * as React from "preact/compat";
import {StyledTheme} from "../theme";

export function List({
                         children,
                         className,
                         styling,
                         ...props
                     }: ListProps) {
    const name = classname();
    return <ul {...props} className={`${name}`}>
        {children}
        <style>{wrapCssInClass(name, mergeStyling(styling, StyledTheme.list))}</style>
    </ul>;
}

export function ListItem({
                             children,
                             className,
                             styling,
                             ...props
                         }: ListItemProps) {
    const name = classname()
    return <li {...props} className={`${name}`}>
        {children}
        <style>{wrapCssInClass(name, mergeStyling(styling, StyledTheme.listItem))}</style>
    </li>;
}