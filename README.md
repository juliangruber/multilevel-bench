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
          12,759 op/s ⨠ set small
          15,670 op/s ⨠ set medium
          15,670 op/s ⨠ set large
          16,185 op/s ⨠ get large
          16,369 op/s ⨠ get medium
          15,765 op/s ⨠ get small

                      MongoDB (1.000x)
          18,060 op/s ⨠ set small
          23,280 op/s ⨠ set medium
          28,366 op/s ⨠ set large
           7,098 op/s ⨠ get large
           8,171 op/s ⨠ get medium
           8,146 op/s ⨠ get small

                      Memcached (10.000x)
          10,175 op/s ⨠ set small
          10,029 op/s ⨠ set medium
          10,580 op/s ⨠ set large
          10,948 op/s ⨠ get large
          10,941 op/s ⨠ get medium
          10,871 op/s ⨠ get small

                      Medea (10.000x)
          17,808 op/s ⨠ set small
          17,704 op/s ⨠ set medium
          17,288 op/s ⨠ set large
          45,992 op/s ⨠ get large
          47,840 op/s ⨠ get medium
          45,972 op/s ⨠ get small

                      levelUP (10.000x)
          49,828 op/s ⨠ set small
          47,452 op/s ⨠ set medium
          27,612 op/s ⨠ set large
          34,818 op/s ⨠ get large
          47,376 op/s ⨠ get medium
          49,435 op/s ⨠ get small

                      levelDOWN (10.000x)
          65,647 op/s ⨠ set small
          67,858 op/s ⨠ set medium
          61,286 op/s ⨠ set large
          48,680 op/s ⨠ get large
          48,969 op/s ⨠ get medium
          51,384 op/s ⨠ get small

                      leveled (10.000x)
          67,011 op/s ⨠ set small
          67,206 op/s ⨠ set medium
          64,312 op/s ⨠ set large
          60,395 op/s ⨠ get large
          61,223 op/s ⨠ get medium
          62,572 op/s ⨠ get small

                      multilevel (10.000x)
           6,088 op/s ⨠ set small
           5,782 op/s ⨠ set medium
           5,846 op/s ⨠ set large
           6,961 op/s ⨠ get large
           6,705 op/s ⨠ get medium
           7,175 op/s ⨠ get small

                      multilevel (fake network, 10.000x)
          17,147 op/s ⨠ set small
          16,537 op/s ⨠ set medium
          14,872 op/s ⨠ set large
          19,042 op/s ⨠ get large
          19,540 op/s ⨠ get medium
          19,975 op/s ⨠ get small

                      multileveled (10.000x)
           8,190 op/s ⨠ set small
           8,509 op/s ⨠ set medium
           8,377 op/s ⨠ set large
           8,043 op/s ⨠ get large
           7,952 op/s ⨠ get medium
           8,516 op/s ⨠ get small

                      multileveled (fake network, 10.000x)
          29,926 op/s ⨠ set small
          28,891 op/s ⨠ set medium
          27,545 op/s ⨠ set large
          26,384 op/s ⨠ get large
          26,779 op/s ⨠ get medium
          27,955 op/s ⨠ get small

                      multilevel-http (1.000x)
             812 op/s ⨠ set small
             850 op/s ⨠ set medium
             855 op/s ⨠ set large
             940 op/s ⨠ get large
             919 op/s ⨠ get medium
             921 op/s ⨠ get small

                      MemDOWN (1.000x)
           3,453 op/s ⨠ set small
             974 op/s ⨠ set medium
             537 op/s ⨠ set large
          83,852 op/s ⨠ get large
          98,550 op/s ⨠ get medium
          74,833 op/s ⨠ get small

                      Memory (10.000x)
      27,647,527 op/s ⨠ set small
      12,658,308 op/s ⨠ set medium
      17,211,260 op/s ⨠ set large
      19,373,913 op/s ⨠ get small
      32,810,767 op/s ⨠ get medium
      28,913,684 op/s ⨠ get large

                      TingoDB (1.000x)
           9,410 op/s ⨠ set small
          11,234 op/s ⨠ set medium
          10,570 op/s ⨠ set large
           7,939 op/s ⨠ get large
           8,214 op/s ⨠ get medium
           8,083 op/s ⨠ get small


  Suites:  15
  Benches: 90
  Elapsed: 59,632.64 ms

```
