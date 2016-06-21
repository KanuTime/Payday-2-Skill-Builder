"use strict";
var build_provider_1 = require('./build/shared/build.provider');
//import { BuildStatsProvider } from './build/build-stats/build-stats.provider';
var armor_provider_1 = require('./armor/shared/armor.provider');
//import { ArmorParser } from './build/shared/parser/armor.parser';
exports.PROVIDERS = [
    armor_provider_1.ArmorProvider,
    //BuildStatsProvider,
    // Build Parsing
    build_provider_1.BuildProvider,
];
//# sourceMappingURL=app.providers.js.map