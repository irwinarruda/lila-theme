# The Lila spec

This page is the whole theme. If you follow it, your port is Lila, whatever the app. Colors live in [`palette.json`](palette.json), which is the one source of truth; the tables here explain what each color is for.

Lila has two variants. Use these names, and the ids where an app needs one.

| Variant          | Id             | Mode  | Surfaces         |
| ---------------- | -------------- | ----- | ---------------- |
| **Lila Dusk**  | `lila-dusk`  | dark  | Near-black, a trace of violet |
| **Lila Petal** | `lila-petal` | light | Off-white, a trace of lilac   |

Lila is lilac. Dusk is the violet hour after sunset, and a petal is the pale inside of the flower, so each variant is named after its own surfaces. Both share every role, with each color chosen again for its background rather than inverted.

## Principles

1. **Lilac leads.** Keywords carry the brand color, so the shape of a file reads in lilac before you read a word of it.
2. **Each color has one job.** A reader should learn what a color means once, and never have to read around it. That is why errors have their own red instead of sharing a color with anything else.
3. **What you read most stays quiet.** Variables, properties and punctuation use the plain text color. Color marks structure, not everything.
4. **Italic means "from somewhere else".** Parameters, type parameters, attributes and components arrive from outside the line you are reading, and italic says so.
5. **Contrast is a contract.** Every number below is checked by `bun run check`, not by eye.

## Palette

### Surfaces and text

| Name         | Dusk     | Petal    | Job                                    |
| ------------ | --------- | --------- | -------------------------------------- |
| `background` | `#0E0D11` | `#F9F9FB` | Editor and terminal background         |
| `panel`      | `#16151A` | `#F2F1F5` | Sidebars, title bars, inactive tabs    |
| `raised`     | `#1D1C21` | `#EBEBEF` | Hovered rows, controls, elevated cards |
| `float`      | `#08080C` | `#FDFDFF` | Popups, menus, floating windows        |
| `border`     | `#313137` | `#D5D5DB` | Borders and separators                 |
| `selection`  | `#322A4C` | `#E3DEFF` | Selected text                          |
| `faint`      | `#6B6B74` | `#8A8890` | Line numbers, hints, invisible glyphs  |
| `comment`    | `#A7A4AF` | `#615F69` | Comments                               |
| `foreground` | `#EDECF2` | `#212128` | Text                                   |

### Brand

The brand color is the lilac, `#7A58CE`. It is the same in both variants: buttons, the flower in the logo and anything filled are lilac with white text. The lighter lilac in Dusk is that lilac lifted, at full saturation, so it reads as text on a near-black background.

The grays carry the lilac's hue at the strength of Barro's slate, about a twentieth of the brand's chroma. Enough to belong to the flower, never enough to look purple.

| Name         | Dusk     | Petal    | Job                                     |
| ------------ | --------- | --------- | --------------------------------------- |
| `accent`     | `#AF97FF` | `#7A58CE` | Cursor, focus rings, active indicators  |
| `accentText` | `#AF97FF` | `#6B45BE` | Brand color when it is used as text     |
| `fill`       | `#7A58CE` | `#7A58CE` | Primary buttons and strong highlights   |
| `fillHover`  | `#6E4DBE` | `#6E4DBE` | `fill` on hover                         |
| `onFill`     | `#FFFFFF` | `#FFFFFF` | Text on top of `fill`                   |
| `warning`    | `#F9A275` | `#BA5000` | Warnings                                |
| `danger`     | `#F45959` | `#C51D28` | Errors and removed lines                |

Hover goes darker in both variants, so white text stays readable on it.

### Code

| Name       | Dusk     | Petal    | Color    | Job                       |
| ---------- | --------- | --------- | -------- | ------------------------- |
| `keyword`  | `#AF97FF` | `#6B45BE` | lilac     | The structure of the code |
| `function` | `#5DB0F5` | `#0076BD` | sky      | Things that run           |
| `type`     | `#46D4C9` | `#007973` | teal     | Shapes of data            |
| `string`   | `#7EC259` | `#3E8200` | sage     | Text in the program       |
| `constant` | `#F9A275` | `#BA5000` | apricot | Fixed values              |
| `param`    | `#F1CE5F` | `#8B6E00` | gold    | Values passed in          |
| `regex`    | `#F48ABA` | `#B62877` | rose     | Patterns                  |

`danger` is not a code color. Errors get a plain red of their own, so a problem never looks like a pattern or a constant. `warning` shares apricot with `constant`, so warnings are orange and gold stays free as the brand's second color in apps. In Petal, an orange dark enough to read on a light background has little room between red and gold, so apricot and red sit close: an error or a warning also carries an icon, a word or its place on the screen.

### Terminal

The 16 terminal colors are the `ansi` list in `palette.json`, in the usual order: black, red, green, yellow, blue, magenta, cyan, white, then the bright versions. Red is `danger`, green is `string`, yellow is `param`, blue is `function`, magenta is the lilac of `keyword` and cyan is `type`.

Apricot is not one of the 16, because terminals have no orange slot. Command-line tools print warnings in yellow and errors in red, so both stay what the terminal expects, and lilac shows up as magenta, the cursor and the selection.

## Code tokens

Where a token fits two rows, the more specific row wins.

| Token                                                  | Role         | Style  |
| ------------------------------------------------------ | ------------ | ------ |
| Comments and doc comments                              | `comment`    |        |
| Tags inside doc comments, such as `@param`             | `keyword`    |        |
| Keywords, storage, modifiers, control flow, imports    | `keyword`    |        |
| Preprocessor directives                                | `keyword`    |        |
| Operators, in symbols or words                         | `keyword`    |        |
| Constructor calls in JavaScript and TypeScript         | `keyword`    |        |
| String escapes and interpolation marks, such as `${ }` | `keyword`    |        |
| Functions, methods, calls, decorators                  | `function`   |        |
| Functions from the standard library, such as `parseInt` | `type`       |        |
| Attributes in HTML, XML and JSX                        | `function`   | italic |
| Types, classes, interfaces, structs, enums, traits     | `type`       |        |
| Built-in types and constructors in other languages     | `type`       |        |
| Type parameters                                        | `type`       | italic |
| Tags in HTML, XML and JSX, such as `div`               | `keyword`    |        |
| Components in JSX, such as `LoginCard`                 | `type`       | italic |
| Keys in JSON, YAML and TOML                            | `type`       |        |
| Strings and characters                                 | `string`     |        |
| Regular expressions                                    | `regex`      |        |
| Numbers, booleans, `null`, enum members, symbols       | `constant`   |        |
| Constants and read-only variables                      | `constant`   |        |
| Globals from the standard library                      | `constant`   |        |
| `this`, `self` and `super`, and labels                 | `constant`   | italic |
| Parameters                                             | `param`      | italic |
| Variables, properties, fields, object keys             | `foreground` |        |
| Modules and namespaces                                 | `foreground` |        |
| Brackets, commas, semicolons, tag brackets             | `foreground` |        |
| Invalid code and error logs                            | `danger`     |        |

Comments are not italic: they are read as prose, and `comment` is already quieter than the code.

Language servers follow the same table: `property` is `foreground`; `class`, `interface`, `struct`, `enum` and `type` are `type`; `typeParameter` is `type` in italic; `namespace`, `macro` and `event` are `type`; `enumMember` is `constant`; `parameter` is `param` in italic; `function`, `method` and `decorator` are `function`. A `variable` with the `readonly` or `defaultLibrary` modifier is `constant`, and so is anything else marked `global` or `defaultLibrary`, except that standard library classes, interfaces and types stay `type`, functions become `type`, and methods stay `function`.

### Prose and markup

| Token                         | Role         | Style  |
| ----------------------------- | ------------ | ------ |
| Headings                      | `keyword`    | bold   |
| Bold text                     | `param`      | bold   |
| Italic text                   | `string`     | italic |
| Inline code and code fences   | `function`   |        |
| Link text                     | `foreground` |        |
| Link addresses                | `type`       |        |
| List markers and rules        | `keyword`    |        |
| Quotes                        | `comment`    |        |

### CSS

Selectors and units are `function`, property names and delimiters are `foreground`, and strings and color values are `keyword`.

## Interface

This section is for editors and terminals. For websites and apps, use [APPS.md](APPS.md).

| Element                        | Color                                       |
| ------------------------------ | ------------------------------------------- |
| Cursor                         | `accent`, with `background` for its text    |
| Selection                      | `selection`                                 |
| Current line                   | `line` tint                                 |
| Line numbers                   | `faint`                                     |
| Current line number            | `accentText`, bold                          |
| Search matches                 | `search` tint                               |
| Current search match           | `fill`, with `onFill` for its text, bold    |
| Matching brackets              | `accentText`, bold and underlined           |
| Rainbow brackets, in order     | `keyword`, `param`, `function`, `type`, `constant` |
| Primary buttons                | `fill`, with `onFill` for text              |
| Focus rings, active tabs       | `accent`                                    |
| Word under the cursor          | `reference` tint                            |
| The same word, being written   | `referenceWrite` tint                       |
| Secondary text on panels       | `foreground` at 70%, or `comment` where the app has no transparency |

Status bars show the mode with a block of color: normal `accent`, insert `string`, visual `constant`, replace `danger`, command `function`, terminal `type`. Text on those blocks is `background`.

### Signals

| Signal     | Text       | Background tint     |
| ---------- | ---------- | ------------------- |
| Error      | `danger`   | `errorBackground`   |
| Warning    | `warning`  | `warningBackground` |
| Info       | `function` | `infoBackground`    |
| Hint       | `type`     | `hintBackground`    |
| Added      | `string`   | `diffAdded`         |
| Removed    | `danger`   | `diffRemoved`       |
| Changed    | `function` | `diffChanged`       |

Diffs color the background only, so syntax colors stay readable inside them. The part of a changed line that really changed uses `diffText`.

### Tints

A tint is a color laid over `background` at a fixed strength: `mix(color, background, amount)`, computed on 8-bit sRGB channels. Tints are not extra colors to choose. They always come from this table.

| Tint                | Color        | Amount |
| ------------------- | ------------ | ------ |
| `line`              | `accent`     | 8%     |
| `search`            | `accent`     | 35%    |
| `reference`         | `foreground` | 10%    |
| `referenceWrite`    | `accent`     | 20%    |
| `diffAdded`         | `string`     | 18%    |
| `diffRemoved`       | `danger`     | 16%    |
| `diffChanged`       | `function`   | 12%    |
| `diffText`          | `function`   | 28%    |
| `errorBackground`   | `danger`     | 10%    |
| `warningBackground` | `warning`    | 10%    |
| `infoBackground`    | `function`   | 10%    |
| `hintBackground`    | `type`       | 10%    |

## Contrast

Contrast is the WCAG 2.1 ratio against `background`. Separation is the distance between two colors in OKLab, where equal steps look equally different.

| Rule                                                        | Dusk | Petal |
| ----------------------------------------------------------- | ----- | ------ |
| `foreground` and every code color, at least                 | 7:1   | 4.5:1  |
| `comment`, at least                                         | 4.5:1 | 4:1    |
| `foreground` and every code color on `selection`, at least  | 4.5:1 | 3.5:1  |
| Closest two code colors, at least                           | 0.10  | 0.10   |
| `danger`, at least                                          | 4.5:1 | 4.5:1  |
| `onFill` on `fill` and `fillHover`, at least                | 4.5:1 | 4.5:1  |

Dusk clears WCAG AAA, and Petal clears AA, for all code. `faint` is deliberately low contrast, so use it only for text you can safely ignore.

`bun run check` measures all of this and fails if a rule breaks.

## Writing a port

1. Read colors from `palette.json`. Do not eyeball them or copy them from another port.
2. Map tokens with the tables above, using the app's own public docs for its token names.
3. Ship both variants, named as above, with no color outside the palette and its tints.
4. If the app can't express something, drop to the next closest row rather than adding a color.
5. Add a target in `src/targets/` when the app reads a generated file, then run `bun run build` and `bun run check`.

Please write each port from this spec and the app's docs, not from another theme's files. That keeps Lila free to be MIT licensed. See [CONTRIBUTING.md](CONTRIBUTING.md).
