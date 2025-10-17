# Blockchain Performance Test Results

## Test Configuration

| Parameter        | Somnia Mainnet                    | Sei Mainnet                           |
| ---------------- | --------------------------------- | ------------------------------------- |
| **Chain ID**     | 5031                              | 1329                                  |
| **RPC Endpoint** | https://somnia-rpc.publicnode.com | https://sei-mainnet.g.alchemy.com/v2/ |
| **Test Date**    | October 17, 2025                  | October 17, 2025                      |
| **Sample Size**  | 10 operations                     | 10 operations                         |

## Plot Creation Test Results (createPlot)

| Metric              | Somnia Mainnet | Sei Mainnet   |
| ------------------- | -------------- | ------------- |
| **Average Latency** | 2,650.2 ms     | 4,610.5 ms    |
| **Minimum Latency** | 1,532 ms       | 3,855 ms      |
| **Maximum Latency** | 6,356 ms       | 5,381 ms      |
| **Median Latency**  | 1,780 ms       | 4,556 ms      |
| **Gas Usage**       | 1,942,771 gas  | 311,465.4 gas |
| **Success Rate**    | 100%           | 100%          |

### Somnia createPlot Detailed Results

| Test # | Latency  | Transaction Hash                                                   | Coordinates |
| ------ | -------- | ------------------------------------------------------------------ | ----------- |
| 1      | 6,240 ms | 0x1220351873796840c926cf3788b32f1f447c8f393a646f662ca963e09f8526b7 | (-54, -74)  |
| 2      | 1,532 ms | 0x941dcd74462f834c0ab4fc81b68bcffb1612204d46e341a8c731a2f969e5f94d | (-85, -56)  |
| 3      | 6,356 ms | 0xc7a1f297412133d44ead6478e58b4d1c1d5a3b529229ee4ab41209e8a9b43fc3 | (-24, 63)   |
| 4      | 2,251 ms | 0x3bc4ec30137a96e0686f999347333277e0cd7f9a521bef4a6f76df40d17a7e02 | (10, 10)    |
| 5      | 1,597 ms | 0xa0908cb516089010c15d7343f9308d84a02cc5669aa95d71a1f0966fd827f1c5 | (58, -32)   |
| 6      | 1,780 ms | 0x6ecbfc9fb5033bb4dc8c652af46fc4e2fab5eb9cef13ea46dedfb2a137d1e07c | (-8, 45)    |
| 7      | 1,659 ms | 0x38630526313422c25bd5ed211bcfad8fd1d2fc8ae5aba807d3ae3b4f449a319c | (-35, -70)  |
| 8      | 1,837 ms | 0x2c4fb3b7b6354c20660f8ca6fa5e0f84ba9110ecfab15e76fda2476664fab878 | (33, -3)    |
| 9      | 1,605 ms | 0x07e4ca3654a0623c49c95a8ea61ddfa078bdcf39f13573a64c3b4cb5cc0f5dfc | (-56, -62)  |
| 10     | 1,645 ms | 0x2cd9666f0962ebf0a2304808fd5ef28c009cfda80fd15a5859c085996ec292cc | (-10, -10)  |

### Sei createPlot Detailed Results

| Test # | Latency  | Transaction Hash                                                   | Coordinates |
| ------ | -------- | ------------------------------------------------------------------ | ----------- |
| 1      | 3,855 ms | 0x0208ae7c2f281b4d29999b7db451c45c4954a5a6a1f77f47fdf44b11daeefbd3 | (46, 46)    |
| 2      | 4,850 ms | 0x94e7bb878cc82b49628b49070e43ffe2d6411f6918c1e2b3c1794f6c1344f9e3 | (-27, 1)    |
| 3      | 4,541 ms | 0xb38ee12631d5ecce25e7ecb456070a7e3a023531f3e09ebf84d74676204c2ba4 | (89, 93)    |
| 4      | 5,134 ms | 0x8db7bba322fd1ac60077e98163513066aa3aae1963d7d92fe41f7c94bcf0a2d7 | (10, 10)    |
| 5      | 4,435 ms | 0x4c7899bb910da9d5532c9a9f4a518ea2970d179984df17b481e1ebadb2d32a12 | (-10, -10)  |
| 6      | 5,381 ms | 0xf0db9fc40110f2990e5ebaf95096f6593120b0ab4f371f70fb4cae179d207d72 | (-78, 86)   |
| 7      | 4,556 ms | 0x5fbe20117af27acccf039da9d866d7c4a3a679864b9b7abd717c4fac1c4bf7d2 | (-54, 65)   |
| 8      | 4,534 ms | 0x8d778a3e035601e9a141451045062db976340ba9dd8a6c89cc09f9ae1b86d21b | (-38, 1)    |
| 9      | 4,945 ms | 0x05f3bc2874c18b55a72b56101e5436e3b99503525fb3bc7bf98deef034af77fe | (64, 52)    |
| 10     | 3,874 ms | 0xa806ebda014d5040a6551effb7d6782203fa796948bac2117aface2eb5ce5b57 | (22, -36)   |

## Plot Retrieval Test Results (getPlots)

| Metric              | Somnia Mainnet | Sei Mainnet |
| ------------------- | -------------- | ----------- |
| **Average Latency** | 289.4 ms       | 476.8 ms    |
| **Minimum Latency** | 244 ms         | 349 ms      |
| **Maximum Latency** | 358 ms         | 908 ms      |
| **Median Latency**  | 297 ms         | 459 ms      |
| **Data Retrieved**  | 20 plots       | 20 plots    |
| **Success Rate**    | 100%           | 100%        |

### Somnia getPlots Detailed Results

| Test # | Latency | Plot Count | Player Address                             |
| ------ | ------- | ---------- | ------------------------------------------ |
| 1      | 358 ms  | 20 plots   | 0x2D3025Ce673D52DcBD0aD43cF04f55abF15E1Df3 |
| 2      | 297 ms  | 20 plots   | 0x2D3025Ce673D52DcBD0aD43cF04f55abF15E1Df3 |
| 3      | 274 ms  | 20 plots   | 0x2D3025Ce673D52DcBD0aD43cF04f55abF15E1Df3 |
| 4      | 250 ms  | 20 plots   | 0x2D3025Ce673D52DcBD0aD43cF04f55abF15E1Df3 |
| 5      | 320 ms  | 20 plots   | 0x2D3025Ce673D52DcBD0aD43cF04f55abF15E1Df3 |
| 6      | 244 ms  | 20 plots   | 0x2D3025Ce673D52DcBD0aD43cF04f55abF15E1Df3 |
| 7      | 324 ms  | 20 plots   | 0x2D3025Ce673D52DcBD0aD43cF04f55abF15E1Df3 |
| 8      | 318 ms  | 20 plots   | 0x2D3025Ce673D52DcBD0aD43cF04f55abF15E1Df3 |
| 9      | 250 ms  | 20 plots   | 0x2D3025Ce673D52DcBD0aD43cF04f55abF15E1Df3 |
| 10     | 259 ms  | 20 plots   | 0x2D3025Ce673D52DcBD0aD43cF04f55abF15E1Df3 |

### Sei getPlots Detailed Results

| Test # | Latency | Plot Count | Player Address                             |
| ------ | ------- | ---------- | ------------------------------------------ |
| 1      | 365 ms  | 20 plots   | 0x2D3025Ce673D52DcBD0aD43cF04f55abF15E1Df3 |
| 2      | 459 ms  | 20 plots   | 0x2D3025Ce673D52DcBD0aD43cF04f55abF15E1Df3 |
| 3      | 478 ms  | 20 plots   | 0x2D3025Ce673D52DcBD0aD43cF04f55abF15E1Df3 |
| 4      | 402 ms  | 20 plots   | 0x2D3025Ce673D52DcBD0aD43cF04f55abF15E1Df3 |
| 5      | 543 ms  | 20 plots   | 0x2D3025Ce673D52DcBD0aD43cF04f55abF15E1Df3 |
| 6      | 462 ms  | 20 plots   | 0x2D3025Ce673D52DcBD0aD43cF04f55abF15E1Df3 |
| 7      | 435 ms  | 20 plots   | 0x2D3025Ce673D52DcBD0aD43cF04f55abF15E1Df3 |
| 8      | 349 ms  | 20 plots   | 0x2D3025Ce673D52DcBD0aD43cF04f55abF15E1Df3 |
| 9      | 908 ms  | 20 plots   | 0x2D3025Ce673D52DcBD0aD43cF04f55abF15E1Df3 |
| 10     | 367 ms  | 20 plots   | 0x2D3025Ce673D52DcBD0aD43cF04f55abF15E1Df3 |


## Test Environment Details

- **Test Duration**: Multiple benchmark runs
- **Network**: Mainnet (Production)
- **Success Rate**: 100% across all operations
- **Data Points**: 10 samples per operation per network
