import {classname, InputProps, mergeStyling, wrapCssInClass} from "../core";
import * as React from "preact/compat";
import {StyledTheme} from "../theme";
import {Style} from "./style";


export function Input({
                          children,
                          className,
                          styling,
                          type = 'text',
                          ...props
                      }: InputProps) {
    const name = classname()
    return <input{...props} type={type} className={`${name}`}>
        {children}
        <Style css={wrapCssInClass(`${name}[type="${type}"]`, mergeStyling(styling, StyledTheme.input))}/>
    </input>;
}
