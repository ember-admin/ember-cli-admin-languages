# Ember-Cli-Admin-Languages

[![npm version](https://badge.fury.io/js/ember-cli-admin-languages.svg)](http://badge.fury.io/js/ember-cli-admin-languages)

Plugin for ember-cli-admin that adds multiple languages properties support

## Installation

First, run in your `ember-cli-admin` project directory:

`npm install ember-cli-admin-languages --save-dev`

Then

`ember g ember-cli-admin-languages`

And finally add this lines to your `Brocfile.js`

```javascript
var pickFiles = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');

var icons = pickFiles('bower_components/flag-icon-css/flags', {
  srcDir: '/',
  destDir: '/flags'
});

module.exports = mergeTrees([app.toTree(), icons]);
```

## Usage

The main thing to start using this plugin is to define your locales list somewhere. For example, it can be defined just in your controller, or globally in `config/evironment.js`, that is more convenient.

Locales is just array, that should be defined like this:

```javascript
//config/evironment.js
{
...
  locales: ['en', 'ru', 'de', 'fr']
...
}
```

Next, you should check your model. Properties you want to be multilanguage must be defined with suffix `_{{locale name}}`.
For example, for property `name` and locales `['en', 'ru', 'de', 'fr']`:

```javascript

...
  name_en: DS.attr('string'),
  name_de: DS.attr('string'),
  name_fr: DS.attr('string'),
  name_ru: DS.attr('string'),
...

```

The component itself can be used like this:

```handlebars
  {{translate-tabs attribute="name" model=model locales=locales}}
```

You can define input type for each tab. Available types:
- input (default)
- textarea (you should set `isTextArea=true`)
- wysihtml5 editor (you should set `isTextArea=true` and `withEditor=true`)

Also, if you want to change this component someway, you should import it and just extend (for example, you want define locale to every instance):

```javascript
//app/components/translate-tabs.js

import TranslateTabs from 'ember-cli-admin-languages/components/translate-tabs';
import ENV from 'admin/config/environment';

export default TranslateTabs.extend({
  locales: function() {
    return ENV.locales || [];
  }.property()
});

```

##Contribution

You can see contribution guide at [`ember-cli-admin`](https://github.com/ember-admin/ember-cli-admin/) project's [contributing guide](https://github.com/ember-admin/ember-cli-admin/wiki/Contributing).

##License

[Licensed under MIT license] [1]

[1]:http://opensource.org/licenses/mit-license.php
