import {Component} from 'angular2/core'
import {ContactListComponent} from 
	'./contacts/contact.component';

	Component({
	selector:'contact-list',
	template: 
	`
	<li *ngFor= "#contact of contacts"
  	(click)="onSelect(contact)"
  	[class.clicked]="showDetail === true"
  	>
  		{{contact.firstName}}
  	</li>
  `,
   directives: [ContactComponent]
})

export class ContactListComponent{
public selectedContact = {};
	public contacts = [
	{firstName: "Mariano", phone: "8888 8888", email: "Mar@a.com"},
	{firstName: "Albert", phone: "7777 8888", email: "Albert@b.com"},
	{firstName: "Nikola", phone: "4444 8888", email: "tesla@a.com"}
	];
	onSelect(contact){
		this.selectedContact = contact;
	}

}