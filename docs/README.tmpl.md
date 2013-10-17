# {%= name %} [![NPM version](https://badge.fury.io/js/{%= name %}.png)](http://badge.fury.io/js/{%= name %}) {% if (travis) { %} [![Build Status]({%= travis %}.png)]({%= travis %}){% } %}

> {%= description %}

This repo is based on [grunt-contrib](https://github.com/gruntjs/grunt-contrib/).

# Overview
This collection contains all of the assemble-contrib plugins.  We have made it available as a convenience for first-time users who would like to explore what Assemble has to offer. After review, it is recommended that you uninstall this collection and specify the plugins you wish to use individually.

A listing of each plugin and the current version included in this package is listed below.
{% _.each(repos, function(plugin) { %}{% if(/\bcontrib\b/g.test(plugin.name)) { %}

## [{%= plugin.name %}]({%= plugin.url %}) [![NPM version](https://badge.fury.io/js/{%= name %}.png)](http://badge.fury.io/js/{%= name %})
> {%= plugin.description %} {% } %} {% }); %}

To update this list, from the root of the project run `node docs/repos && grunt`.

## Contributing
Please see the [Contributing](http://assemble.io/contributing.html) guide for information on contributing to this project.

## Authors

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

**Brian Woodward**

+ [github/doowb](https://github.com/doowb)
+ [twitter/doowb](http://twitter.com/jonschlinkert)


## License
{%= copyright %}
{%= license %}

***

_This file was generated on {%= grunt.template.date("fullDate") %}._