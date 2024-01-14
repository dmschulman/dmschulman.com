---
title: Solving cloud sync issues with Synology Cloudstation
layout: post
author: dmschulman
tags:
- computing
- windows
- internet
- problem solving
- linux
source-id: 1kvge1CRoAXyZBNSZ5Q0t_asQg1l3SbY8dZSlD2Ub7NQ
published: true
---
I like the cloud, I really do. Being able to seamlessly transfer and make your files accessible across any of your machines from anywhere in the world is a pretty great use of networks and servers. The cloud has also replaced the need (in a lot of instances) for a local development machine as a place where code can live and be accessed by others and executed remotely.

That's some cool stuff if you’re someone who has been working with computers for a long time.

The truth is though that many cloud services and deployments, which you'll end up paying money for if you’re a person with lots of data or development needs, are just a nice repackaging of services you can provide on your own network. There are many advantages to setting up your own cloud storage solution, not having to spend money on a monthly service plan being one.

If you’re checking out this post then you might also understand the advantages of keeping gigabytes of important project and personal data confined to your own network (at the very least, it’s a heck of a lot faster), but on top of any added benefits to your security, being able to configure your own network and use as much disk space as you can afford is just more practical for someone who codes, develops, or has a lot of data they want to sync.

![image alt text]({{ site.url }}/public/MkB48U2BCwCmmbW2FZJe5A_img_0.jpg)

When I first went down the path of building a local file server and development machine I decided to build it all myself like you would a gaming machine (full disclosure: I also stuck a few graphics cards in there and used it as a gaming machine). Long story short, if you're not deeply experienced in administering a RAID system it’s probably a lot easier, depending on your needs, to buy an off-the-shelf solution like a [Drobo](https://www.drobo.com/) or [Synology](https://www.synology.com/) NAS. You could also use something besides RAID to synchronize your hard disks, but I don’t suggest it. As it stands now, I’m running a Synology 4-bay DiskStation and it’s been chugging along error-free for almost 3 years. Highly recommended.

I've been looking into doing some incremental backups and cloud syncing for my machines (ironically something I bought the DiskStation for initially but have only now come around to configuring) and decided to give [Synology CloudStation](https://www.synology.com/en-global/knowledgebase/DSM/help/CloudStation/cloudstation) a try. The app is part of the Synology ecosystem, so that made the choice pretty easy, but there are also Cloudstation clients for Windows, Mac, and Linux available as well as Android devices, which is important for someone like me who uses all 4 of these operating systems in my day to day.

My biggest goals for CloudStation are:

* Combine 3 separate Downloads folders into one synced directory.

* Sync my Music collection and DJ crates from my Mac (music production computer) to my Linux laptop (mobile rig).

* Grab important data from my phone (contacts, calendar, podcast feed, etc) and back it up, Make it available to other machines.

* Sync development projects between machines.

* Long-term goal: make my operating systems more fluid by having all important files backed up remotely.

So far I've been able to check a few of these off of my list but one of the biggest hurdles to getting CloudStation, or really any other cloud solution configured to my specifications, is due to the way these services are designed to work. Namely, you have a single cloud folder in which all your synchronized files sit. That’s great for syncing a few miscellaneous files across machines but what do you do when you have directories outside of the cloud folder that you want to sync?

My 'Downloads' directory, for example, sits in the same place across all my machines (/home/dmschulman/downloads), but because it’s outside the CloudStation directory the software pays no attention to it. Symlinks would normally be the solution here, pointing the CloudStation folder to the source directory without having to move any files around, but after running a few different tests with both soft and hard links I’ve determined that CloudStation just doesn’t know what to do with symlinks.

I was initially trying to do this under OSX, maybe making the shortcuts under Windows or Linux would magically fix the problem. No dice. Trying to reverse the process didn't seem to make much sense to me either, that is, creating symlinks on the DiskStation to the target directories on each computer. This would create way more of a headache than it’s worth (yet I’ve seen this suggested as a solution).

Flipping that methodology around though, moving files on my local machines to their local CloudStation directory and the creating symlinks to those folders outside of the CloudStation directory, seems like best workaround for the time being and has been my current solution to fixing this issue.

Now my 'Downloads' folder sits in /home/dmschulman/CloudStation/downloads and I have a symlink at /home/dmschulman/downloads which points me to the new downloads directory. It’s a bit of a wonky solution, I have to now reconfigure Chrome, for example, to save downloads in the new location, but it’s a solution that works. It’s still inexcusable for these cloud services to not natively recognize alias directories or have a work around that doesn’t involve moving your files away from their normal locations. There are many user cases where moving those files is just not realistic, but for my use case, I’m willing to restructure my hard drive in order to take advantage of these snazzy cloud backup features.

Maybe in a later version of CloudStation we can expect symlinks to be supported natively but I'd rather have my data backed up for now than twiddle my thumbs.

