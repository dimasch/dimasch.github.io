---
title: Alias for clear redis cache
date: "2018-11-10T21:27:01.256Z"
---

![Redis Logo](./redis.png)

Иногда бывает нужно полностью очистить Redis, развернутого в Doker-контейнере.

```shell
docker exec -it container-name redis-cli FLUSHALL
```

Для удобного использования - можно создать alias, добавив его в ~/.bash_profile или ~/.basrc вашего домашнего каталога.

```shell
alias redis-flush="docker exec -it container-name redis-cli FLUSHALL"
```

