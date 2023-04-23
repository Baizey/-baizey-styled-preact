import {classname, LabelProps, mergeStyling, wrapCssInClass} from "../core";
import * as React from "preact/compat";
import {StyledTheme} from "../theme";

export function Label({
                          children,
                          className,
                          styling,
                          ...props
                      }: LabelProps) {
    const name = classname();
    return <label {...props} className={`${name}`}>
        {children}
        <style>{wrapCssInClass(name, mergeStyling(styling, StyledTheme.label))}</style>
    </label>;
}