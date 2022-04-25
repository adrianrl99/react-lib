# Accordion

[Preview](https://react-ts-template.adrianlopez.site/docs/accordion)

## Props

| Name             | Type            | Default | Required | Description                                                                                                                       |
| ---------------- | --------------- | ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------- |
| items            | AccordionItem[] |         | true     | Accordion items                                                                                                                   |
| initialExpanded  | number[]        | []      | false    | Initial expanded items indexes                                                                                                    |
|                  |                 |         |          | If **maxExpandedCount** is set to **1** and **initialExpanded** length is larger than **1**, only the first item will be expanded |
|                  |                 |         |          | If **maxExpandedCount** is set to **0**, any item will be expanded                                                                |
|                  |                 |         |          | If **maxExpandedCount** is set to **-1**, all values of **initialExpanded** will be expanded                                      |
| maxExpandedCount | `1 \| 0 \| -1`  | 1       | false    | Maximum number of expanded items allowed items                                                                                    |
|                  |                 |         |          | If `-1`, all items can be expanded                                                                                                |
|                  |                 |         |          | If `0`, any item can be expanded                                                                                                  |
|                  |                 |         |          | If `1`, only one item can be expanded                                                                                             |

## Types

| Name                        | Definition |
| --------------------------- | ---------- |
| AccordionItem.**title**     | ReactNode  |
| AccordionItem.**content**   | ReactNode  |
| AccordionItem.**className** | string     |
