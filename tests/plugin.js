import test from 'ava';
import contentTypes from 'punchcard-content-types';
import nunjucks from 'nunjucks';
import contains from 'validator/lib/contains';

import plugin from '../';

contentTypes.pluginTests(test, plugin);

const data = {
  select: {
    id: '123456',
    label: 'select one',
    name: 'selectinator',
    settings: plugin.inputs.select.settings,
  },
};

test('select fills options', t => {
  // Render html
  const rendered = nunjucks.renderString(plugin.html, data);

  // check the options
  t.true(contains(rendered, '<option value=\"mike\" >Michaelangelo</option>'), 'Select must contain mike');
  t.true(contains(rendered, '<option value=\"leo\" >Leonardo</option>'), 'Select must contain leo');
  t.true(contains(rendered, '<option value=\"ralph\" >Raphael</option>'), 'Select must contain ralph');
  t.true(contains(rendered, '<option value=\"don\" >Donatello</option>'), 'Select must contain don');
});
