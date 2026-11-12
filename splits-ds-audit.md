# Non-group splits · design system audit

4 Nov 2026. Figma file Shared Money tab, page Splits.

- Source: section `non-grp splits · FINAL (review 4 Nov)` (node 1901:9808). Not changed.
- Result: section `non-grp splits · FINAL · DS applied (4 Nov)` (node 1917:10506). The audit board in it is `00b · Design system audit` (node 1939:24).

35 screens, about 900 text layers. Library: Fave Design System (Button, text styles, ledge effects, Semantic colours).

## Fixed

| Area | Before | After |
|---|---|---|
| Text styles | 350 segments with no style, plus 6 off-system styles | Every Fave text layer uses a Fave DS style. 2 system layers left |
| Fonts | Onest (28), off-scale sizes 13, 15, 20, 48 | Apfel body styles. Sizes snapped to the scale |
| Colour | Splurge Color Variables, Primitives and raw hex | 731 text fills, 392 surfaces and 301 borders bound to Semantic |
| Teal amounts | #0FBAB0 text | `color/text/success` (teal/05) |
| Ledges | 53 hand-made 3px shadows | `ledge/*` effect styles |
| Buttons | 23 old Screen Button or Modal Button layers | Library `Button`, following the filled/unfilled rule. The disabled state replaces 40% opacity |
| Success bar | "Split instantly" wrapped at Large size | Stacked full width: Secondary above Primary |
| QR backdrop | A bar with two DONE buttons | Split instantly + Done |
| Group nudge | Two side-by-side Secondary buttons, left-aligned text | Modal spec, with a Secondary CTA and a Tertiary Neutral dismiss |
| Settle-up pickers | 353 wide, 20/16 padding | Sheet spec: 361 wide, 20 padding and gap, ledge, secondary title |
| Scrims | 50% | 80% black |

## Needs a decision

1. Category chip and avatar colours have no tokens.
2. #EEEEEE and #DADADA are used as surfaces in 105 places, but the system only has them as border roles.
3. There's no `Label/Medium/SemiBold` style, so 35 labels dropped from 600 to 500.
4. There's no `Body/Small/Medium` style.
5. The Body SemiBold styles are in tokens.json but not published.
6. `Modal` and `Sheet` are built to spec but aren't library instances yet. They need publishing first.
7. The QR sheet keeps its own side padding.
