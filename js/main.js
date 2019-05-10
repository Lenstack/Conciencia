AFRAME.registerComponent('vidhandler', {
    init: function () {
        this.toggle = false;
        document.querySelector("#video").pause();
        document.querySelector("#video2").pause();
    },
    tick: function () {
        if (document.querySelector("#marker-video").object3D.visible == true) {
            if (!this.toggle) {
                this.toggle = true;
                document.querySelector("#video").play();
            }
        } else if (document.querySelector("#marker-video2").object3D.visible == true) {
            if (!this.toggle) {
                this.toggle = true;
                document.querySelector("#video2").play();
            }
        }
        else {
            this.toggle = false;
            document.querySelector("#video").pause();
            document.querySelector("#video2").pause();
        }
    }
});