# Plan: Fave design generated in Claude Design

Goal: Fave product design gets generated in Claude Design. The Claude Design system has to carry Fave's components, rules, assets and taste well enough that a brief turns into a screen Tanisha would ship.

Started 8 Nov 2026. Decisions it builds on are in `decisions.md`.

## Status (8 Nov 2026)

Tanisha chose to update the existing system rather than start a new one. Version 0.2 is published to the "Fave" Design System artifact:

- **Tokens:** code-matching shade names plus 10 roles, the avatar palette, spacing, radius, ledges and opacity. Type: Apfel stops at Mittel, there's no 20px Apfel, and there are accent styles for avatars and handwriting.
- **README:** a brand book covering the button rule, modal vs sheet, money colours, content and compliance.
- **22 components** on `window.Fave`, each with a guide and a live preview. All of them rendered in a local test with no errors and the real fonts.
- **Cover:** moved to the new token names.

Done since (8 Nov, later):

- **Step 4 (assets):** 674 app assets in 15 groups, a 292-icon `Icon`, six exact Figma icons, the pill family, `IconTile`, both success animations, the bell glyph.
- **Step 5 (reference screens):** ten page cards in the Screens group, each rebuilt from one Figma frame with the real components, plus `taste.md` and a live do/don't card. The settle-up sheet was redone to Tanisha's approved look (decision 25, `SettleRow`).

- **Step 6 (tests), first pass:** `generation-test-1.md` and `generation-test-1.html`. Round 1 was 0/5; the system gained `TextField` floating labels, `TransactionCard`, `Stepper`, `HeroField`, `Keyboard`, the teal header, indigo section labels, small/removable chips, the outline tag, a Page patterns section and four reference screens (v29); round 2 is 5/5 on bones; decisions 26 and 27 were settled the same day (v30, v31).

Not done yet:

- **Figma staging caught up (8 Nov, evening).** The staging page (136:2) now carries four new boards at x 3120 and 4320: pills (Category Tag, Status Tag incl. outline, Account Chip, Action Pill, Section Pill, Entity Chip 16 variants), rows and sheets (Badge, badges on the person row, fading section rule, Settle Row, the settle-up sheet as a live-Sheet instance with a staging content swap), fields and controls (Text Field v2 floating label, Chip indigo/teal, Stepper, Button neutral pill), cards and headers (Transaction Card, teal Screen Header, indigo Section Header, Hero Field), plus a decisions 15–27 board at (0, 2750) with merge notes. The Design System page is untouched; Tanisha merges by hand. Still not in Figma: Icon Tile, SuccessHero (animation), Keyboard.
- **Pulse (8 Nov, night).** `pulse.md` joined the system: ranked weekly wedges with shelf life and confidence, a six-week calendar, evergreen vocabulary, the Zomato/Swiggy playbook translated to money, and a never list; the README's *The moment* section says how a brief uses it. Editions archive in `design-system/pulse/`; the scheduled task `fave-pulse` refreshes it every Monday 08:30 while the Claude app is open.
- **Gift cards (8 Nov, v38).** From Gift Cards 208:7063: `GiftTicket`, `DropCarousel`, `StickerTitle`, `DealTile`, `GiftHeader`, `Polaroid`, `WaveBand`, `Price`, `BrandSpotlight`, `Screen-GiftCards`, an assets group, Apfel Fett and Nanum Pen fonts, `Button onColor size="medium"`, `SectionHeader size="large"`. Also `Fave.asset()`, which fixed broken image paths in three published previews. Decision 30 (how loud gift cards may be) is open. Not yet on the Figma staging page.
- **Gradients (9 Nov, v39–v40).** 21 gradient tokens (Shared Money, Your Money, Gift Cards) and a Gradients card (decision 31); `Fave.asset()` now also works when the bundle is inlined.
- **Illustration (9 Nov, v41).** `illustration.md` (families, rules, index of files), the `Spot` component and an Illustration card (decision 32).
- **Usable from scratch (9 Nov, v43).** Decision 33: tokens inside bundle.css, the composition pieces, the compose section, Screen-Todos. Existing canvases keep their old copy of the system until it is refreshed in the canvas.
- **Step 6, cold run.** Tanisha pastes the five briefs into a fresh Claude Design canvas with the Fave system installed and scores the output. Fixes go into the system, not the brief.
- Modal glyphs for Cash and Log out; Sheet glyphs beyond Edit, Tag and Money.
- **Simplified artwork.** The lock shackle, the Users glyph and the Bank glyph in the bundle are simplified redraws of the Figma artwork. The disc, the badges and the UPI glyph are exact.

## Where it lives

The live system is the "Fave" Design System artifact (https://claude.ai/artifact/DN7a1y9Ec5XYJvNK8p9YyE). It's still at foundations v0.1 from October: tokens, `bundle.css`, one Button card, and a README that predates the button rule.

The same rule as Figma applies: build v2 as a **new** system artifact ("Fave v2 · staging"). The current one stays as it is until Tanisha switches over. Canvases copy a system when they install it, so old canvases keep working either way.

## Build order

1. **Tokens.**
   - Colour uses the shade names from the colour test file (`grey/05` = `greyN05`), the 8 avatar colours, and 10 roles.
   - Spacing: 2, 4, 8, 12, 16, 20, 24, 32, 40; page 24, card inset 20, sheet inset 16.
   - Radius: 4, 8, 12, 16, 24, full.
   - Ledges; scrim at 80%.
   - Type: Phudu and Apfel; Apfel strong text is Mittel; no 20px Apfel.
2. **README as a brand book.** It covers:
   - the look (flat, bordered, ledges);
   - when to use a filled vs unfilled button, and a modal vs a sheet;
   - uppercase labels;
   - money rules: owe in red/03, get back in teal/05, ₹ and paise at ⅔ size, Indian digit grouping;
   - masked IDs, and copy tone (Money Uncle, English only);
   - NPCI, BBPS and DoT limits;
   - "build on real screens; never invent layouts".
3. **Components bundle** (`window.Fave`, React). Built from the code specs on the Figma staging page:
   - Button, Button Hold, Modal (+ Icon and Glyphs), Sheet, Toast, Banner, Card;
   - List Row, Section Header, Avatar, Amount;
   - Text Field (error = red border + message), Banking Name Line;
   - Screen Header (white, warm), Tab Bar (real icons);
   - Switch, Checkbox, Skeleton, Load Error, Category Tag.
4. **Assets:**
   - tab icons, back arrow and shield;
   - Modal Glyphs; bank logos (small and large); bill category icons;
   - the Vuesax icon subset the app uses;
   - fonts (Phudu, Apfel Regular and Mittel, SF Pro Rounded Black, Nanum Pen).
5. **Reference screens.** One example per screen type, taken from the best frames:
   - Splits home (detail page);
   - Choose from contacts (picker);
   - payment success (result);
   - the group nudge (modal);
   - settle up (sheet);
   - Settings (list);
   - the onboarding card;
   - the empty state.
6. **Tests.** Give Claude Design five briefs Tanisha has already designed by hand:
   - non-group split from payment success;
   - the group nudge;
   - settle up with a person;
   - the Shared Money home card;
   - the "UPI not linked" modal.

   Compare each result with her Figma frames, and fix the system where it drifts. The score is how many generated screens need no fixes.

## Not in scope yet

- Dark mode: the app has none.
- Retiring the v0.1 system: Tanisha switches the default when v2 passes the tests.
