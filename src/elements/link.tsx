import {classname, ElementProps, mergeStyling, wrapCssInClass} from "../core";
import * as React from "preact/compat";
import {StyledTheme} from "../theme";

export function Link({
                         children,
                         className,
                         styling,
                         ...props
                     }: ElementProps & React.HTMLAttributes<HTMLAnchorElement>) {
    const name = classname();
    return <a {...props} className={`${className},${name}`}>
        {children}
        <style>{wrapCssInClass(name, mergeStyling(styling, StyledTheme.link))}</style>
    </a>;
}