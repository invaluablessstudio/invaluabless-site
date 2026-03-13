export type Beat = {
id: string;
slug: string;
title: string;
genre: string;
mood: string;
bpm: number;
key: string;
priceStandard: number;
priceCustom: number;
audioUrl: string;
cover?: string;
description?: string;
};

export const beats: Beat[] = [
{
id: "1",
slug: "midnight-fuego",
title: "MIDNIGHT FUEGO",
genre: "REGGAETON",
mood: "DARK",
bpm: 96,
key: "F MIN",
priceStandard: 100,
priceCustom: 250,
audioUrl: "/audio/sample-beat-1.mp3",
description:
"Dark reggaeton vibe with strong rhythm and modern urban energy.",
},
{
id: "2",
slug: "santo-flow",
title: "SANTO FLOW",
genre: "CHRISTIAN URBAN",
mood: "UPLIFTING",
bpm: 92,
key: "C MIN",
priceStandard: 100,
priceCustom: 250,
audioUrl: "/audio/sample-beat-2.mp3",
description:
"Clean, uplifting urban production for Christian artists and melodic flows.",
},
{
id: "3",
slug: "calle-lux",
title: "CALLE LUX",
genre: "LATIN TRAP",
mood: "AGGRESSIVE",
bpm: 140,
key: "G MIN",
priceStandard: 100,
priceCustom: 250,
audioUrl: "/audio/sample-beat-3.mp3",
description:
"Hard-hitting Latin trap beat with dark melodic tension and punch.",
},
{
id: "4",
slug: "neon-testimony",
title: "NEON TESTIMONY",
genre: "URBAN POP",
mood: "EMOTIONAL",
bpm: 110,
key: "D MIN",
priceStandard: 100,
priceCustom: 250,
audioUrl: "/audio/sample-beat-4.mp3",
description:
"Emotional and cinematic urban-pop production with vocal space.",
},
{
id: "5",
slug: "barrio-dreams",
title: "BARRIO DREAMS",
genre: "RAP",
mood: "SMOOTH",
bpm: 88,
key: "A MIN",
priceStandard: 100,
priceCustom: 250,
audioUrl: "/audio/sample-beat-5.mp3",
description:
"Smooth rap beat built for storytelling, bars, and melodic hooks.",
},
{
id: "6",
slug: "crown-the-sound",
title: "CROWN THE SOUND",
genre: "DRILL",
mood: "HARD",
bpm: 145,
key: "E MIN",
priceStandard: 100,
priceCustom: 250,
audioUrl: "/audio/sample-beat-6.mp3",
description:
"Heavy drill production for commanding flows and dark performance records.",
},
];
