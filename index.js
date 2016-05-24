'use strict';

/**
 * select Input Plugin
 *
 *
 * An input plugin for a select input type
 */
const validation = require('./lib/validation.js');

/**
 * Single select Input Plugin
 * @module selectInputPlugin
 */
module.exports = {
  name: 'select',
  description: 'An input plugin for a select input type',
  validation: {
    selectValidation: validation,
  },
  inputs: {
    select: {
      validation: {
        function: 'selectValidation',
        on: 'change',
      },
      label: 'Select one',
      options: [
        { name: 'Michaelangelo',
          value: 'mike',
        },
        { name: 'Leonardo',
          value: 'leo',
        },
        { name: 'Raphael',
          value: 'ralph',
        },
        { name: 'Donatello',
          value: 'don',
        },
      ],
      type: 'select',
      settings: {
        empty: true,
      },
    },
  },
  html: '<label for="{{select.id}}">{{select.label}}</label><select id="{{select.id}}" name="{{select.name}}">{% for name in select.options %}<option value="{{name.value}}" {% if name.value == select.value %}selected{% endif %}>{{name.name}}</option>{% endfor %}</select></label>',
};
