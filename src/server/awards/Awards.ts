import {Landlord} from '@/server/awards/Landlord';
import {Banker} from '@/server/awards/Banker';
import {Scientist} from '@/server/awards/Scientist';
import {Thermalist} from '@/server/awards/Thermalist';
import {Miner} from '@/server/awards/Miner';
import {Venuphile} from '@/server/awards/Venuphile';
import {IAward} from '@/server/awards/IAward';
import {Industrialist} from '@/server/awards/Industrialist';
import {Celebrity} from '@/server/awards/Celebrity';
import {DesertSettler} from '@/server/awards/DesertSettler';
import {EstateDealer} from '@/server/awards/EstateDealer';
import {Benefactor} from '@/server/awards/Benefactor';
import {Cultivator} from '@/server/awards/Cultivator';
import {Magnate} from '@/server/awards/Magnate';
import {SpaceBaron} from '@/server/awards/SpaceBaron';
import {Excentric} from '@/server/awards/Excentric';
import {Contractor} from '@/server/awards/Contractor';
import {Entrepreneur} from '@/server/awards/Entrepreneur';
import {FullMoon} from '@/server/moon/FullMoon';
import {LunarMagnate} from '@/server/moon/LunarMagnate';
import {CosmicSettler} from '@/server/awards/arabiaTerra/CosmicSettler';
import {Botanist} from '@/server/awards/arabiaTerra/Botanist';
import {Promoter} from '@/server/awards/arabiaTerra/Promoter';
import {Zoologist} from '@/server/awards/arabiaTerra/Zoologist';
import {AManufacturer} from '@/server/awards/arabiaTerra/Manufacturer';
import {Forecaster} from '@/server/awards/Forecaster';
import {Edgedancer} from '@/server/awards/Edgedancer';
import {Visionary} from '@/server/awards/Visionary';
import {Naturalist} from '@/server/awards/Naturalist';
import {Voyager} from '@/server/awards/Voyager';
import {Curator} from '@/server/awards/amazonisPlanitia/Curator';
import {AmazonisEngineer} from '@/server/awards/amazonisPlanitia/AmazonisEngineer';
import {Tourist} from '@/server/awards/amazonisPlanitia/Tourist';
import {Biologist} from '@/server/awards/terraCimmeria/Biologist';
import {TPolitician} from '@/server/awards/terraCimmeria/TPolitician';
import {Urbanist} from '@/server/awards/terraCimmeria/Urbanist';
import {Warmonger} from '@/server/awards/terraCimmeria/Warmonger';
import {AZoologist} from '@/server/awards/amazonisPlanitia/AZoologist';
import {Kingpin} from '@/server/awards/underworld/Kingpin';
import {Excavator} from '@/server/awards/underworld/Excavator';
import {Administrator} from '@/server/awards/modular/Administrator';
import {Constructor} from '@/server/awards/modular/Constructor';
import {Founder} from '@/server/awards/modular/Founder';
import {Highlander} from '@/server/awards/modular/Highlander';
import {Investor} from '@/server/awards/modular/Investor';
import {Landscaper} from '@/server/awards/modular/Landscaper';
import {Metropolist} from '@/server/awards/modular/Metropolist';
import {Mogul} from '@/server/awards/modular/Mogul';
import {Traveller} from '@/server/awards/modular/Traveller';
import {Electrician} from '@/server/awards/modular/Electrician';
import {Collector} from '@/server/awards/modular/Collector';
import {Politician} from '@/server/awards/modular/Politician';
import {Manufacturer} from '@/server/awards/modular/Manufacturer';
import {Incorporator} from '@/server/awards/modular/Incorporator';
import {Rugged} from '@/server/awards/Rugged';
import {BoardName} from '@/common/boards/BoardName';
import {AwardName} from '@/common/ma/AwardName';
import {MAManifest} from '@/server/ma/MAManifest';
import {Suburbian} from '@/server/awards/modular/Suburbian';
import {Blacksmith} from '@/server/awards/Blacksmith';

export const awardManifest: MAManifest<AwardName, IAward> = {
  all: {
    'Landlord': {Factory: Landlord},
    'Scientist': {Factory: Scientist},
    'Banker': {Factory: Banker},
    'Thermalist': {Factory: Thermalist},
    'Miner': {Factory: Miner},
    'Celebrity': {Factory: Celebrity},
    'Industrialist': {Factory: Industrialist},
    'Desert Settler': {Factory: DesertSettler},
    'Estate Dealer': {Factory: EstateDealer},
    'Benefactor': {Factory: Benefactor},
    'Cultivator': {Factory: Cultivator},
    'Excentric': {Factory: Excentric},
    'Magnate': {Factory: Magnate},
    'Space Baron': {Factory: SpaceBaron},
    'Contractor': {Factory: Contractor},
    'Venuphile': {Factory: Venuphile, compatibility: 'venus'},
    'Entrepreneur': {Factory: Entrepreneur, compatibility: 'ares'},
    'Full Moon': {Factory: FullMoon, compatibility: 'moon'},
    'Lunar Magnate': {Factory: LunarMagnate, compatibility: 'moon'},
    'Curator': {Factory: Curator},
    'A. Engineer': {Factory: AmazonisEngineer},
    'Promoter': {Factory: Promoter},
    'Tourist': {Factory: Tourist},
    'A. Zoologist': {Factory: AZoologist},
    'Cosmic Settler': {Factory: CosmicSettler},
    'Botanist': {Factory: Botanist},
    'Zoologist': {Factory: Zoologist},
    'A. Manufacturer': {Factory: AManufacturer},
    'Biologist': {Factory: Biologist},
    'T. Politician': {Factory: TPolitician, compatibility: 'turmoil'},
    'Urbanist': {Factory: Urbanist},
    'Warmonger': {Factory: Warmonger},
    'Forecaster': {Factory: Forecaster},
    'Edgedancer': {Factory: Edgedancer},
    'Visionary': {Factory: Visionary},
    'Naturalist': {Factory: Naturalist},
    'Voyager': {Factory: Voyager},
    'Kingpin': {Factory: Kingpin, compatibility: 'underworld'},
    'Excavator': {Factory: Excavator, compatibility: 'underworld'},
    'Administrator': {Factory: Administrator},
    'Constructor': {Factory: Constructor, compatibility: 'colonies'},
    'Founder': {Factory: Founder},
    'Highlander': {Factory: Highlander},
    'Investor': {Factory: Investor},
    'Incorporator': {Factory: Incorporator},
    'Landscaper': {Factory: Landscaper},
    'Metropolist': {Factory: Metropolist},
    'Mogul': {Factory: Mogul},
    'Traveller': {Factory: Traveller},
    'Collector': {Factory: Collector},
    'Electrician': {Factory: Electrician},
    'Manufacturer': {Factory: Manufacturer},
    'Politician': {Factory: Politician, compatibility: 'turmoil'},
    'Suburbian': {Factory: Suburbian},
    'Rugged': {Factory: Rugged, compatibility: 'ares'},
    'Blacksmith': {Factory: Blacksmith},
  },
  boards: {
    [BoardName.THARSIS]: ['Landlord', 'Scientist', 'Banker', 'Thermalist', 'Miner'],
    [BoardName.HELLAS]: ['Cultivator', 'Magnate', 'Space Baron', 'Excentric', 'Contractor'],
    [BoardName.ELYSIUM]: ['Celebrity', 'Industrialist', 'Desert Settler', 'Estate Dealer', 'Benefactor'],
    [BoardName.AMAZONIS]: ['Curator', 'A. Engineer', 'Promoter', 'Tourist', 'A. Zoologist'],
    [BoardName.ARABIA_TERRA]: ['Cosmic Settler', 'Botanist', 'Promoter', 'Zoologist', 'A. Manufacturer'],
    [BoardName.TERRA_CIMMERIA]: ['Biologist', 'Incorporator', 'T. Politician', 'Urbanist', 'Warmonger'],
    [BoardName.VASTITAS_BOREALIS]: ['Forecaster', 'Edgedancer', 'Visionary', 'Naturalist', 'Voyager'],
    [BoardName.UTOPIA_PLANITIA]: ['Edgedancer', 'Investor', 'Botanist', 'Incorporator', 'Metropolist'],
    [BoardName.VASTITAS_BOREALIS_NOVUS]: ['Traveller', 'Landscaper', 'Highlander', 'Promoter', 'Blacksmith'],
    [BoardName.TERRA_CIMMERIA_NOVUS]: ['Electrician', 'Founder', 'Mogul', 'A. Zoologist', 'Forecaster'],
    [BoardName.HOLLANDIA]: [],
  },
  expansions: {
    venus: ['Venuphile'],
    ares: ['Entrepreneur', 'Rugged'],
    moon: ['Full Moon', 'Lunar Magnate'],
    underworld: ['Kingpin', 'Excavator'],
  },
  modular: [
    'Administrator',
    'Collector',
    'Constructor',
    'Electrician',
    'Founder',
    'Highlander',
    'Investor',
    // 'Incorporator',
    'Landscaper',
    'Manufacturer',
    'Metropolist',
    'Mogul',
    'Politician',
    'Suburbian',
    'Traveller',
  ],
  create: (name: string) => {
    try {
      return awardManifest.createOrThrow(name);
    } catch (e) {
      return undefined;
    }
  },
  createOrThrow(name: string) {
    try {
      return new awardManifest.all[name as AwardName].Factory();
    } catch (e) {
      throw new Error(`Award ${name} not found.`);
    }
  },
} as const;
