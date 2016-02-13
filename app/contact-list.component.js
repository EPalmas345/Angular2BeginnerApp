System.register(['angular2/core'], function(exports_1) {
    var core_1;
    var ContactListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            core_1.Component({
                selector: 'contact-list',
                template: "\n\t<li *ngFor= \"#contact of contacts\"\n  \t(click)=\"onSelect(contact)\"\n  \t[class.clicked]=\"showDetail === true\"\n  \t>\n  \t\t{{contact.firstName}}\n  \t</li>\n  ",
                directives: [ContactComponent]
            });
            ContactListComponent = (function () {
                function ContactListComponent() {
                    this.selectedContact = {};
                    this.contacts = [
                        { firstName: "Mariano", phone: "8888 8888", email: "Mar@a.com" },
                        { firstName: "Albert", phone: "7777 8888", email: "Albert@b.com" },
                        { firstName: "Nikola", phone: "4444 8888", email: "tesla@a.com" }
                    ];
                }
                ContactListComponent.prototype.onSelect = function (contact) {
                    this.selectedContact = contact;
                };
                return ContactListComponent;
            })();
            exports_1("ContactListComponent", ContactListComponent);
        }
    }
});
//# sourceMappingURL=contact-list.component.js.map