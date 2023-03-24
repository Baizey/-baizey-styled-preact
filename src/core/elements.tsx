import {ElementProps} from "./props";
import {classname, mergeStyling, wrapCssInClass} from "./utils";
import * as React from "preact/compat";
import {StyledTheme} from "./theme";

export const Div = ({children, className, styling, ...props}: ElementProps & React.HTMLAttributes<HTMLDivElement>) => {
    const name = classname();
    return <div {...props} className={`${className},${name}`}>
        {children}
        {styling && wrapCssInClass(name, mergeStyling(styling, StyledTheme.getGlobalStyling()))}
    </div>;
}

export const Span = ({
                         children,
                         className,
                         styling,
                         ...props
                     }: ElementProps & React.HTMLAttributes<HTMLSpanElement>) => {
    const name = classname();
    return <span {...props} className={`${className},${name}`}>
        {children}
        {styling && wrapCssInClass(name, mergeStyling(styling, StyledTheme.getGlobalStyling()))}
    </span>;
}

export const Label = ({
                          children,
                          className,
                          styling,
                          ...props
                      }: ElementProps & React.HTMLAttributes<HTMLLabelElement>) => {
    const name = classname();
    return <label {...props} className={`${className},${name}`}>
        {children}
        {styling && wrapCssInClass(name, mergeStyling(styling, StyledTheme.getGlobalStyling()))}
    </label>;
}

mergeStyling(StyledTheme.getGlobalStyling())
export const Header1 = ({
                            children,
                            className,
                            styling,
                            ...props
                        }: ElementProps & React.HTMLAttributes<HTMLHeadingElement>) => {
    const name = classname();
    return <h1 {...props} className={`${className},${name}`}>
        {children}
        {styling && wrapCssInClass(name, mergeStyling(styling, StyledTheme.getGlobalStyling()))}
    </h1>;
}

export const Header2 = ({
                            children,
                            className,
                            styling,
                            ...props
                        }: ElementProps & React.HTMLAttributes<HTMLHeadingElement>) => {
    const name = classname();
    return <h2 {...props} className={`${className},${name}`}>
        {children}
        {styling && wrapCssInClass(name, mergeStyling(styling, StyledTheme.getGlobalStyling()))}
    </h2>;
}

export const Header3 = ({
                            children,
                            className,
                            styling,
                            ...props
                        }: ElementProps & React.HTMLAttributes<HTMLHeadingElement>) => {
    const name = classname();
    return <h3 {...props} className={`${className},${name}`}>
        {children}
        {styling && wrapCssInClass(name, mergeStyling(styling, StyledTheme.getGlobalStyling()))}
    </h3>;
}

export const UnorderedList = ({
                                  children,
                                  className,
                                  styling,
                                  ...props
                              }: ElementProps & React.HTMLAttributes<HTMLUListElement>) => {
    const name = classname();
    return <ul {...props} className={`${className},${name}`}>
        {children}
        {styling && wrapCssInClass(name, mergeStyling(styling, StyledTheme.getGlobalStyling()))}
    </ul>;
}

export const ListItem = ({
                             children,
                             className,
                             styling,
                             ...props
                         }: ElementProps & React.HTMLAttributes<HTMLLIElement>) => {
    const name = classname()
    return <li {...props} className={`${className},${name}`}>
        {children}
        {styling && wrapCssInClass(name, mergeStyling(styling, StyledTheme.getGlobalStyling()))}
    </li>;
};

export const Link = ({
                         children,
                         className,
                         styling,
                         ...props
                     }: ElementProps & React.HTMLAttributes<HTMLAnchorElement>) => {
    const name = classname();
    return <a {...props} className={`${className},${name}`}>
        {children}
        {styling && wrapCssInClass(name, mergeStyling(styling, StyledTheme.getGlobalStyling()))}
    </a>;
}

export const Button = ({
                           children,
                           type = 'button',
                           className,
                           styling,
                           ...props
                       }: ElementProps & React.HTMLAttributes<HTMLButtonElement>) => {
    const name = classname();
    return <button {...props} type={type} className={`${className},${name}`}>
        {children}
        {styling && wrapCssInClass(`${name}[type="${type}"]`, mergeStyling(styling, StyledTheme.getGlobalStyling()))}
    </button>;
}

export function Input({
                          children,
                          className,
                          styling,
                          type = 'text',
                          ...props
                      }: ElementProps & React.HTMLAttributes<HTMLInputElement>) {
    const name = classname()
    return <input{...props} type={type} className={`${className},${name}`}>
        {children}
        {styling && wrapCssInClass(`${name}[type="${type}"]`, mergeStyling(styling, StyledTheme.getGlobalStyling()))}
    </input>;
}
