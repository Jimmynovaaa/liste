---
title: Info
layout: page
permalink: /info
---

{%- assign utils = false -%}
{%- assign lootboxes = false -%}
{%- assign puppeteer = false -%}
{%- for mod in site.data.modlist -%}
    {%- case mod.name -%}
        {%- when 'ToolkitUtils' %}
            {%- assign utils = true -%}
        {%- when 'ToolkitUtils - Testing' -%}
            {%- assign utils = true -%}
        {%- when 'Puppeteer' -%}
            {%- assign puppeteer = true -%}
        {%- when 'TwitchToolkit - Lootboxes' -%}
            {%- assign lootboxes = true -%}
    {%- endcase -%}
{%- endfor -%}


{%- assign bal = '!bal' -%}
{%- assign buy = '!buy' -%}
{%- for command in site.data.commands -%}
    {%- if command.data.isBal -%}
        {%- assign bal = command.usage -%}
        {%- continue -%}
    {%- endif -%}

    {%- if command.data.isBuy -%}
        {%- assign buy = command.usage -%}
        {%- continue -%}
    {%- endif -%}
{%- endfor -%}

# Welcome

Bienvenue sur le shop rimworld de [{{ site.data.social.twitch }}](https://twitch.tv/{{ site.data.social.twitch }}).
On utilise le mod
[Twitch Toolkit](https://steamcommunity.com/sharedfiles/filedetails/?id=1718525787) pour t'offrir de l'interactivité avec la partie en cours. Il y a beaucoup de choses et tu sera peut-être perdu au début mais ce guide est là pour poser les bases.

## Twitch Toolkit c'est quoi ?

Twitch Toolkit est un mod par hodlhodl (et repris par Nry, Sirrandoo et d'autres)  qui permet aux viewers d'avoir un impact sur la partie. La première façon c'est via le [store]({{- "/" | relative_url -}}), qui te permet d'acheter des objets/events parmis ceux que j'ai sélectionné. Les sondages sont une autre façon d'interagir, ils tombent réguliérement et proposent plusieurs issues aux viewers qui votent dans le chat.

## Les pièces

C'est la monnaie du mod. Tu peux voir combien tu en possèdes avec la commande `{{ bal }}`. 

{% if utils == true %}
Cette commande utilise des emojis pour réduire la taille des messages. Voici leur signification :

- 💰 représente la quantité de pièces que tu possèdes.
- ⚖ représente ton karma.
- 📈 représente la quantité de pièces que tu touches chaque cycle.
- 📉 représente la quantité de pièces que tu perds chaque cycle.

{% endif %}


{%- if lootboxes == true -%}
You'll also notice that you'll get a message from the bot about a lootbox. You can open this lootbox
by using the `!openlootbox` command, as well as check the number of lootboxes you have with `!lootboxes`.
You'll always get a new lootbox everyday.
{%- endif -%}


<br/>
## What is Karma?

Karma is a system in the mod that tries to limit the amount of negative events a viewer can purchase at
one time. This system works by directly modifying that amount of coins viewers get everytime the mod
awards coins. This means that the lower you karma is, the lower your coin gain is. The hope is that
negative events get spread out more so the colony can recover.

## How Do I Use Twitch Toolkit?

You can use Twitch Toolkit in a number of ways -- the most prominent way is through its
[commands]({{- "/commands" | relative_url -}}). The more important command is the `{{- buy -}}`
command, which is the mods entry point into purchasing things from the store. Other notable commands
are the `!mypawn` commands, which allow you see various information about your pawn. We won't cover
every command here, but most commands should generally be self-descriptive or have a description of
what they do on the [commands]({{- "/commands" | relative_url -}}) page.


{%- if puppeteer -%}
<br/>
## What is Puppeteer?

[Puppeteer](https://steamcommunity.com/sharedfiles/filedetails/?id=2057192142) is a mod by Brrainz that
allows viewers to directly control their pawns, and even view a number of information about your pawn in
a graphical way. It also redirects some of the responses from Twitch Toolkit to its website to clean up
chat a bit. So, if you're logged into Puppeeter and you're wondering why the bot isn't responding to you,
you should check the `TT` tab on the website first.
{%- endif -%}
