let playlist =  {
    //Me devuelve el ancho de la playlist
    // tamano de la playlist: 300px;
    // 90 es el aire fijo en el costado

    list : [{
        filename:'alcahuete.ogg',
        name: 'Pittini Alcahuete',   
    },
    {
        filename:'iamhere.ogg',
        name: 'I am here',   
    },
    {
        filename:'needmoney.ogg',
        name: 'Do you need money?',   
    },
    {
        filename:'whereweare.ogg',
        name: 'Where we are?',   
    },
    ],

    buildListItem: function(name, filename) {
        let div = document.createElement('div');
        div.className = 'playlist-item';
        $(div).html(name);
        
        $(div).click(function(){
            playlist.setSound(filename);
            $('#titleAudio').html(name);
            menuBtnClick();
        });
        
        $('#playlist').append(div);
    },

    setSound : function(filename) {
        sndPlayer.src = 'sounds/'+filename;
    },

    fillPlaylist: function() {
        for (i=0;i<playlist.list.length; i++) {
            playlist.buildListItem(playlist.list[i].name, playlist.list[i].filename);
        }
    },

    getWidth: function() {
        let finalWidht;
        let wWidth = $(window).width();

        if (wWidth < 390) {
            finalWidht = $(window).width() - 90
        }
        else {
            finalWidht = 300;
        }
        
        return finalWidht;
    },
    setSize : function(){
        $('#playlist').width(playlist.getWidth());
    },  

    start: function(){
        playlist.setSize();
        playlist.fillPlaylist();
        sndPlayer.src = 'sounds/'+playlist.list[0].filename;
        $('#titleAudio').html(playlist.list[0].name)
    } 


};


