# Illustration test 1: new modals with Spot (9 Nov 2026)

Can the system make modal art the app doesn't have yet, in Fave's style? Three new modals, each a real Fave job, built only from the system (`Modal` + `Spot` with an app icon), shown next to the app's own "Turn off app lock" modal. Then `Spot` was put beside the app's hand-drawn art for the same three subjects.

Images: `illustration-test-1/round-1-modals.jpg`, `round-2-modals.jpg`, `app-art-vs-spot.png`.

## The modals

| Modal | Glyph (subject) | Badge |
|---|---|---|
| Remove Karan from Bangalore Peeps? | `group_detail_transaction_done_by` (a person) | error |
| Simplify splits in Bangalore Peeps? | `simplify_splits_icon` | confirm |
| Stop your Netflix AutoPay? | `settings_autopay_icon` | error |

## Round 1

All three rendered in family with the app-lock modal: same disc, ledge, tilt, burst, badge and line weight (strokes are normalised to 3.25px at the drawn size). Two picks were wrong in meaning, not in style: "Remove Karan" used a person-minus icon with a ✕ badge, and "Stop AutoPay" used a cancel icon with a warning badge. Both said the action twice.

## What the app's own art showed

Next to `leave_group_confirmation.svg`, `simplify_splits_modal_icon.svg` and `decline_auto_pay.svg`:

- **Simplify splits:** the same glyph and colours; the app's version is a bigger blob with no badge. Close.
- **Decline AutoPay:** the app draws the AutoPay mark plus a red ✕. The glyph is the subject; the badge is the action.
- **Leave group:** the app uses a UI object (the group card with a badge), not a disc. Membership actions lean on the UI-object family.

## Fixes made to the system

- New rule in `illustration.md`, the Spot card and the Modal card: **the glyph is the subject, the badge is what happens to it**, and which badge means what (`error` removed, blocked, declined, stopped; `warning` a protection off or a reversible risk; `confirm` a helpful change; `add` something added).
- `Modal` and `ModalIcon` now take any app icon as `glyph` (drawn as a Spot). Before, only the six modal glyphs worked.
- `Spot` normalises every glyph stroke to 3.25px and keeps fill-only icons solid.

## Round 2

The two corrected modals (a person plus ✕, the AutoPay arrow plus ✕) read as the app's own art. Score: 3 of 3 in style, 3 of 3 in meaning after the rule.

## Still open

- A cold run in a fresh Claude Design canvas, to see whether it picks the subject icon unprompted.
- Membership modals may be better as UI objects (the group card), which Spot doesn't build. If that matters, the next step is a `UiObject` recipe.
