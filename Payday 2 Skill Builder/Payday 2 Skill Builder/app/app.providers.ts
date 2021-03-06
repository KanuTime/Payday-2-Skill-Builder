﻿import { BuildProvider } from './builds/shared/build.provider';
import { BuildStatsProvider } from './builds/build-stats/build-stats.provider';

import { ArmorProvider } from './armor/shared/armor.provider';
import { ArmorParser } from './builds/shared/parser/armor.parser';


export const PROVIDERS = [
    ArmorProvider,
    BuildStatsProvider,

    // Build Parsing
    BuildProvider,
    ArmorParser,
];