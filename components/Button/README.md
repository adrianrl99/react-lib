# Button

[Preview](https://react-ts-template.adrianlopez.site/docs/button)

## Props

| Name     | Type              | Default   | Required | Description                                                             |
| -------- | ----------------- | --------- | -------- | ----------------------------------------------------------------------- |
| color    | ButtonColor       | normal    | false    | Color of the button                                                     |
| variant  | ButtonVariant     | contained | false    | Variant of the button                                                   |
| size     | ButtonSize        | medium    | false    | Size of the button                                                      |
| icon     | ReactNode         | undefined | false    | Icon of the button                                                      |
| loading  | boolean           | false     | false    | If **true**, the button will be disabled and change content to a loader |
| active   | boolean           | false     | false    | If **true**, the button will be active                                  |
| fullWith | boolean           | false     | false    | If **true**, the button will be expanded to full width                  |
| ...props | HTMLButtonElement |           | false    | Props extended of html button props                                     |

## Types

| Name          | Definition                                                              |
| ------------- | ----------------------------------------------------------------------- |
| ButtonSize    | `small \| medium \| large`                                              |
| ButtonVariant | `contained \| outlined \| text`                                         |
| ButtonColor   | `primary \| secondary \| success \| error \| warning \| info \| normal` |
