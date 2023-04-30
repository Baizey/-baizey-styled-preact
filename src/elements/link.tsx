import {classname, LinkProps, mergeStyling, wrapCssInClass} from "../core";
import * as React from "preact/compat";
import {StyledTheme} from "../theme";
import {Style} from "./style";

export function Link({
                         children,
                         className,
                         styling,
                         ...props
                     }: LinkProps) {
    const name = classname();
    return <a {...props} className={`${name}`}>
        {children}
        <Style css={wrapCssInClass(name, mergeStyling(styling, StyledTheme.link))}/>
    </a>;
}