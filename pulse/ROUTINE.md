# fave-pulse · the weekly routine

Status 8 Nov 2026: **scheduled.** Task `fave-pulse` exists in Claude Code (file: `~/.claude/scheduled-tasks/fave-pulse/SKILL.md`), Mondays 08:42 local, saved in Auto mode; first run Monday 9 Nov. Manage it from the Scheduled section in the app sidebar. Any session can also run the prompt below by hand ("refresh the pulse").

- **Task id:** `fave-pulse`
- **Schedule:** every Monday 08:30 local (`30 8 * * 1`). Scheduled tasks run while the Claude desktop app is open; if it is closed, the run happens on next launch.
- **Output:** a new `design-system/pulse/YYYY-MM-DD.md`, copied to `design-system/pulse-publish/project/pulse.md`, published to the Fave design system artifact.

## Prompt

You are refreshing `pulse.md`, the living "what India is talking about this week" file inside the Fave design system (Fave is Pine Labs' household UPI app: payments, splits, shared homes, bills). The file exists so that Fave can ride cultural moments the way Zomato and Swiggy do, but for money. Work without asking questions; make sensible calls and say what you assumed.

### 1. Read the current edition
- Read the latest file in `/Users/tanisha.raghav/Fave/design-system/pulse/` (highest date in the name). It is the format to follow exactly: title, edition line, the ranked wedges table (What's happening · Why India cares · The Fave move · Shelf life · Confidence), "By scene" with sources, "Coming up (next six weeks)", "Evergreen Indian vocabulary", "Playbook", "Never", "How this edition was made".
- Also read the live copy with the Artifact tool: action "read", url https://claude.ai/artifact/DN7a1y9Ec5XYJvNK8p9YyE, path "project/pulse.md". This read is required before publishing later.

### 2. Research this week (WebSearch; mode "extended" for anything time-sensitive)
Cover each scene with 2–4 searches that include the current month and year. Prefer Indian and primary sources (NPCI, RBI, Sacnilk, Film Information, Bollywood Hungama, Sportskeeda, ESPNcricinfo, Medianama, Entrackr, Inc42, Economic Times, afaqs, Storyboard18, Figma release notes, company blogs). X/Twitter is only reachable second-hand: search for roundups and quote-coverage of the week's posts.
1. UPI and fintech: NPCI announcements, UPI rules and charges, monthly UPI volumes, PhonePe / Google Pay / Paytm / CRED / Navi / super.money launches and campaigns, RBI consumer-facing changes.
2. Indian pop culture and cricket: what the Indian internet is joking about this week; current India series and IPL dates; festivals in the next six weeks; viral ads (Zomato, Swiggy, Blinkit, CRED, Amul).
3. Bollywood: this week's box office, big releases in the next six weeks, viral songs and trailers.
4. Indian AI and tech Twitter: Sarvam, Krutrim, Perplexity's India moves, Zerodha/Kamath, Peak XV and Blume, India's AI law, viral founder posts.
5. Global AI design: Claude Design, Figma, Lovable, v0, Cursor and the design-tool discourse.
6. Global AI business: the week's biggest moves by Anthropic, OpenAI, Google, Meta, Microsoft, NVIDIA.
7. Design Twitter: the week's discourse, notable launches, redesigns Indians noticed.
Plus anything else that could create a wedge for a UPI app in India right now (salary day, exam results, the budget, a strike, a heatwave, a viral scam story told as a warning).

### 3. Write the new edition
- Save it as `/Users/tanisha.raghav/Fave/design-system/pulse/YYYY-MM-DD.md` (today's date). Keep the exact structure. Update the edition line (date, week number, next refresh = next Monday).
- Wedges: 5 to 8, ranked by how much a UPI app can do with them this week. Each needs a concrete Fave move (home hero card, push notification, empty state line, settle-up or split moment, group template, shareable recap), a shelf life with dates, and a confidence (High / Medium / Low) with the reason when it is not High. Drop expired wedges; carry a live one forward only if it moved.
- "By scene": 2–5 bullets each with markdown source links. If a scene had no fresh coverage, write "(thin this week)" in its heading and say what to try next time. Never invent an item to fill a scene.
- "Coming up": the next six weeks from today, with the money angle per row.
- Evergreen vocabulary, Playbook and Never: copy forward unchanged unless there is a factual correction; add at most one evergreen line, marked "(new)".
- Voice: plain, specific, no marketing adjectives, no exclamation marks. Copy suggestions are in Fave's voice (Money Uncle: knowing, warm, a little cheeky), English only, one cultural reference per line.
- Guardrails: religion only as greetings; no politics, elections or opinion on court cases (facts about UPI rules are fine); no tragedy, disaster, war or border; no caste, region or language stereotypes; no stock, crypto or "make money" angles; no gambling framing; never mock a regulator, a bank or a rival's users; no cashback or discounts as the idea; nothing that touches the UPI PIN, payment confirmation, BBPS or fraud-warning screens.

### 4. Publish
- Copy the new file to `/Users/tanisha.raghav/Fave/design-system/pulse-publish/project/pulse.md` (overwrite).
- Publish with the Artifact tool: url https://claude.ai/artifact/DN7a1y9Ec5XYJvNK8p9YyE, root `/Users/tanisha.raghav/Fave/design-system/pulse-publish`, file_path `/Users/tanisha.raghav/Fave/design-system/pulse-publish/project/pulse.md`, label "pulse YYYY-MM-DD". Send no other files; the artifact keeps everything else. If the publish is refused because the artifact was not read in this session, do the read from step 1 and publish again.

### 5. Report
End with at most eight lines: the edition date, the top three wedges in one line each, which scenes were thin, and the artifact version number from the publish result. Do not paste the whole file.
