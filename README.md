# Styled preact

The goal of this package is to provide a similar-ish experience of styling elements in preact as you can with
styled-components in React

## Usage

fx: Div instead of div, Header1 instead of H1 etc.

These new elements take an extra property on top of their normal ones, ``styling``

A simple example would be something like:

````
function Container(props: MyProps & DivProps){
    return <Div {...props}
       styling={css`
        color: #000;
        
        &:focus {
            background-color: green;
        }
       `}
    />
}
````
And if you want to combine styling as it goes down the element-tree you can use

``mergeStyling(higherPriority, lowerPriority)``

an example could be

````
function Container({styling, ...props}: MyProps & DivProps){
    return <Div {...props}
       styling={mergeStyling(styling, css`
        color: #000;
        
        &:focus {
            background-color: green;
        }
       `)}
    />
}
````

## Notes

This package is primarily developed to support my own projects, so it will likely be lacking in any features outside what I required. If this package is useful for someone, but it lacks features, a pull request is very welcome