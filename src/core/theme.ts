export class StyledTheme {
    private static instance = new StyledTheme()
    private _theme?: string

    private constructor() {
    }

    public static setGlobalStyling(styling: undefined | string) {
        this.instance._theme = styling
    }

    public static getGlobalStyling() {
        return this.instance._theme
    }
}