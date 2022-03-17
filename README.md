# Visual Nuts

### Requirements
- TypeScript
- Node.js 
- Yarn

### Instructions to run

type `yarn` in your terminal to install the packages from package.json

after this change .env file to choose what challenge you want to run:

```env
 //1 challenge1  or 2 to challenge2
CHALLENGE = 1
```

after this you need to transpile to js. To do this type this command in your terminal:

```command
 yarn run compile
```

this step will create a dist folder with your .js files

```result
├───src
│   │   challenge1.js
│   │   challenge2.js
│   │   program.js
│   │
│   └───data
│           countries.json
│
└───test
        challenge1.test.js
        challenge2.test.js
```

Now to run, type this command bellow in your terminal:

```command
node .\dist\src\program.js 
```

### Result


```command
Challenge 1
...
Nuts
Visual
82
83
Visual
Nuts
86
Visual
88
89
...
```

### Result
```command
challeng2

┌─────────────────┬────────┐
│     (index)     │ Values │
├─────────────────┼────────┤
│ Total Countries │   7    │
└─────────────────┴────────┘
┌──────────────────────────────────────────────┬───────────────────────────────────────┐
│                   (index)                    │                   0                   │
├──────────────────────────────────────────────┼───────────────────────────────────────┤
│ Countries where they officially speak German │ { country: 'BE', languages: [Array] } │
└──────────────────────────────────────────────┴───────────────────────────────────────┘
┌───────────────────────────────────────────────────────┬───────────────────────────────────────┬───────────────────────────────────────┐
│                        (index)                        │                   0                   │                   1                   │
├───────────────────────────────────────────────────────┼───────────────────────────────────────┼───────────────────────────────────────┤
│ Country with the highest number of official languages │ { country: 'BE', languages: [Array] } │ { country: 'EE', languages: [Array] } │
└───────────────────────────────────────────────────────┴───────────────────────────────────────┴───────────────────────────────────────┘
┌────────────────────────────────────────────────────────┬────┬────┬────┐
│                        (index)                         │ en │ nl │ de │
├────────────────────────────────────────────────────────┼────┼────┼────┤
│ The most common official language(s), of all countries │ 2  │ 2  │ 2  │
└────────────────────────────────────────────────────────┴────┴────┴────┘

```



### to run tests
```command
npx jest
```

### result:
```command
Test Suites: 4 passed, 4 total
Tests:       24 passed, 24 total
Snapshots:   0 total
Time:        3.5 s
```