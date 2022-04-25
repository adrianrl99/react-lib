# Navbar

[Preview](https://react-ts-template.adrianlopez.site/docs/navbar)

## Props

| Name           | Type                                           | Default | Required | Description                                                          |
| -------------- | ---------------------------------------------- | ------- | -------- | -------------------------------------------------------------------- |
| size           | NavbarSize                                     | medium  | false    | Size of the navbar                                                   |
| variant        | NavbarVariant                                  | static  | false    | Variant of the navbar                                                |
| listProps      | [ListProps](../List/README.md#props)           |         | false    | Props to pass to the **List** component                              |
| containerProps | [ContainerProps](../Container/README.md#props) |         | false    | If **fullWidth** is true, this prop will be passed to the container. |
| fullWidth      | boolean                                        | false   | false    | If **true**, the navbar will be expanded to full width               |
| className      | string                                         |         | false    | Custom classname to be added to the component.                       |

## Types

| Name       | Definition                  |
| ---------- | --------------------------- |
| NavbarSize | `small \| medium \| large`  |
| NavbarSize | `sticky \| static \| fixed` |
