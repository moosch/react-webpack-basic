# React Webpack Basic

Here is my super simple starter kit (I know, right? "Not another one!")

It has only the bare essentials of a React and Webpack project. Well, it also has Scss support. Why not?
Oh and some simple linting. Everyone loves beautiful code.

## Getting started

```
git clone https://github.com/moosch/react-webpack-basic.git
cd react-webpack-basic
```

Install dependencies with `yarn install` or `npm install`

Once that's done you can build your project with running `npm run build`

Check your code is looking great with `npm run lint`

### Structure

```
react-webpack-basic/
├── .babelrc
├── .gitignore
├── index.html
├── package.json
├── webpack.config.js
└── app/
    ├── index.js
    ├── components/
    │   └── Title.js
    └── scss/
        ├── styles.css
        ├── base/
        │   └── normalize.scss
        └── modules/
            └── layout.scss

```

## Future additions

I'll be adding extras to this, including functional testing and incorporating a node server

### License

PetitePageProgress is MIT Licensed

Copyright (c) 2017 [@moosch](https://github.com/moosch)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
