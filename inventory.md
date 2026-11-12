# Everything the Fave design system needs

The full list of what has to exist in the system, drawn from the 43 files in the **Fave 2026** and **Fave Redesign 2024** Figma folders (8 Nov 2026), the shipped app code (`../app-index/`), and the current library.

Each item has a status:

- **✅ Library**: in the Fave Design System file and published.
- **🟡 Draft**: specified (in `tokens.json`, `README.md` or the library file), but not finished or not published.
- **🟠 Scattered**: exists in product files or code, but not as one system component. "Where" points to the best example.
- **⬜ Missing**: needed, and nothing exists.

Evidence and counts are in [figma-index/drift.md](figma-index/drift.md). Where every file and section lives is in [figma-index/files.md](figma-index/files.md).

## Vetted against the app code (v1.2.3 build 248, last merge 4 Nov 2026)

Every item below was checked against `app-source/lib`. Rule: **what ships wins**, unless a newer Figma decision already says otherwise (the modal CTA rule, Apfel over Onest). Where code and Figma disagree, the code value is what the staging page in Figma uses.

### Where the code changes the Figma findings

| Item | Figma said | Code says | Verdict |
|---|---|---|---|
| Green #6CC46A | Unknown, 270 uses in Shared Money | One of 8 contact avatar colours (`contact_picture.dart`), plus the profile photo | **Avatar palette**, not a status colour |
| Avatar palette | Missing | `contactBackgroundColors`: #FF7272, #6CC46A, #47C8C2, #5C8DE7, #B187F3, #E673B9, #EC8A60, #D0AC4F. Fill at 25% alpha; initials in SF Pro Rounded Black at 0.5 × size in the full colour; default size 48. Shape: top corners 2.5 × size, bottom corners 0.5 × size | Add `avatar/1–8` primitives and an `Avatar` component |
| SF Pro Rounded, Nanum Pen | Stray fonts | Real theme fonts (`tertiaryFont` in 5 files: avatar initials, numbers; `quaternaryFont` in 8: handwritten accents) | **Keep both** as accent fonts with one use each |
| Onest | 2024 body font | 3 files only (ISP reward onboarding, reward credited, bill receipt) | **Retire.** Migrate those 3 screens to Apfel |
| Swipe to pay (`SWIPE BUTTON`, ~110 in Figma) | Keep or retire | `ConfirmationSlider` is defined but never used | **Retire** from the library. Hold to confirm (`Button Hold`) covers it |
| `Display/Hero` 72 / 100 | Proposed | No size above 40 in code | **Drop.** Figma-only |
| `Label/Medium/SemiBold` (Phudu 14 / 600) | ~1,500 Figma uses | 43 code uses | **Add**, but it's a minor style |
| `Body/Small/Medium` (Apfel 12 / 500) | Missing | 37 uses | **Add** |
| `Body/XLarge` 20 (Apfel 20 / 500 and 600) | Not considered | 41 uses (27 + 14) | **Add** `Body/XXLarge/Medium` and `/SemiBold`, or snap to 18. Needs a decision |
| `orange/04` | Library: #DB7342 (Warning badge ledge) | `orangeN04` = #FF8D3A (2 uses). #DB7342 isn't in code | **Name clash.** Rename the library's to `orange/05`, or put #DB7342 into the theme |
| `teal/06` | Library: #022C2C | `tealN06` = #53CFB8 (3 uses) | Unchanged from CHANGES D4, still open for engineering |
| Colours in code but not in the library | — | `peachN04` #FFF3EE, `peachN05` #FFEADF, `orangeN05` #FF765E, `orangeN06` #FF9C5E, `yellowN02` #DD9D1F, `purpleN01` #8E69FF, `brownN01` #B4642B (1–2 uses each), and a 24-colour payment receipt palette | Keep out of the library. Receipt palette stays local to the receipt |
| Page margin | 20 or 24 | `horizontal: 24` × 195, `20` × 85, `16` × 100. Sheet route has 16 margins, so the sheet is 361 wide | **24 for screen content, 20 for full-width cards, 16 for sheets.** Fix `padding/page` to 24 and add `padding/card-inset` 20 and `padding/sheet-inset` 16 |
| Radius | 4, 8, 12, 16, 24, full | 16 × 214, 12 × 200, 24 × 131, 8 × 127, 6 × 46, 20 × 34, 4 × 22 | **4, 8, 12, 16, 24, full** confirmed. 6 and 20 are strays |
| Spacing | 2–64 | 24, 16, 8, 12, 4, 20, 32, 40 cover 78% | Confirmed: 2, 4, 8, 12, 16, 20, 24, 32, 40. Drop 48 and 64 (rare) |
| Soft `elevation/*` | Unused in Figma | No blurred shadow anywhere in code | **Delete** |
| Ledge | 3px | `greyN02` (0,3) × 149, `peachN03` × 11, `peachN01` × 8 | Confirmed. `ledge/warm` uses peach/03 |
| Scrim | 80% black | Sheet route animates black 0 → 0.8 with `Curves.ease` | Confirmed. Add `color/overlay/scrim` |
| Motion | Proposed ease-in-out | The new `Motion` class (shared_ui/motion.dart): **200 ms easeOut** for small state changes. `DrillSwitcher` and page routes: **300 ms easeInOut**. Sheets: easeOut. Toasts: 250 ms | Tokens: `motion/state` 200 easeOut, `motion/page` 300 easeInOut, `motion/toast` 250, `motion/press` 32 |
| Text field | Your money `input field` | 46 `TextField`s: radius 12, 1px `greyN02` border (`greyN04` on 13), hint in Phudu, often no border inside cards | Confirms the Figma component. Default border grey/02, radius 12 |
| Verified name line | Your money `verified name` | `BankingNameLine`: shield icon + "✓ banking name" (6 uses) | Promote |
| Switch | V0.7 `switch` | 7 `Switch`: track teal/04 on, grey/02 off, white thumb | Promote. On = `color/success/default` |
| Checkbox | tick-square icon | `AnimatedCheckbox` (15) | Promote |
| Toast | V0.1 effect only | **~390 calls** (`showApplicationErrorToast` 162, `showErrorToast` 149, `showSuccessToast` 57). Pill, radius 29, min height 56, max 90% width, padding 24 / 8, black 2px ledge. Success: teal/03 fill, teal/05 text. Error: red/03 fill, white text. 3 s, animates in 250 ms | **High priority.** Most-used feedback component, and missing from Figma |
| Banner | Bill card strips | `CustomBanner`: white, 1px `greyN02` border with a 1px ledge, radius 29, padding 16 / 12, body 16 / 400 grey/05 | Promote |
| Tab bar | Navbar Interactions | White, 1px top border `greyN02`, 70 + safe area high. Four tabs of 72 × 72 icon-only images (active and inactive assets, cross-fade 200 ms), with the scan Lottie (42) in the middle. Tab 4 (Gift Cards) is still a coming-soon screen | Promote, icon-only, no labels |
| Header | Peach panel | `ScrollTopBar`: 56 high under the status bar. Page colour white on 7 screens, peach on 4. `HeroBackdrop` paints gradient headers on 8. `PageTitle` = Phudu 20 / 600, grey (7 uses). Back arrow 24 | Two variants: white and warm (with ledge), title `Heading/Medium` |
| Amount | `RupeeAmount` | 49 uses. ₹ and decimals are 0.67 × the amount size | Rule: ₹ and paise at ⅔ size |
| Skeleton | Code only | `ShimmerContainer` × 59 | Add to Figma |
| Dotted divider | Sheet | `DottedLine` × 58 | Confirmed |
| Inline load error | Code only | `LoadErrorState` × 19 | Add |
| Copy value (UPI ID, txn ID) | Not seen | `CopyableValue` × 14 | Add to the inventory |
| Split breakdown | Splits | `SplitBreakdown` × 4 | Splits-specific, keep in feature |

### Confirmed as they were

`Button` (`RaisedButton` presets: primary indigo/04 on indigo/05 with a 3px ledge, radius 12, secondary indigo/01, destructive red/01 on red/03), the `Modal` and `Sheet` specs (361 wide = 393 − 2 × 16), the colour primitives in the library, Phudu + Apfel, the dotted divider, the date and time picker (`DateAndTimePicker`, 3), and permission sheets (`RequestPermissionModal`, 3).

---

## 1. Foundations

### Colour
| Item | Status | Where / note |
|---|---|---|
| Primitives (indigo, teal, red, orange, yellow, peach, grey, white, black) | ✅ | 34 variables |
| Semantic roles (text, surface, border, action, danger, success, warning, disabled, warm) | ✅ | 29 variables |
| Ledge colours | ✅ | `color/*/ledge` |
| Scrim / overlay (black 80%) | 🟡 | In the modal spec, no token |
| Placeholder surface (#D9D9D9 / #C4C4C4, ~800 uses) | ⬜ | Image and avatar placeholders |
| Avatar background palette | 🟠 | V0.7 [avatars](https://www.figma.com/design/jJzqtU6qtkWmYl8klndPHD?node-id=534-3537), app `theme.dart` |
| Category colours (bill and spend categories, chips) | 🟠 | Your money [bill category icons](https://www.figma.com/design/crRis9kFjCXDuTJiFFjnhJ?node-id=183-1284). Open question in the splits audit |
| Green (#6CC46A, 270 uses in Shared Money) | 🟠 | Code: it's an avatar colour. See Avatar palette |
| Money semantics: owe = red, get back = teal, settled = ? | 🟠 | Splits home. Needs `color/text/owe`, `color/text/owed` or a written rule |
| Retire the legacy `Color Tokens` collection (teal action) | ⬜ | It still sits in the library file |

### Type
| Item | Status | Where / note |
|---|---|---|
| Display, Heading, Label and Body styles | ✅ | 19 styles |
| `Label/Medium/SemiBold` (Phudu 14 600, ~1,500 uses: uppercase labels, tabs) | ⬜ | Gap in the splits audit |
| `Body/Small/Medium` | ⬜ | Gap in the splits audit |
| Body SemiBold styles | 🟡 | In tokens.json, not published |
| ~~`Display/Hero`~~ for 72 and 100 | — | Dropped: not in code |
| Amount style: smaller ₹ and smaller decimals | 🟠 | App `RupeeAmount` (61 uses). Needs a type rule and a component |
| Uppercase rule (which labels are all caps) | 🟠 | Every button, section header and title. Write it down |
| Body font: Onest is retired, Apfel only | 🟠 | 2024 files are still in Onest. Record the decision |
| Handwritten accent (Nanum Pen Script) | 🟠 | Keep: theme `quaternaryFont`. HanziPen is Figma-only |
| SF Pro Rounded Black for avatar initials | 🟠 | Keep: theme `tertiaryFont` |

### Space, size, layout
| Item | Status | Where / note |
|---|---|---|
| Spacing scale 2–64 | 🟡 | `Spacing` collection exists, not in README or tokens |
| Page margin | 🟡 | Collection says 20; screens use 24 for content and 20 for cards. Decide, then fix the variable |
| Screen frame 393 × 852, safe areas, status bar 44, home indicator 21 | 🟠 | Every file. Write as a layout spec |
| Grid / content width 345 | 🟠 | |
| Touch target minimum (44) | ⬜ | |
| Radius scale | 🟡 | Collection lacks 4 and 8, which buttons and chips use. Proposed: 4, 8, 12, 16, 24, full |
| Icon sizes (16, 20, 24) and avatar sizes (24, 34, 48, 64) | 🟠 | Seen in splits screens |

### Surface and depth
| Item | Status | Where / note |
|---|---|---|
| Ledges (3px drop, no blur) | ✅ | `ledge/neutral`, `action`, `action-subtle`, `danger`, `danger-subtle`, `disabled`, `warm` |
| Border 1px default, dotted divider | 🟠 | Dotted divider used in Sheet and app `DottedLine` (56) |
| Soft `elevation/*` styles | — | Delete: no blurred shadow in code |

### Motion
| Item | Status | Where / note |
|---|---|---|
| Durations and easing (200, 300, 500, ease-in-out) | 🟠 | Code only (`app-index/design-system.md`) |
| Button press (drop 3px, 32ms) | 🟡 | README |
| Loading sweep on buttons | 🟡 | README |
| Payment success / pending animations | 🟠 | Payment details, page "pending + success animations" |
| Onboarding animation | 🟠 | V0.7, [24 Sep '26](https://www.figma.com/design/jJzqtU6qtkWmYl8klndPHD?node-id=2363-5779) |
| Lottie library | 🟠 | V0.1 "lottie playground" |
| Skeleton shimmer | 🟠 | Code `ShimmerContainer` (44), not in Figma |

### Iconography and imagery
| Item | Status | Where / note |
|---|---|---|
| UI icon set (Vuesax linear, about 45 used, 24px) | 🟠 | Copied locally into nearly every file. Library needs one set, a size rule and a colour rule |
| Status icons (check, error, warning, heart) | 🟠 | `*_Icon_UIA`, ~170 uses |
| Tab bar icons, active and inactive | 🟠 | [Navbar icons](https://www.figma.com/design/dCpchGonsJ5borzTT3WNLO?node-id=187-2770) |
| Modal and sheet glyphs | ✅ | `Modal Glyph/*`, `Sheet Glyph/*` |
| Bank logos, every bank, small and large | 🟠 | V0.1 [bank logos](https://www.figma.com/design/Bagq5n2FJmxepypX26GUEV?node-id=361-14390), ~2,000 uses |
| Bill / biller category icons | 🟠 | Your money and V0.5 "final icons - bill categories". BBPS categories in the BBPS file |
| Spend category icons and colours | 🟠 | Splits ("FOOD & DRINKS" tag) |
| Avatars and group avatars | 🟠 | V0.7 avatars; group avatar = people icon in a tile |
| Merchant logos (Swiggy, Zomato, Spotify…) | 🟠 | Gift Cards, payments. A rule for unknown merchants is needed |
| Illustrations (burst, success disc, empty states) | 🟠 | Modal burst; Homes empty states |

### Brand
| Item | Status | Where / note |
|---|---|---|
| Logo, logomark, wordmark | 🟠 | SplurgeKit [Brand Assets](https://www.figma.com/design/wktSBJLHMvgL3D0SGL6ADd?node-id=14-42), V0.1 app icon page |
| App icon | 🟠 | V0.1 app icon, Brand & Marketing |
| Fave Shield (fraud protection sub-brand) | 🟠 | FRI/MNRL draft page |
| Partner marks: BHIM UPI, NPCI, Bharat BillPay, RuPay | 🟠 | V0.1 [upi guidelines](https://www.figma.com/design/Bagq5n2FJmxepypX26GUEV?node-id=907-14538), BBPS file |

---

## 2. Components

### Actions
| Component | Status | Where / note |
|---|---|---|
| Button (Primary, Secondary, Tertiary × Default, Destructive, Neutral × Large, Small × states) | ✅ | Replaces `Screen Button`, `Primary Button`, `Modal Button`, `Modal button extended` (~1,600 old instances) |
| Button Hold (hold to confirm) | ✅ | Also `Hold to disable button` in SplurgeKit and Biometric |
| ~~Swipe to pay~~ | — | Retire: `ConfirmationSlider` is unused in code |
| Pill / text action ("+ ADD A NEW GROUP", "EDIT", "SEND ₹7000") | 🟠 | `Action Pill`, `Section header CTA`. Map to Button Small or a new `Pill` |
| Amount quick-pick button | 🟠 | `Amount Button` (Biometric, SplurgeKit) |
| Icon button (back, settings, share, help, close) | 🟠 | In every header; no component |
| Floating scan / QR button | 🟠 | Navbar `qr` |
| Inline link | ⬜ | |

### Inputs and selection
| Component | Status | Where / note |
|---|---|---|
| Text field (default, focused, verified, error) | 🟠 | Your money `input field` (784:214); `Sheet Content/Input` |
| Verified name line under an input | 🟠 | Your money `verified name` |
| Search field | 🟠 | `SEARCH BAR` and `Component 10/11/12` |
| Amount entry (big ₹ number + numeric keypad) | 🟠 | Pay flows; iOS numeric keyboard |
| Payee type picker: UPI ID, UPI number, bank transfer | 🟠 | SplurgeKit `UPI ID`, `UPI NUMBER`, `BANK TRANSFER` |
| Payment method option (phone, UPI, bank × selected) | 🟠 | Your money (784:192) |
| Option row (radio) | ✅ | `Sheet Option` |
| Chip select | ✅ | `Sheet Chip` |
| Checkbox | 🟠 | `vuesax/linear/tick-square` and app `AnimatedCheckbox` |
| Toggle switch | 🟠 | V0.7 `switch`; Settings notifications page |
| Date and time picker | 🟠 | App `DateAndTimePicker`; Your money calendar |
| Contact picker row with tick | 🟠 | Splits "Choose from contacts" |
| Selected-people strip | 🟠 | Splits 4.1 |
| Split method picker (equal, custom, %) | 🟠 | Splits split details |

### Display
| Component | Status | Where / note |
|---|---|---|
| Card (white, 1px border, r16, p20, ledge) | 🟡 | The rule is in README; no component |
| Warm header card (peach) | 🟡 | `ledge/warm` exists; no component |
| List row: person, group, home, transaction, bank account, setting | 🟠 | Splits home rows (48 avatar, title, balance line, chevron); settings rows |
| Section header (uppercase label, rule, optional pill) | 🟠 | Splits home "GROUPS ——— + ADD A NEW GROUP"; `Section see all` |
| Avatar: photo, initials, group tile, with status badge | 🟠 | Splits; V0.7 avatars |
| Balance line ("You owe ₹770", "You get back ₹350") | 🟠 | Splits home; app `OutstandingInfoWidget`, `NetZeroBalanceLine` |
| Amount (`RupeeAmount`) | 🟠 | Code only |
| Tag / badge: category, status, "Free Forever", counts | 🟠 | Payment success category tag; Gift Cards badge |
| Transaction card | 🟠 | Payment details [transaction cards](https://www.figma.com/design/riHsGXUTBpQPhcEyBjXqfO?node-id=833-2404) |
| Bill card (upcoming, unpaid, paid, due, overdue, failed, pending) | 🟠 | Your money [bill card types](https://www.figma.com/design/crRis9kFjCXDuTJiFFjnhJ?node-id=174-1631) |
| Summary rows (label + amount, positive, negative) | ✅ | `Sheet Summary Row` |
| Bank account row / chip with logo and masked number | 🟠 | Bank link flows; Settings manage accounts |
| Masked identifiers (swi****@icici, XX8271) | 🟠 | Content rule needed |
| Progress / steps (onboarding) | 🟠 | V0.7 |
| Divider: solid, dotted | 🟠 | |
| Home screen widgets (Android/iOS) | 🟠 | V0.4 PFM widgets, V0.5 home widgets, Shared Money widget states |
| Lock screen widgets | 🟠 | Navbar Interactions "lock screen widgets" |

### Navigation
| Component | Status | Where / note |
|---|---|---|
| Bottom tab bar (Home, Shared Money, Your Money, Gift Cards + scan) | 🟠 | [Navbar Interactions](https://www.figma.com/design/dCpchGonsJ5borzTT3WNLO); app `navbar.dart` |
| Screen header: peach panel with back, uppercase title and right action, optional search | 🟠 | Splits screens (117 / 192 high) |
| Plain header (white, title only) | 🟠 | Settings |
| Tabs / segmented control | 🟠 | People and Split tabs in Shared Money |
| Bottom CTA dock (single, double, with helper text) | 🟠 | Every flow; specs in drift.md |

### Feedback and overlays
| Component | Status | Where / note |
|---|---|---|
| Modal (decisions) | ✅ | With Modal Icon, Content/Consequences, Content/Bullets |
| Sheet (forms and pickers) | ✅ | |
| Toast (success, error) | 🟠 | V0.1 `Toast` effect; app `CustomToast` |
| Inline banner (info, warning, error) | 🟠 | Bill card failed / pending strip; app `CustomBanner` |
| Snackbar with action | 🟠 | App `snackbar.dart` |
| Result screen (success, pending, failed) | 🟠 | Payment success (teal hero, check, amount, merchant) |
| Full-screen error | 🟠 | App `GenericErrorScreen` |
| Inline load error with retry | 🟠 | App `LoadErrorState` |
| Skeleton loading | 🟠 | App `ShimmerContainer` |
| Empty state | 🟠 | Homes [empty states](https://www.figma.com/design/HzRKVqMB9FKCLgEUw3W4G3?node-id=311-35049), Splits empty card |
| Permission sheet (contacts, notifications, SMS) | 🟠 | App `RequestPermissionModal`. Do these follow the modal rule? (open in modal-audit) |
| Consent prompt (WhatsApp) | 🟠 | Settings `WhatsApp prompt` (3 contexts) |
| Fraud / risk warning (FRI, MNRL) | 🟠 | FRI/MNRL Designs |
| Coach mark / tooltip | ⬜ | |

### Device chrome (use, don't redesign)
Status bar, home indicator, iOS keyboards, suggestion bar. They come from the Apple iOS kit: about 4,500 instances, shared by every file. They should be one named set in the library so they stop being copied in.

---

## 3. Patterns

Screen templates. Each needs a reference frame and a short "use when":

1. **Tab root**: Home, Shared Money, Your Money.
2. **Detail page**: peach header, cards, list.
3. **Form screen**: fields and a bottom dock.
4. **Picker screen**: search, list with ticks, selected strip, dock.
5. **Amount entry**: payee, big amount, keypad, pay.
6. **Result screen**: success, pending, failed.
7. **Settings list**.
8. **Onboarding step**.
9. **Full-screen error**.
10. **Empty tab**.

Flows. The canonical version and where each lives:

| Flow | Best reference |
|---|---|
| Pay: scan, UPI ID, number or contact → amount → PIN → result | V0.1 "0.1", Payment details |
| Bank linking | V0.1 bank link flows |
| Split a payment, non-group | Shared Money [non-group splits, DS applied](https://www.figma.com/design/HzRKVqMB9FKCLgEUw3W4G3?node-id=1917-10506) |
| Groups, homes, settle up | Shared Money; V0.6 |
| Bills and upcoming payments | Your money; V0.5 monthly payments update oct; BBPS |
| Autopay and mandates | Autopay Interoperability; V0.2 Autopay |
| UPI Lite | UPI Lite |
| UPI Circle / delegated spending | V0.6 UPI Circle |
| Biometric payments | Biometric Payments, Face ID · Fave DS |
| Onboarding | V0.7, 24 Sep '26 update |
| Settings, profile, app lock, delete account | Settings Redesign |
| Gift cards | Gift Cards |
| Merchant payouts | PL merchant Payouts |
| Fraud warnings | FRI/MNRL Designs |

Interaction rules already decided:
- The filled / unfilled button rule.
- Modal vs sheet.
- Hold to confirm for irreversible actions only.

Still to write:
- When to use swipe vs tap to pay.
- When a toast, a banner or a modal is the right feedback.

---

## 4. Content

| Rule | Status | Note |
|---|---|---|
| Money format: ₹, Indian grouping (₹1,00,000), when to show paise | 🟠 | |
| Owe / get back wording and colour | 🟠 | Splits |
| Dates and times ("Paid on 16th Jan", "27th Oct, 09:45PM") | 🟠 | |
| Masking UPI IDs, account and card numbers | 🟠 | |
| Uppercase for buttons, section labels and titles | 🟠 | |
| Status words: pending, failed, refund initiated, due today, overdue by N days | 🟠 | Bill cards |
| Voice and tone (Money Uncle, English only) | 🟠 | See onboarding stance |
| Modal copy: title as a question, consequence lines with 🚨 | ✅ | modal-audit |

## 5. Compliance

These rules constrain design and are easy to break by accident. They should sit in the system as hard rules:

- **NPCI / BHIM UPI**: logo placement, PIN screens owned by the NPCI library, mandatory text. Source: V0.1 [upi guidelines](https://www.figma.com/design/Bagq5n2FJmxepypX26GUEV?node-id=907-14538), NPCI Checklist.
- **BBPS**: Bharat BillPay branding and certified screens. Source: [BBPS Certification Screens](https://www.figma.com/design/ql4X6ZXwGoA03qv35lx1C7?node-id=18-617).
- **DoT FRI / MNRL** fraud warnings. Source: FRI/MNRL Designs.
- **Consent**: WhatsApp, contacts, SMS / Gmail reading.

---

## 6. What makes it queryable by AI

The goal is that an AI can answer "what does X look like, when do I use it, and where is it?" without opening Figma by hand.

1. **One text file per component and pattern**: purpose, use / don't use, anatomy, variants, tokens, Figma key and node, Flutter widget, screens that use it. `README.md` does this today for Button, Modal and Sheet; extend it to everything above.
2. **Descriptions on every Figma component.** `search_design_system` returns them, so Claude and other tools pick the right component.
3. **`tokens.json` as the single source**, with spacing, radius, motion and the new colour roles added. Figma variables and `tokens.css` are generated from it.
4. **Code Connect** from library components to the Flutter widgets in `app-source`, so design and code answers agree.
5. **[figma-index/files.md](figma-index/files.md)** as the map of where every flow lives, re-run when files change.
6. **Clean names.** "Component 27" and "Frame 131204" can't be found. Library components and reference frames get real names.
