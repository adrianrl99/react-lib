# Menu

[Preview](https://react-ts-template.adrianlopez.site/docs/menu)

## Props

| Name        | Type                                     | Default | Required | Description                                                |
| ----------- | ---------------------------------------- | ------- | -------- | ---------------------------------------------------------- |
| open        | boolean                                  | false   | true     | If **true**, menu content will be displayed                |
| onOpen      | VoidFunction                             |         | true     | Function to be called when **open** is set to **false**    |
| onClose     | VoidFunction                             |         | true     | Function to be called when **open** is set to **true**     |
| title       | ReactNode                                |         | true     | Component to be rendered as the button content of the menu |
| buttonProps | [ButtonProps](../Button/README.md#props) |         | false    | Props to be passed to the menu button                      |
| cardProps   | [CardProps](../Card/README.md#props)     |         | false    | Props to be passed to the menu container                   |
| className   | string                                   |         | false    | Custom classname to be added to the component.             |
