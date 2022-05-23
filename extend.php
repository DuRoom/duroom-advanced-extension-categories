<?php

/*
 * This file is part of DuRoom Unnamed Theme.
 *
 * (c) NKDuy <kn145660@gmail.com>
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

use DuRoom\Extend;

return [
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),

    new Extend\Locales(__DIR__.'/locale'),
];
