


# Angular 6 Real Estate Web Client

First of all: this is an **ongoing** project of a real estate website frontend application. 

The complete work (with all of it's html, css and etc) of this application
 are in a private repository, but this is already a pretty good start 
 if you want to develop single page application real estate websites.
 
 ## As seen on:

- http://www.mattosinvestimentos.com
- http://www.eduardoinvestimentos.com.br
- http://www.vargasmariscal.com.br

## Todo: 
Change private properties accessed on view to public for production mode;

Move all XHR request from OnInit blocks to route resolvers,
 this way we only instantiate our component if our data is already available. 
 
 - https://github.com/raphaelkoszalka/DevChallengeClient/blob/master/src/app/components/book-list/book-list.resolver.ts (angular lifecycle will resolve data before instantiate BookListComponent)
 - https://github.com/raphaelkoszalka/DevChallengeClient/blob/master/src/app/components/book-list/book-list.component.ts (getting data from route object inside component constructor)
 
 ## Customization
- You can template it as you wish in every component HTML and CSS file, according to your own needs.
- RESTFull compliance, you can build your own API (WP-API or MEAN stack for example), and just set your endpoints at app.constants.ts.

## How to
- git clone https://github.com/raphaelkoszalka/realestate-client.git
- cd real-estate-html-client
- npm install
- npm start (use it to avoid CORS problems, add your proxies domains at proxy.conf.json)
- access http://localhost:4200

## Code scaffolding (provided by ng-cli)

Scaffold  | Usage
---       | ---
[Component](https://github.com/angular/angular-cli/wiki/generate-component) | `ng g component my-new-component`
[Directive](https://github.com/angular/angular-cli/wiki/generate-directive) | `ng g directive my-new-directive`
[Pipe](https://github.com/angular/angular-cli/wiki/generate-pipe)           | `ng g pipe my-new-pipe`
[Service](https://github.com/angular/angular-cli/wiki/generate-service)     | `ng g service my-new-service`
[Class](https://github.com/angular/angular-cli/wiki/generate-class)         | `ng g class my-new-class`
[Guard](https://github.com/angular/angular-cli/wiki/generate-guard)         | `ng g guard my-new-guard`
[Interface](https://github.com/angular/angular-cli/wiki/generate-interface) | `ng g interface my-new-interface`
[Enum](https://github.com/angular/angular-cli/wiki/generate-enum)           | `ng g enum my-new-enum`
[Module](https://github.com/angular/angular-cli/wiki/generate-module)       | `ng g module my-module`


## Further help

rmkoszalka@gmail.com
