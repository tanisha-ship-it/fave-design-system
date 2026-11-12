# Illustration

Fave's illustrations look like objects you could pick up: chunky, flat, outlined, sitting on a ledge, slightly tilted, in the same few colours as the rest of the app. They come from one hand. When a modal, widget, empty state or card needs a picture, use one that already exists (the families below name them), or build a new one with `Spot`. Never bring in stock art, a new style or a generated face.

Every file named here is in `assets/` (`Fave.asset('Group/file')`). The Illustration card in the Foundations group shows each family.

## Pick by job

| Job | Family | Use |
|---|---|---|
| A modal's question (confirm, warn, block) | **Spot** | `ModalIcon` inside `Modal`, or `Spot` for a subject the modal glyphs don't cover |
| A confirmation or success inside a page | **Spot** | `Spot` with a `confirm` badge, or `UPI/upi_success_badge.svg` |
| A home card, widget or banner that sells a feature | **UI object** | A miniature of the feature's own UI on a ledge |
| An empty state | **Ghost** | The same objects in greys, with a dashed path |
| A person | **People** | `Avatar` for a contact; the arch portraits for a role (dad, cook, flatmate) |
| A home's cover | **Scene** | `Groups and homes/home_group_default_1.png` … `_5.png`, or the family's photo in a `Polaroid` |
| Delight: onboarding, rewards, recaps, gift cards | **3D object** | Glossy 3D renders: money notes, the smiley coin, food, the gift box |
| The brand moment | **Peace mark** | The ✌ hand, outlined thick |
| Pointing, underlining, connecting | **Doodle** | Dotted arrows, the yellow underline, sparks, a handwritten note |
| A real thing (a family, a dish) | **Photo** | `Polaroid` |

## The families

### Spot

The modal and confirmation art (`Illustrations/disable_app_lock.svg`, `enable_app_lock.svg`, `delete_account_illustration.svg`, `Empty and error states/payment_blocked.svg`, `payment_warning.svg`, `Groups and homes/simplify_splits_modal_icon.svg`, `leave_group_confirmation.svg`).

- **Canvas** 110 × 101. One object in the middle: a disc by default; a shield, card or phone when that is the subject.
- **Object:** teal-03 face, a 4px teal-04 outline, on a teal-04 **ledge**: a solid copy of the object 3 to 5px lower, no blur. Tilted about 5° (never level).
- **Glyph inside:** a line drawing in teal-05, 3 to 3.25px, round caps and joins, tilted 2° the other way. Fills inside the glyph are teal-05 at 20%.
- **Badge** (optional): a 36px circle overlapping the top-right edge, on its own ledge, with a white mark. Warning is orange-02 on orange-03, confirm is indigo-04 on indigo-05, error is red-03 on red-04, add is indigo with a plus.
- **Burst:** three short 4px strokes at the top-left, fanning out, in the badge's colour (orange when the badge is confirm).
- **Glyph = the subject, badge = what happens to it.** The glyph is the thing the modal is about (a person, AutoPay, a bank, the lock); the badge carries the action or outcome. Never put the action in both: a person-with-minus icon plus a ✕ badge says "remove" twice. The app's own art does this every time: `delete_account_illustration.svg` is a person plus ✕, `decline_auto_pay.svg` is the AutoPay mark plus ✕, `enable_app_lock.svg` is the lock plus ✓.
- **Which badge:** `error` (red ✕) when something is removed, blocked, declined or stopped; `warning` (orange !) when a protection is switched off or something is risky but reversible; `confirm` (indigo ✓) for a change the person is choosing that helps them; `add` (indigo +) when something is added.
- **Indigo** objects are for Fave and UPI things (the UPI number phone, the peace mark): indigo-04 face, indigo-05 outline and ledge, white glyph.

`Spot` builds exactly this: `<Fave.Spot glyph="split_method_by_equal" badge="confirm" />`. Any app icon works as the glyph; it is redrawn in the object's ink.

### UI object

A miniature of Fave's own UI, used to sell a feature on a widget, banner or onboarding step (`Bills/adding_bill.svg`, `adding_card.svg`, `Groups and homes/adding_shared_bills_progress.svg`, `archive_group_confirmation.svg`, `Illustrations/see_all_spends.svg`, `UPI/upi_number_success.svg`).

- White cards with a 3 to 4px teal-04 or indigo-04 outline on a ledge, stacked and offset, each tilted a few degrees.
- Text is never written: grey-02 or indigo-02 bars stand in for lines, 3 to 6px high, rounded.
- One badge (the Spot badge) where the action happens; sparks at the top-left.
- Real content only where it carries the point: a ₹ amount, the UPI mark, a brand logo.

### Ghost (empty states)

The UI objects again in greys (`Empty and error states/add_shared_bills_empty_state.svg`, `add_shared_subs_empty_state.svg`, `empty_calendar_img.svg`, `recents_empty.svg`, `empty_previous_payments.svg`, `split_group_detail_empty_state.svg`).

- grey-02 faces, grey-04 outlines, a grey-03 ledge. At most one small colour accent, usually none.
- A dashed grey-04 path loops out of the object (sometimes ending in a paper plane): something will arrive here.
- Never sad faces, never a person.

### People

- **Contacts:** `Avatar` (initials in the arch, by name). Never draw a contact.
- **Roles and relatives:** the arch portraits in `Avatars/` (`dad_avatar_*`, `mom_avatar_*`, `female_avatar_*`, `male_avatar_*`, `kid_avatar_*`). Flat, warm Indian characters with brown outlines, inside the avatar arch on an avatar colour with the two white glint stripes. Cut-outs without the arch (`dad.png`, `mom.png`, `wife.png`, `husband.png`, `flatmate_*`, `kid_*`) go on peach tiles in onboarding.
- **Fave's own characters:** the indigo-skinned onboarding cast (`Avatars/group_onboarding_*_avatar.svg`, `profile_picture.svg`) on peach-03 tiles, joined by dotted indigo arrows. Onboarding and setup moments only.

### Scene

Flat home interiors with soft texture (`Groups and homes/home_group_default_1.png` to `_5.png`): the default cover of a home until the family adds a photo. Never in a modal.

### 3D object

Glossy, slightly toy-like 3D renders: `Onboarding/money_onboarding.png` (teal ₹ notes), the yellow smiley coin (`Onboarding/onboarding_smiley_left.png`, `UPI/qr_share_*_emoji.svg`), `Rewards/giftbox.png`, food (`Illustrations/burger_onbarding.png`, `Onboarding/fries_onboarding.png`, `Illustrations/pizza_bubble.png`), `Groups and homes/split_zero.png`, and the gift cards category set. For delight: onboarding, rewards, recaps, gift cards, a celebratory widget. Never inside a Spot or next to one.

### Peace mark

Fave's ✌ hand, drawn with a thick outline (`Onboarding/finger_onboarding_blue.svg`, `finger_green_onboarding.svg`, `Illustrations/peace_sticker.svg`). The brand's sign-off: a sticker on onboarding, a corner of a recap, the UPI number phone. One per screen.

### Doodle

Hand-drawn accents that point and connect: dotted indigo arrows (`Groups and homes/create_group_*_dotted_line.svg`, `Onboarding/onboarding_enter_name_*_arrow_line.svg`), the yellow underline (`Illustrations/yellow_underline.svg`), sparks (the Spot burst), the orange swiggle arrow (`Navigation/orange_swiggly_arrow.png`), wave lines, and handwritten notes in the hand face (`Empty and error states/no_spam_txt.png`: "No spam ever. Promise ✌"). Indigo-04, orange-02 or yellow-01; 2 to 3px; dashes 4 apart.

### Photo

A real photo in a `Polaroid`, tilted, with a handwritten caption. A family on its home, a dish on a gift card. Never a stock photo of strangers.

## Rules

- **Colour:** only the palette. Teal-03/04/05, indigo-04/05, orange-02/03, red-03/04, yellow-01, grey-02/03/04, white; skin and hair only on people. No new hues.
- **Line:** 4px outlines at the 110 canvas (scale with size), round caps and joins. Glyph lines 3 to 3.25px.
- **Depth:** a ledge, never a blur shadow. No gradients in flat art (3D objects have their own shading).
- **Tilt:** objects sit 2 to 5° off level; alternate in a row.
- **One idea per picture.** A modal shows one object and at most one badge.
- **Size:** 110 wide in a modal, 48 to 64 in a row or widget corner, up to 160 on an onboarding card.
- **Never:** stock or generic illustration, isometric scenes, thin-line "outline icon" art blown up, emoji as a modal picture, AI-generated people, a new character, text inside the art.

## When nothing fits

1. Try `Spot` with the closest app icon (`Fave.Icon.names()`), tone and badge.
2. For a feature pitch, compose a UI object from real components on a ledge: a `Card` or `TransactionCard` at 70%, tilted 4°, with a Spot badge.
3. If the moment needs new art, say so in the design ("New illustration needed: …") and leave a Spot as the placeholder. Don't invent a style.
