import {classname, DivProps, mergeStyling, wrapCssInClass} from "../core";
import * as React from "preact/compat";
import {StyledTheme} from "../theme";
import {Style} from "./style";

export function Div({children, className, styling, ...props}: DivProps) {
    const name = classname();
    return <div {...props} className={`${name}`}>
        {children}
        <Style css={wrapCssInClass(name, mergeStyling(styling, StyledTheme.div))}/>
    </div>;
}