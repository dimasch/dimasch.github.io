---
title: Performance profiles instead full sample data
date: "2019-01-05T18:30:00.256Z"
---

Instead of using the full sample data modules there is a possibility to use the products, categories, customers and orders created by the performance profiles.

```shell
bin/magento setup:performance:generate-fixtures setup/performance-toolkit/profiles/ce/small.xml
```

Example working:

```shell
sportmage@MacBook-Pro m230 $ bin/magento setup:performance:generate-fixtures setup/performance-toolkit/profiles/ce/small.xml
Generating profile with following params:
 |- Admin Users: 50
 |- Websites: 1
 |- Store Groups Count: 1
 |- Store Views Count: 1
 |- Categories: 30
 |- Attribute Sets (Default): 3
 |- Attribute Sets (Extra): 10
 |- Simple products: 800
 |- Configurable products: 16
 |- Product images: 100, 3 per product
 |- Customers: 200
 |- Cart Price Rules: 20
 |- Catalog Price Rules: 20
 |- Orders: 80
Config Changes...  done in 00:00:00
Generating admin users...  done in 00:00:00
Generating websites, stores and store views...  done in 00:00:00
Generating categories...  done in 00:00:01
Generating attribute sets...  done in 00:00:02
Generating simple products...  done in 00:00:03
Generating configurable EAV variations...  done in 00:00:00
Generating bundle products...  done in 00:00:00
Generating configurable products...  done in 00:00:01
Generating images...  done in 00:00:01
Generating customer groups...  done in 00:00:00
Generating customers...  done in 00:00:02
Generating cart price rules...  done in 00:00:00
Generating catalog price rules...  done in 00:00:00
Generating tax rates...  done in 00:00:00
Generating tax rules...  done in 00:00:00
Generating orders...  done in 00:00:00
Indexers Mode Changes...  done in 00:00:00
```