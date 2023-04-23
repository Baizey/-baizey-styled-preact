import {classname, mergeStyling, SpanProps, wrapCssInClass} from "../core";
import * as React from "preact/compat";
import {StyledTheme} from "../theme";

export function Span({
                         children,
                         className,
                         styling,
                         ...props
                     }: SpanProps) {
    const name = classname();
    return <span {...props} className={`${name}`}>
        {children}
        <style>{wrapCssInClass(name, mergeStyling(styling, StyledTheme.span))}</style>
    </span>;
}