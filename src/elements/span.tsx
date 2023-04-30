import {classname, mergeStyling, SpanProps, wrapCssInClass} from "../core";
import * as React from "preact/compat";
import {StyledTheme} from "../theme";
import {Style} from "./style";

export function Span({
                         children,
                         className,
                         styling,
                         ...props
                     }: SpanProps) {
    const name = classname();
    return <span {...props} className={`${name}`}>
        {children}
        <Style css={wrapCssInClass(name, mergeStyling(styling, StyledTheme.span))}/>
    </span>;
}