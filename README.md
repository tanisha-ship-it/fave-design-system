# Fave design system — foundations v0.1

Colour, type and buttons. Reconciled from the SplurgeKit Figma library and the shipped app (v1.2.1), 2026-10-10. Status: **draft, saved to Claude as a Design System artifact (https://claude.ai/artifact/DN7a1y9Ec5XYJvNK8p9YyE), lives in Figma in its own library file, [Fave Design System](https://www.figma.com/design/smPcudp7T2KBhUzZODvN3c/Fave-Design-System) (`Primitives` and `Semantic` variables, text and ledge styles, and the Button). An earlier copy sits on a "Fave Design System" page in SplurgeKit. The renames and removals in `CHANGES.md` are not applied to SplurgeKit.**

| File | What it is |
|---|---|
| `tokens.css` | The system as CSS variables and classes. Link it and a prototype looks like Fave. |
| `tokens.json` | The same values as data (for Figma variables or other tools). |
| `preview/colors.html`, `type.html`, `buttons.html` | Visual reference pages. |
| `fonts/` | Phudu and Apfel Grotezk in the weights the system uses. |
| `CHANGES.md` | Every difference between this and SplurgeKit today, and why. |
| `inventory.md` | Everything the system needs, with status (in library, draft, scattered, missing) and where each piece lives today. Start here for "what's left to build". |
| `figma-index/files.md` | Every file in the Fave 2026 and Fave Redesign 2024 Figma folders: pages, key sections with links, how far each follows the system. Start here for "where is the design for X". |
| `figma-index/drift.md` | What the files actually use: unstyled text, off-palette colours, old components, radius and spacing counts. |
| `figma-index/files.tsv`, `scan.js` | File keys for both folders, and the read-only script that produced the index. |

## The look

Flat, bordered, slightly chunky. Cards and buttons sit on a **ledge**: a solid 3px shadow straight down with no blur. Buttons drop into the ledge when pressed. Indigo is the action colour, teal is success, red is danger, peach is the warm page background. One light theme.

## Colour

Two tiers.

- **Primitives** are the raw palette: `hue/step`, for example `indigo/04`. Steps run light to dark. 33 colours.
- **Semantic** colours say what a colour is for: `color/<element>/<role>`, for example `color/text/primary`. 26 roles across text, surface, border, action, danger, success and disabled.

Rule: screens and components use semantic colours only. If no semantic colour fits, add one; don't reach for a primitive.

In CSS the slashes become dashes: `color/text/primary` is `var(--color-text-primary)`.

`color/text/tertiary` (grey/04) is too light for body copy on white. Use it for placeholders and disabled text only.

## Type

Four categories, named `Category/Size/Weight`.

| Category | Font | Line height | Sizes | Use |
|---|---|---|---|---|
| Display | Phudu SemiBold | Auto | 32, 28 | Hero numbers and moments |
| Heading | Phudu SemiBold | Auto | 24, 20, 18 | Screen and section titles |
| Label | Phudu Regular / Medium / SemiBold | Auto | 18, 16, 14, 12 | Buttons, tabs, chips, card titles |
| Body | Apfel Grotezk Regular / Medium / SemiBold | Auto | 16, 14, 12 | Everything you read |

18 styles in total. Line height is always Auto and letter spacing always 0%, as in the Figma text styles. Display and Heading have a single weight, so the weight is left off the name (`Heading/Large`).

CSS classes: `.type-heading-lg`, `.type-label-lg-medium`, `.type-body-md-regular`, and so on.

## Buttons

One component with three choices.

- **Style**: Primary (filled), Secondary (unfilled), Tertiary (dismiss, skip, learn more). See When to use which.
- **Tone**: Default, Destructive, Neutral (Tertiary only).
- **Size**: Large (54 high, radius 12, 24 side padding, label 18 Medium) or Small (32 high, radius 8, 12 side padding, label 14 Medium).
- **States**: default, pressed (drops 3px into the ledge), disabled (grey), loading (a light sweep crosses the button).

```html
<button class="btn btn--primary">Continue</button>
<button class="btn btn--secondary btn--destructive btn--sm">Remove</button>
<button class="btn btn--tertiary btn--neutral">Not now</button>
```

Full-width (`btn--block`) at the bottom of a screen or sheet.

**When to use which.** Filled is Primary, unfilled is Secondary.

- **Modals and sheets:** unfilled, always. This wins over the rules below.
- **Full screens:** filled.
- **Two buttons, different sizes:** the smaller one is unfilled.
- **Two buttons, same size:** the main CTA is filled, the other is unfilled.

## Modals

One component, `Modal`, for every decision the app stops to ask about. 361 wide, radius 24, 32 padding and gap, white on `ledge/neutral`, title `Heading/Large`, body `Body/Large/Regular`, both centred. It sits 32 above the safe area over a black 80% scrim.

- **Type**: Action, Content (adds a 297-wide slot), Hold (irreversible only).
- **Tone**: Default or Destructive.
- **CTA**: always Secondary, never Primary. Chevron when it moves the person forward, none when destructive.
- **Dismiss**: Tertiary Neutral under the CTA. Off only when there is nothing to decide.
- **Highlighted text**: `Modal Content/Consequences` for what's at risk (danger panel, lines starting with 🚨), `Modal Content/Bullets` for plain rules.
- **Icon**: `Modal Icon`, a teal disc with a status badge. Warning (orange), Confirm (indigo), Error (red). Swap the glyph for the subject.

Audit and migration list: `modal-audit.md`.

## Sheets

`Sheet` is for forms and pickers: filling something in or choosing from a list. 361 wide, radius 24, 20 padding and gap, white on `ledge/neutral`.

- **Header**: glyph, `Label/Large/SemiBold` title, close top right, then a dotted divider.
- **Content**: swap for Input, Options, Chips, Summary, or anything 321 wide.
- **Footer**: Single (Secondary CTA), Split (add new plus Secondary CTA), None (a tap picks).

## For AI tools

When generating Fave UI: link `tokens.css`; use only `--color-*` semantic variables, `.type-*` classes and `.btn` classes; follow When to use which for filled and unfilled buttons; put cards on `--ledge-neutral` with a 1px `--color-border-default` border and 16px radius; page background is `--color-surface-warm`; warm (peach) headers and cards sit on `--ledge-warm`. Do not invent colours, font sizes or soft shadows.

To find a flow or screen, use `figma-index/files.md`. Its links go straight to the Figma section. The cleanest reference for current Fave style is the non-group splits section in Shared Money (node 1917:10506). Files from 2024 (V0.1–V0.7) use Onest and old buttons: use them for flows and content, not for visual style.

## Staging page in Figma

Code-vetted proposals live on their own page in the library file: **🧪 Staging · code-vetted (8 Nov)** (page 136:2). It has a Read me, Foundations proposals, three component boards (feedback and controls, display and inputs, navigation) and a Retire and decide board. Nothing on the Design System page, its variables or its styles was changed. Staging components are named `_Staging/…`, so they don't publish. Merge by hand once agreed.

Components there: Toast, Banner, Load Error, Skeleton, Switch, Checkbox, Avatar, Amount, Text Field, Banking Name Line, Section Header, List Row · Person, Card, Screen Header, Tab Bar (with the app's real tab icons).

## Not covered yet

See `inventory.md` for the full list. In short: spacing and radius are drafted but not agreed. Cards, list rows, inputs, headers, the tab bar, toasts, banners, result screens and empty states exist only as copies in product files. Icons, bank logos, avatars and category icons aren't in the library yet. Content and compliance rules aren't written down.
