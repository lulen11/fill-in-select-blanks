# techpuzzles

Tech Puzzles for Problem Solvers - Free Web-App to inspire a new generation of problem solvers to learn to code

## develop

`npm start` will launch webpack dev server hosting a local app at `localhost:8080`. Hot reloading is enabled for js & css files.
`npm run lint:js` will display linting errors for js files
`npm run lint:css` will display linting errors for css files

## deploy

Please note: all commands are expected to be run from the root directory (where `package.json` lives)

### dev

Initially the stack will need to be created. This command should only be to create or update the necessary AWS resources:

1. `./devops/scripts/createStack.sh dev`

Deployment steps:

1. `npm run build:dev` to build development bundle with source maps
2. `./devops/scripts/deploy.sh dev`

### prod

Initially the stack will need to be created. This command should only be to create or update the necessary AWS resources:

1. `./devops/scripts/createStack.sh prod`

Deployment steps:

1. `npm run build:prod` to build production bundle
2. `./devops/scripts/deploy.sh prod`
