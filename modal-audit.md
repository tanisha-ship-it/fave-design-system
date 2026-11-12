# Modal audit

Started 2026-11-02. Sources: `app-source` v1.2.2 (zip from 10 Oct, so newer sheets are missing) and a cross-file Figma scan on 2 Nov.

Both are automatic. App numbers come from reading the Dart code, Figma numbers from matching frames by size and structure, so treat counts as close, not exact. Check a row before changing it.

## Have we standardised enough?

Not yet. The library now covers decisions (`Modal`) and forms and pickers (`Sheet`), but only Settings and FRI-MNRL use it. Nothing in the files has been migrated.

### Figma, by file

"On shell" means 361 wide, radius 24, 32 top padding, centred title at 24. Duplicates of one modal count separately.

| File | Modals | On shell | Library Button | New icon |
|---|---|---|---|---|
| Settings Redesign | 25 | 16 | 19 | 11 |
| FRI-MNRL Designs | 6 | 6 | 6 | 6 |
| Shared Money tab | 53 | 21 | 6 | 1 |
| V0.1 Full UPI | 40 | 15 | 0 | 0 |
| V0.7 App onboarding | 13 | 10 | 0 | 0 |
| Your money tab | 7 | 3 | 0 | 1 |
| Autopay Interoperability | 2 | 0 | 2 | 0 |
| PL merchant Payouts | 6 | 0 | 0 | 0 |
| **Total** | **152** | **71** | **33** | **19** |

Not covered: Biometric Payments would not load after four tries. In V0.1, only pages 0.1, 0.2, 0.4, 0.5, Homepage and bank link flows were scanned. Archive, ignore and rough pages were skipped.

### Gaps

1. **Form and picker sheets.** About 30 sheets use the pattern `Sheet` now covers. They still need moving to it, and most are 353 wide against the component's 361.
2. **No chip hero.** The delete UPI ID sheets use the UPI ID chip with a badge. `Modal Icon` only does the disc.
3. **Solid CTAs.** About 40 modals in Figma, mostly V0.1, onboarding and Payouts. FRI has 2 (Can't settle up by UPI).
4. **Old buttons.** Most files still use `Modal Primary`, `Screen Button` or detached frames.
5. **Same modal, two versions.** WhatsApp consent is unfilled in Settings and solid in onboarding (node 2509:4333).
6. **Padding drift.** Settings hold sheets use 40, Autopay 24, and some Splits sheets 17 or 18.

### Highlighted text

| Pattern | Where | Library |
|---|---|---|
| Danger panel, heading, centred lines starting with 🚨 | Delete UPI ID, delete account | `Modal Content/Consequences` |
| Grey bullets, left aligned, no panel | Add private UPI number rules | `Modal Content/Bullets` |
| Icon rows | Option lists in forms and pickers, not highlighted text | Not built |

## The standard

The `Modal` component in [Fave Design System](https://www.figma.com/design/smPcudp7T2KBhUzZODvN3c/Fave-Design-System). Rules are in the `Modals` frame there and in `README.md`.

## App code summary

| Finding | Count |
|---|---|
| Sheets in the app | 102 |
| Decisions / forms / pickers | 62 / 21 / 19 |
| Decisions with the unfilled CTA already | 43 |
| Decisions with a solid CTA, to move | 11 |
| Decisions with no button or another fill | 8 |
| Sheets using hold to confirm | 6 |

All sheets share one route: 361 wide, radius 24, 16 side margins, 32 above the safe area, black 80% scrim. That part is already consistent, and most sheets override the route's grey background with white.

## What to fix in the app

1. **Solid CTAs in decisions.** Listed below as `Solid`.
2. **Title sizes.** Decisions range from 16 to 32. The standard is 24 (`Heading/Large`).
3. **Icons.** 37 SVG, 13 image, 4 Lottie, 8 none across decisions. The badge format is new to Settings, so most need redrawing.
4. **Dismiss.** Many sheets have no visible way out beyond tapping outside. Worth checking one by one.
5. **Figma.** Splits still has Primary CTAs in Number not linked to UPI, Settle and Record cash.

## Open questions

- Burst colour on Confirm: App Lock and WhatsApp use orange, Manage Notifications uses indigo. The component uses orange.
- Error badge ledge: Settings uses #E04747, which has no token. The component uses `color/danger/ledge` (#CB3030).
- Permission sheets are solid today. Do they follow the same rule?

## Decisions

| Sheet | CTA | Title | Icon | Hold | File |
|---|---|---|---|---|---|
| ContactsPermissionBottomsheet | Solid | 18 | svg |  | `onboarding/ui/bottomsheets/contacts_permission_bottomsheet.dart` |
| FailedBillPaymentSheet | Solid | – | svg |  | `your_money/ui/widgets/failed_bill_payment_sheet.dart` |
| InternationalTransactionModal | Solid | 18 | none |  | `upi/ui/send_money/enter_amount/widgets/international_transaction_modal.dart` |
| NotFoundUpiContact | Solid | – | svg |  | `homes_and_groups/groups/ui/create_group/add_people_to_group/widgets/not_found_upi_contact.dart` |
| OnboardingPermissionsBottomsheet | Solid | 18 | svg |  | `onboarding/ui/bottomsheets/onboarding_permissions_bottomsheet.dart` |
| RequestPermissionModal | Solid | – | svg |  | `shared_ui/bottom_sheets/request_permission_bottom_sheet.dart` |
| UpiIdDeleteBlockedSheet | Solid | – | svg |  | `settings/ui/upi_ids/upi_id_sheets.dart` |
| UpiIdSetPrimaryConfirmSheet | Solid | – | svg |  | `settings/ui/upi_ids/upi_id_sheets.dart` |
| UpiInternationalActivateModal | Solid | 16 | none |  | `settings/ui/manage_accounts/upi_international_modal.dart` |
| VerificationBeforeGiftingBottomsheet | Solid | 18 | image |  | `onboarding/ui/bottomsheets/verification_before_gifting_bottomsheet.dart` |
| WifiWarningBottomSheet | Solid | 18 | svg |  | `upi/ui/verify_phone_number/widgets/wifi_warning_bottom_sheet.dart` |
| BBPSBillerCategoriesModal | Off-system | – | svg |  | `homes_and_groups/home_groups/ui/widgets/bbps_biller_categories_modal.dart` |
| InstantSplitQrDetailWidget | Off-system | 32 | svg |  | `upi/ui/send_money/transaction_status/group_sub_widgets/instant_split_qr_detail_widget.dart` |
| AppLockBottomSheet | Other | 24 | svg |  | `settings/ui/app_lock_bottom_sheet.dart` |
| SplitAndAddToAGroupBottomSheet | Other | 16 | svg |  | `upi/ui/send_money/transaction_status/group_sub_widgets/bottom_sheets/split_and_add_to_a_group_bottom_sheet.dart` |
| AutoPayPauseInProgress | None | 24 | image |  | `auto_pay/ui/auto_pay_details_screen/widgets/auto_pay_detail_pause_pop_up/auto_pay_pause_in_progress.dart` |
| BillPaymentModalWrapper | None | – | none |  | `monthly_payments/ui/widgets/pay_bill_modal_wrapper.dart` |
| GiftContactBottomsheet | None | 17 | svg |  | `onboarding/ui/bottomsheets/gift_contact_bottomsheet.dart` |
| MyQrBottomSheet | None | – | none |  | `upi/ui/my_qr/my_qr_bottom_sheet.dart` |
| AadhaarConsentCard | Secondary | – | svg |  | `upi/ui/add_accounts/link_accounts/widgets/bottomsheets/aadhaar_consent_card.dart` |
| AadharValidationFailed | Secondary | – | svg |  | `upi/ui/add_accounts/link_accounts/widgets/bottomsheets/aadhar_validation_failed.dart` |
| ArchiveGroupConfirmationBottomSheet | Secondary | 24 | svg | yes | `homes_and_groups/shared_ui/bottom_sheets/archive_group_confirmation_bottom_sheet.dart` |
| AutoPayActionCancelConfirmDialogue | Secondary | 24 | image |  | `auto_pay/ui/auto_pay_details_screen/widgets/auto_pay_detail_pause_pop_up/auto_pay_action_cancel_confirm_dialogue.dart` |
| AutoPayActionConfirmDialogue | Secondary | 24 | image |  | `auto_pay/ui/auto_pay_details_screen/widgets/auto_pay_detail_pause_pop_up/auto_pay_action_confirm_dialogue.dart` |
| AutoPayActionFailRetryDialogue | Secondary | 24 | image |  | `auto_pay/ui/auto_pay_details_screen/widgets/auto_pay_detail_pause_pop_up/auto_pay_action_fail_retry_dialogue.dart` |
| AutoPayActionSuccessDialogue | Secondary | 24 | image |  | `auto_pay/ui/auto_pay_details_screen/widgets/auto_pay_detail_pause_pop_up/auto_pay_action_success_dialogue.dart` |
| AutoPayBlockPopup | Secondary | 24 | image |  | `auto_pay/ui/auto_pay_request_detail/widget/auto_pay_block_popup.dart` |
| AutoPayDeclinePopup | Secondary | 24 | image |  | `auto_pay/ui/auto_pay_request_detail/widget/auto_pay_decline_popup.dart` |
| BlockCollectRequestConfirmation | Secondary | – | svg |  | `upi/ui/send_money/enter_amount/widgets/block_collect_request_confirmation.dart` |
| CardExpiredModal | Secondary | 16 | lottie |  | `settings/ui/manage_accounts/card_expired_modal.dart` |
| DeclineCollectRequestConfirmation | Secondary | – | svg |  | `upi/ui/send_money/enter_amount/widgets/decline_collect_request_confirmation.dart` |
| DeleteAccountFailureSheet | Secondary | – | svg | yes | `settings/ui/delete_account_screen.dart` |
| DeleteAccountKnownErrorSheet | Secondary | – | svg | yes | `settings/ui/delete_account_screen.dart` |
| DeleteBillAccountConfirmation | Secondary | 16 | svg |  | `monthly_payments/ui/manage_monthly_payments/widgets/delete_bill_account_confirmation.dart.dart` |
| DeleteUpiLiteAccountModal | Secondary | 16 | lottie |  | `upi/ui/lite/widgets.dart/delete_lite_modal.dart` |
| DeleteUpiLiteAccountModal | Secondary | 16 | lottie |  | `settings/ui/upi_number/upi_number_home/modals/confirm_upi_number.dart` |
| DisableAutoTopUpModal | Secondary | 16 | none |  | `upi/ui/lite/disable_auto_top_up_modal.dart` |
| DisableSplitConfirmationBottomsheet | Secondary | 24 | svg |  | `homes_and_groups/shared_ui/bottom_sheets/disable_split_confirmation_bottomsheet.dart` |
| EnableSplitConfirmationBottomSheet | Secondary | 24 | svg |  | `homes_and_groups/groups/ui/friend_group_settings/widgets/bottom_sheets/enable_split_confirmation_bottom_sheet.dart` |
| ForecloseEmiModal | Secondary | 16 | svg |  | `upi/provider/emi/foreclose_emi_modal.dart` |
| HomeRelationshipConfirmationBottomSheet | Secondary | – | image |  | `onboarding/ui/bottomsheets/home_relationship_confirmation_bottomsheet.dart` |
| LeaveGroupConfirmationBottomSheet | Secondary | 24 | svg | yes | `homes_and_groups/shared_ui/bottom_sheets/leave_group_confirmation_bottom_sheet.dart` |
| LinkUpiNumber | Secondary | 16 | image |  | `settings/ui/upi_number/upi_banners/upi_number_link_modal.dart` |
| LinkedUpiNumber | Secondary | 16 | image |  | `settings/ui/upi_number/upi_banners/upi_number_link_modal.dart` |
| LinkingUpiNumber | Secondary | 16 | image |  | `settings/ui/upi_number/upi_banners/upi_number_link_modal.dart` |
| MnrlFriGroupBlockedBottomSheetRoute | Secondary | – | svg |  | `upi/ui/risk/mnrl_fri_risk_ui.dart` |
| MnrlFriPaymentRiskBottomSheetRoute | Secondary | – | svg |  | `upi/ui/risk/mnrl_fri_risk_ui.dart` |
| OpenAppSettingsBottomSheet | Secondary | 24 | svg |  | `shared_ui/bottom_sheets/open_app_settings_bottom_sheet.dart` |
| RaiseTicketModal | Secondary | 18 | svg |  | `settings/ui/raise_ticket_modal.dart` |
| RemoveBillFromHomeBottomSheet | Secondary | 24 | svg |  | `monthly_payments/ui/manage_monthly_payments/widgets/remove_bill_from_home_bottom_sheet.dart` |
| RemoveFromGroupBottomSheet | Secondary | 24 | svg |  | `upi/ui/send_money/transaction_status/group_sub_widgets/bottom_sheets/remove_from_home_bottom_sheet.dart` |
| RemovePersonFromGroupBottomSheet | Secondary | 24 | svg | yes | `homes_and_groups/shared_ui/manage_members/widgets/pop_ups/remove_person_from_group_bottom_sheet.dart` |
| SimplifySplitsConfirmationBottomSheet | Secondary | 24 | svg |  | `homes_and_groups/shared_ui/bottom_sheets/simplify_splits_confirmation_bottom_sheet.dart` |
| UnableToDelelteUpiModal | Secondary | – | none |  | `upi/ui/lite/widgets.dart/unable_to_delelte_upi_modal.dart` |
| UnarchiveGroupConfirmationBottomSheet | Secondary | 24 | svg |  | `homes_and_groups/shared_ui/bottom_sheets/unarchive_group_confirmation_bottom_sheet.dart` |
| UnblockVpaModal | Secondary | 16 | svg |  | `settings/ui/blocked_vpas_screen.dart` |
| UnlinkAccountModal | Secondary | 16 | lottie |  | `settings/ui/unlink_accounts.dart` |
| UpiIdDeleteConfirmSheet | Secondary | – | svg | yes | `settings/ui/upi_ids/upi_id_sheets.dart` |
| UpiLiteAutoTopUpModal | Secondary | 18 | none |  | `upi/ui/lite/upi_setup_auto_pay_modal.dart` |
| UpiNotLinkedBottomSheet | Secondary | 16 | svg |  | `homes_and_groups/shared_ui/bottom_sheets/upi_not_linked_bottom_sheet.dart` |
| UpiNumberConfirmationModal | Secondary | 24 | none |  | `settings/ui/upi_number/upi_number_home/modals/upi_number_confirmation_modal.dart` |
| UpiNumberFailed | Secondary | 16 | image |  | `settings/ui/upi_number/upi_banners/upi_number_link_modal.dart` |

## Forms

| Sheet | CTA | Title | Icon | Hold | File |
|---|---|---|---|---|---|
| AddBillsFlowModal | Solid | 16 | lottie |  | `monthly_payments/ui/onboarding/widgets/add_bills/add_bills_modal.dart` |
| AddCreditCardFlow | Solid | 16 | lottie |  | `monthly_payments/ui/onboarding/widgets/add_cards/add_card_modal.dart` |
| AddMemberRelationshipBottomsheet | Solid | 18 | svg |  | `homes_and_groups/home_groups/ui/bottomsheets/add_member_relationship_bottomsheet.dart` |
| AddPrivateUpiNumberModal | Solid | 18 | svg |  | `settings/ui/upi_number/upi_number_home/modals/add_private_upi_number_modal.dart` |
| AutoPayEditName | Solid | 16 | svg |  | `auto_pay/ui/auto_pay_details_screen/widgets/auto_pay_edit_name.dart` |
| BbpsHigherAmountConfirmation | Solid | – | none |  | `monthly_payments/ui/widgets/bbps_higher_amount_confirmation.dart` |
| EditGroupBottomSheet | Solid | – | none |  | `upi/ui/send_money/transaction_status/group_sub_widgets/bottom_sheets/edit_group_bottomsheet.dart` |
| EditPersonBillAccountConfirmation | Solid | – | lottie |  | `monthly_payments/ui/manage_monthly_payments/widgets/edit_people_bill_account_confirmation.dart.dart` |
| EnterGroupNameWidget | Solid | 18 | svg |  | `homes_and_groups/groups/ui/create_group/create_group/widgets/enter_group_name_widget.dart` |
| InstantSplitAmountWidget | Solid | 16 | svg |  | `upi/ui/send_money/transaction_status/group_sub_widgets/instant_split_amoung_widget.dart` |
| PeopleBillAmountConfirmation | Solid | – | none |  | `upi/ui/send_money/enter_amount/widgets/people_bill_amount_confirmation.dart` |
| AddMonthlyBillModal | Off-system | – | svg |  | `monthly_payments/ui/widgets/add_monthly_bill_modal.dart` |
| AddContactToHomeBottomsheet | None | 17 | image |  | `onboarding/ui/bottomsheets/add_contact_to_home_bottomsheet.dart` |
| AddHomeImageBottomSheet | None | 16 | svg |  | `homes_and_groups/home_groups/ui/bottomsheets/add_home_image_bottomsheet.dart` |
| AddPeopleBottomSheet | None | – | image |  | `your_money/ui/widgets/add_people_bottom_sheet.dart` |
| AddReceiptBottomsheet | None | 16 | svg |  | `transactions/ui/bottomsheets/add_receipt_bottomsheet.dart` |
| AddTagBottomsheet | None | 16 | lottie |  | `transactions/ui/bottomsheets/add_tag_bottomsheet.dart` |
| AddingSubscriptionsToHomeProgress | None | 20 | lottie |  | `homes_and_groups/home_groups/ui/home_shared_subscriptions/add_shared_subscriptions/widgets/adding_subscriptions_to_home_progress.dart` |
| CreateUpiNumberConfirmationModal | Secondary | 24 | none |  | `settings/ui/upi_number/upi_number_home/modals/create_upi_number_confirmation_modal.dart` |
| DeleteReceiptBottomsheet | Secondary | 24 | svg |  | `pfm/ui/receipt_screen/delete_receipt_bottomsheet.dart` |
| UpiLiteConfirmationModal | Secondary | 18 | none |  | `upi/ui/lite/upi_confirmation_modal.dart` |

## Pickers

| Sheet | CTA | Title | Icon | Hold | File |
|---|---|---|---|---|---|
| GroupSelectionModal | Solid | 18 | svg |  | `upi/ui/send_money/enter_amount/widgets/group_selection_modal.dart` |
| SelectPeopleBillerNicknameBottomsheet | Solid | 18 | svg |  | `monthly_payments/ui/bottomsheets/select_people_biller_nickname.dart` |
| SoftUpdateSheet | Solid | 16 | image |  | `launch_requirements/ui/soft_update_sheet.dart` |
| SelectCategoryBottomSheet | Off-system | 18 | svg |  | `homes_and_groups/shared_ui/create_manual_transaction/widgets/select_category_bottom_sheet/select_category_bottom_sheet.dart` |
| AccountOptions | None | 18 | none |  | `settings/ui/manage_accounts/account_options.dart` |
| AccountTypeSelectionModal | None | – | image |  | `settings/ui/account_type_selection_modal.dart` |
| EditCategoryBottomsheet | None | 24 | svg |  | `transactions/ui/bottomsheets/edit_category_bottomsheet.dart` |
| EditManualTransactionCategoryBottomsheet | None | 24 | svg |  | `homes_and_groups/shared_ui/manual_transaction_details/bottom_sheets/edit_manual_transaction_category_bottom_sheet.dart` |
| HomeSelectionBottomsheet | None | – | svg |  | `homes_and_groups/home_groups/ui/bottomsheets/home_selection_bottomsheet.dart` |
| MoreOptionManageMemberBottomSheet | None | 16 | svg |  | `homes_and_groups/shared_ui/manage_members/widgets/pop_ups/more_option_manage_member_bottom_sheet.dart` |
| PaymentMethodOptions | None | 16 | image |  | `upi/ui/send_money/enter_amount/widgets/payment_options_modal.dart` |
| TransactionFiltersBottomsheet | None | 16 | svg |  | `pfm/ui/widgets/transaction_filters_bottomsheet.dart` |
| UnarchiveOptionBottomSheet | None | 16 | svg |  | `homes_and_groups/shared_ui/bottom_sheets/unarchive_option_bottom_sheet.dart` |
| UpiNumberOptionsModal | None | 16 | svg |  | `settings/ui/upi_number/upi_number_home/modals/upi_number_options_modal.dart` |
| AutoPayPauseTillDatePopUp | Secondary | 24 | image |  | `auto_pay/ui/auto_pay_details_screen/widgets/auto_pay_detail_pause_pop_up/auto_pay_pause_till_date_pop_up.dart` |
| BillsCalendarBottomSheet | Secondary | – | svg |  | `your_money/ui/widgets/bills_calendar_bottom_sheet.dart` |
| DateAndTimePicker | Secondary | 18 | svg |  | `shared_ui/date_and_time_picker/date_and_time_picker.dart` |
| ManualTransactionDateAndTimePicker | Secondary | 18 | svg |  | `homes_and_groups/shared_ui/create_manual_transaction/manual_transaction_date_and_time_picker_bottom_sheet/manual_transaction_date_and_time_picker.dart` |
| PaidByBottomSheet | Secondary | 18 | svg |  | `homes_and_groups/shared_ui/create_manual_transaction/paid_by_bottom_sheet/paid_by_bottom_sheet.dart` |
