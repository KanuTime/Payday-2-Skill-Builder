"use strict";
var build_provider_1 = require('./builds/shared/build.provider');
var build_stats_provider_1 = require('./builds/build-stats/build-stats.provider');
var armor_provider_1 = require('./armor/shared/armor.provider');
var armor_parser_1 = require('./builds/shared/parser/armor.parser');
exports.PROVIDERS = [
    armor_provider_1.ArmorProvider,
    build_stats_provider_1.BuildStatsProvider,
    // Build Parsing
    build_provider_1.BuildProvider,
    armor_parser_1.ArmorParser,
];
//# sourceMappingURL=app.providers.js.map