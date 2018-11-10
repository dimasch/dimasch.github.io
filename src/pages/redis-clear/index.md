---
title: Полностью очистить хранилище Redis
date: "2018-11-10T21:27"
---

![Redis Logo](./redis.png)

Иногда бывает нужно полностью очистить Redis, развернутого в Doker-контейнере.

<pre>
docker exec -it container-name redis-cli FLUSHALL
</pre>

Для удобного использования - можно создать alias, добавив его в ~/.bash_profile или ~/.basrc вашего домашнего каталога.

<pre>
alias redis-flush="docker exec -it container-name redis-cli FLUSHALL"
<pre>

