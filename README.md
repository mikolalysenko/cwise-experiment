cwise-experiment
================
Experiments for cache oblivious array operations


Results
=======
Here are the results for running the experiment on the following set up:

* Node: 0.10.5
* Mac OS X
* Intel i7



```
Running experiment with dimensions =  1024x1024  and strides  1024x1  and  1024x1
   Proposal #1  column major pointer arithmetic          Execution =      517
   Proposal #2  row major pointer arithmetic             Execution =     3605
   Proposal #3  cache aware algorithm, B=1               Execution =     1033
   Proposal #4  cache aware algorithm, B=8               Execution =      554
   Proposal #5  cache aware algorithm, B=64              Execution =      564
   Proposal #6  cache aware algorithm, B=512             Execution =      523
   Proposal #7  cache oblivious                          Execution =      555
Running experiment with dimensions =  1024x1024  and strides  1x1024  and  1x1024
   Proposal #1  column major pointer arithmetic          Execution =     3611
   Proposal #2  row major pointer arithmetic             Execution =      514
   Proposal #3  cache aware algorithm, B=1               Execution =     5180
   Proposal #4  cache aware algorithm, B=8               Execution =     1208
   Proposal #5  cache aware algorithm, B=64              Execution =     1447
   Proposal #6  cache aware algorithm, B=512             Execution =     2686
   Proposal #7  cache oblivious                          Execution =      550
Running experiment with dimensions =  1024x1024  and strides  1024x1  and  1x1024
   Proposal #1  column major pointer arithmetic          Execution =     1390
   Proposal #2  row major pointer arithmetic             Execution =     1677
   Proposal #3  cache aware algorithm, B=1               Execution =     2107
   Proposal #4  cache aware algorithm, B=8               Execution =      835
   Proposal #5  cache aware algorithm, B=64              Execution =     1013
   Proposal #6  cache aware algorithm, B=512             Execution =     1156
   Proposal #7  cache oblivious                          Execution =     1114
Running experiment with dimensions =  1024x1024  and strides  1x1024  and  1024x1
   Proposal #1  column major pointer arithmetic          Execution =     1709
   Proposal #2  row major pointer arithmetic             Execution =     1565
   Proposal #3  cache aware algorithm, B=1               Execution =     2425
   Proposal #4  cache aware algorithm, B=8               Execution =      922
   Proposal #5  cache aware algorithm, B=64              Execution =     1283
   Proposal #6  cache aware algorithm, B=512             Execution =     1386
   Proposal #7  cache oblivious                          Execution =     1095
```
