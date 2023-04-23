import {ButtonProps, classname, mergeStyling, wrapCssInClass} from "../core";
import * as React from "preact/compat";
import {StyledTheme} from "../theme";

export function Button({
                           children,
                           type = 'button',
                           className,
                           styling,
                           ...props
                       }: ButtonProps) {
    const name = classname();
    return <button {...props} type={type} className={`${name}`}>
        {children}
        <style>{wrapCssInClass(`${name}[type="${type}"]`, mergeStyling(styling, StyledTheme.button))}</style>
    </button>;
}