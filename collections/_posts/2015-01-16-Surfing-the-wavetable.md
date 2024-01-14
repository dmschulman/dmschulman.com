---
title: Surfing the wavetable
layout: post
tags:
- synthesizer
- music production
- elektron
- how-to
source-id: 1Im9Ip_ry6qEGBDw92GwtqIWwbQUBMjx9VaKbbiqcEfU
published: true
---
The [Elektron Monomachine](http://www.elektron.se/products/monomachine). Six mono tracks, five different synthesis engines, a lot of possibilities. I had one of these machines a few years ago, actually the second synthesizer I ever purchased, but if you've ever used an Elektron box you know that there is a bit of a learning curve with getting adjusted to how the Swedish do hardware, not to mention having to understand how each synth engine works and is modeled. With so much in one box it was hard to see the advantages of having something as deep as the Monomachine, and as a result, I sold mine not too long after having bought it. I opted for a [Machinedrum](http://www.elektron.se/products/machinedrum-uw) instead.

Though the Monomachine can do FM synthesis, formant synthesis, Commodore 64 SID style sounds, and a can play a standard assortment of wave shapes and sampled waveforms, I vastly overlooked one of the most important features of the entire machine: user loaded single-cycle waveforms via the DigiPRO engine. My first Monomachine lacked the +Drive feature (giving you additional storage space for user sounds and patches) which made it difficult to see the long term advantages of the userwaves right off the bat (great, I can load 64 waves into the machine), but when I recently decided to dive back in and buy another Monomachine, finding one with +Drive this time, I find myself with about 8000 slots for sound storage. Not too shabby.

![image alt text]({{ site.url }}/public/LRaloD81wLwssb8edl2SjQ_img_0.jpg)

Unlike a sound from a typical sample library, a single-cycle waveform contains 1 cycle of a single waveshape. They're quite small file-size wise. And also unlike a typical sample library, much harder to come by. A good handful of classic synthesizers rely on single cycle waveforms as their primary sound generation method, a technique known as [wavetable synthesis](http://en.wikipedia.org/wiki/Wavetable_synthesis). Imagine 256 or so single cycle waves crammed together into one continuous sound with evenly spaced cycles to divide up the different waves. This technique was the basis for how instruments like the PPG Wave, Ensoniq SQ80, Waldorf Blofeld, Mutable Instrument’s Shruthi-1, and many others digital synthesizers do their thing.

There are already some amazing collections of single cycles out there. The first and most useful I've found would be the [Adventure Kid Waveform Pack](http://www.adventurekid.se/akrt/waveforms/adventure-kid-waveforms/) (AKWF) which contains about 4300 waves, organized in libraries by sample type (violin, squares, distorted bass, birds, etc). I was able to transfer all 4300 sounds to the Monomachine using up roughly 60 banks on the machine (sometimes combining 2 or more libraries into one bank entry). But only 4300 waveforms? A pittance! The hunt was on.

One of the first places I checked was [Elektronauts](http://www.elektronauts.com/), a great forum community for everything Elektron. There are a few packs and patterns to be had on their [files section](http://www.elektronauts.com/files), but not quite enough to fill more than a bank or two. The older Elektron forum, Elektron-users.com, has a [better file repository](http://www.elektron-users.com/index.php?option=com_docman&Itemid=30&mosmsg=Not+authorized) packed with more good stuff. [MarsMelons](http://www.marsmelons.com/custom-digipro-waves-pack-elektron-monomachine/), a user who I've see pop up on a few different synth forums, has a solid 64 wave pack featured on his website as well. Some more digging also revealed a generic single-cycle [pack by Arty](http://patcharena.com/downloads/comment.php?dlid=1332&) and a couple of more wavs from [Freesound.org](https://www.freesound.org/people/altemark/packs/2339/).

Again, not every wave you find is appropriate for the Monomachine. Generally any sample bigger than say, 6kb, probably won't qualify as a single-cycle waveform, and further, samples that contain a couple of cycles will sound less than stellar in most octave ranges (after all, the more cycles there are in one sample, the higher the pitch). The Monomachine is forgiving in terms of file format, however, since you’ll be importing your sounds through Elektron’s C6 utility, which will take care of converting any .wav or .aif into the DigiPRO format.

I'm still searching around for appropriate packs of single-cycle waves, especially waveforms taken from classic wavetable synthesizers like the PPG Wave, KORG Wavestation, Novation Ultranova, Kawai K3, Waldorf Blofeld, and even waves from some Eurorack modules like the Mutable Instruments Braids and Harvestman Piston Honda. If I find any in the wild I will certainly follow up on this thread. If you have any packs to recommend, please get in touch..

