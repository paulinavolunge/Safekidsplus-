# Nicko V2 — Game Design Vision

Source: Paula's summary of the Astra build, shared 2026-09-15. This is the canonical design reference.

## Core philosophy

Make the child PLAY. Hide the learning inside the play.

Mobile-first, open-ended sandbox for roughly ages 4-7, starring Nicko. No levels, quizzes, scores, or instruction walls. The child explores, touches, drags, experiments, takes care of Nicko, creates stories, discovers consequences. Model: Sago Mini style open-ended play. All characters, world, artwork, interactions, and game design are original.

## Interaction model (kept deliberately simple)

tap -> drag -> drop -> discover -> reaction. No reading required. No menus. No "what am I supposed to do?"

## The differentiator

The product is not "a kids game with a cat." It is a tiny living world centered on a character children become emotionally attached to. Nicko must feel alive: he blinks, gets excited, gets annoyed, wants things, refuses things, sleeps, plays, makes mistakes, reacts to what the child does. Strict identity and animation assets.

Comedy over correction: feed Nicko something he hates and he gives a hilarious reaction, never a giant WRONG message.

## World plan (connected locations, not isolated mini-games)

1. **Bedroom (current Astra build)** — the foundation. Validates the interaction engine. Nicko: idle, blinking, meowing, happy reactions, jump prep, jump, landing; later sleeping, walking, carrying. Objects: bed, lamp, stuffed bear, music box, colored blocks, window, curtains. Examples: tap lamp -> light changes; drag toy to Nicko -> reaction; stack blocks; put Nicko near bed -> sleep.
2. **Kitchen** — pretend play: fridge/cabinets, dishes, feeding Nicko, mixing, pouring, silly food combos, cleaning spills, discovering favorite foods. Hidden: sorting, sequencing, cause/effect, basic nutrition, responsibility.
3. **Living Room** — free-form imaginative play: couch, pillows, TV, books, toys, plants, rug, boxes, music. Nicko jumps on furniture, hides, knocks things over, falls asleep. Storytelling and discovery.
4. **Bathroom** — care routines: sink, water, toothbrush, towel, bath, soap, mirror. Nicko gets dirty -> child cleans him. Turn on water -> Nicko does not appreciate it. Hidden: hygiene, routines, sequencing, self-care.
5. **Creative / Play Room** — drawing, painting, blocks, shapes, stickers, instruments, building, dress-up. No "correct" outcome. Creativity is the activity.
6. **Backyard / Outdoors** — butterflies, digging, bugs, leaves, puddles, growing plants, watering flowers, ball, hiding, weather. Hidden: nature, animals, seasons, simple science, exploration.
7. **Eventually: the larger world** — House -> Yard -> Neighborhood -> Town. Possible: park, store, vet, cafe, beach, camping, playground, car/travel, preschool, seasonal locations.

## Hidden educational layer (parent-facing value)

| Child thinks they're... | They're actually practicing... |
|---|---|
| Feeding Nicko | sequencing / choices |
| Building blocks | spatial reasoning |
| Finding Nicko's toy | memory |
| Cleaning Nicko | routines |
| Sorting toys | categorization |
| Growing a flower | cause and effect |
| Helping Nicko | empathy |
| Making food | creativity / sequencing |
| Exploring rooms | independence |
| Creating stories | language / imagination |

## Related builds

- Wren's park prototype (https://safekidsplus.netlify.app/game/, source ~/workspace/safekidsplus/game/) maps to location 6 (Backyard/Outdoors). Its playtested interactions (watering, feeding/sharing, trash cleanup, kite rescue, pond safety) are candidate designs to port onto the Astra engine later.
- The hidden-learning table is parent-marketing copy for the SafeKidsPlus site's trust section.

## Design principles from real playtesting

Paula's 6-year-old niece (UK, August 2026) played the Lovable placeholder game and kept asking "can I play the safety game" — she asked for it BY NAME. That is the good kind of wanting: attachment to the world, like asking for a favorite bedtime story again.

But watching her play revealed the failure mode: the Lovable version had levels, so she just clicked through trying to pass them without reading anything. Levels teach kids to optimize for completion, not to engage.

Principle: **beloved, not compulsive.** The goal is a game kids ask for by name because they love Nicko, not a game that hooks them with levels, scores, and streaks. This is why V2 has no levels, no scores, no pass/fail: with nothing to "beat," the only thing left to do is actually play — explore, experiment, take care of Nicko.
