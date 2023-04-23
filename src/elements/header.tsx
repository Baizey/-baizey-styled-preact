import {classname, ElementProps, mergeStyling, wrapCssInClass} from "../core";
import * as React from "preact/compat";
import {StyledTheme} from "../theme";

export function Header1({
                            children,
                            className,
                            styling,
                            ...props
                        }: ElementProps & React.HTMLAttributes<HTMLHeadingElement>) {
    const name = classname();
    return <h1 {...props} className={`${name}`}>
        {children}
        <style>{wrapCssInClass(name, mergeStyling(styling, StyledTheme.header))}</style>
    </h1>;
}

export function Header2({
                            children,
                            className,
                            styling,
                            ...props
                        }: ElementProps & React.HTMLAttributes<HTMLHeadingElement>) {
    const name = classname();
    return <h2 {...props} className={`${name}`}>
        {children}
        <style>{wrapCssInClass(name, mergeStyling(styling, StyledTheme.header))}</style>
    </h2>;
}

export const Header3 = ({
                            children,
                            className,
                            styling,
                            ...props
                        }: ElementProps & React.HTMLAttributes<HTMLHeadingElement>) => {
    const name = classname();
    return <h3 {...props} className={`${name}`}>
        {children}
        <style>{wrapCssInClass(name, mergeStyling(styling, StyledTheme.header))}</style>
    </h3>;
}