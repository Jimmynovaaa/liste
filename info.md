---
title: Info
layout: page
permalink: /info
---

<link rel="stylesheet" href="{{- 'assets/css/core.css' | relative_url -}} "/>
<script src="{{- 'assets/js/core.js' | relative_url -}}"></script>

{%- assign utils = true -%}
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

# Bienvenue !
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
## Le Karma c'est quoi ?

Le Karma est un système au sein du mod qui permet de limiter la quantité d'event négatifs que pourrait envoyer un viewer. Il modifie simplement la quantité de pièces que vous recevrez chaque cycle. Au plus votre karma est bas, au moins vous toucherez de pièces. L'idée étant de laisser le temps à la colonie de se remettre des événements négatifs.

## Comment utiliser le toolkit ?

Vous pouvez utiliser le toolkit de plusieurs façon -- l'essentiel passe par les 
[commands]({{- "/commands" | relative_url -}}). La commande la plus importante est la commande `{{- buy -}}`
, c'est grâce à elle que vous pourrez acheter des items/events. Une autre commande importante est la commande `!mypawn`, qui vous permet de consulter les informations de votre colon. Le reste des commandes se comprend assez facilement et/ou est expliqué sur la page [commands]({{- "/commands" | relative_url -}}) .

## Les armes et recherche 
**Petite Armurerie :** Carabine de Survie - Revolver - Fusil à Pompe  
**Patite Artillerie Auto :** Desert Eagle - Glock 17 - AK74U - Pistolet Mitrailleur - Pistolet Mitrailleur Lourd  
**Artillerie Auto Perfectionnée :** AA-12 - FN MAG - Fusil à pompe auto - M249 - MAC10 - Mitrailleuse - Uzi - UMP45  
**Armes de Précision :** Fusil d'Assault - Fusil de Précision - FAMAS F1 - AK47 - Dragunov - Gol Magnum - M24  
