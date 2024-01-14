---
title: Get your Nord Modular working under Mac OSX
layout: post
author: dmschulman
tags:
- synthesizer
- how-to
- windows
- problem solving
- music production
source-id: 1z71GD372sTGX7tbkIHArF58koG31IjoEUTvNtHIXkPo
published: true
---
The [Nord Modular](https://en.wikipedia.org/wiki/Nord_Modular) series of virtual analog synthesizers are *incredible* pieces of gear, I cannot stress this enough. While going down the rabbit hole of [modular synthesis](https://en.wikipedia.org/wiki/Modular_synthesizer) can be grossly expensive and require a great deal of space in your studio, the Nord Modular series (both the older G1, Micro Modular, or the newer G2) gives you a full array of oscillators, envelopes, filters, sequencers, logic gates, effects, and a whole lot more to virtually plug and play. It's a complete modular system housed in hardware and controlled via software!

![image alt text]({{ site.url }}/public/MruqXcvWHAvXRrZjNO8Pw_img_0.jpg)

The only issue, however, is the software portion is essential to getting the most out of your Nord Modular, and Nord's software (especially on the first generation of the Modular series) is notoriously finicky when it comes to working under a modern operating system. 

My first entrance to the Nord Modular series was the G2 which I had absolutely zero troubles getting to work under OSX 10.9 (the G2 Editor software has gotten a lot more attention from Nord than the G1 Editor). The G2 is great, but it does a whole lot more than I can wrap my head around at this point. My particular second-hand unit was previously used to study synthesis in a the Berklee College of Music (if that gives you any sense of the potential academic rigor involved in these devices). As a result, I've downsized to a Nord Micro Modular, the first generation in Nord’s series.

The Micro Modular (hence its name) is about an 1/8th as powerful as the G2 and about 1/16th as well supported by Nord software-wise. That's not to say it was impossible for me to get things working on my Mac, but it did take me a few attempts to set everything up properly. Running the [G1 Editor](https://www.nordkeyboards.com/downloads/legacy/nord-modular) on my Windows 7 laptop didn’t do the trick as there were issues with MIDI communication between the computer and hardware (though this may be due to the USB/MIDI cable I tried to use), and with out Rosetta support it’s not possible to get the software going on any recent version of OSX.

Some of the advice I'd read online suggested investing in an old laptop which I could dedicate to using with the Nord Modular, but for my purposes I found running a virtual machine on my Mac made much more sense.

My setup consists of a Mac Mini running OS X 10.9 Mavericks, a MOTU Micro Express USB MIDI interface, and a copy of VMWare Fusion running a Windows XP virtual machine. I'm sure a variety of MIDI interfaces work nicely with VMWare, though in my experience I have not had much luck using a basic USB/MIDI cable. Then again, having the right drivers for your interface makes all the difference.

MOTU offers a variety of packages to get their hardware up and running on your computer but the mistake I made the first time around was to use their more modern "universal" installer to get the Micro Express working with my virtual machine. Instead, I would advise scrolling further down the [MOTU downloads](https://www.motu.com/download/download_matching_downloads.html) page and grabbing the legacy drivers for your particular device (or in the event you're using other hardware, going with the older drivers for your particular device).

![image alt text]({{ site.url }}/public/MruqXcvWHAvXRrZjNO8Pw_img_1.jpg)

After downloading the drivers to your VM it's now a matter of installing them properly, which is mostly to say, don’t use any automatic installers to get the drivers added to your system. Use VMWare to virtually connect your MIDI hardware to the virtual machine. Once connected, you should start to see Windows recognizing a new piece of hardware has connected. With XP specifically I needed to use the Add New Hardware wizard and manually select the folder the MOTU drivers existed in to get the device recognized properly by the VM. This and only this method seemed to do the trick for me.

This solution isn't perfect however. From time to time (especially if I’m changing values extremely fast on the patch) the software will disconnect from my MIDI interface. Fixing it though is as simple as disabling and reenabling the interface in the Preferences menu. I’m sure this is a MIDI buffering problem and can easily be fixed with some extra configuration.

Now that I've got a dedicated environment for doing all my Micro Modular related experiments my next order of business is to upload some [fantastic user created patches](https://www.dropbox.com/sh/veogrcakdoew5fv/EM4IoMjOBN) to the MM from the fine folks at [electro-music.com](https://electro-music.com/). With the Modular series being as old as it is and with the community around these units being as active as they are, there are tens of thousands of patches already out there for you to experiment with and base your own modular creations off of.

Clavia also provides a [great deal of their own patches](https://www.clavia.se/nordmodular/sounds/) for users to test out. Though the concept of modular synthesis might be a lot to digest from the get go these patch examples make it a lot easier to get started with the fundamentals, plus they sounds really great!

Now my job is filling up all of the Micro Modular's 99 memory slots with some awesome patches and sequences. The more I play around with various sounds on the modular the more I realize having 3 knobs on the front of the Micro Modular is a bit limiting. Getting the unit set up with my Novation Remote SL control surface will be the next hurdle to cross, but if and when I do figure that out I’ll be sure to give the details right here.

One other thing to note: where Clavia has left off with their ancient software, the open-source community has stepped in to try and provide a modern alternative for G1 and G2 users. Granted, these alternatives lack some of features (and stability) of the Nord editor, but [nmEdit](https://nmedit.sourceforge.net/) is worth checking out if you're so inclined. For the record, I was not able to get my MIDI interface to communicate with the Micro Modular using nmEdit under OSX, but hey, a second try couldn’t hurt.

