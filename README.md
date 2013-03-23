# multilevel-bench

Benchmark suite for various databases

```bash
git clone <this repo>
npm install
redis-server
mongod
memcached
npm run bench
```

Current results from my machine (MBP Retina, i7, 16GB Ram, SSD):

```

                      Redis (10.000x)
          12,828 op/s ⨠ set small
          14,589 op/s ⨠ set medium
          15,191 op/s ⨠ set large
          14,729 op/s ⨠ get large
          15,476 op/s ⨠ get medium
          15,100 op/s ⨠ get small

                      MongoDB (1.000x)
          23,339 op/s ⨠ set small
          29,967 op/s ⨠ set medium
          23,542 op/s ⨠ set large
           6,476 op/s ⨠ get large
           7,448 op/s ⨠ get medium
           8,213 op/s ⨠ get small

                      Memcached (10.000x)
          10,097 op/s ⨠ set small
          10,324 op/s ⨠ set medium
          10,404 op/s ⨠ set large
          10,416 op/s ⨠ get large
          10,738 op/s ⨠ get medium
          10,976 op/s ⨠ get small

                      Medea (10.000x)
          12,324 op/s ⨠ set small
          12,313 op/s ⨠ set medium
          12,248 op/s ⨠ set large
          40,566 op/s ⨠ get large
          44,246 op/s ⨠ get medium
          45,174 op/s ⨠ get small

                      levelUP (10.000x)
          38,374 op/s ⨠ set small
          33,019 op/s ⨠ set medium
          23,348 op/s ⨠ set large
          30,622 op/s ⨠ get large
          36,191 op/s ⨠ get medium
          38,326 op/s ⨠ get small

                      levelDOWN (10.000x)
          55,872 op/s ⨠ set small
          55,126 op/s ⨠ set medium
          46,288 op/s ⨠ set large
          38,894 op/s ⨠ get large
          40,373 op/s ⨠ get medium
          40,590 op/s ⨠ get small

                      leveled (10.000x)
          53,017 op/s ⨠ set small
          54,761 op/s ⨠ set medium
          53,417 op/s ⨠ set large
          41,949 op/s ⨠ get large
          48,796 op/s ⨠ get medium
          48,708 op/s ⨠ get small

                      multilevel (10.000x)
           6,329 op/s ⨠ set small
           6,162 op/s ⨠ set medium
           5,977 op/s ⨠ set large
           7,359 op/s ⨠ get large
           7,374 op/s ⨠ get medium
           7,455 op/s ⨠ get small

                      multilevel (fake network, 10.000x)
          15,111 op/s ⨠ set small
          14,508 op/s ⨠ set medium
          13,278 op/s ⨠ set large
          16,582 op/s ⨠ get large
          17,108 op/s ⨠ get medium
          16,647 op/s ⨠ get small

                      multileveled (10.000x)
           8,719 op/s ⨠ set small
           8,448 op/s ⨠ set medium
           8,306 op/s ⨠ set large
           8,368 op/s ⨠ get large
           8,302 op/s ⨠ get medium
           8,287 op/s ⨠ get small

                      multileveled (fake network, 10.000x)
          23,403 op/s ⨠ set small
          23,433 op/s ⨠ set medium
          22,751 op/s ⨠ set large
          22,931 op/s ⨠ get large
          22,181 op/s ⨠ get medium
          22,222 op/s ⨠ get small

                      multilevel-http (1.000x)
             908 op/s ⨠ set small
             947 op/s ⨠ set medium
             953 op/s ⨠ set large
           1,019 op/s ⨠ get large
           1,028 op/s ⨠ get medium
           1,071 op/s ⨠ get small

                      MemDOWN (1.000x)
           2,485 op/s ⨠ set small
             718 op/s ⨠ set medium
             412 op/s ⨠ set large
         155,271 op/s ⨠ get large
         207,333 op/s ⨠ get medium
         127,607 op/s ⨠ get small

                      Memory (10.000x)
      25,075,729 op/s ⨠ set small
      14,536,976 op/s ⨠ set medium
      15,993,244 op/s ⨠ set large
      23,484,267 op/s ⨠ get small
      28,618,690 op/s ⨠ get medium
      24,517,616 op/s ⨠ get large


  Suites:  14
  Benches: 84
  Elapsed: 60,852.68 ms

```
