
$DOC.mod('theme-switcher');

// example of using $DOC.parseContent function to create sections
$DOC.parseContent(function(){/*

<!--fixed-top-bar
[navbar]
[Domov]({{=$DOC.root}}index.html)
***
* [Poglavja]({{=$DOC.root}}index.html)
 * [Povzetek](#1-povzetek)
 * [Kazalo](#2-kazalo)
 * [Uvod](#3-uvod)
 * [Terminologija](#4-terminologija)
 * [Zgodovina](#5-zgodovina)
 * [Omejitve](#6-omejitve)
 * [Gospodarski vpliv](#7-gospodarski-vpliv)
 * [Distribucijski kanali](#7-gospodarski-vpliv)
  * [Scena](#7-gospodarski-vpliv)
  * [P2P omrežja](#7-gospodarski-vpliv)
   * [Torrenti](#7-gospodarski-vpliv)
   * [Alternative](#7-gospodarski-vpliv)
  * [Usenet](#7-gospodarski-vpliv)
 * [Implementacija distribucijskega kanala](#7-gospodarski-vpliv)
 * [Zaključek](#7-gospodarski-vpliv)
 * [Literatura](#7-gospodarski-vpliv)
* [Izdelek](http://54.247.82.135/)
[/navbar]
-->

*/});

$DOC.sections['footer-panel'] =
'[footer-layout scheme=line]\
* © 2014 [Jakob Murko](mailto:jakob.murko@gmail.com)\n\
***\n\
* [Izdano pod MIT licenco.](https://github.com/sraka1/Piratstvo)\
[/footer-layout]';
