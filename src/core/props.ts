import {PreactDOMAttributes} from "preact";
import {HTMLAttributes, PropsWithChildren} from "preact/compat";

export type ClassName = `styled-${string}-${number}` | `styled-${string}-${number}[type="${string}"]`

export type WithStyle = { styling?: string } & PropsWithChildren

export type ElementProps = WithStyle & PreactDOMAttributes
export type DivProps = ElementProps & HTMLAttributes<HTMLDivElement>
export type SpanProps = ElementProps & HTMLAttributes<HTMLSpanElement>
export type LinkProps = ElementProps & HTMLAttributes<HTMLAnchorElement>
export type ButtonProps = ElementProps & HTMLAttributes<HTMLButtonElement>
export type InputProps = ElementProps & HTMLAttributes<HTMLInputElement>
export type LabelProps = ElementProps & HTMLAttributes<HTMLLabelElement>
export type SelectProps = ElementProps & HTMLAttributes<HTMLSelectElement>
export type OptionProps = ElementProps & HTMLAttributes<HTMLOptionElement>
export type HeaderProps = ElementProps & HTMLAttributes<HTMLHeadingElement>
export type ListProps = ElementProps & HTMLAttributes<HTMLUListElement>
export type ListItemProps = ElementProps & HTMLAttributes<HTMLLIElement>
export type StyleProps = { css?: string } & HTMLAttributes<HTMLStyleElement>
