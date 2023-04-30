import * as React from "preact/compat";
import {StyleProps} from "../core";
import {compile, middleware, prefixer, serialize, stringify} from 'stylis'

export const Style = ({css, children, ...props}: StyleProps) => {
    const input = css ?? children?.toString() ?? ""
    const output = serialize(compile(input), middleware([prefixer, stringify]))
    return <style {...props}>{output}</style>;
}