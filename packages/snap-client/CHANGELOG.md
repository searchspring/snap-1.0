# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0](https://github.com/athoscommerce/snap/compare/v0.74.0...v1.0.0) (2026-03-04)

### Bug Fixes

- **client:** correcting issue where query could be set to undefined as well as some text in tests ([08b6752](https://github.com/athoscommerce/snap/commit/08b6752d4977c6efcf09d98b811d09200156a6d0))
- **preact/components/slideshow:** fixing slideshow component css to work when inside of a swiper carousel ([af1abff](https://github.com/athoscommerce/snap/commit/af1abff93dd9cf3b80b2329cce53d23850c48d38))
- **searchresponse.ts:** need to stringify propertys before we unescapeHTML them to ensure we dont end up with [object,object] attributes ([fefa659](https://github.com/athoscommerce/snap/commit/fefa65925abfec442b086b09d341a5238c83842d))

### Features

- **api/requests:** altering tracker and search API to send specific initiator values ([020e5a6](https://github.com/athoscommerce/snap/commit/020e5a61b7146f136feb99bbd87648926510e5c7))
- **client:** moving to Athos APIs ([d773390](https://github.com/athoscommerce/snap/commit/d7733901b97e8fc6e3fa5c6b47dba1401bdff203))
- **client:** reactor of the client to remove Snap API and rename to appropriate API names - additionally refactored transforms for improved typing ([d3c27a2](https://github.com/athoscommerce/snap/commit/d3c27a2edafbe4a3b89b17f69fb898862e441b65))
- **integratedspellcorrect:** removing integrated spell correction setting and legacy 'oq' parameter ([a2f5d96](https://github.com/athoscommerce/snap/commit/a2f5d965a001695c3b243f75000cf255796125e9))
- **searchresultstore:** can use athos api built in variants,badges in variants,variantSelectors in result component,display disabled selections ([5e069e8](https://github.com/athoscommerce/snap/commit/5e069e8a52957255aae996e4073dee9ef575b48b))
