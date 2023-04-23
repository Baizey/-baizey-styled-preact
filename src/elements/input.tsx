import {classname, ElementProps, mergeStyling, wrapCssInClass} from "../core";
import * as React from "preact/compat";
import {StyledTheme} from "../theme";


export function Input({
                          children,
                          className,
                          styling,
                          type = 'text',
                          ...props
                      }: ElementProps & React.HTMLAttributes<HTMLInputElement>) {
    const name = classname()
    return <input{...props} type={type} className={`${name}`}>
        {children}
        <style>{wrapCssInClass(`${name}[type="${type}"]`, mergeStyling(styling, StyledTheme.input))}</style>
    </input>;
}
