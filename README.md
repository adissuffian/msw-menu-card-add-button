# msw-menu-card-add-button

## Overview
This repository contains a minimal MSW (Mock Service Worker) test for the Domino's Olo Mobile Application. The test verifies that the "Add" button appears on the `MenuCard` component when both the `showAddButton` prop and the `ProductCardAddToOrder` feature toggle are enabled.

## Test Details
- **Test File:** `packages/native/components/menu/__tests__/menu-card-add-button.spec.tsx` (from the Domino's olo.mobile repo)
- **Purpose:**
  - Mocks feature toggles and pricing selectors to isolate the test scenario.
  - Uses MSW to intercept API requests (e.g., `/api/products`).
  - Renders the `MenuCard` component and asserts that the "Add" button is visible when expected.

## File Location
- The test file is located at:
  - `packages/native/components/menu/__tests__/menu-card-add-button.spec.tsx` (in the olo.mobile repository)

## Relevant Information
- The test uses Jest and React Native Testing Library.
- MSW is used to mock network requests for isolation and reliability.
- The test is designed for demonstration and can be adapted for broader menu card scenarios.

---
For more details, see the test file or contact the repository maintainer.
