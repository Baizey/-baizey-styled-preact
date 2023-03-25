import {classname, ElementProps, mergeStyling, wrapCssInClass} from "../core";
import * as React from "preact/compat";
import {StyledTheme} from "../theme";

export function Span({
                         children,
                         className,
                         styling,
                         ...props
                     }: ElementProps & React.HTMLAttributes<HTMLSpanElement>) {
    const name = classname();
    return <span {...props} className={`${className},${name}`}>
        {children}
        {wrapCssInClass(name, mergeStyling(styling, StyledTheme.span))}
    </span>;
}