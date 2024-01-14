---
title: Crypto1 (RFID, Oyster card crypto) hacked
layout: post
tags:
- hacking
- wireless
- travel
source-id: 1g0hj_Dvs1YLUvZ7YMppd5iza0eEP9W-24-deRFU0C_Y
published: true
---
One of my favorite things about living in London was the quick and easy (abet expensive) transit system, otherwise known as the London Underground. What made using the Tube such a pleasure was their Oyster card system, a piece of plastic with an RFID chip inside, that allows riders to pass through stations' turnstiles with a simple tap of the card. Turns out, however, according to [The Register](http://www.theregister.co.uk/2008/03/12/mifare_classic_smartcard_crack/), that the Oyster card system is about to get a lot more inexpensive:

> Security researchers say they've found a way to crack the encryption used to protect a widely-used smartcard in a matter of minutes, making it possible for them to quickly and cheaply clone the cards that are used to secure office buildings and automate the collection of mass transportation fares.

> The attack works against the Mifare Classic, a wireless card made by Netherlands-based NXP Semiconductors. It is used by transit operators in London, Boston and the Netherlands and by organizations in the public and private sectors to control access to sensitive areas, according to Karsten Nohl, a PhD candidate at the University of Virginia and one of the cryptographers who discovered the weakness. NXP says it's sold 1 billion to 2 billion of the cards.

> It only takes a few minutes to break any card in particular, Nohl said in an interview. He said the modest amount of time and equipment required to crack any Mifare Classic card - in many cases less than 10 minutes on a typical PC - makes the attack ripe for criminals to carry out in the real-world attacks.

> If you want to get into a high-security building, spending a matter of days is OK, he said. Now, it doesn't take days; it takes minutes for subways and military installations alike.

If there hasn't been a strong enough argument against the mass proliferation of RFID chips yet, this turn of events seems like a damn good one. The insecurities of these chips have been [known](http://www.wired.com/wired/archive/14.05/rfid.html) for quite a while now, but that doesn’t seem to stop businesses from buying up these cheap little chips by the millions. For those who are interested in the actual crypto-analysis of the Mifare RFID tags, the original UVA research can be found [here](http://www.cs.virginia.edu/~kn5f/Mifare.Cryptanalysis.htm). Bruce Schneier also has some great info about this whole situation on his [blog](http://www.schneier.com/blog/archives/2008/03/london_tube_sma.html).

