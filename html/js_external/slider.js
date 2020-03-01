(function () {
    "use strict";
    // Make prependChild method similar to appendChild
    if (!window.Element.prototype.prependChild) {
        window.Element.prototype.prependChild = function (elem) {
            this.insertBefore(elem, this.firstChild);
        }
    }


    window.Element.prototype._qs = function (elem) {
        return this.querySelectorAll(elem);
    };

    function $id (elem) {
        return document.getElementById(elem);
    }

    function $qs(elem) {
        return document.querySelectorAll(elem);
    }

    function init() {
        var slider1 = new slider("slider");

        $id("prev").addEventListener("click", function () {
            slider1.prevSlide.call(slider1);
        });
        $id("next").addEventListener("click", function () {
            slider1.nextSlide.call(slider1);
        });
        if ($id("autoplay").checked === true) {
            console.log("autoplay = true");
            slider1.autoplay.call(slider1, this);
        }
        // $id("autoplay").addEventListener('change', function() {
        //     if (this.checked){
        //         slider1.autoplay.call(slider1, this);
        //     }
        // })
    }

    function slider (id) {

        this.id = id;
        this.pos = 0;
        this.moving = false;
        this.transitionTime = 600;
        this.slideDelay = 5000;
        this.active = 1;
        var runSlide;
        var self = this;



        var list = $id(this.id)._qs("ul")[0];

        for (let i = 0; i < list.children.length; i++) {
            let element = list.children[i];
            element.style.width = (100 / list.children.length) + "%";
            element.id = i;

            // var temp = document.createElement("button");
            // $qs(".beads")[0].appendChild(temp);
            // (function (i) {
            // 	temp.addEventListener("click", function(){
            // 		let diff = Math.max(i, self.active) - Math.min(self.active, i);
            // 		for (let j = 0; j < diff; j++) {
            // 			self.nextSlide();
            // 		}
            // 	},false);
            // })(i);
        }

        list.style.width = (list.children.length * 100) + "%";
        list.style.transform = "translateX(-"+(100 / list.children.length)+"%)";
        list.style.transitionDuration = "0ms";
        list.style.transitionProperty = "transform";
        list.style.transformTimingFunction = "ease";
        list.prependChild(list.lastElementChild);

        this.setActive = function () {
            var self = this;
            var list = $id(this.id)._qs("ul")[0];
            self.active = list.children[1].id;
            console.log(self.active);
        };

        this.autoplay = function (box) {
            var self = this;


            if ($id("autoplay").checked === true) {
                runSlide = setInterval(function () {
                    self.nextSlide();
                }, this.slideDelay + this.transitionTime);
            }
            $id("autoplay").addEventListener('change', function() {
                if ($id("autoplay").checked === false) {
                    console.log("unchecked");
                    if (runSlide) clearInterval(runSlide);
                }
                else{
                    console.log("checked again");
                    runSlide = setInterval(function () {
                    self.nextSlide();
                }, self.slideDelay + self.transitionTime);
                }
            })
        };

        this.prevSlide = function () {
            if (!this.moving) {
                this.moving = true;
                var self = this;

                var list = $id(this.id)._qs("ul")[0];
                list.style.transitionDuration = this.transitionTime + "ms";
                list.style.transform = "translateX(0px)";

                var handler = function(event) {
                    list.prependChild(list.lastElementChild);
                    list.removeEventListener('transitionend', handler);
                    list.style.transitionDuration = "0ms";
                    list.style.transform = "translateX(-"+(100 / list.children.length)+"%)";
                    self.moving = false;
                    console.log("PREV" + self.moving);
                    self.setActive();
                };

                list.addEventListener("transitionend", handler);
            }
        };

        this.nextSlide = function () {
            if (!this.moving) {
                this.moving = true;
                var self = this;
                var list = $id(this.id)._qs("ul")[0];
                list.style.transform = "translateX(-"+(200 / list.children.length)+"%)";
                list.style.transitionDuration = this.transitionTime + "ms";

                var handler = function(event) {
                    list.appendChild(list.firstElementChild);
                    list.removeEventListener('transitionend', handler);
                    list.style.transitionDuration = "0ms";
                    list.style.transform = "translateX(-"+(100 / list.children.length)+"%)";
                    self.moving = false;
                    console.log("NEXT" + self.moving);
                    self.setActive();
                };

                list.addEventListener("transitionend", handler);
            }
        }
    }

    document.addEventListener("DOMContentLoaded", init);
})();