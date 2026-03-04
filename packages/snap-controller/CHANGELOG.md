# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0](https://github.com/athoscommerce/snap/compare/v0.74.0...v1.0.0) (2026-03-04)

### Bug Fixes

- **controller/finder:** adjusted finder controller stores and tests to ensure tests pass consistently ([fed9a65](https://github.com/athoscommerce/snap/commit/fed9a658eb9c8064d986d75e5230e80cc6af6bd5))
- **controller/search:** grouped response so that references are preserved - added test to ensure ([d885259](https://github.com/athoscommerce/snap/commit/d885259852c409a217d5701a58fd9dc0881cc839))
- **controller/search:** patching bug around not sending request to category - added tests around page type and new category E2E testing ([022bd88](https://github.com/athoscommerce/snap/commit/022bd887e3aab421e5527919ff7f5fd8f2fac144))
- **controller/search:** quick fix on setting name for hierarchy ([9f336ea](https://github.com/athoscommerce/snap/commit/9f336eaf08d6eb5f6bfe764fcd57f1bd24c4cf30))
- **controller:** adding parentId mapping to search and recommendation controllers ([fb05119](https://github.com/athoscommerce/snap/commit/fb051199e7ba640f8c4168bf54f1c10e69072c2b))
- **controllers:** adding a nullcheck for impression tracking to all of the controllers in case something is wrong so it doesnt break entirely ([3e911f3](https://github.com/athoscommerce/snap/commit/3e911f3076a8bdc762260aa15024532ad9c6f6c7))
- **templates/editor:** various fixes and refactors around editor functionality ([4074850](https://github.com/athoscommerce/snap/commit/4074850f4d9fa5f2282c3386db64b304377c03cb))

### Features

- **controllers:** track Variant Parent Id if available ([a5407ea](https://github.com/athoscommerce/snap/commit/a5407eae05f1c5e4e2c215394d471dbd72a0f828))
- **integratedspellcorrect:** removing integrated spell correction setting and legacy 'oq' parameter ([a2f5d96](https://github.com/athoscommerce/snap/commit/a2f5d965a001695c3b243f75000cf255796125e9))
- **platfrom-selection-addtocart:** auto add addtocart plugins based on config platform ([632cfd1](https://github.com/athoscommerce/snap/commit/632cfd15f0307c756182a81e53ddbdef5c99dfc0))
- **preact-components/storybook:** updating storybook to latest version - build stable ([43c598d](https://github.com/athoscommerce/snap/commit/43c598d0e4d11d76364ff2775ecdcabe489023a8))
