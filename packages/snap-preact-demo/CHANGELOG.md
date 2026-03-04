# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0](https://github.com/AthosCommerce/snap/compare/v0.74.0...v1.0.0) (2026-03-04)

### Bug Fixes

- add m2 base plugin to templates library ([b9c91a2](https://github.com/AthosCommerce/snap/commit/b9c91a2bd9c19a690abf50dc2e365e0d8714fc96))
- after merge changes for testing fixes ([ec84ca2](https://github.com/AthosCommerce/snap/commit/ec84ca280aca085b1fe71f1b37f5c17487b98089))
- **controller/finder:** adjusted finder controller stores and tests to ensure tests pass consistently ([fed9a65](https://github.com/AthosCommerce/snap/commit/fed9a658eb9c8064d986d75e5230e80cc6af6bd5))
- **controller/search:** patching bug around not sending request to category - added tests around page type and new category E2E testing ([022bd88](https://github.com/AthosCommerce/snap/commit/022bd887e3aab421e5527919ff7f5fd8f2fac144))
- improve template typing, refactor template store config ([e5f78ea](https://github.com/AthosCommerce/snap/commit/e5f78eac3bf951e95f8dc1599dc2a43bccbab2d1))
- **preact-demo:** cleanup and adding long missing polyfil ([f5b7d15](https://github.com/AthosCommerce/snap/commit/f5b7d159dc1961e59ec527761d065631cbd2e8a4))
- **preact/components/slideshow:** fixing slideshow component css to work when inside of a swiper carousel ([af1abff](https://github.com/AthosCommerce/snap/commit/af1abff93dd9cf3b80b2329cce53d23850c48d38))
- **preact/templates:** correcting custom script context merge and combining selector/inputSelector ([fc51fb8](https://github.com/AthosCommerce/snap/commit/fc51fb88ccc2fb10892e6ef185ef1fc9f060d65e))
- **preact/templates:** misc fixes ([d9aae9f](https://github.com/AthosCommerce/snap/commit/d9aae9f8997c455c53c274f5d3c85e5e244b825b))
- templates plugins ([247ebf7](https://github.com/AthosCommerce/snap/commit/247ebf7e621c31b4e21f42ed66b2c1dd070e092b))
- update demostore index.ts ([9680044](https://github.com/AthosCommerce/snap/commit/96800445ad659be26916d91cff13418c8c33b703))

### Features

- add onTarget to template recommendations config ([5ae8c21](https://github.com/AthosCommerce/snap/commit/5ae8c212e64ecde3605a50ff9febbf587a8e5949))
- add ss-name to components and assign names ([b111352](https://github.com/AthosCommerce/snap/commit/b11135288a58d5a7704460cd25fed57da09f327c))
- cascading component props ([5c4d061](https://github.com/AthosCommerce/snap/commit/5c4d06198e301629f9cb7bf7179de5f83e218642))
- **client:** moving to Athos APIs ([d773390](https://github.com/AthosCommerce/snap/commit/d7733901b97e8fc6e3fa5c6b47dba1401bdff203))
- **client:** reactor of the client to remove Snap API and rename to appropriate API names - additionally refactored transforms for improved typing ([d3c27a2](https://github.com/AthosCommerce/snap/commit/d3c27a2edafbe4a3b89b17f69fb898862e441b65))
- **integratedspellcorrect:** removing integrated spell correction setting and legacy 'oq' parameter ([a2f5d96](https://github.com/AthosCommerce/snap/commit/a2f5d965a001695c3b243f75000cf255796125e9))
- layout Selector & general polishing ([dc56c5c](https://github.com/AthosCommerce/snap/commit/dc56c5cf1f879254d1258488865a4161f94c56f4))
- make snap available to all components, add recommendations to noresults & autocomplete ([3f385d0](https://github.com/AthosCommerce/snap/commit/3f385d0df8aa4bc3195355a307870b0f0146e77d))
- **preact-components-ss-lang:** adding foundation for multi language support to preact components ([4dce617](https://github.com/AthosCommerce/snap/commit/4dce617ec14fb6897d66278b90b5cc17e97665bd))
- **preact-components/layout:** adding Layout and Flex components and experimenting with them ([97a20dd](https://github.com/AthosCommerce/snap/commit/97a20dd758d9c9bb8051f515100d79ffab997bfb))
- **preact-components/storybook:** updating storybook to latest version - build stable ([43c598d](https://github.com/AthosCommerce/snap/commit/43c598d0e4d11d76364ff2775ecdcabe489023a8))
- **preact-components:** making progress toward layout templating support ([92c2ce6](https://github.com/AthosCommerce/snap/commit/92c2ce6b207dcb1e922674d55e289354b71612da))
- **preact/components/autocomplete-templates:** adding autocompleteModal, autocompleteSlideout, & autocompleteFixed templates ([900d549](https://github.com/AthosCommerce/snap/commit/900d54994a6c6fbe0b7a2b887a012a502dc7f584))
- **preact/components/facet:** adding range facet inputs and the ability to use filterFormatValue for filters ([ef16169](https://github.com/AthosCommerce/snap/commit/ef16169123f749d45cf4ab4c7d29375c06ab16da))
- **preact/components:** new prop for hierarchy facet returnIcon, and classname for facet when showing all options ([fe2d7c0](https://github.com/AthosCommerce/snap/commit/fe2d7c01f29c81040cecd1b999dd9853786cdcf9))
- **preact/templates/themestore:** adding support for custom variables and adding activeBreakpoint to the themestore ([af36319](https://github.com/AthosCommerce/snap/commit/af36319db8f15be0671fe258dd9d1fc6d171b3eb))
- **preact/templates:** adding translation layer for language translations ([052babc](https://github.com/AthosCommerce/snap/commit/052babc8cd913a4ec4e4c8cb8ef986b0b4f00cad))
- **preact:** updating to latest version of preact and adjusting all the things accordingly ([ef2f043](https://github.com/AthosCommerce/snap/commit/ef2f04343c6810a75c3a5fb83b9c0317541d06f8))
- responsive themestore and breakpoint props ([d4faf3a](https://github.com/AthosCommerce/snap/commit/d4faf3acdd2703b0225d4784c078ada967c64527))
- separate recommendation types ([4a03491](https://github.com/AthosCommerce/snap/commit/4a03491766fd3dbd3eeddf8d91ed4572bd4ae6bf))
- support template themes in snap-preact ([df9d905](https://github.com/AthosCommerce/snap/commit/df9d9057a1554d7eb62830002c3db990e0f8f272))
