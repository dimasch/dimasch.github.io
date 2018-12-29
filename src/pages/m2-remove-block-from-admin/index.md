---
title: Remove block via Layout Update XML via Magento2 admin area
date: "2017-09-11T15:31:00.284Z"
---

Remove block via Layout Update XML via Magento2 admin area:

```xml
<container name="bin" htmlTag="div" />
<move element="store.menu" destination="bin" />
<move element="breadcrumbs" destination="bin" />
<referenceContainer name="bin" remove="true" />
```



