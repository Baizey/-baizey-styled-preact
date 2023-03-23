import {PreactDOMAttributes} from "preact";

export type ClassName = `styled-${string}-${number}`

export type WithStyle = { styling?: string }

export type ElementProps = WithStyle & PreactDOMAttributes