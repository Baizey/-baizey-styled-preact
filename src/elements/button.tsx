import {ButtonProps, classname, mergeStyling, wrapCssInClass} from "../core";
import * as React from "preact/compat";
import {StyledTheme} from "../theme";
import {Style} from "./style";

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
        <Style css={wrapCssInClass(`${name}[type="${type}"]`, mergeStyling(styling, StyledTheme.button))}/>
    </button>;
}