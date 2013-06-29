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

## Caveats

* I get `maximum callstack size exceeded` when doing more than 1000 iterations with the mongodb driver.

## Results

Current results from my machine (MBP Retina, i7, 16GB Ram, SSD):

```

                      Redis (100.000x)
          14,314 op/s ⨠ set small
          11,265 op/s ⨠ set medium
          15,615 op/s ⨠ set large
          15,780 op/s ⨠ get large
          15,895 op/s ⨠ get medium
          15,331 op/s ⨠ get small

                      MongoDB (1.000x)
          22,571 op/s ⨠ set small
          20,304 op/s ⨠ set medium
          21,752 op/s ⨠ set large
           6,801 op/s ⨠ get large
           8,535 op/s ⨠ get medium
           8,568 op/s ⨠ get small

                      Memcached (100.000x)
          10,321 op/s ⨠ set small
          10,333 op/s ⨠ set medium
           9,973 op/s ⨠ set large
          10,653 op/s ⨠ get large
          10,543 op/s ⨠ get medium
          10,570 op/s ⨠ get small

                      Medea (100.000x)
          17,572 op/s ⨠ set small
          17,699 op/s ⨠ set medium
          17,773 op/s ⨠ set large
          47,699 op/s ⨠ get large
          49,698 op/s ⨠ get medium
          48,709 op/s ⨠ get small

                      levelUP (100.000x)
          33,353 op/s ⨠ set small
          17,067 op/s ⨠ set medium
          16,675 op/s ⨠ set large
          21,218 op/s ⨠ get large
          21,671 op/s ⨠ get medium
          35,949 op/s ⨠ get small

                      levelDOWN (100.000x)
          70,154 op/s ⨠ set small
          65,122 op/s ⨠ set medium
          59,278 op/s ⨠ set large
          44,204 op/s ⨠ get large
          46,448 op/s ⨠ get medium
          45,292 op/s ⨠ get small

                      leveled (100.000x)
          71,453 op/s ⨠ set small
          70,027 op/s ⨠ set medium
          57,826 op/s ⨠ set large
          51,036 op/s ⨠ get large
          54,759 op/s ⨠ get medium
          53,034 op/s ⨠ get small

                      multilevel (100.000x)
           6,154 op/s ⨠ set small
           5,831 op/s ⨠ set medium
           5,742 op/s ⨠ set large
           6,723 op/s ⨠ get large
           6,763 op/s ⨠ get medium
           6,791 op/s ⨠ get small

                      multilevel (fake network, 100.000x)
          16,834 op/s ⨠ set small
          16,026 op/s ⨠ set medium
          14,369 op/s ⨠ set large
          17,750 op/s ⨠ get large
          19,181 op/s ⨠ get medium
          18,933 op/s ⨠ get small

                      multileveled (100.000x)
           8,572 op/s ⨠ set small
           8,377 op/s ⨠ set medium
           8,281 op/s ⨠ set large
           7,972 op/s ⨠ get large
           8,040 op/s ⨠ get medium
           8,266 op/s ⨠ get small

                      multileveled (fake network, 100.000x)
          30,405 op/s ⨠ set small
          29,522 op/s ⨠ set medium
          26,744 op/s ⨠ set large
          25,647 op/s ⨠ get large
          27,386 op/s ⨠ get medium
          25,830 op/s ⨠ get small

                      multilevel-http (1.000x)
             824 op/s ⨠ set small
             900 op/s ⨠ set medium
             875 op/s ⨠ set large
             939 op/s ⨠ get large
             939 op/s ⨠ get medium
             944 op/s ⨠ get small

                      MemDOWN (10.000x)
             230 op/s ⨠ set small
              68 op/s ⨠ set medium
              38 op/s ⨠ set large
         120,787 op/s ⨠ get large
         121,913 op/s ⨠ get medium
         122,648 op/s ⨠ get small

                      Memory (100.000x)
      30,440,946 op/s ⨠ set small
      12,076,528 op/s ⨠ set medium
      15,273,082 op/s ⨠ set large
     100,838,574 op/s ⨠ get small
      97,422,208 op/s ⨠ get medium
      98,674,992 op/s ⨠ get large

                      TingoDB (10.000x)
          10,532 op/s ⨠ set small
           8,561 op/s ⨠ set medium
          10,936 op/s ⨠ set large
           8,739 op/s ⨠ get large
           8,939 op/s ⨠ get medium
           8,854 op/s ⨠ get small

```
