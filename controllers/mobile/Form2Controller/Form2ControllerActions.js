define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Camera_ia265f24734f46379da8a6c0b72682b6: function AS_Camera_ia265f24734f46379da8a6c0b72682b6(eventobject) {
        var self = this;
        kony.application.getCurrentForm().Image0.rawBytes = kony.application.getCurrentForm().Camera0affd1c56f78c4b.rawBytes;
        this.view.Image0.isVisible = true;
    },
    AS_Slider_b0dee5ae6e854b70bdff9336bfbac724: function AS_Slider_b0dee5ae6e854b70bdff9336bfbac724(eventobject, selectedvalue) {
        var self = this;
        this.view.TextField3.text = this.view.Slider3.selectedValue;
    },
    AS_Slider_af6f2fb66e3a46be85a3894b4d9a4a49: function AS_Slider_af6f2fb66e3a46be85a3894b4d9a4a49(eventobject, selectedvalue) {
        var self = this;
        this.view.TextField2.text = this.view.Slider2.selectedValue;
    },
    AS_Slider_f85442b1a5204cdf8a85ded7f13dd666: function AS_Slider_f85442b1a5204cdf8a85ded7f13dd666(eventobject, selectedvalue) {
        var self = this;
        this.view.TextField1.text = this.view.Slider1.selectedValue;
    },
    AS_TextField_e39fab1da94746df80dafc4c512799d0: function AS_TextField_e39fab1da94746df80dafc4c512799d0(eventobject, changedtext) {
        var self = this;
        this.view.Slider3.selectedValue = this.view.TextField3.text;
    },
    AS_TextField_g7d86df630a24aeb85529466b3070980: function AS_TextField_g7d86df630a24aeb85529466b3070980(eventobject, x, y) {
        var self = this;
    },
    AS_TextField_g82dd070b8074093b9b3c2620092aa6d: function AS_TextField_g82dd070b8074093b9b3c2620092aa6d(eventobject, changedtext) {
        var self = this;
        this.view.Slider2.selectedValue = this.view.TextField2.text;
    },
    AS_TextField_h8343cc9438b48df81899c8d935fa79d: function AS_TextField_h8343cc9438b48df81899c8d935fa79d(eventobject, changedtext) {
        var self = this;
        this.view.Slider1.selectedValue = this.view.TextField1.text;
    },
    AS_Button_fd58ee6ebc6e4db88cc278afadcb429f: function AS_Button_fd58ee6ebc6e4db88cc278afadcb429f(eventobject) {
        var self = this;
        var elastane = this.view.Slider1.selectedValue;
        var polyester = this.view.Slider2.selectedValue;
        var cotton = this.view.Slider3.selectedValue;
        var total = elastane + polyester + cotton;
        if ((total == 100)) {
            var ntf = new kony.mvc.Navigation("Form4");
            ntf.navigate();
            kony.store.setItem("elastane", elastane);
            kony.store.setItem("polyester", polyester);
            kony.store.setItem("cotton", cotton);
        } else {
            alert("total must be 100%")
        }
    },
    AS_Form_d7cfb402ad3b4229b3565c38404fb800: function AS_Form_d7cfb402ad3b4229b3565c38404fb800(eventobject) {
        var self = this;
    },
    AS_Form_h5dffc7614db4831a09427f9e9467efd: function AS_Form_h5dffc7614db4831a09427f9e9467efd(eventobject) {
        var self = this;
        var r = kony.store.getItem("Clothing");
        //var rload = rarray.tostring();
        //var length = rload.length;
        //length--;
        //var r = rload.substr(1, length);
        this.view.LabelItem.text = r;
    }
});