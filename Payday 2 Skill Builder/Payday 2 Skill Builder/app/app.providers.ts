import { BuildProvider } from './build/shared/build.provider';
//import { BuildStatsProvider } from './build/build-stats/build-stats.provider';

import { ArmorProvider } from './armor/shared/armor.provider';
//import { ArmorParser } from './build/shared/parser/armor.parser';

export const PROVIDERS = [
    ArmorProvider,
    //BuildStatsProvider,

    // Build Parsing
    BuildProvider,
    //ArmorParser,

    
];