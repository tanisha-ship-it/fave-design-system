# Fave reusable components

Every reusable piece of Fave UI, mapped from the app code (v1.2.3, 4 Nov 2026) and the Figma files to its component in the Fave design system. "Uses" counts how many times the widget is created in code.

**Status** says where each design-system component stands:
- **Built:** in the Claude Design system (`window.Fave`) and on the Figma staging page.
- **New:** added on 8 Nov in this pass.
- **Gap:** needed, not built yet.

Code-only helpers aren't listed: `BoundedText`, `ThemedBuilder`, analytics wrappers, the `*Builder` data loaders and the scroll anchors.

## Actions

| Design-system component | App widget (uses) | Figma today | Status |
|---|---|---|---|
| `Button` | `RaisedButton` presets (369), `PrimaryButton` (5) | `Button` (library) | Built |
| `ButtonHold` | `AnimatedFillRaisedButton` (7) | `Button Hold` | Built |
| `IconButton` (back, help, settings, close) | `NavigationBackButton` (59) | inside headers | Built, inside `ScreenHeader` and `Sheet` |
| `ActionPill` | `SeeCalendarChip`, `BillPaymentCategoryChip`, "Manage bills", "+ Add new" | `Action Pill` (SplurgeKit) | New |
| `SectionPill` | Section header action ("+ ADD A NEW GROUP") | `Section header CTA` | New (was part of `SectionHeader`) |

## Pills and tags

These are the pill families. The [Pills card](https://claude.ai/artifact/DN7a1y9Ec5XYJvNK8p9YyE) in the system shows them side by side.

| Family | What it's for | App widgets | Look | Status |
|---|---|---|---|---|
| `CategoryTag` | A spend or bill category | `CategoryWidget`, `BillHistoryCategoryChip` | Emoji + uppercase Phudu, orange-02 on peach-02, radius 6 | New look (emoji, peach-02) |
| `StatusTag` | A state: paid, failed, pending, moved, autopay | `BillPaymentStatusChip`, `AutoPayStatusChip`, `AutoPayInfoChip`, `MovedToFaveChip`, `FrequencyChip`, `SupportStatusChip` | Small uppercase Phudu, radius 6, tone: neutral, danger, success, info or warning | New |
| `AccountChip` | Which bank account or card paid | `PaymentAccountChip`, `LinkedAccountPaymentChip`, `TransactionPaymentAccountChip`, `ManualPaymentChip` | Bank logo + "HDFC • XX4532", grey-02 border, radius 4 | New |
| `ActionPill` | A secondary action in a row | `SeeCalendarChip`, `BillPaymentCategoryChip` | White, grey-03 border, full radius, Apfel Medium grey-07, optional icon | New |
| `EntityChip` | A person, payee, home or group you can pick | Home payees ("Cook", "Electricity", "Maid"), `HomeSpendChip`, group and contact chips on payment success | Leading avatar, image or icon + Apfel Medium, full radius. Tone: indigo, teal or neutral | New |
| `Chip` | One choice in a set (payment method, split method) | `Sheet Chip`, payment method option | Uppercase Phudu, radius 8, indigo when selected | Built |
| `SectionPill` | Action beside a section label | Section header CTA | Uppercase Phudu 12, grey-03 border, full radius | New |
| — | Receipt stickers | `ReceiptPill` (emoji receipts) | Receipt-only | Stays in the receipt feature |

## Layout and lists

| Design-system component | App widget (uses) | Figma today | Status |
|---|---|---|---|
| `ScreenHeader` | `ScrollTopBar` (8), page titles | Peach and white header frames | Built |
| `TabBar` | `navbar.dart` | Navbar Interactions | Built |
| `BottomDock` | Bottom CTA areas, `BottomAddTransactionButton`, `SplitPickerBottomBar` | Bottom gesture-bar frames | Built |
| `Card` | Card containers everywhere | Card frames on `ledge/neutral` | Built |
| `SectionHeader` | List section labels | `Section see all`, `Section header CTA` | Built |
| `ListRow` | Group, person, home and member rows (`SplitPickerMemberRow`, `InvitePeopleToGroupContactCard`, `NonArchivedGroupCardWidget`) | `Component 26–29` | Built |
| `Divider` (solid, dotted) | `DottedLine` (58), `SeparatedColumn` (22) | Lines | Gap: CSS only (`.fv-sheet__divider`) |
| `SummaryRow` (label ↔ amount) | `FeeSheetLine` (7), `SplitBreakdownLine` (5), `KeepEndsLine` (15) | `Sheet Summary Row` | Gap |

## Money and identity

| Design-system component | App widget (uses) | Figma today | Status |
|---|---|---|---|
| `Amount` | `RupeeAmount` (49) | Amount text | Built |
| `Balance` (owe / get back) | `OutstandingInfoWidget`, `NetZeroBalanceLine` | Balance lines | Built |
| `BalanceBadge` (owe / get back corner badge) | `you_owe_group_home.svg`, `you_get_group_home.svg` | Shared Money 1917:10606, 1917:10590 | New |
| `Avatar` | `ContactPicture` (20), `SplurgeNetworkImage` | Avatar frames (non-group splits) | Built |
| `BankingNameLine` | `BankingNameLine` (6) | `verified name` | Built |
| `AccountNameLine` (bank + masked account) | `AccountNameLine` (30) | Bank rows | Gap, partly covered by `AccountChip` |
| `CopyValue` (UPI ID, txn ID with copy) | `CopyableValue` (14) | — | Gap |
| `TransactionCard` | Transaction cards | Payment details, "transaction cards" | Gap |
| `BillCard` (7 states) | Bill rows (`bill_payment_rows.dart`) | Your money, "bill card types" | Gap |

## Inputs

| Design-system component | App widget (uses) | Figma today | Status |
|---|---|---|---|
| `TextField` | `TextField` (46) | `input field` | Built |
| `SearchField` | Contact and bank search | `SEARCH BAR`, `Component 10/11/12` | Gap |
| `AmountInput` + keypad | `enter_amount.dart` | Amount entry frames | Gap |
| `Switch` | `Switch` (7) | `switch` | Built |
| `Checkbox` | `AnimatedCheckbox` (15) | tick-square | Built |
| `SheetOption` | Option rows in sheets | `Sheet Option` | Built |
| `DateTimePicker` | `DateAndTimePicker` (3) | Calendar frames | Gap |

## Feedback and overlays

| Design-system component | App widget (uses) | Figma today | Status |
|---|---|---|---|
| `Modal` (+ `ModalIcon`) | Decision sheets (62), `RequestPermissionModal` (3) | `Modal` | Built |
| `Sheet` | `NewSplurgeBottomSheetRoute`, pickers | `Sheet` | Built |
| `Toast` | `Toasts.*` (~390 calls) | — | Built |
| `Banner` | `CustomBanner` | — | Built |
| `Skeleton` | `ShimmerContainer` (59) | — | Built |
| `LoadError` | `LoadErrorState` (19) | — | Built |
| `ErrorScreen` | `GenericErrorScreen` (2) | — | Gap |
| `EmptyState` | `SharedMoneyEmptyPrompt`, `SpendsEmptyPlaceholder`, homes and groups empty widgets | Homes "empty states" | Gap |

## Icons and assets

- **`Icon`:** every small UI icon from `app-source/assets`, by file name. See [the Icons asset group](https://claude.ai/artifact/DN7a1y9Ec5XYJvNK8p9YyE).
- **Assets section:** all images from `app-source/assets`, grouped (icons, bank logos, avatars, illustrations, empty states, onboarding, bills, groups, Lottie animations).


## Added by generation test 1 (8 Nov)

| Piece | App widget | Figma | In the system |
|---|---|---|---|
| Floating-label text field | `paid_to_or_credit_from_text_field_widget.dart` and 23 other `labelText` fields | 5.2 (1917:13643) | `TextField` (label on the border, `trailing`) |
| Transaction card | `single_group_transaction_card.dart`, `individual_transaction_history_card.dart` | 6.1 (1917:15062) | `TransactionCard` |
| Stepper | — (Instant split count is a new flow) | 3.1 (1917:12168) | `Stepper` |
| Hero field, indigo wash, keyboard | — (Name your group is a new flow) | 7.2 (1917:15903) | `HeroField`, `.fv-wash-indigo`, `Keyboard` |
| Teal page header | — (not in the app yet) | 6.1 | `ScreenHeader surface="teal"`, `.fv-teal-page__body` |
| Indigo form section label | create_manual_transaction section headers | 5.2 | `SectionHeader tone="indigo" icon` |
| Grey entity pills, small size, removable | group/home selectors, contact strip | 3.1, 2.3 | `EntityChip` neutral = grey-02, `size="small"`, `trailing="remove"` |
| Edit tag | category edit affordance | 2.2, 3.1, 5.2 | `StatusTag tone="outline" icon="edit"` |
| Small category tag | inside transaction cards | 6.1 | `CategoryTag size="small"` |
| Category pills (display, small, picker, picker selected) and the 26-category list | `CategoryWidget`, Edit Category sheet | Shared Money 223:1898, 1917:12168, 1917:15062 | `CategoryTag` (`size`, `picker`, `selected`), `CategoryPicker`, `Fave.CATEGORIES`; Figma `_Staging/Category Tag` (State=Display, Display small, Picker, Picker selected) |
| Transaction card, four states (personal, split, group, home) | `single_group_transaction_card.dart` | Shared Money 2021:72, 2021:92, 2021:124, 2021:189 | `TransactionCard` (`share`, `context`); Figma `_Staging/Transaction Card` State=Personal / Split / Group / Home |

## Gift cards (8 Nov, from Gift Cards 208:7063)

The app ships only `gift_cards_coming_soon_screen.dart`, so these come from Figma alone.

| Piece | Figma | In the system |
|---|---|---|
| Search pill + wallet | 621:1349 | `GiftHeader` |
| Sticker title | 208:7116 | `StickerTitle` |
| Drop ticket, offer ticket | 208:7301, 208:7189 | `GiftTicket` (`size`, `brand`, `expired`, `stamp`, `eyebrow`) |
| Limited Drops carousel | 208:7095–7105, 208:7314 | `DropCarousel` |
| Category deal tile | 208:7117 | `DealTile` |
| Blockbuster Brand block | 208:7213 | `BrandSpotlight`, `WaveBand`, `Polaroid`, `Price`, `Button onColor size="medium"` |
| Section label at 16 | 208:7117 | `SectionHeader size="large"` |
| Whole screen | 208:7063 | `Screen-GiftCards` |
