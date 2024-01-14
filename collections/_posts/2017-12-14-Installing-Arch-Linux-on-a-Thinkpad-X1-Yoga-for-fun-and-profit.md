---
title: Installing Arch Linux on a Thinkpad X1 Yoga for fun and profit
layout: post
tags:
- linux
- how-to
- computing
source-id: 1Sg3gfSOgfZet-uYRzaC1ZfJPaCSqOOqV_rCxTx19s-s
published: true
updated: "12/14/2017"
---
I've been a big fan and supporter of [Ubuntu Linux](https://www.ubuntu.com/) for well over a decade, since at least 6.06 (Dapper Drake). They’ve done more than any other distro to help propel Linux forward as a tangible option for a desktop operating system among average computer users, and that’s a great thing. A rising tide lifts all ships.

I'll continue to support the project and the mission Ubuntu has set out to accomplish, but for me, Linux has always been about the power to tinker with and customize your distribution so that it gives the user everything they need in a system and nothing they don’t. Ubuntu has gone through pains to bring their product to as wide of a market as possible, and while largely a positive step, they have had to make some major compromises that, for me, have made the distro feel cheaper, less flexible, and less desirable. 

Enter [Arch Linux](https://www.archlinux.org/). Arch has been around since 2002 but has only come into vogue as a major distro in the last 4 or 5 years, and has only been on my radar in the last 2. Back before I used Ubuntu my distro of choice was [Gentoo](https://www.gentoo.org/), a version of Linux that stood out due to its simple package management system, [portage](https://wiki.gentoo.org/wiki/Portage), and its impressive performance given the fact that anything you installed would compile specifically to your system specifications and hardware. Gentoo was not for the faint of heart, it came with no automated installer, instead requiring the user to bootstrap the system completely by hand, and once you were set up it was your responsibility to keep everything in check and running smoothly (though the [Gentoo community](https://forums.gentoo.org/) offered excellent help if you did happen to get stuck).

Working with Gentoo taught me a great deal about how computers do what they do and gave me confidence in my abilities to work with such a complex system, not to mentioned it worked extraordinarily well on the older hardware I had been using at the time. There's something extremely satisfying about maintaining a powerful system you bootstrapped yourself, building out completely to your own specifications. The challenge of researching and implementing a solution to a problem could become a game of sorts, and while issues would inevitably need to be addressed on any system, I never felt the same level of satisfaction maintaining my Ubuntu system as I did my Gentoo system (not to mention Ubuntu would break to a frustrating degree with every major release upgrade).

Arch Linux shares a lot in common with Gentoo which was one of the reasons it felt like a logical step for me to get back into Linux with. Arch features an easy to use package manager, [pacman](https://wiki.archlinux.org/index.php/pacman), and even easier to use [supplemental package managers](https://wiki.archlinux.org/index.php/AUR_helpers) for installing any and all software which can't be found in the official Arch repositories. Arch gives you full control over your operating system, requiring you to only install a small core of packages in order to get your computer up and running. The [Arch community](https://bbs.archlinux.org/) maintains the [Arch Wiki](https://wiki.archlinux.org/), probably the most detailed and exhaustive support wiki of any brand of Linux out there. And finally, and possibly most attractive to me, Arch is distributed on a "rolling release" cycle which means updates are constantly pushed to the same base system, there are no milestone releases to upgrade your system with every year or so (upgrades which, under Ubuntu, radically changed your desktop experience and inevitably borked my system).

I'm up and running with Arch at this point and have had nothing but a great experience getting my system up to snuff. Getting to this point had its challenges, again Arch is not a distro for everyone, but it is in the spirit of encountering and conquering these challenges that I’m putting together this post. Here, I will be documenting everything I’ve done to maintain my Arch system, from a quick guide to installing the base system (on an encrypted LVM as part of a dual boot system) to common problems I’ve encounter and how I went about fixing them, as well as breaking down what packages I’ve installed to cobble together an awesome, streamlined, and fully featured Linux desktop on my [Lenovo Thinkpad X1 Yoga](https://www3.lenovo.com/us/en/laptops/thinkpad/thinkpad-x/Thinkpad-X1-Yoga-2nd-Gen/p/22TP2TXX12Y) (second generation) laptop.

## Installing Arch Linux

If you've ever had to go through the whole process by hand before, Arch is a [straightforward installation experience](https://wiki.archlinux.org/index.php/installation_guide). On my system I’ve installed Arch as part of a dual boot alongside the Windows 10 partition that came preinstalled on my machine. I am using the Windows 10 UEFI boot partition with [rEFind](http://www.rodsbooks.com/refind/) as my way of booting into either OS. Also unique to my install, I am hosting my Arch system on an [encrypted partition using LUKS](https://wiki.archlinux.org/index.php/Dm-crypt/Encrypting_an_entire_system) on my LVM.

During my installation I followed along with a [fantastic YouTube video](https://www.youtube.com/watch?v=gB1N00wj3bw) presented by [LearnLinux.tv](https://www.learnlinux.tv/) that took me through each step in installing Arch to an encrypted disk. I've adapted their step-by-step procedure below, though I will not be explaining in detail what each step of the process does (it should be rather self-explanatory if you’ve ever done this before, but I’ve added some quick explanation enclosed in brackets). It goes without saying that you shouldn’t follow along blindly to these commands even though this install process holds no major surprises. There are an abundance of resources out there if you want to learn more about installing Arch on your computer, though none that I found presented it in as simple a format as this (which is why I felt compelled to provide it). This guide assume you’ve already created your boot media and have set your BIOS options accordingly.

Insert your boot media and start up your machine. Before booting the live environment edit the boot options and add "nomodeset" to the end of the boot statement. This will help increase the size of the console font making it legible on high resolution displays.

Once your system boots and you're presented with the terminal prompt, you can begin:

```

wifi-menu [configure your wifi connection]

ping www.google.com [test your wifi connection]

fdisk -l [see all your partitions]

cryptsetup luksFormat /dev/nvme0n1p4 [enter and confirm passphrase, this encrypts the volume]

cryptsetup open --type luks /dev/nvme0n1p4 lvm [authenticate encrypted volume]

pvcreate --dataalignment 1m /dev/mapper/lvm [creates physical volume, use flag --dataalignment if using an SSD]

vgcreate volgroup0 /dev/mapper/lvm [create volume group]

lvcreate -L 40GB volgroup0 -n lvroot [create root partition of 40GB]

lvcreate -L 4GB volgroup0 -n lvswap [create swap partition of 4GB]

lvcreate -l 100%FREE volgroup0 -n lvhome [create home partition with rest of space]

modprobe dm_mod [scan for LVM volumes]

vgscan [scan for partitions and other disks] 

vgchange -ay [activate the volume group/partitions]

mkfs.ext4 /dev/volgroup0/lvroot [make the ext4 filesystem on my root partition]

mkfs.ext4 /dev/volgroup0/lvhome [make the ext4 filesystem on my home partition]

mount /dev/volgroup0/lvroot /mnt [mount the fresh root partition]

mkdir /mnt/boot [create a /boot folder]

fdisk -l [list all disk partitions to figure out where the Windows boot partition exists]

mount /dev/nvme0n1p1 /mnt/boot [mount the WIndows boot partition to /boot]

mkdir /mnt/home [create a /home folder

mount /dev/volgroup0/lvhome /mnt/home [mount the fresh home partition to /home]

mkswap /dev/volgroup0/lvswap [create the swap partition]

pacstrap -i /mnt base [install the Arch base system to /mnt]

genfstab -U -p /mnt >> /mnt/etc/fstab [generate /etc/fstab]

arch-chroot /mnt [chroot into the new system]

swapon /dev/volgroup0/lvswap [enable swap partition]

pacman -S linux-headers linux-lts linux-lts-headers wpa_supplicant wireless_tools [install the linux kernel and some wireless packages]

nano /etc/mkinitcpio.conf [edit mkinitcpio.conf and add 'encrypt' and ‘lvm2’ to HOOKS="”]

mkinitcpio -p linux [build the kernel and create initramfs for the linux kernel]

mkinitcpio -p linux-lts [do the same for the Long Term Support linux kernel]

nano /etc/locale.gen [uncomment my locale to set locale info]

locale-gen [generate locale info]

ln -s /usr/share/zoneinfo/America/New_York /etc/localtime (set timezone, if /etc/localtime exists remove it and then run command)

hwclock --systohc --utc [sync system to hardware clock]

passwd [set root password]

pacman -S refind-efi [install rEFInd to setup boot partition for dual booting]

refind-install [installs rEFInd]

mkrlconf [create rEFInd config file in /boot if it doesn't exist]

nano /boot/refind.conf [configure rEFInd appropriately, which installed in /boot/EFI/Boot/Microsoft for some reason]

configure refind_linux.conf in /boot so it can use your encrypted disk [[https://gist.github.com/bjorm/5033439](https://gist.github.com/bjorm/5033439)]

exit chroot 

umount /mnt/home

umount /mnt/boot

umount /mnt

reboot 

cross fingers

```

