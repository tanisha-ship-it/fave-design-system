# Changes from SplurgeKit as it is today

What this draft does differently from the Figma library, and why. Nothing here has been applied to Figma or to the app.

## Decisions where Figma and code disagreed

| # | Topic | Figma | Code | Chosen | Why |
|---|---|---|---|---|---|
| D1 | Large button label | Heading/Small (18 SemiBold) | 18 Medium on ~70 of 88 primary buttons | **18 Medium**, as new `Label/XLarge/Medium` | Matches what ships; buttons use Label, headings stay SemiBold |
| D2 | Phudu 16 weights | Regular, SemiBold | Medium ×170, SemiBold ×165, Regular ×17 | **All three** | Medium is the app's second most used style and was missing from Figma |
| D3 | Strong body weight | "Bold" = Apfel Fett (700) | 600 ×~116, 700 ×~21 | **600 (SemiBold)** | Matches what ships |
| D4 | teal/06 | #022C2C | #53CFB8 (3 uses) | **#022C2C** | Continues the light-to-dark ramp |
| D5 | Line height | Auto everywhere | Phudu 120%, body mostly unset | **120% Phudu, 140% body** | Explicit values render the same in every tool |
| D6 | Colours only in code | absent | 10 extra | **Added black and red/04 (#CB3030) only** | The rest are used 1–2 times each |
| D7 | Apfel 18 | absent | — | **Added `Body/XLarge/Regular` and `Body/XLarge/Medium` (18px)** | Splits home needs 18px Apfel for list names and the top balance line (Tanisha, 2026-10-20) |
| D8 | Page header | absent | Apfel Fett 28 on Splits home | **Added `Title/Large` (Apfel 28, weight 700)** | Matches what ships for the "Splits" header; 700 not 600 because Apfel has no 600 cut in Figma (Tanisha, 2026-10-20) |

Consequence of D3 and D4 for engineering: ~21 text styles at weight 700 would move to 600, and 3 uses of the light `tealN06` need a different colour.

## Colour

1. Primitive names lose their role suffix: `Indigo/04 - Primary` → `indigo/04`, `Grey/02 - Stroke` → `grey/02`, `Grey/08 - Primary` → `grey/08`, `Teal/03 - Primary` → `teal/03`, `Red/03 - Primary` → `red/03`. Roles live in the semantic tier.
2. `Background Peach/01–03` → `peach/01–03`, so every ramp is named by hue.
3. Added `red/04` (#CB3030) and `black`.
4. Semantic tier grows from 6 distinct roles to 26.
5. Semantic renames: `color/stroke/primary` → `color/border/action`; `color/stroke/secondary` → `color/border/default`; `color/button/primary` → `color/action/default`; `color/button/accent` → `color/surface/action-subtle`.
6. Removed duplicates: `color/button/accent 2`, `color/button/primary 2`, `color/interactive/accent 2`.
7. Removed the empty variable collection named "Collection".
8. Ledges are named and tied to colours: `ledge/neutral`, `ledge/action`, `ledge/action-subtle`, `ledge/danger`, `ledge/danger-subtle`, `ledge/disabled`. These replace `Button Shadow Blue`, `Button Shadow Red`, `Card Shadow Grey`, and the `Button Shadow` style that primary buttons reference but which no longer exists in the library.

## Type

9. Removed `Display/Small`: identical to `Heading/Large` (Phudu SemiBold 24).
10. Added `Label/XLarge/Medium` (18) and `Label/Large/Medium` (16). See D1, D2.
11. `Label/Large/Bold` → `Label/Large/SemiBold` (it is weight 600).
12. `Body/Large/Bold`, `Body/Medium/Bold` → `…/SemiBold` at weight 600. See D3.
13. `Label/Medium` → `Label/Medium/Medium`, `Label/Small` → `Label/Small/Medium`, so every Label and Body name has the same three parts.
14. Explicit line heights. See D5.

Net: 17 styles → 18.

## Buttons

15. `Button` (Style × Tone × Size) is the only button. Retired: `Primary Button` (44 high), `Modal Button` (50 high), `Screen Button`, `Modal button extended`.
16. Large label uses `Label/XLarge/Medium`. See D1.
17. Small padding: was 16 top/bottom, 8 right, 12 left inside a 32-high frame → 12 on both sides, vertically centred.
18. Tertiary Neutral Large: was 22 high with no padding → same 54-high frame as its siblings.
19. Tertiary Destructive Small: radius 12 → 8.
20. Tertiary Default Small: label colour was bound to a stroke variable → `color/text/action`.
21. Primary Destructive: border and ledge were the same red as the fill, so the ledge was invisible → `red/04`.
22. Added Tertiary Neutral Small.
23. Added states: pressed, disabled, loading. Pressed and loading follow the app's behaviour; disabled uses the app's most common disabled colours (grey/04 fill, grey/05 border and ledge).
24. Primary Neutral and Secondary Neutral are deliberately not defined.

## Modals

25. Added `Modal` (Type × Tone), `Modal Icon` (Status, swappable Glyph), `Button Hold`, `Modal Content/Placeholder`, `Modal Content/Consequences` and four `Modal Glyph` components, built from the Settings Redesign modals. See `modal-audit.md`.
26. The modal CTA is always Secondary. See the button rule in `README.md`, which replaces "one Primary per view" (Tanisha, 2026-11-02).
27. Added `orange/04` (#DB7342), `color/warning/default` and `color/warning/ledge` for the Warning badge.
28. The Error badge ledge uses `color/danger/ledge` (#CB3030), not the untokenised #E04747 in Settings.
29. Hold sheets move from 24 side and 40 top padding to the shared 32.
30. `Button` labels hug their text in every variant, so the chevron sits beside the label on full-width buttons.
31. Added `Modal Content/Bullets`; `Modal Content/Consequences` is a heading plus centred lines starting with 🚨, as shipped.

## Sheets

32. Added `Sheet` (Footer: Single, Split, None), for forms and pickers, with `Sheet Option`, `Sheet Chip`, `Sheet Summary Row`, `Sheet Content/Placeholder|Input|Options|Chips|Summary` and `Sheet Glyph/Edit|Tag|Money|Close`.
33. Width is 361, matching the app's sheet route, not the 353 used in most Figma frames.
34. Sheet CTAs are Secondary, following the modal rule. Code and Figma are mixed today.
35. The header title is `color/text/secondary` and the close is `color/text/tertiary`, as in the code. Newer Splits frames use a darker title.
36. The dashed "Create a custom tag" button is replaced by Tertiary Default, so the footer uses only library buttons.

## Ledges

37. Added `color/warm/ledge` (peach/03, #FFEDD9) and the `ledge/warm` effect style: a 3px drop, no blur. It's for warm peach surfaces such as the settle-up and contact-picker headers, which used a hand-made #FFEDD9 shadow (Tanisha, 2026-11-04).

## Left alone, worth a look later

- Three copies of `SWIPE BUTTON`, and `Amount Button`, `Action Pill`, `Hold to disable button`: not part of this pass.
- Several feature files carry their own duplicate copies of colour variables with the same names as the library's.
- `Button` Large variants are 48 high in Figma, while the spec and the app say 54. `Modal` overrides the CTA to 54; the variants themselves are unchanged.
- The app's `PrimaryButton` widget is teal and used 5 times; the system's primary is indigo.
