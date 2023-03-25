import {mergeStyling} from "../core";

type ElementStyle = undefined | string

type GlobalStyle = Partial<{
    shared: ElementStyle
    div: ElementStyle
    button: ElementStyle
    input: ElementStyle
    header: ElementStyle
    label: ElementStyle
    link: ElementStyle
    span: ElementStyle
    list: ElementStyle
    listItem: ElementStyle
}>

export class StyledTheme {
    private static instance = new StyledTheme()
    private globalStyle: GlobalStyle = {}

    private constructor() {
    }

    public static get style(): GlobalStyle {
        return StyledTheme.instance.globalStyle
    }

    public static set style(styling: GlobalStyle | ((old: GlobalStyle) => GlobalStyle)) {
        const instance = StyledTheme.instance
        switch (typeof styling) {
            case 'object':
                instance.globalStyle = styling;
                break
            case 'function':
                instance.globalStyle = styling(instance.globalStyle)
                break
        }
    }

    public static get div(): ElementStyle {
        return mergeStyling(StyledTheme.style.div, StyledTheme.style.shared)
    }

    public static get button(): ElementStyle {
        return mergeStyling(StyledTheme.style.button, StyledTheme.style.shared)
    }

    public static get header(): ElementStyle {
        return mergeStyling(StyledTheme.style.header, StyledTheme.style.shared)
    }

    public static get input(): ElementStyle {
        return mergeStyling(StyledTheme.style.input, StyledTheme.style.shared)
    }

    public static get label(): ElementStyle {
        return mergeStyling(StyledTheme.style.label, StyledTheme.style.shared)
    }

    public static get link(): ElementStyle {
        return mergeStyling(StyledTheme.style.link, StyledTheme.style.shared)
    }

    public static get list(): ElementStyle {
        return mergeStyling(StyledTheme.style.list, StyledTheme.style.shared)
    }

    public static get listItem(): ElementStyle {
        return mergeStyling(StyledTheme.style.listItem, StyledTheme.style.shared)
    }

    public static get span(): ElementStyle {
        return mergeStyling(StyledTheme.style.span, StyledTheme.style.shared)
    }
}