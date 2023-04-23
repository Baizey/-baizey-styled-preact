import {classname, ElementProps, mergeStyling, wrapCssInClass} from "../core";
import * as React from "preact/compat";
import {StyledTheme} from "../theme";

export function Div({children, className, styling, ...props}: ElementProps & React.HTMLAttributes<HTMLDivElement>) {
    const name = classname();
    return <div {...props} className={`${className},${name}`}>
        {children}
        <style>{wrapCssInClass(name, mergeStyling(styling, StyledTheme.div))}</style>
    </div>;
}