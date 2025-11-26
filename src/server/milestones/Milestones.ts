import {Terraformer} from '@/server/milestones/Terraformer';
import {Mayor} from '@/server/milestones/Mayor';
import {Gardener} from '@/server/milestones/Gardener';
import {Builder} from '@/server/milestones/Builder';
import {Planner} from '@/server/milestones/Planner';
import {Hoverlord} from '@/server/milestones/Hoverlord';
import {IMilestone} from '@/server/milestones/IMilestone';
import {Generalist} from '@/server/milestones/Generalist';
import {Specialist} from '@/server/milestones/Specialist';
import {Ecologist} from '@/server/milestones/Ecologist';
import {Tycoon} from '@/server/milestones/Tycoon';
import {Legend} from '@/server/milestones/Legend';
import {Diversifier} from '@/server/milestones/Diversifier';
import {Tactician} from '@/server/milestones/Tactician';
import {PolarExplorer} from '@/server/milestones/PolarExplorer';
import {Energizer} from '@/server/milestones/Energizer';
import {RimSettler} from '@/server/milestones/RimSettler';
import {Networker} from '@/server/milestones/Networker';
import {OneGiantStep} from '@/server/moon/OneGiantStep';
import {Lunarchitect} from '@/server/moon/Lunarchitect';
import {Economizer} from '@/server/milestones/arabiaTerra/Economizer';
import {Pioneer} from '@/server/milestones/arabiaTerra/Pioneer';
import {LandSpecialist} from '@/server/milestones/arabiaTerra/LandSpecialist';
import {Martian} from '@/server/milestones/arabiaTerra/Martian';
import {Capitalist} from '@/server/milestones/Capitalist';
import {VElectrician} from '@/server/milestones/VElectrician';
import {Coastguard, Irrigator} from '@/server/milestones/Irrigator';
import {Smith} from '@/server/milestones/Smith';
import {Tradesman} from '@/server/milestones/Tradesman';
import {Colonizer} from '@/server/milestones/amazonisPlanitia/Colonizer';
import {Minimalist} from '@/server/milestones/amazonisPlanitia/Minimalist';
import {Terran} from '@/server/milestones/amazonisPlanitia/Terran';
import {Tropicalist} from '@/server/milestones/amazonisPlanitia/Tropicalist';
import {Collector} from '@/server/milestones/terraCimmeria/Collector';
import {Firestarter} from '@/server/milestones/terraCimmeria/Firestarter';
import {Gambler} from '@/server/milestones/terraCimmeria/Gambler';
import {Spacefarer} from '@/server/milestones/terraCimmeria/Spacefarer';
import {TerraPioneer} from '@/server/milestones/terraCimmeria/TerraPioneer';
import {Risktaker} from '@/server/milestones/underworld/Risktaker';
import {Tunneler} from '@/server/milestones/underworld/Tunneler';
import {CForester, Forester} from '@/server/milestones/modular/Forester';
import {Fundraiser} from '@/server/milestones/modular/Fundraiser';
import {Geologist} from '@/server/milestones/modular/Geologist';
import {Landshaper} from '@/server/milestones/modular/Landshaper';
import {Philantropist} from '@/server/milestones/modular/Philantropist';
import {Planetologist} from '@/server/milestones/modular/Planetologist';
import {Producer} from '@/server/milestones/modular/Producer';
import {Researcher} from '@/server/milestones/modular/Researcher';
import {Sponsor} from '@/server/milestones/modular/Sponsor';
import {Lobbyist} from '@/server/milestones/modular/Lobbyist';
import {Farmer} from '@/server/milestones/modular/Farmer';
// import {Briber} from '@/server/milestones/modular/Briber';
import {Engineer} from '@/server/milestones/modular/Engineer';
import {Hydrologist} from '@/server/milestones/modular/Hydrologist';
import {Thawer} from '@/server/milestones/modular/Thawer';
import {Purifier} from '@/server/milestones/Purifier';
import {VSpacefarer} from '@/server/milestones/VSpacefarer';
import {Agronomist} from '@/server/milestones/Agronomist';
// import {Merchant} from '@/server/milestones/modular/Merchant';
import {MAManifest} from '@/server/ma/MAManifest';
import {MilestoneName} from '@/common/ma/MilestoneName';
import {BoardName} from '@/common/boards/BoardName';
import {Architect} from '@/server/milestones/Architect';

export const milestoneManifest: MAManifest<MilestoneName, IMilestone> = {
  all: {
    'Terraformer': {Factory: Terraformer},
    'Mayor': {Factory: Mayor},
    'Gardener': {Factory: Gardener},
    'Planner': {Factory: Planner},
    'Builder': {Factory: Builder},
    'Generalist': {Factory: Generalist},
    'Specialist': {Factory: Specialist},
    'Ecologist': {Factory: Ecologist},
    'Tycoon': {Factory: Tycoon},
    'Legend': {Factory: Legend},
    'Diversifier': {Factory: Diversifier},
    'Tactician': {Factory: Tactician},
    'Polar Explorer': {Factory: PolarExplorer},
    'Energizer': {Factory: Energizer},
    'Rim Settler': {Factory: RimSettler},
    'Hoverlord': {Factory: Hoverlord, compatibility: 'venus'},
    'Networker': {Factory: Networker, compatibility: 'ares'},
    'One Giant Step': {Factory: OneGiantStep, compatibility: 'moon'},
    'Lunarchitect': {Factory: Lunarchitect, compatibility: 'moon'},
    'Colonizer': {Factory: Colonizer, compatibility: 'colonies'},
    'Forester': {Factory: Forester, deprecated: true},
    'Minimalist': {Factory: Minimalist},
    'Terran': {Factory: Terran},
    'Tropicalist': {Factory: Tropicalist},
    'Economizer': {Factory: Economizer},
    'Pioneer': {Factory: Pioneer, compatibility: 'colonies'},
    'Land Specialist': {Factory: LandSpecialist},
    'Martian': {Factory: Martian, compatibility: 'pathfinders'},
    'T. Collector': {Factory: Collector},
    'Firestarter': {Factory: Firestarter},
    'Terra Pioneer': {Factory: TerraPioneer},
    'Spacefarer': {Factory: Spacefarer},
    'Gambler': {Factory: Gambler},
    'V. Electrician': {Factory: VElectrician},
    'Smith': {Factory: Smith},
    'Tradesman': {Factory: Tradesman},
    'Irrigator': {Factory: Irrigator, deprecated: true},
    'Capitalist': {Factory: Capitalist},
    'Tunneler': {Factory: Tunneler, compatibility: 'underworld'},
    'Risktaker': {Factory: Risktaker, compatibility: 'underworld'},
    'Engineer': {Factory: Engineer},
    'Fundraiser': {Factory: Fundraiser},
    'Geologist': {Factory: Geologist},
    'Landshaper': {Factory: Landshaper},
    'Lobbyist': {Factory: Lobbyist, compatibility: 'turmoil'},
    'Philantropist': {Factory: Philantropist},
    // TODO(kberg): Replace with compatibility based on, uh, tags?
    'Planetologist': {Factory: Planetologist, compatibility: 'venus'},
    'Producer': {Factory: Producer},
    'Researcher': {Factory: Researcher},
    'Sponsor': {Factory: Sponsor},
    'Farmer': {Factory: Farmer},
    // 'Briber': {Factory: Briber},
    // 'Merchant': {Factory: Merchant},
    'Thawer': {Factory: Thawer},
    'Hydrologist': {Factory: Hydrologist},
    'Purifier': {Factory: Purifier, compatibility: 'ares'},
    'Agronomist': {Factory: Agronomist},
    'V. Spacefarer': {Factory: VSpacefarer},
    'Architect': {Factory: Architect},
    'C. Forester': {Factory: CForester},
    'Coastguard': {Factory: Coastguard},
  },
  boards: {
    [BoardName.THARSIS]: ['Terraformer', 'Mayor', 'Gardener', 'Builder', 'Planner'],
    [BoardName.HELLAS]: ['Diversifier', 'Tactician', 'Polar Explorer', 'Energizer', 'Rim Settler'],
    [BoardName.ELYSIUM]: ['Generalist', 'Specialist', 'Ecologist', 'Tycoon', 'Legend'],
    [BoardName.AMAZONIS]: ['Colonizer', 'Forester', 'Minimalist', 'Terran', 'Tropicalist'],
    [BoardName.ARABIA_TERRA]: ['Economizer', 'Pioneer', 'Land Specialist', 'Martian', 'Terran'],
    [BoardName.TERRA_CIMMERIA]: ['T. Collector', 'Firestarter', 'Terra Pioneer', 'Spacefarer', 'Gambler'],
    [BoardName.VASTITAS_BOREALIS]: ['V. Electrician', 'Smith', 'Tradesman', 'Irrigator', 'Capitalist'],
    [BoardName.UTOPIA_PLANITIA]: ['Land Specialist', 'Pioneer', 'Tradesman', 'Smith', 'Researcher'],
    [BoardName.VASTITAS_BOREALIS_NOVUS]: ['Agronomist', 'V. Spacefarer', 'Geologist', 'Engineer', 'Farmer'],
    [BoardName.TERRA_CIMMERIA_NOVUS]: ['Planetologist', 'Architect', 'Coastguard', 'C. Forester', 'Fundraiser'],
    [BoardName.HOLLANDIA]: [],
  },
  expansions: {
    venus: ['Hoverlord'],
    ares: ['Networker', 'Purifier'],
    moon: ['One Giant Step', 'Lunarchitect'],
    underworld: ['Risktaker', 'Tunneler'],
  },
  modular: [
    // 'Briber',
    'Engineer',
    'Farmer',
    'Fundraiser',
    'Geologist',
    'Hydrologist',
    'Landshaper',
    'Lobbyist',
    // 'Merchant',
    'Philantropist',
    'Planetologist',
    'Producer',
    'Researcher',
    'Sponsor',
    'Thawer',
  ],
  create: (name: string) => {
    try {
      return milestoneManifest.createOrThrow(name);
    } catch (e) {
      return undefined;
    }
  },
  createOrThrow(name: string) {
    try {
      return new milestoneManifest.all[name as MilestoneName].Factory();
    } catch (e) {
      throw new Error(`Milestone ${name} not found.`);
    }
  },
} as const;
