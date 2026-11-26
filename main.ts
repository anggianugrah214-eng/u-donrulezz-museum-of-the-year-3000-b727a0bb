// Museum of the Year 3000 — candidate labels (judge brief: deadpan year-3000
// museum label, joke lands on first read, humour from the future misreading
// the object, true + absurd about its use, fresh object/angle, no explaining
// the joke, <=200 chars):
//
// 1. Plastic Fork, c. 2024. Used once for seven minutes, then preserved by the Earth for roughly four hundred years in the owner's honour.
// 2. USB Cable, c. 2020. Inserted wrongly twice before entering on the third attempt, although the opening, scholars confirm, had only two sides.
// 3. Air Fryer, c. 2022. A small oven, renamed so that a generation which feared cooking could announce it had invented it.
// 4. Self-Checkout Machine, c. 2024. Shoppers did the cashier's job for free, then stood trial before it for an unexpected item in the bagging area.
// 5. Receipt, paper, c. 2023. Issued as proof of one small purchase; unrolled, this example was also the household's longest work of literature.
// 6. Wireless Earbuds, pair, c. 2024. Always exhibited singly. The second earbud is believed to have left the home voluntarily and was never recovered.
// 7. Ring Light, c. 2021. A portable sun carried by citizens who needed to look natural while speaking alone to a telephone.
// 8. Fidget Spinner, c. 2017. A tool for concentration, spun chiefly by people avoiding the task they were concentrating on.
// 9. Neck Pillow, c. 2019. Worn in airports to signal the wearer had given up on arriving as a dignified person.
// 10. QR Menu, c. 2022. Diners pointed a telephone at this square to learn what food was, a ritual that required signal, battery and patience.
// 11. Bubble Wrap, c. 2015. Protective packaging. Most specimens arrived already popped, the protection having been enjoyed in transit.
// 12. Doorbell Camera, c. 2024. Recorded every visitor, parcel and neighbour, and was consulted more faithfully than any household god before it.
//
// First-pass pick: #4 — fresh object, instantly recognisable ritual, and the
// misreading (a trial) grows straight out of how the thing really behaved.
//
// Revision pass: cut "did ... for free" to the drier, more curator-like
// "performed ... unpaid" (straighter face, same sting); kept the exact
// period phrase "unexpected item in the bagging area" untouched — it is the
// laugh, and paraphrasing it would explain the joke instead of trusting the
// reader. Rivals #2 and #5 land well but lean on jokes already in wide
// circulation; #4's trial framing is the fresher angle. Final line below.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Self-Checkout Machine, c. 2024. Shoppers performed the cashier's job unpaid, then were tried by the machine for an unexpected item in the bagging area.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
