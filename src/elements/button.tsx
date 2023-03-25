import {classname, ElementProps, mergeStyling, wrapCssInClass} from "../core";
import * as React from "preact/compat";
import {StyledTheme} from "../theme";

export function Button({
                           children,
                           type = 'button',
                           className,
                           styling,
                           ...props
                       }: ElementProps & React.HTMLAttributes<HTMLButtonElement>) {
    const name = classname();
    return <button {...props} type={type} className={`${className},${name}`}>
        {children}
        {wrapCssInClass(`${name}[type="${type}"]`, mergeStyling(styling, StyledTheme.button))}
    </button>;
}