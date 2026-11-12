# What the Figma files actually use

Usage counts from a read-only scan of 23 product files and both libraries on 8 Nov 2026. This is the evidence behind [../inventory.md](../inventory.md). The counts come from a script, so treat them as close, not exact.

## Text

- **About 56,800 text layers. About 48,600 (86%) have no text style.** The newer files are cleaner: Biometric Payments 4%, Autopay Interoperability 17%, FRI/MNRL 16%. The Fave Design System file is 3%. The 2024 V-files sit at 90–97%.
- **Two body fonts.** Files made in 2024 set body copy in **Onest** (Regular, Medium, SemiBold, Bold). The 2026 files use **Apfel Grotezk** (Regular, Mittel, Fett). Shared Money, Your money and PL Payouts mix both. Phudu (headings, labels, numbers) is the same throughout.
- **Off-system fonts:** SF Pro Rounded Black (avatar initials and numbers on widgets: 86 in Shared Money, 16 in Biometric), Nanum Pen and HanziPen SC (handwritten notes in onboarding and Splits), Lastik (onboarding), Inter and SF Pro Text (iOS system UI), Cascadia Mono.
- **Text styles in use besides Fave DS:** `Default/Bold/Subheadline` (Apple iOS kit) is used in nearly every file, about 2,600 times in all. Other foreign styles: `Titles/Page Titles`, `Titles/Card Titles`, `Titles/Modal Button`, `Body/Medium/Medium 1–4`, `Body/Regular/Regular 1–4` and `Body/Semibold/Semibold 1–4` (V0.1's local set). Also `Secondary/Heading/L`, `Primary/Heading/S`, `Phudu/Display/Large`, `Phudu/Label/Large`, `Callout / Bold`, `Title2 / Regular`. Shared Money has its own local set too: `Heading/Title`, `Display/Amount Large`, `Caption/*`, `Label/Action`, `Label/Tag`.
- **Phudu sizes seen:** 10, 11, 12, 14, 16, 17, 18, 20, 22, 24, 32, 72, 100. 10, 11, 17 and 22 are off the scale. 72 and 100 are hero numbers and need a style (see `Display/Hero` in the inventory).
- **Phudu SemiBold 14** is used about 1,500 times in V0.5 and Navbar (uppercase labels and tab names). There's no `Label/Medium/SemiBold` style for it. This matches the gap in the splits audit.

## Colour

Fills and text colours that are not in the `Primitives` collection:

| Hex | Where | Likely meaning | Suggestion |
|---|---|---|---|
| #000000 text | ~5,000 layers, every file | Primary text typed as pure black | Bind to `color/text/primary` (#1B1B1B) |
| #D9D9D9, #C4C4C4 | ~800 fills | Image placeholders, dividers | Placeholders become `color/surface/placeholder`; dividers become `color/border/default` |
| #CCCED3, #ADB3BC, #D6D6D6 | ~400 | iOS keyboard | Leave as device chrome; never bind |
| #6CC46A | 137 text, 135 fills (Shared Money) | Green status, "settled"? | Decide: teal or a new `green` ramp |
| #FFC191 | ~140 (V0.1, V0.4) | Peach-orange accent | Probably `orange/02` |
| #383838, #50555C, #A5A5A5, #A0A0A0, #808080, #595959, #666666 | ~400 text | Greys off the ramp | Snap to grey/05–07 |
| #F4900C + #FFEDD5 | Payments, V0.2 | Warning badge + surface | `color/warning/*` (exists) |
| #B72121, #9A1919, #C05D5D | Payments, onboarding | Darker reds, avatar backgrounds | Danger uses `red/04`; avatars need their own palette |
| #FF8C26 stroke | Shared Money | Orange outline | `orange/03` |
| #E23744, #1ED760 | Gift Cards, Autopay | Zomato, Spotify brand colours | Brand logos, never tokens |
| #5E6EFF | FRI | Typo of indigo/04 (#5E6DFF) | Bind |
| #F5F6FF, #FFF6EC, #FFFBF6, #FFEDD9 | everywhere | indigo/01, peach/02, peach/01, peach/03 | Already tokens; only need binding |

Variable collections in the files:
- **Duplicates of the library:** `Splurge Color Variables` (local copies with 1–31 variables) in V0.1, V0.2, V0.5, V0.6, UPI Lite, Mani, PL Payouts, Settings, Autopay Interop and Biometric. Plus `Variable collection` (2) in V0.7, Mani and PL Payouts.
- **In the library:** `Color Tokens` (teal action colour, 33 variables) still sits in the Fave Design System file beside `Semantic` (indigo action colour). SplurgeKit has `Splurge Color Variables`, `Semantic` (9), an empty `Collection`, plus `Fave DS · Primitives` and `Fave DS · Semantic`.

## Spacing and layout

- **Screen** 393 × 852 (iPhone 14/15 Pro). Long screens grow to 929 and beyond.
- **Side margin** 24: content is 345 wide. Cards are 353 wide, so their margin is 20. The library's `Spacing` collection says `padding/page = 20`, which matches cards, not content. One of them has to win; see the inventory.
- **Card** padding 20, gap 16, radius 16, white on a ledge. **List row** 64 high: 48 avatar, 12 gap, 16 bottom padding, chevron 24.
- **Bottom CTA dock** white, 24 top padding, 24 sides, button 345 × 54, then the home-indicator bar. Two buttons side by side are 164/165 × 48.
- **Header** is a peach (#FFF6EC) panel 117 high, or 192 with a search field, on a warm ledge. It holds the status bar (44), a back chevron (24), the title and an optional right icon (24).

## Radius

Most used, across all files: 12, 5, 24, 8, 16, 100 (pill), 6, 4.
- **5 and 6** are mostly iOS keyboard keys and old 2024 chips.
- **66 and 120** are modal icon discs.
- **41, 42, 23 and 11** are one-off cards.

The library's `Radius` collection (`sm 6`, `md 10`, `lg 12`, `xl 16`, `2xl 24`, `full`) leaves out 4 and 8. Those are the chip and small-button radii the Button component itself uses.

## Effects

- `ledge/*` exists in the library. In product files, 53 hand-made 3px ledges were found in non-group splits alone (fixed there).
- V0.1 has `Button Shadow`, `Card Shadow` and `Toast`. Gift Cards has `category icon` and `template shadow`.
- The library also defines `elevation/low|medium|high`: soft blurred shadows (2/4, 4/12, 8/24 at 8–14%). That contradicts the ledge-only rule in the README. They're used by nothing.

## Components in use (instances, all files)

| Name | Instances | Source | Status |
|---|---|---|---|
| `Component / Key`, iOS keyboards, StatusBar, Home Indicator, Suggestion Bar | ~4,500 | Apple iOS kit | Device chrome. Keep, don't systematise |
| `Bank Logos (Small)` / `(Large)` | ~2,000 | V0.1, bank logos page | Bring into library as is |
| `vuesax/linear/*` (about 45 icons), `vuesax/bulk/arrow-right`, `vuesax/broken/percentage-square` | ~2,500 | Vuesax icon set, local copies | Library icon set |
| `Screen Button` | ~1,300 | SplurgeKit | Replace with `Button` |
| `Primary Button`, `Modal Button`, `Modal button extended` | ~300 | SplurgeKit | Replace with `Button` / `Modal` |
| `Button` (new) | ~300 | Fave DS | Current |
| `SWIPE BUTTON` | ~110 | SplurgeKit (3 copies) | Needs a decision: swipe to pay |
| `Exclamation _Icon_UIA`, `Checked_Icon_UIA`, `Close_NA_Icon_UIA`, `Heart_Icon_UIA` | ~170 | Unknown kit | Status icon set |
| `groups`, `money`, `home`, `vuesax/linear/arrange-circle-2` | ~200 | Navbar Interactions | Tab bar icons |
| `Component 3/4/6/10/11/12/26/27/28/29/42/43/48` | ~600 | Unnamed local components | Each needs naming or retiring. 10/11/12 are search fields, 26–29 are list rows and chips |
| `Amount Button`, `Action Pill`, `Hold to disable button` | ~40 | SplurgeKit | Fold into library |
| `input field`, `payment method option`, `verified name` | ~20 | Your money (local) | The only real input component; promote |
| `Love letter`, `fingerprint`, `fave radar logo`, `icon-park-outline:protect` | ~40 | Local | Illustration / brand |
| `Section header CTA`, `Section see all` | 18 | Shared Money (local) | Promote |
| `WhatsApp prompt` (Context: Home, Invite, Bill added) | — | Settings (local) | Promote |
