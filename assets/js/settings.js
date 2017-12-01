const settings = {

    validTimes: [ 30, 60, 90, 120, 150, 180, 210, 240],
    
    extensionsOn: true,
    firstExtension: {
        threshold: 120,
        extendMethod: 'By',
        extension: 60, 
    },
    secondExtension: {
        enabled: true,
        threshold: 60,
        extendMethod: 'To',
        extension: 120, 
    },
    extensionsLimit:{
        enabled: false,
        limit: 10,
        min: 0,
        max: 100,
        steps: 5
    }
    
};

Vue.use(vueDirectiveTooltip, {
    delay: 500,
    placement: 'top',
    class: 'tooltip-rb',
    triggers: ['hover','click'],
    offset: 0
});

var app = new Vue({
    el: ".js--tal",
    data: settings,
    filters:{
        secondsToTime: function(value){
            if (value) {
                let minutes = (value/60 < 1)? '' : Math.floor(value/60) + 'm ';
                let seconds = (value % 60 != 0) ? (value % 60) + 's' : '';
                return minutes + seconds;
            }
        }
    }
});