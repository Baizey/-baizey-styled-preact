import * as React from "preact/compat";
import {ClassName} from "./props";

export const classname: () => ClassName =
    (() => {
        let counter = 0

        function randomString(length: number) {
            let result = ''
            const characters = 'abcdefghijklmnopqrstuvwxyz'
            const charactersLength = characters.length
            let counter = 0
            while (counter < length) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength))
                counter += 1
            }
            return result
        }

        return () => `styled-${randomString(5)}-${counter++}`
    })()

export const css = (parts: TemplateStringsArray, ...args: any) => {
    let stringBuilder = ''
    for (let i = 0; i < parts.length; i++) {
        stringBuilder += parts[i]
        if (i < args.length) stringBuilder += args[i]
    }
    return stringBuilder
}

export const wrapCssInClass = (name: string | ClassName, content: string) => `.${name} {
    ${content}
}`

export const mergeStyling: (higherPriority: string | undefined, lowerPriority?: string) => string | undefined =
    (lowerPriority, higherPriority) => {
        if (!higherPriority) return lowerPriority
        if (!lowerPriority) return higherPriority
        return `${lowerPriority};\n${higherPriority}`
    };