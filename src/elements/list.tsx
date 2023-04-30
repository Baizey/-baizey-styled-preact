import {classname, ListItemProps, ListProps, mergeStyling, wrapCssInClass} from "../core";
import * as React from "preact/compat";
import {StyledTheme} from "../theme";
import {Style} from "./style";

export function List({
                         children,
                         className,
                         styling,
                         ...props
                     }: ListProps) {
    const name = classname();
    return <ul {...props} className={`${name}`}>
        {children}
        <Style css={wrapCssInClass(name, mergeStyling(styling, StyledTheme.list))}/>
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
        <Style css={wrapCssInClass(name, mergeStyling(styling, StyledTheme.listItem))}/>
    </li>;
}