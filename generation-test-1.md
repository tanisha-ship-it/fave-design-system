# Generation test 1 — 8 Nov 2026

Step 6 of `claude-design-plan.md`: give the Fave design system five briefs Tanisha has already designed by hand, generate each screen from the system alone, compare with her Figma frame, and fix the system where it drifts.

Side-by-side images: [generation-test-1.html](generation-test-1.html) (Figma frame · round 1 · round 2 for each brief).

## How it was run

- **Generator:** Claude Code, in this session, using only what the published system says (README, taste file, component cards, prop types, reference screens). It did not open the Figma frames until the screens were rendered. Caveat: it is the same model that built the system, so it knows the system's vocabulary better than a cold Claude Design session would. The cold run is the next step (below).
- **Frames:** five from *Shared Money tab · non-group splits · DS applied* (1917:10506) that are **not** reference screens: 7.2 Name your group (1917:15903), 3.1 Split Instantly: how many people (1917:12168), 6.1 Karan's page (1917:15062), 5.2 Create a transaction (1917:13643), 2.3 Choose from contacts (1917:11154).
- **Score:** a screen passes when Tanisha would ship it without touching it. Partial credit is listed as what would have to change.

## Briefs

| | Brief as given to the generator |
|---|---|
| A | After the group nudge, the person taps Create a group. Name the group; Aditi, Neha and Priya are already in it, the name is prefilled; one button creates it. |
| B | ₹98 paid to Aaryan (******9022@fvaxis), category Misc. Under it: add this spend to a home (Blr Home, or pick another), and split it with a group. |
| C | Everything between you and Karan. You are owed ₹100 across 2 groups and splits outside groups. A list of the payments with Karan. Settle up at the bottom. |
| D | Log a spend by hand: amount, who it was paid to, when; who to split it with (nobody yet); a category; a note. One button splits it. |
| E | Pick people to split with: search, all contacts with avatars and a checkbox each; Aditi, Neha and Priya are picked. |

Brief B missed the frame's actual subject (the sheet asking how many people); that is a brief error, counted against the test, not the system.

## Round 1 result: 0 of 5 pass

| | Verdict | What drifted |
|---|---|---|
| A | Fail (wrong pattern) | Generated a form (field + member chips). The frame is a *setup moment*: indigo wash, one dashed hero field with the suggested name as an uppercase placeholder, illustrated members with dotted arrows, a hint line, one filled button, keyboard up. The system had no hero field, no keyboard, no wash, and no pattern telling a designer this screen isn't a form. |
| B | Partial | Bones right (hero, add-to-home card, split-with-group card). Chips were white instead of grey-02 fill; group pills should be the small size; the EDIT tag next to the category was missing; the sheet (stepper + GET SPLIT QR CODE) was missing because the brief didn't ask for it. The system had no stepper and no outline tag. |
| C | Fail (wrong components) | Used `ListRow`s. The frame uses a teal header with a white rounded body, a month sub-header with a pill, and transaction cards with a dashed rule, account chip and a YOU GET / YOU OWE footer on a grey tray. None of that existed in the system. The frame's SETTLE UP is a centred unfilled grey pill, against button rule 2. |
| D | Partial | Bones right (fields, split-with, category, filled docked button). Fields were label-above; the app and the frame use floating labels on the border. Section labels are indigo with an icon, separated by dashed rules; Type is two chips; Split-with is a card with group pills and a contacts pill; there's a Repeats switch. |
| E | Close | Right pattern. Missing: `SectionHeader` for ALL CONTACTS, phone numbers as the second line, the selected strip of removable chips above the button, no help icon. |

## Fixes made to the system (v29)

Everything below was checked against the app code first where the app has it.

| Drift | Fix | Vetted against |
|---|---|---|
| Fields label-above | `TextField` is now the floating-label field: 56 high, radius 8, grey-02 border, uppercase Phudu 12 label on the border; label inside at 16 when empty; `trailing="chevron"` for choice fields | `paid_to_or_credit_from_text_field_widget.dart` (InputDecoration labelText + OutlineInputBorder, r8, grey-02), Figma 5.2 |
| No transaction card | `TransactionCard`: name + tag, amount (teal when in), dashed rule, date • time, account chip, optional grey-01 tray with YOU GET / YOU OWE footer and people count | `single_group_transaction_card.dart` (grey-01 tray, dotted line 7/3 grey-02, footer Phudu 14 grey-05), Figma 6.1 |
| No stepper | `Stepper` (− n +), app icons `split_minus_square` / `split_add_square`, Phudu SemiBold 24 grey-05 | Figma 3.1 |
| No hero field, keyboard or wash | `HeroField` (311×60 dashed grey-03 r16, uppercase Phudu SemiBold 20), `Keyboard` (static iOS, 393×307), `.fv-wash-indigo` (#C4D0FF → white, 325 high) | Figma 7.2 |
| No teal header | `ScreenHeader surface="teal"` + `.fv-teal-page__body` (white, 24 top radius) | Figma 6.1 (not in the app yet) |
| Chips white | `EntityChip tone="neutral"` is grey-02 fill, no border; new `size="small"` (26 high, Apfel 14 grey-05); new `trailing="remove"` | Figma 3.1, 2.3, decision 20 |
| No EDIT tag | `StatusTag tone="outline"` (white, grey-02 border, r6, Phudu 14 grey-04, 16px icon) | Figma 3.1, 5.2 |
| Section labels | `SectionHeader icon tone="indigo"` (indigo label with a 20px icon, no rule) | Figma 5.2 |
| Tags inside cards | `CategoryTag size="small"` (21 high, r6, Phudu 12) | Figma 6.1 |
| Sheet glyphs | `Sheet glyph` takes any icon name as well as edit / tag / money | Figma 3.1 |
| Sheet under hero cards | `.fv-scrim` gets a z-index | bug found in round 2 |
| Nothing said which pattern a screen is | README gains a **Page patterns** section (list, person/group page, form, picker, setup moment, result, sheet, modal), and four new reference screens: `Screen-PersonPage`, `Screen-InstantSplit`, `Screen-CreateTransaction`, `Screen-NameGroup` | — |

## Round 2 result (same briefs, extended system)

All five render to the frames' bones. Remaining differences are decisions, not gaps:

| | Status | Left over |
|---|---|---|
| A | Pass | Avatar and arrow positions are approximate (the frame places them by hand). |
| B | Pass | Payee is Phudu SemiBold uppercase (as in 2.2, the reference); frame 3.1 has it in Apfel Mittel 18 sentence case. The two frames disagree; the system follows 2.2. |
| C | Pass | SETTLE UP as the centred neutral pill, allowed on read pages by decision 26. |
| D | Pass | Type chips select in teal per decision 27. The frame is 1080 tall; the reference shows the first 852. |
| E | Pass | — |

Honest score: round 1 was 0/5; round 2 is 5/5 on bones, with two rule conflicts to settle. The system gained 4 components, 7 component props, a patterns section and 4 reference screens from one test. That rate is the point of running these.

## Open decisions raised

- **26 — Unfilled main action on a full screen.** Decided 8 Nov: read pages (a person's page, settings) may carry an unfilled optional action. `Button` gained `tone="neutral"` for Secondary and the `pill` form; the rule and the taste file say so (v30).
- **27 — Chip selection colour.** Decided 8 Nov: type chips (debit / credit) select in teal, `Chip tone="teal" block`; everything else stays indigo (v31).
- **SuccessHero payee style.** 2.2 uses Phudu SemiBold 20; 3.1 uses Apfel Mittel 18. One should win.

## Next: the cold run

Paste each brief from the table above into a fresh Claude Design canvas with the Fave system installed (no other context), and score the five outputs with the same rule. Where it misses, the fix goes into the system, never into the brief.
