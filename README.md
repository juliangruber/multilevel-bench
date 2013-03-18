
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
          13,627 op/s ⨠ set small
          16,264 op/s ⨠ set medium
          16,737 op/s ⨠ set large
          16,900 op/s ⨠ get large
          16,883 op/s ⨠ get medium
          16,770 op/s ⨠ get small

                      MongoDB (1.000x)
          16,500 op/s ⨠ set small
          21,581 op/s ⨠ set medium
          23,186 op/s ⨠ set large
           5,609 op/s ⨠ get large
           6,240 op/s ⨠ get medium
           6,177 op/s ⨠ get small

                      Memcached (10.000x)
          10,821 op/s ⨠ set small
          11,070 op/s ⨠ set medium
          10,695 op/s ⨠ set large
          10,283 op/s ⨠ get large
          10,420 op/s ⨠ get medium
          11,138 op/s ⨠ get small

                      levelUP (10.000x)
          52,482 op/s ⨠ set small
          48,672 op/s ⨠ set medium
          29,792 op/s ⨠ set large
          32,505 op/s ⨠ get large
          48,830 op/s ⨠ get medium
          53,224 op/s ⨠ get small

                      levelDOWN (10.000x)
          72,982 op/s ⨠ set small
          65,567 op/s ⨠ set medium
          60,713 op/s ⨠ set large
          47,336 op/s ⨠ get large
          48,209 op/s ⨠ get medium
          48,919 op/s ⨠ get small

                      leveled (10.000x)
          74,803 op/s ⨠ set small
          68,807 op/s ⨠ set medium
          66,981 op/s ⨠ set large
          54,453 op/s ⨠ get large
          62,721 op/s ⨠ get medium
          62,875 op/s ⨠ get small

                      multilevel (10.000x)
           5,894 op/s ⨠ set small
           5,787 op/s ⨠ set medium
           5,479 op/s ⨠ set large
           6,657 op/s ⨠ get large
           6,605 op/s ⨠ get medium
           6,666 op/s ⨠ get small

                      multilevel (fake network, 10.000x)
          17,213 op/s ⨠ set small
          16,539 op/s ⨠ set medium
          15,112 op/s ⨠ set large
          18,782 op/s ⨠ get large
          19,740 op/s ⨠ get medium
          19,963 op/s ⨠ get small

                      multileveled (10.000x)
           8,663 op/s ⨠ set small
           8,263 op/s ⨠ set medium
           8,416 op/s ⨠ set large
           8,002 op/s ⨠ get large
           8,392 op/s ⨠ get medium
           8,297 op/s ⨠ get small

                      multileveled (fake network, 10.000x)
          31,372 op/s ⨠ set small
          30,377 op/s ⨠ set medium
          28,711 op/s ⨠ set large
          27,548 op/s ⨠ get large
          28,500 op/s ⨠ get medium
          28,719 op/s ⨠ get small

                      multilevel-http (1.000x)
             799 op/s ⨠ set small
             832 op/s ⨠ set medium
             857 op/s ⨠ set large
             913 op/s ⨠ get large
             954 op/s ⨠ get medium
             968 op/s ⨠ get small

                      MemDOWN (1.000x)
           3,369 op/s ⨠ set small
             972 op/s ⨠ set medium
             538 op/s ⨠ set large
          53,985 op/s ⨠ get large
          81,110 op/s ⨠ get medium
          81,530 op/s ⨠ get small

                      Memory (10.000x)
       8,435,238 op/s ⨠ set small
       6,784,196 op/s ⨠ set medium
       7,383,927 op/s ⨠ set large
      16,957,631 op/s ⨠ get small
      25,797,398 op/s ⨠ get medium
      25,687,791 op/s ⨠ get large


  Suites:  13
  Benches: 78
  Elapsed: 55,221.10 ms

```
