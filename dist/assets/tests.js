'use strict';

define('myapp/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('myapp/tests/controllers/bics_edit/bic.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/bics_edit/bic.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/bics_edit/bic.js should pass jshint.');
  });
});
define('myapp/tests/controllers/deps.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/deps.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/deps.js should pass jshint.');
  });
});
define('myapp/tests/controllers/deps/dep.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/deps/dep.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/deps/dep.js should pass jshint.');
  });
});
define('myapp/tests/controllers/deps_edit/dep.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/deps_edit/dep.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/deps_edit/dep.js should pass jshint.');
  });
});
define('myapp/tests/controllers/return/bic.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/return/bic.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/return/bic.js should pass jshint.');
  });
});
define('myapp/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('myapp/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('myapp/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'myapp/tests/helpers/start-app', 'myapp/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _myappTestsHelpersStartApp, _myappTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _myappTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _myappTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('myapp/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('myapp/tests/helpers/resolver', ['exports', 'myapp/resolver', 'myapp/config/environment'], function (exports, _myappResolver, _myappConfigEnvironment) {

  var resolver = _myappResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _myappConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _myappConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('myapp/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('myapp/tests/helpers/start-app', ['exports', 'ember', 'myapp/app', 'myapp/config/environment'], function (exports, _ember, _myappApp, _myappConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _myappConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _myappApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('myapp/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('myapp/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('myapp/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('myapp/tests/routes/bics.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/bics.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/bics.js should pass jshint.');
  });
});
define('myapp/tests/routes/bics/bic.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/bics/bic.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/bics/bic.js should pass jshint.');
  });
});
define('myapp/tests/routes/bics_edit/bic.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/bics_edit/bic.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/bics_edit/bic.js should pass jshint.\nroutes/bics_edit/bic.js: line 50, col 37, \'$\' is not defined.\n\n1 error');
  });
});
define('myapp/tests/routes/deps.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/deps.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/deps.js should pass jshint.');
  });
});
define('myapp/tests/routes/deps/dep.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/deps/dep.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/deps/dep.js should pass jshint.');
  });
});
define('myapp/tests/routes/deps_edit/dep.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/deps_edit/dep.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/deps_edit/dep.js should pass jshint.\nroutes/deps_edit/dep.js: line 36, col 37, \'$\' is not defined.\n\n1 error');
  });
});
define('myapp/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass jshint.');
  });
});
define('myapp/tests/routes/return/bic.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/return/bic.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/return/bic.js should pass jshint.');
  });
});
define('myapp/tests/test-helper', ['exports', 'myapp/tests/helpers/resolver', 'ember-qunit'], function (exports, _myappTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_myappTestsHelpersResolver['default']);
});
define('myapp/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('myapp/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
