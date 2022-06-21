
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
