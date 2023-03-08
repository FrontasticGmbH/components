
## Version 1.3.0 (2023-03-08)

** New Features and Improvements **

- Use NEXT_PUBLIC_EXT_BUILD_ID instead of BUILD_ID

## Version 1.2.1 (2023-02-08)

** Bug fixes **

- Use short commit hash on frontend
- Allow passing of locale to preview page as Frontastic-Locale

## Version 1.2.0 (2023-02-03)

** New Features and Improvements **

- Implemented index and session storage for Pages
- Added usage example for Sitemap Api
- Moved contentful component to content folder
- Enable session storage for subsequent server-side calls
- Allow usage of buildId from environment
- Sendgrid integrations
- Render kit type

** Bug fixes **

- Fixed sitemap build error, added dynamic languages
- Fix image loader scaling

## Version 1.1.0 (2022-10-25)

** New Features and Improvements **

- Released MVP component for contentful

- User can set up frontend locale mapper to backend locales in project.config.js file


** Bug fixes **

- Account bug fixes

- Localization fix

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
