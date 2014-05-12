
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
 * [Distribucijski kanali](#8-distribucijski-kanali)
  * [Scena](#8-1-scena)
  * [P2P omrežja](#8-2-p2p-omre-ja)
     * [Torrenti](#8-2-1-torrenti)
     * [Alternative](#8-2-2-alternative)
  * [Usenet](#8-3-usenet)
 * [Implementacija distribucijskega kanala](#9-implementacija-distribucijskega-kanala)
 * [Prihodnost](#10-prihodnost)
 * [Zaključek](#11-zaklju-ek)
 * [Literatura](#12-literatura)
* [Izdelek](http://54.247.82.135)
[/navbar]
-->

*/});

$DOC.sections['footer-panel'] =
'[footer-layout scheme=line]\
* © 2014 [Jakob Murko](mailto:jakob.murko@gmail.com)\n\
***\n\
* [Izdano pod MIT licenco.](https://github.com/sraka1/Piratstvo)\
[/footer-layout]';

$(window).on('hashchange', function() {
  var target = $('#'+location.href.split("#")[1]);
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 67 //offset za header
        }, 1);
        return false;
      }
});

$(document).ready(function() {
  $('iframe').each(function() {
    $(this).wrap('<div class="flex-video"></div>');
  });
});