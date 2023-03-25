import {PreactDOMAttributes} from "preact";
import {PropsWithChildren} from "preact/compat";

export type ClassName = `styled-${string}-${number}` | `styled-${string}-${number}[type="${string}"]`

export type WithStyle = { styling?: string } & PropsWithChildren

export type ElementProps = WithStyle & PreactDOMAttributes