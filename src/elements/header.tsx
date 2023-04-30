import {classname, HeaderProps, mergeStyling, wrapCssInClass} from "../core";
import * as React from "preact/compat";
import {StyledTheme} from "../theme";
import {Style} from "./style";

export function Header1({
                            children,
                            className,
                            styling,
                            ...props
                        }: HeaderProps) {
    const name = classname();
    return <h1 {...props} className={`${name}`}>
        {children}
        <Style css={wrapCssInClass(name, mergeStyling(styling, StyledTheme.header))}/>
    </h1>;
}

export function Header2({
                            children,
                            className,
                            styling,
                            ...props
                        }: HeaderProps) {
    const name = classname();
    return <h2 {...props} className={`${name}`}>
        {children}
        <Style css={wrapCssInClass(name, mergeStyling(styling, StyledTheme.header))}/>
    </h2>;
}

export const Header3 = ({
                            children,
                            className,
                            styling,
                            ...props
                        }: HeaderProps) => {
    const name = classname();
    return <h3 {...props} className={`${name}`}>
        {children}
        <Style css={wrapCssInClass(name, mergeStyling(styling, StyledTheme.header))}/>
    </h3>;
}