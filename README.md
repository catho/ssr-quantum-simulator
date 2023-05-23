### Libs information

| lib to simulate  | version | path built in application                  |
| ---------------- | ------- | -------------------------------------------- |
| Quantum          | 9.9.1   | node_modules/@catho/Quantum                  |
| Catho-components | 6.4.0   | node_modules/@catho-private/catho-components |

### What is it?

<p>This is a simple SSR simulator for test React components in NextJs.<p>

### Made for what?

<p>It was made to the last stage of the test ranges for [Quantum](https://github.com/catho/quantum) component delivery.</p>

### How to start

<ol>
    <li>Clone the repository</li>
    <li><code>yarn</code> to install all dependencies</li>
    <li><code>yarn dev</code> to start the application</li>
</ol>

### Building

<p>To simulate, build the lib (Quantum or catho-components) in your branch, copy and paste in path builded in this application, to overwrite. And start it.</p>

### Warning

<p>Because this application is using a private package, catho-components, is necessary the npm TOKEN and export a env variable NPM_TOKEN.
If this package is not necessary for your simulation, delete the line in <code>package.json</code></p>

```
"@catho-private/catho-components": "x.x.x",
```

# Next + React Catho App

This project was bootstrapped with [Next.JS](https://github.com/zeit/next.js).

```

```
