---
title: Clear redis cache from you docker container
date: "2018-11-10T21:27:01.256Z"
---

![Redis Logo](./redis.png)

Sometimes need clear all `Redis` cache for you Doker container.

```shell
docker exec -it container-name redis-cli FLUSHALL
```

For automating this process you can add the `alias` to `~/.bash_profile` or `~/.basrc`. Example:

```shell
alias redis-flush="docker exec -it container-name redis-cli FLUSHALL"
```