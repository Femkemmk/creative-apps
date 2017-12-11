define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_g296a69fe5ae4bbbae9f6384d7c32ba0: function AS_Button_g296a69fe5ae4bbbae9f6384d7c32ba0(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("Form2");
        ntf.navigate();
        kony.store.setItem("Clothing", this.view.Pick1.selectedKeyValues[0][1]);
    },
    AS_Form_b30db42b8c674141876eee7451c8abe0: function AS_Form_b30db42b8c674141876eee7451c8abe0(eventobject) {
        var self = this;
    },
    AS_PickerView_a3d08c63123041a1bfeb673bd6ff46aa: function AS_PickerView_a3d08c63123041a1bfeb673bd6ff46aa(eventobject, component, keyselected) {
        var self = this;
    }
});