import {classname, LinkProps, mergeStyling, wrapCssInClass} from "../core";
import * as React from "preact/compat";
import {StyledTheme} from "../theme";

export function Link({
                         children,
                         className,
                         styling,
                         ...props
                     }: LinkProps) {
    const name = classname();
    return <a {...props} className={`${name}`}>
        {children}
        <style>{wrapCssInClass(name, mergeStyling(styling, StyledTheme.link))}</style>
    </a>;
}