import {classname, DivProps, mergeStyling, wrapCssInClass} from "../core";
import * as React from "preact/compat";
import {StyledTheme} from "../theme";

export function Div({children, className, styling, ...props}: DivProps) {
    const name = classname();
    return <div {...props} className={`${name}`}>
        {children}
        <style>{wrapCssInClass(name, mergeStyling(styling, StyledTheme.div))}</style>
    </div>;
}