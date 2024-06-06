
## Version 1.12.1 (2024-06-06)

** New Features and Improvements **

* Improve PDP performance (LCP & CLS)
* PDP-variants-switcher-working
* Hide sales filter on PLP when there are no sale items
* Do not send email if not changed when updating account
* Update color facet border styling in product list
* Add confirmation prompt before account deletion
* Added skipQueue and customHeaderValue options to SDk integration actions
* Updated @commercetools/frontend-sdk dependency to 1.12.1
* Add error handling for account deletion

## Version 1.12.0 (2024-05-23)

** New Features and Improvements **

- Refactor variant selection in product tile
- Update brand title and URL in Storybook theme configuration
- Updated Storybook theme and added custom styles

** Bug fixes **

- Modify the classname for shipping methods missing border

## Version 1.11.6 (2024-05-16)


* Removed addresses section from account
* Updated @commercetools/frontend-sdk package to 1.12.0
* Fix server sdk calls cache not working

## Version 1.11.5 (2024-05-09)

** New Features and Improvements **

- Update path correction in middleware
- Add new 'textToColor' helper and integrate into components
- Add more info logs in development mode
- Add missing tastics warning in development mode
- Updated @commercetools/frontend-sdk dependency to version 1.11.2
- Enhance robots and sitemaps automated
- Log frontastic request ID to browser console

## Version 1.11.4 (2024-04-26)

** New Feaures and Improvements **

- API Request Id is logged in windows console
- Search overlay fixed when side panel is open

## Version 1.11.3 (2024-04-19)

** New Features and Improvements **

- Upgraded checkout version

## Version 1.11.2 (2024-04-17)

** New Features and Improvements **

- Upgraded to latest checkout 

## Version 1.11.1 (2024-04-16)

** Bug fixes **

- Fixed User component styling

## Version 1.11.0 (2024-03-01)

** New Features and Improvements **
- Hardcoded payment methods were removed


** Bug fixes **
- User could not create accounts fixed
- User can change passwords without any issues
- User can edit account information without issues
- Fixed multiple broken links in pages

## Version 1.10.0 (2024-02-22)

** New Features and Improvements **

- Handle request verification & password reset errors
- Fix fetching category for preview
- Add tasticId to div element id attribute
- Added tasticId to component tastic

** Bug fixes **

-  Fix broken links in my account section

## Version 1.9.0 (2023-12-18)

** New Features and Improvements **

- Changed caching strategy

** Bug fixes **
- Fix checkout expired token handler

## Version 1.8.4 (2023-12-10)


** Features and Imporvements **

- Pass `showTaxes` to ct checkout

## Version 1.8.3 (2023-12-07)

** Features and Improvements **

- Checkout style customizations


** Bug Fixes **

- Fix verify route stuck
- 

## Version 1.8.1 (2023-12-07)

** Features and Improvements **

- Add leave checkout handler

## Version 1.8.0 (2023-12-07)

** Bug Fixes **

- Fix cart disappearing bug

## Version 1.7.0 (2023-12-06)


** New Features and Improvements **

- Remove adyen
- Checkout imporvements
- Remove nextjs caching from preview and enabled in production only for page

## Version 1.6.0 (2023-11-22)

** New Features and Improvements **

- Updated B2C SDK integration

** Bug fixes **

- Redirect to login fix
- Add estimated shipping to cart total

## Version 1.5.0 (2023-11-16)

** New Features and Improvements **

- Added new set of components 

## Version 1.0.1 (2022-07-05)

** New Features and Improvements **

- Added similar products component and datasource

- Logged in user has popover where he can logout

- Checkout with 3 steps, commercetools + adyen integration

- You can specify theme in project folder settings and that theme will be used for your page

- PWA disabled out of the box


** Bug fixes **

- Correct locale is passed to backend via api header

- Filters display total amount of products filtered

- Reset password funcionality fixed

- Links from wishlist, cart fixed for internalization

- Order status misplaced fix

- Cart/Wishlist balloon items look similar now

- Filter sliding fixed

- Theming header icons fixed

- PDP color is displayed correctly

- Not used css removed

## Version 1.0.0 (2022-06-08)

** New Features **

- Now you can specify your theming variables in the `app.css` file, those values will be used to define tailwind styles, 
and you can use those styles in your component, we added dark mode toggle component

- Added language switcher component, you can browse website in different locales

- Product listing page now has side menu with sort and price filters

- We have more explicit error handling component

- Added ESLint rules, you can fix your code `yarn run fix`

- Added `Remember me` functionality for user

- Added breadcrumb component

- Added MWP PWA


** Bug fixes **

- All links now use Next Link component

- All images now use Next Image component

- Minor translation fixes

- Theming fixes

- Fixed storybook components

- Fixed emojis rendering in footer

- Account order history was not showing orders


** Improvements **

- Renamed `checkout-success` component to `thank-you`

- Product component is more robust in handling product model data

- Added `bundle.js`, `bundle.min.js` to gitignore

- We started using `commercetools` as key word in schemas instead of `frontastic`


## Version 1.0.0-alpha.3 (2022-04-21)

- fix: Added TypeScript ignore comment
- Adjusted spacings & fixed header menu bug on mobile
- Moved markdown to library folder
- Removed Hard Coded Colors and updated tailwind config.
- feature/FP-1862 Added missing language switcher in components and updated component schemas
- Refactored Breadcrumbs
- Added item validations in checkout
- fix: change icon of cart tastic
- fix: editorial changes to tastic schemas
- Removed Console logs.
- Corrected naming for components
- Differentiate between client and server errors
- Improved error logging
- Handled markdown alternative flow
- FP-1863 made footer responsive

## Version 1.0.0-alpha.1 (2022-04-19)

- fix: use the right library name on package.json

## Version 1.0.0-alpha (2022-04-19)
- Initial stable release
