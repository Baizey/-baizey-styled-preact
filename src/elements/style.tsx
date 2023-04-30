import * as React from "preact/compat";
import {StyleProps} from "../core";
import postcss from "postcss-js";
import autoprefixer = require("autoprefixer");

const handler = postcss.sync([autoprefixer])
export const Style = ({css, children, ...props}: StyleProps) =>
    <style {...props}>{handler(css ?? children ?? '')}</style>